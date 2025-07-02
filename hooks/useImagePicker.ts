import * as ImagePicker from "expo-image-picker";

export const useImagePicker = (
  chatId: string,
  sendImageMessage: (imageUri: string) => void
) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      sendImageMessage(imageUri);
    }
  };

  return { pickImage };
};
