import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'

import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG =
	'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg'

const uploadPostSchema = Yup.object().shape({
	imageUrl: Yup.string().url().required('A URL is required'),
	caption: Yup.string().max(2200, 'Caption has reached the character limit'),
})

const AddPostForm = () => {
	const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

	return (
		<Formik>
			{({
				handleBlur,
				handleChange,
				handleSubmit,
				values,
				errors,
				isValid,
			}) => (
				<>
					<View>
						<Image
							source={{
								uri: validUrl.isUri(thumbnailUrl)
									? thumbnailUrl
									: PLACEHOLDER_IMG,
							}}
							style={{ width: 100, height: 100 }}
						/>
						<View style={{ flex: 1, marginLeft: 12 }}>
							<TextInput
								style={{ color: 'white', fontSize: 20 }}
								placeholder="Write a Caption"
								placeholderTextColor="gray"
								multiline={true}
								value={values.caption}
							/>
						</View>
					</View>

					<Divider width={0.2} orientation='vertical' />
					<TextInput />
				</>
			)}
		</Formik>
	)
}

export default AddPostForm
