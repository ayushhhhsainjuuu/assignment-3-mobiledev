import { Stack } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProfilePicture from '../../components/ui/ProfilePicture';
import SectionHeader from '../../components/ui/SectionHeader';
import TVActionButton from '../../components/ui/TVActionButton';

export default function TVScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.content}>

          <View style={styles.header}>
            <ProfilePicture />
            <Text style={styles.title}>TV</Text>
          </View>

          <View style={styles.row}>
            <TVActionButton icon="▶" label="Live games" sublabel="Watch now" />
            <TVActionButton icon="↺" label="Highlights" sublabel="See all" />
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Real Madrid"
              subtitle="Watch videos related to your selected Fav Club!"
              videos={[
                {
                  img: require('../../assets/images/tvarveloa.jpg'),
                  title: "Arbeloa backs Mbappe to reach Ronaldo heights",
                  source: "Stats Perform",
                  timeAgo: "6 days ago",
                  duration: "0:34",
                },
                {
                  img: require('../../assets/images/tvarbeloa2.webp'),
                  title: "Arbeloa on Real Madrid's upcoming Copa match",
                  source: "Stats Perform",
                  timeAgo: "6 days ago",
                  duration: "0:45",
                },
              ]}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Watch live on OneFootball"
              subtitle="Join us for the latest matches"
              videos={[
                {
                  img: require('../../assets/images/tvrealvsbarcelona.jpg'),
                  title: "Real Madrid vs Barcelona - Full Match Highlights",
                  source: "Stats Perform",
                  timeAgo: "1 day ago",
                  duration: "LIVE",
                },
                {
                  img: require('../../assets/images/tvrealvscity.jpg'),
                  title: "Champions League Live: Real Madrid vs City",
                  source: "Stats Perform",
                  timeAgo: "2 days ago",
                  duration: "LIVE",
                },
              ]}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Highlights"
              subtitle="Best moments from recent matches"
              videos={[
                {
                  img: require('../../assets/images/tvarveloa.jpg'),
                  title: "Top 10 Goals of the Week",
                  source: "Stats Perform",
                  timeAgo: "3 days ago",
                  duration: "3:21",
                },
                {
                  img: require('../../assets/images/tvrealvsbarcelona.jpg'),
                  title: "Best Saves of the Month",
                  source: "Stats Perform",
                  timeAgo: "5 days ago",
                  duration: "2:14",
                },
              ]}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Champions League"
              subtitle="Latest from Europe's top competition"
              videos={[
                {
                  img: require('../../assets/images/tvrealvscity.jpg'),
                  title: "UCL Quarter Final Highlights",
                  source: "Stats Perform",
                  timeAgo: "1 day ago",
                  duration: "4:05",
                },
                {
                  img: require('../../assets/images/tvrealvsbarcelona.jpg'),
                  title: "Road to the Final - Real Madrid",
                  source: "Stats Perform",
                  timeAgo: "2 days ago",
                  duration: "5:30",
                },
              ]}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 12,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#1e1e1e',
  },
});