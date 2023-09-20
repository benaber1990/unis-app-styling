import React, { useState } from "react";
// import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import COLORS from "../misc/COLORS";

export default function SignUpTCs({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={styles.screenStyle}>
        <Text
          style={{
            fontWeight: "700",
            marginBottom: 6,
          }}
        >
          UNIS Compliance Terms and Conditions Acceptable Use Policy
        </Text>
        <Text>
          1. Compliance with Laws and Regulations 1.1 Legal Compliance: Users of
          the App and the Website must comply with all applicable laws,
          regulations, and industry standards related to the use of
          compliance-based applications and websites, including but not limited
          to those specific to the construction industry 1.2 Authorized Use: The
          App and the Website are intended for use by individuals and
          organizations involved in the construction industry to monitor and
          track compliance and diversity. Users must only use the App and the
          Website for lawful purposes and in compliance with the intended use.
          2. Prohibited Activities 2.1 Unauthorized Access: Users shall not
          attempt to gain unauthorized access to the App, the Website, or any
          related systems, networks, or user accounts. 2.2 Data Manipulation:
          Users shall not engage in any unauthorized alteration, modification,
          or deletion of data within the App or the Website. 2.3 Malicious
          Activities: Users shall not engage in any activities that may disrupt,
          damage, or impair the functionality, security, or availability of the
          App, the Website, or any related systems or networks. This includes,
          but is not limited to, introducing malware, hacking attempts, or any
          form of cyberattacks. 2.4 Unauthorized Sharing: Users shall not share
          their account credentials or access the App or the Website using
          another user's account without proper authorization. 2.5 Intellectual
          Property Infringement: Users shall not use the App or the Website to
          infringe upon the intellectual property rights of others. This
          includes, but is not limited to, unauthorized use, reproduction, or
          distribution of copyrighted materials or trademarks. 2.6 Prohibited
          Content: Users shall not upload, post, or transmit any content that is
          unlawful, defamatory, harassing, abusive, discriminatory, or otherwise
          objectionable. Content that promotes violence, hate speech, or illegal
          activities is strictly prohibited. 3. User Responsibilities 3.1
          Account Security: Users are responsible for maintaining the security
          and confidentiality of their account credentials. Users must promptly
          report any unauthorized use or suspected security breaches to the UNIS
          Compliance team. 3.2 Compliance Data Accuracy: Users are responsible
          for ensuring the accuracy and integrity of the compliance and
          diversity data they input into the App or the Website. 3.3 Lawful Use
          of Data: Users shall only input and process data within the App or the
          Website that they have the legal right to handle. Users must respect
          the privacy and confidentiality of personal information and comply
          with applicable data protection laws. 4. Enforcement and Consequences
          4.1 Violation Reporting: Any violations of this Policy should be
          promptly reported to the designated UNIS Compliance team. 4.2
          Investigation and Remedial Actions: UNIS Compliance reserves the right
          to investigate reported violations and take appropriate actions, which
          may include the suspension or termination of user accounts, and
          cooperation with legal authorities if necessary. 4.3 Policy Updates:
          UNIS Compliance may update this Policy from time to time. Users will
          be notified of any material changes, and their continued use of the
          App or the Website after such changes will constitute acceptance of
          the updated Policy. By using the UNIS Compliance App or accessing the
          UNIS Compliance Website, you acknowledge that you have read,
          understood, and agreed to comply with this Acceptable Use Policy. 1.
          Use of the App and Website 1.1 Eligibility: You must be at least 15
          years old or the legal age of majority in your jurisdiction to use the
          App and the Website. By using the App or the Website, you represent
          and warrant that you meet the eligibility criteria. 1.2 Account
          Creation: To access certain features of the App or the Website, you
          may be required to create an account. You agree to provide accurate,
          current, and complete information during the registration process and
          to keep your account information updated. 1.3 User Obligations: You
          agree to use the App and the Website solely for lawful purposes and in
          compliance with these Terms and any applicable laws and regulations.
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. 2. Intellectual Property 2.1 Ownership: The App, the Website,
          and all their contents, including but not limited to text, graphics,
          logos, images, and software, are the intellectual property of UNIS and
          are protected by applicable intellectual property laws. 2.2 License:
          UNIS grants you a limited, non-exclusive, non-transferable, revocable
          license to access and use the App and the Website for personal and
          commercial purposes. You may not modify, reproduce, distribute, or
          create derivative works based on the App, the Website, or their
          content without UNIS's prior written consent. 3. Privacy 3.1 Data
          Collection and Use: UNIS respects your privacy and handles your
          personal information in accordance with its Privacy Policy. By using
          the App or the Website, you consent to the collection, use, and
          disclosure of your information as described in the Privacy Policy. 3.2
          Third-Party Services: The App or the Website may integrate with or
          allow access to third-party services or websites. Any such integration
          or access is subject to the terms and conditions and privacy policies
          of those third parties. UNIS is not responsible for the actions or
          policies of third parties. 4. Termination 4.1 Termination by You: You
          may terminate your use of the App or the Website at any time by
          discontinuing your access and ceasing all use. 4.2 Termination by
          UNIS: UNIS may suspend or terminate your access to the App or the
          Website, in whole or in part, without prior notice if you violate
          these Terms or engage in any conduct that UNIS deems harmful to the
          App, the Website, or its users. 5. Limitation of Liability 5.1
          Disclaimer of Warranties: The App and the Website are provided on an
          "as is" and "as available" basis, without any warranties of any kind,
          whether express or implied. UNIS does not warrant that the App or the
          Website will be error-free, secure, or uninterrupted. 5.2 Limitation
          of Liability: To the maximum extent permitted by law, UNIS shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or in connection with the use or
          inability to use the App or the Website. At UNIS Compliance, we are
          committed to protecting your privacy and personal data. This privacy
          policy explains how we collect, use, and protect your personal
          information when you use our website and our compliance app. What
          information do we collect? We may collect the following types of
          personal information from you: Name, gender, ethnicity and contact
          information, such as your email address and phone number; Company
          information, such as your company name and job title; Payment
          information, such as your credit card number and billing address;
          Usage information, such as information about how you use our app and
          website; How do we use your information? We may use your personal
          information for the following purposes: To provide our compliance app
          and website to you; To process your subscription payments; To send you
          updates and reminders about your compliance requirements; To provide
          customer support; To improve our app and website; To comply with legal
          and regulatory requirements; How do we protect your information? We
          take reasonable steps to protect your personal information from
          unauthorized access, use, or disclosure. We use industry-standard
          security measures, such as encryption and firewalls, to protect your
          information. However, no system can guarantee complete security, so we
          cannot guarantee the security of your information. Do we share your
          information? We may share your personal information with the following
          third parties: Service providers who help us provide our app and
          website to you, such as hosting and payment processing providers; Law
          enforcement agencies, regulators, and other government bodies, as
          required by law or to protect our legal rights; We do not sell or rent
          your personal information to third parties; How long do we keep your
          information? We keep your personal information for as long as
          necessary to provide our app and website to you and to comply with
          legal and regulatory requirements. Your rights You have the following
          rights regarding your personal information: The right to access your
          personal information; The right to correct your personal information;
          The right to delete your personal information; The right to object to
          the processing of your personal information; The right to restrict the
          processing of your personal information; The right to data
          portability; To exercise your rights, please contact us using the
          contact information provided below; Changes to this privacy policy We
          may update this privacy policy from time to time. We will post the
          updated privacy policy on our website and notify you of any material
          changes. Your continued use of our app and website after the posting
          of the updated privacy policy constitutes your agreement to the
          updated policy. Contact us If you have any questions or concerns about
          this privacy policy, or if you wish to exercise your rights regarding
          your personal information, please contact us at
          enquiries@uniscompliance.com
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Checkbox
          style={{ marginRight: 12 }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? COLORS.mainGreen : undefined}
        /> */}
        <Text>I confirm I accept the Unis T&C's </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("CreateAccount")}
        style={{
          backgroundColor: COLORS.lightGreen,
          paddingVertical: 12,
          paddingHorizontal: 17,
          borderRadius: 4,
          alignSelf: "center",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          Submit
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    paddingTop: 60,
    alignItems: "center",
    marginHorizontal: 30,
  },
});
