import { defineField } from 'sanity'

/**
 * Extra fields added to every image in this Studio (alt text + caption).
 *
 * IMPORTANT — why these are spread onto the BUILT-IN `image` type instead of
 * living on a custom `figure` object type:
 *
 * All existing photos in the production dataset are stored with
 * `_type: "image"`. Sanity resolves ARRAY ITEMS by their stored `_type`, so
 * declaring `gallery` as `of: [{ type: 'figure' }]` made every already-uploaded
 * gallery photo fail to match any known type and show as invalid in the Studio.
 * Fixing that would have required a migration rewriting `_type` on every image
 * in every project — a write to live content, which this project forbids.
 *
 * Spreading these fields onto `{ type: 'image' }` keeps `_type: "image"`
 * unchanged, so existing photos stay valid and simply gain two optional fields.
 * Nothing needs migrating. Do not reintroduce a named object type here.
 */
export const imageFields = [
  defineField({
    name: 'alt',
    title: 'Alternative text',
    type: 'string',
    description:
      'What the photo shows, for people using a screen reader and for search engines. ' +
      'Describe the garment and the moment, e.g. "Chocolate suede sphere top with curled ' +
      'spiral hems on the Colombiamoda runway". Not "photo of Áurea".',
    validation: (Rule) =>
      Rule.max(160).warning('Keep alt text under about 160 characters'),
  }),
  defineField({
    name: 'caption',
    title: 'Caption',
    type: 'string',
    description:
      'Optional. Shown under the photo in the full-screen viewer. Leave empty and the viewer ' +
      'shows no caption.',
  }),
]
