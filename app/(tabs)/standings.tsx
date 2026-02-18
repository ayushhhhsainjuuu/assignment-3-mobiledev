import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type StandingRow = {
  id: string;
  rank: number;
  team: string;
  played: number; // P
  gd: number; // GD
  pts: number; // Pts
  badge: any; // require(...)
  trend?: "up" | "down" | "same";
};

// ✅ Put your PNGs in: assets/logos/
// Example files:
// assets/logos/realmadrid.png
// assets/logos/barcelona.png
// assets/logos/villarreal.png
// assets/logos/atletico.png
const dataAll: StandingRow[] = [
  {
    id: "rm",
    rank: 1,
    team: "Real Madrid",
    played: 24,
    gd: 34,
    pts: 60,
    badge: require("../../assets/logos/realmadrid.png"),
    trend: "same",
  },
  {
    id: "bar",
    rank: 2,
    team: "Barcelona",
    played: 23,
    gd: 40,
    pts: 58,
    badge: require("../../assets/logos/barcelona.png"),
    trend: "same",
  },
  {
    id: "vil",
    rank: 3,
    team: "Villarreal",
    played: 23,
    gd: 18,
    pts: 45,
    badge: require("../../assets/logos/villarreal.png"),
    trend: "up",
  },
  {
    id: "atm",
    rank: 4,
    team: "Atlético de Madrid",
    played: 24,
    gd: 17,
    pts: 45,
    badge: require("../../assets/logos/atletico.png"),
    trend: "down",
  },
  // add more…
];

function RankBadge({ rank }: { rank: number }) {
  // mimic colors (top 4 green, 5 purple, 6 orange, others grey)
  let bg = "#2A3138";
  if (rank <= 4) bg = "#19C37D";
  else if (rank === 5) bg = "#A855F7";
  else if (rank === 6) bg = "#F59E0B";

  return (
    <View style={[styles.rankBadge, { backgroundColor: bg }]}>
      <Text style={styles.rankBadgeText}>{rank}</Text>
    </View>
  );
}

function TrendIcon({ trend }: { trend?: "up" | "down" | "same" }) {
  if (trend === "up")
    return <Ionicons name="caret-up" size={14} color="#19C37D" />;
  if (trend === "down")
    return <Ionicons name="caret-down" size={14} color="#EF4444" />;
  return <View style={{ width: 14 }} />; // spacer
}

function TopTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (k: string) => void;
}) {
  const tabs = ["Matchday", "Table", "Official", "Transfers"];
  return (
    <View style={styles.topTabs}>
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <Pressable
            key={t}
            onPress={() => onChange(t)}
            style={styles.topTabBtn}
          >
            <Text style={[styles.topTabText, isActive && styles.topTabTextActive]}>
              {t}
            </Text>
            {isActive && <View style={styles.topTabUnderline} />}
          </Pressable>
        );
      })}
    </View>
  );
}

