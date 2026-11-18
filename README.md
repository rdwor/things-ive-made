# Things I've Made
Open index.html in a browser to preview. No installation or build tools required.

## Publish on GitHub Pages
1. Create a public repository named `YOUR-USERNAME.github.io` (or use a different repository name for a project site).
2. Upload the contents of this folder, not the enclosing folder. Commit to main.
3. Open Settings > Pages. Under Build and deployment choose Deploy from a branch, main, /(root), and Save.
4. Your site URL will appear in Pages settings.

## Add a project
Upload photos into images/ and add an entry to projects.js. Example:

    { title: "Ceramic bowl", category: "Ceramics", images: ["images/bowl.jpg"], description: "My first wheel-thrown bowl.", date: "November 2026", materials: "Clay and glaze" },

New category filters appear automatically. Dates, materials and descriptions are optional. Place new projects at the beginning for newest-first ordering. Multiple photos appear in the project detail. Use exact matching filenames, including capitalization. The current projects have placeholders until you add your own photos. Review all images and descriptions before making them public.
