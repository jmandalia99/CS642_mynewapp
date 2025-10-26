import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "/amplify_outputs.json";


/** 
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>} 
 */
Amplify.configure(outputs);

const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data } = await client.models.UserProfile.list();
    setUserProfiles(data);
  }

  return (
    <View padding="2rem">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Heading level={2}>User Profiles</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Flex>
      <Divider marginTop="1rem" marginBottom="1rem" />
      <Grid templateColumns="1fr 1fr 1fr" gap="1rem">
        {userprofiles.map((profile) => (
          <View
            key={profile.id}
            border="1px solid #ccc"
            borderRadius="8px"
            padding="1rem"
          >
            <Heading level={4}>{profile.name}</Heading>
            <p>Email: {profile.email}</p>
          </View>
        ))}
      </Grid>
    </View>
  );
}
