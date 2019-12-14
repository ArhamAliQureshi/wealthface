import React from 'react';
import { getPrivacySecurityInputs } from './functions';
import { DefautLabel, DefaultInput } from './StyledComponents';
import { PageHeading, PrimaryButton, Tab, TabHeading, TabBody } from '../../StyledComponets';


const PrivacyAndSecurity = () => <Tab>
    <TabHeading>Privacy & Security</TabHeading>
    <TabBody>
        <PageHeading>Password</PageHeading>
        <from style={{ display: "grid" }}>
            {getPrivacySecurityInputs().map((item) =>
                <>
                    <DefautLabel>{item.lable}</DefautLabel>
                    <DefaultInput name={item.name} />
                </>
            )}
            <PrimaryButton style={{ marginTop: "2%" }}>Update</PrimaryButton>
        </from>

    </TabBody>
</Tab>;

export default PrivacyAndSecurity;