# Adding gallery photos

1. Upload your photos to this folder through GitHub (Add file → Upload files).
   Use short filenames such as `hangzhou-lake.jpg`. JPEG or WebP around 1600–2000px
   wide is usually enough. Remove location metadata before uploading if needed.
2. Edit `assets/data/gallery.json`. Add an entry for each photo; entries appear
   in the order listed, so put new ones first.

```json
{
  "src": "/images/gallery/hangzhou-lake.jpg",
  "alt": "Describe what is visible in the photo",
  "title": "A day by the lake",
  "category": "Travel",
  "caption": "Your caption, location, or date (optional)."
}
```

Separate entries with commas, with no comma after the last entry. Keep the outer
square brackets. Commit the photo and JSON changes to main; GitHub Pages will
publish them. Visitors can click photos to enlarge them and press Escape to close.

This is a public gallery managed through the repository, without a visitor upload
form. The initial entry reuses the existing profile photo and may be removed when
you add your own selection.