function SegmentedMini({
  active,
  onChange,
}: {
  active: "All" | "Home" | "Away";
  onChange: (k: "All" | "Home" | "Away") => void;
}) {
  const items: ("All" | "Home" | "Away")[] = ["All", "Home", "Away"];
  return (
    <View style={styles.segmentWrap}>
      <View style={styles.segment}>
        {items.map((t) => {
          const isActive = active === t;
          return (
            <Pressable
              key={t}
              onPress={() => onChange(t)}
              style={[styles.segmentItem, isActive && styles.segmentItemActive]}
            >
              <Text style={[styles.segmentText, isActive && styles.segmentTextActive]}>
                {t}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.filterBtn} onPress={() => {}}>
        <Ionicons name="options-outline" size={18} color="white" />
      </Pressable>
    </View>
  );
}

export default function Standings() {
  const [topTab, setTopTab] = useState("Table");
  const [scope, setScope] = useState<"All" | "Home" | "Away">("All");

  // For now use same dataset; later you can swap based on scope (All/Home/Away)
  const standings = useMemo(() => dataAll, [scope]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* League header */}
        <View style={styles.leagueHeader}>
          <Image
            source={require("../../assets/logos/laliga.png")}
            style={styles.leagueLogo}
            resizeMode="contain"
          />
          <Text style={styles.leagueName}>LaLiga</Text>
          <Text style={styles.leagueCountry}>Spain</Text>

          <View style={styles.followRow}>
            <Ionicons name="star" size={16} color="white" />
            <Text style={styles.followNumber}> 6.7M</Text>
            <Text style={styles.followLabel}> Followers</Text>
          </View>
        </View>

        {/* Top tabs */}
        <TopTabs active={topTab} onChange={setTopTab} />

        {/* All / Home / Away */}
        <SegmentedMini active={scope} onChange={setScope} />

        {/* Table */}
        <View style={styles.tableCard}>
          {/* Header row */}
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <Text style={[styles.th, styles.colRank]}>#</Text>
            <Text style={[styles.th, styles.colTeam]}>Team</Text>
            <Text style={[styles.th, styles.colNum]}>P</Text>
            <Text style={[styles.th, styles.colNum]}>GD</Text>
            <Text style={[styles.th, styles.colPts]}>Pts.</Text>
          </View>

          <FlatList
            data={standings}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <View style={[styles.colRank, styles.rankCell]}>
                  <RankBadge rank={item.rank} />
                </View>

                <View style={[styles.colTeam, styles.teamCell]}>
                  <TrendIcon trend={item.trend} />
                  <Image source={item.badge} style={styles.badge} />
                  <Text style={styles.teamText} numberOfLines={1}>
                    {item.team}
                  </Text>
                </View>

                <Text style={[styles.td, styles.colNum]}>{item.played}</Text>
                <Text style={[styles.td, styles.colNum]}>
                  {item.gd >= 0 ? `+${item.gd}` : item.gd}
                </Text>
                <Text style={[styles.td, styles.colPts]}>{item.pts}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const CARD = "#111827";
const BG = "#0B0F14";
const MUTED = "#9CA3AF";
const BORDER = "#1F2937";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },

  leagueHeader: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 14,
  },
  leagueLogo: { width: 54, height: 54, marginBottom: 10 },
  leagueName: { color: "white", fontSize: 28, fontWeight: "900" },
  leagueCountry: { color: MUTED, fontSize: 16, fontWeight: "700", marginTop: 2 },
  followRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  followNumber: { color: "white", fontWeight: "900", fontSize: 18 },
  followLabel: { color: MUTED, fontWeight: "700", fontSize: 16 },

  topTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    marginBottom: 12,
  },
  topTabBtn: { alignItems: "center", flex: 1 },
  topTabText: { color: MUTED, fontWeight: "800" },
  topTabTextActive: { color: "white" },
  topTabUnderline: {
    marginTop: 8,
    width: 28,
    height: 3,
    borderRadius: 999,
    backgroundColor: "white",
  },

  segmentWrap: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 14 },
  segment: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2A3138",
    borderRadius: 16,
    padding: 6,
  },
  segmentItem: { flex: 1, paddingVertical: 10, borderRadius: 12, alignItems: "center" },
  segmentItemActive: { backgroundColor: CARD },
  segmentText: { color: MUTED, fontWeight: "800" },
  segmentTextActive: { color: "white" },

  filterBtn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#2A3138",
    alignItems: "center",
    justifyContent: "center",
  },

  tableCard: {
    flex: 1,
    backgroundColor: CARD,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: BORDER,
    overflow: "hidden",
  },

  tableHeaderRow: {
    backgroundColor: "rgba(255,255,255,0.04)",
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  th: { color: MUTED, fontWeight: "900" },
  td: { color: "white", fontWeight: "800" },

  colRank: { width: 54 },
  colTeam: { flex: 1, minWidth: 0 },
  colNum: { width: 46, textAlign: "right" as const },
  colPts: { width: 54, textAlign: "right" as const },

  rankCell: { justifyContent: "center" },
  rankBadge: { width: 32, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  rankBadgeText: { color: "#071018", fontWeight: "900" },

  teamCell: { flexDirection: "row", alignItems: "center", gap: 10, minWidth: 0 },
  badge: { width: 24, height: 24, borderRadius: 12 },
  teamText: { color: "white", fontWeight: "900", flexShrink: 1 },

  sep: { height: 1, backgroundColor: BORDER, opacity: 0.8 },
});