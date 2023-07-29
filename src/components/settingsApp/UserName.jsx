import { Controller } from "react-hook-form";
import { View, StyleSheet, Pressable, TextInput } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import EditIcon from "../icons/EditIcon";

export default function UserName({ control, errors, action, edit }) {
  return (
    <View style={styles.field}>
      <Pressable style={styles.fieldHeader} onPress={action}>
        <TextStyle>Nombre</TextStyle>
        <View style={[edit && { opacity: 0.5 }]}>
          <EditIcon width={17} height={17} color={theme.colors.black} />
        </View>
      </Pressable>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              theme.form.textInput,
              {
                fontFamily: theme.fonts.holidayBudapest,
              },
              errors.username && {
                borderColor: theme.colors.redIinformatica,
              },
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Nombre"
            editable={edit}
          />
        )}
        name="username"
      />
      {errors.username && (
        <TextStyle style={theme.form.textError}>
          {errors.username.message}
        </TextStyle>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    margin: 10,
  },
  fieldHeader: {
    flexDirection: "row",
    gap: 10,
  },
});
