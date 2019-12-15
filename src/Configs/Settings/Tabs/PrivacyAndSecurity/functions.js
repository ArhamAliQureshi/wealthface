export const getPrivacySecurityInputs = (props) => {
    return [
        {lable: "Current Password", name:"currentPassowrd", type: "text", value: props.password},
        {lable: "New Password", name:"newPassword", type: "password"},
        {lable: "Confirm Password", name:"confirmPassword", type: "password"}
    ];
}

