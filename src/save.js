/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { imageUrl, imageAlt, memberName, memberTitle, memberDescription } = attributes;

	const className = classnames({
		'team-member-block': true,
		'-no-image': imageUrl ? false : true
	});
	
	return (
		<div { ...useBlockProps.save({className}) }>
			{imageUrl && (
			<div className="team-member-image">
				<img src={imageUrl} alt={imageAlt} />
			</div>)}
			<div className="team-member-content">
				{memberName && (
				 <RichText.Content 
				 	tagName="h2" 
					className="team-member-name" 
					value={ memberName } />
				)}

				{memberTitle && (
				 <RichText.Content 
				 	tagName="h3" 
					className="team-member-title" 
					value={ memberTitle } />
				)}

				{memberDescription && (
					<RichText.Content
						tagName="p"
						className="team-member-description"
						value={memberDescription}
					/>
				)}
			</div>
		</div>
	);
}
