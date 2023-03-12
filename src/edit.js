/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaPlaceholder,
	MediaReplaceFlow,
	BlockControls,
	RichText
} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				imageUrl: null,
				imageId: null,
				imageAlt: null,
			});
			return;
		}
		setAttributes({
			imageUrl: media.sizes?.large.url ?? media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		});
	};

	let { imageUrl, imageId, imageAlt, memberName, memberTitle, memberDescription } = attributes;

	return (
		<div {...useBlockProps({ className: 'team-member-block' })}>
			<div className="team-member-image">
				{!imageUrl && (<MediaPlaceholder
					className="team-member-image-media-placeholder"
					accept="image/*"
					allowedTypes={['image']}
					onSelect={setImageAttributes}
					multiple={false}
					handleUpload={true}
				/>) }
				{imageUrl && (
					<div>
						<BlockControls>
							<MediaReplaceFlow
								mediaId={imageId}
								mediaUrl={imageUrl}
								allowedTypes={['image']}
								accept="image/*"
								onSelect={setImageAttributes}
								name={!imageUrl ? __('Add Image') : __('Replace Image')}
							/>
						</BlockControls>
						<img src={imageUrl} alt={imageAlt} />
					</div>
				)}
			</div>
			<div className="team-member-content">
				<RichText
					tagName="h3"
					className="team-member-name"
					placeholder={__('Name')}
					value={memberName}
					onChange={(value) => setAttributes({ memberName: value })}
				/>
				<RichText
					tagName="p"
					className="team-member-title"
					placeholder={__('Position')}
					value={memberTitle}
					onChange={(value) => setAttributes({ memberTitle: value })}
				/>
				<RichText
					tagName="p"
					className="team-member-description"
					placeholder={__('Description')}
					value={memberDescription}
					onChange={(value) => setAttributes({ memberDescription: value })}
				/>
			</div>
		</div>
	);
}
