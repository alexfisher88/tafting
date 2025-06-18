import cv2
import numpy as np
from sklearn.cluster import KMeans


def extract_dominant_colors(image_path: str, n_colors: int = 8, algorithm: str = "kmeans"):
    image = cv2.cvtColor(cv2.imread(image_path), cv2.COLOR_BGR2RGB)
    pixels = image.reshape(-1, 3)

    if algorithm == "median_cut":
        img_small = cv2.resize(image, (100, 100))
        data = img_small.reshape((-1, 3)).astype(np.float32)
        _, labels, centers = cv2.kmeans(
            data,
            n_colors,
            None,
            (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0),
            10,
            cv2.KMEANS_PP_CENTERS,
        )
    else:
        kmeans = KMeans(n_clusters=n_colors, random_state=42)
        labels = kmeans.fit_predict(pixels)
        centers = kmeans.cluster_centers_

    unique, counts = np.unique(labels, return_counts=True)
    total = pixels.shape[0]
    palette = [
        {
            "color": tuple(map(int, centers[i])),
            "proportion": counts[idx] / total,
        }
        for idx, i in enumerate(unique)
    ]
    return palette


if __name__ == "__main__":
    import sys

    palette = extract_dominant_colors(sys.argv[1])
    for item in palette:
        print(item)
