# 1. What icons are compatible with this component?

- Viewbox "0 0 24 24": From where you're exporting from, please make sure the icon is using viewBox="0 0 24 24" before downloading/exporting. Not doing so will result in incorrect icon scaling

# 2. How to add a new icon?

**2.1 Sanitising the icon**

1. Duplicate a current icon e.g. CrossIcon and rename it accordingly.
2. Rename the function inside the new file you duplicated too
3. Replace the markup with your SVG markup (make sure it complies with the above section's rule)
4. Depending on the svg you pasted...
   A. If the `<svg>` has only 1 child, remove the `<svg>` parent entirely so you only have the path left
   B. If your component has more than 1 paths, rename `<svg>` tag with the `<g>` tag. Then, remove all attributes of this `<g>` tag so that it's just `<g>`
5. Usually, icons are single colored. If that's the case, replace all fill/stroke color with `currentColor`. E.g. <path d="..." fill="currentColor">. Leave the other attributes without removing them.
6. If your icon has more than one colour, then it's up to you to decide whether we want to use tailwind to help set the fill and stroke colors
7. Lastly, export your icon in `index.ts` by following what was done for CrossIcon
8. Make sure to provide a name to the `<CustomIcon>` component for accessibility sake
9. Done!

**2.3 Use your newly imported icon**

1. You can change simply use `<BellIcon size="32" />` to quickly change both width and height with the same value (square). For custom viewBox, width and height, simply provide all three props.
2. Coloring the icon: Simply add a className with text color. E.g. `<BellIcon className="text-gray-500" />`
