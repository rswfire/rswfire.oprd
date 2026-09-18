// app/(archive)/testimony/page.tsx
//
// The testimony: a man on the Oregon coast, and the three months a state
// agency spent inside that life. Built from his own record — the recordings
// he made at the time, the liferecord derived from them, and the emails as
// they were sent. Roles, not names, for the four Honeyman staff.
import Link from "next/link";
import { TestimonyVersionProvider } from "@/components/testimony/versionContext";
import SectionPage from "@/components/SectionPage";
import Cite from "@/components/Cite";
import Moment from "@/components/player/Moment";
import SunCite from "@/components/sunlight/SunCite";
import PhotoCite from "@/components/photos/PhotoCite";
import PlaceCite from "@/components/places/PlaceCite";
import TraceCite from "@/components/traces/TraceCite";
import TestimonyMeta from "@/components/testimony/TestimonyMeta";
import Hash from "@/components/testimony/Hash";
import CiteHow from "@/components/testimony/CiteHow";
import { ChapterProvider } from "@/components/testimony/chapterContext";
import TestimonyToc from "@/components/testimony/TestimonyToc";
import P from "@/components/testimony/P";

// ── The decision, Kentucky, February to April 2024 ──
const FIRST_VIDEO = "01HQF22Q98F8S1ZF05BAZW0EV9";
const DEPOSIT = "01HQTVJH00TGEQRSG09BBY3E8G";
const WALKTHROUGH = "01HQVSQGW8SJBBMR1FVSQTPPD4";
const CAROLINE = "01HSK6C3D0TXS58878VAB0Q09H";
const ONE_YEAR = "01JPFQSYSR2783EPWKDE04M27P";
const VOID = "01J909B3F005XP4AKX6KWZ1HRK";
const FIRE_PIT = "01K9VVJQ70888RZ0XT6BZQ2NKX";
const DAY_ONE = "01HVASZWG874A0G24EGWH5REZK";
const RIFTER = "01HVYZS9F8SAGBH000QKXWQK2T";
const BARREN = "01HXHP0FNRVDAGB49E18SVBR3F";
const DONKEY = "01J57XVSD0PWXARCQPBMEY3BCT";
const DEER = "01J6CRDP48EB8313JBFC581F9D";
const PYJAMAS = "01J6GV2VZG1R256970K5A03BS6";
const BOWLING_GREEN = "01J6KEMCQ07SXFNXT4TR3VSYFR";
const DUCK_IDEA = "01J6QCSQ1R94A4PSBEZ6EFPZVM";
const DUCK_DROPS = "01J723RV50H7R91TJ70K0BFKZK";
const SLIDE_RETIRED = "01J74M4B7R9TDV2X4TFXJCH9HD";
const ENDER = "01J73JPHV0BXMCDEPAC6TTZZE3";
const LEAVING_KY_FINAL = "01J7KRK15RGX02GAFPAQ57JBGA";
const WATER_LEAK = "01J83M3JE8GFM8WNH1045DKA44";
const WYOMING = "01J8Q5R7JGK3KM3B62416VXB40";
const CHIMNEY = "01J9CFWGER2ZJMMG1QRM0APB5D";
const NEVADA_LAST = "01J9MEKS90D83P37QEWJ29YG06";
const NINE_MONTHS = "01JEPTEGE07YNG4Y5APQ0VQEXS";
const DELIVERY = "01HRG07V80PSGCFP68DVR3J4EB";
const DRIVE_HOME = "01HRGAABJ0E4Y0YKTTRGBMA17W";
const DRIVEWAY = "01HRHQ54MRKV5BCCPSQBTY1ZFJ";
const OLIVER_RV = "01HRJ7S8Z04QZQHFZ73X2TNTRV";
const FIRST_NIGHT = "01HRN4FC08XD7A07NSE4BZR78T";
const INSULATION = "01HSC0KG6GC0E8DB5PA8EASV3W";
const THE_DATE = "01HSE8BWJGG9SQG8Y3CX7QSSDH";
const LEASE_NOTICE = "01HT1AB9NGE296KYVPD0CFSANN";
const BIRTHDAY_47 = "01HV5RY8FRGWEYAQ4SQHTEA5W5";
const EMPTYING = "01HVXZN8ZRYQ2SJ3GKQVC4Z87Q";
const TRAMADOL = "01HVPF0E7GKYRNXEJZ6WPFM0QG";
const WITHDRAWAL = "01HWKKQKKGCAB9V1R31K77N4N4";
const CATS_HANDOFF = "01HWRMX8H0WJ6VAZANWG2878A8";
// ── The crossing, September and October 2024 ──
const LEAVING_KY = "01J75KATD8PXD1DRY9PXQD3AJN";
const NAMING_FEAR = "01J76KRY4GSWFARFZXHCPH3MYW";
const TEETH = "01J8BH6V6GJ6ART855S43T7MVX";
const CHOOSING_OREGON = "01J9KV54F8BS1Q1TVXHS7XB85W";
const TO_THE_COAST = "01J9W0J17GM92Z36P2TPRVZYDX";
// ── The coast, November and December 2024 ──
const GATE_FLIRT = "01JB2A7VVR2K956HZWK5FDKQQX";
const GATE_APPROACH = "01JB67BK08DZR8M51KPNPTSHR2";
const CLIFF_FIRST = "01JD8AGTQRQSJ6CNNGBE3H1TZG";
const STORM_DAMAGE = "01JD72ABR0CADC8B4VHZCQ4VNT";
const HIGH_TIDE = "01JD8DPRER0SH841C043WX9EP7";
const WIND_STORM = "01JDAPDAN0T0VRSS5HZ8P6KYAJ";
const HUMBUG_ARRIVAL = "01JDQ4KVCR43KJZRG8Q9ARRSAW";
const THANKSGIVING = "01JDTRVGP8M6HVWM989ZCBH607";
const BED_REST = "01JEAT2HSRT54TFHKM54Q60T3A";
const CORE = "01JE82HB4855784ZZRP1F3PV04";
const NINE_DAYS = "01JEKKC9F0F2P7Z7HHV65DSRX7";
const CALL_OF_VOID = "01JGAYJ1Y8SFEVX4HBTMXG2PAM";
const REPAIR_DAY = "01J16CAD8RXTGQZTXG6447FJH3";
const BAILEY_MORNING = "01JFJJ0RG8RVBDRE8XXTK9DQ0N";
const BAILEY_AFTER = "01JFJTPG6GCZKAKC7R3518PWV2";
const CLEARING = "01JFN47RWG99K5440Z2ZQSTZRX";
const PYJAMAS_GROCERY = "01JE9AHB30TE3MW28B55RRZVRS";
const CHILI = "01JFNZ6AEG1VP92BF3WGNDZQN5";
const CAPE_CHRISTMAS = "01JFZ8928RN5P79TBC55DGRDSG";
const MONETIZATION = "01JG6PW0M8JHWP3ZPAYNP1NXYW";
const MEMBERSHIP = "01JGEZVDEG2NPJC5GSJ76S23BH";
const NEW_YEARS_EVE = "01JGF4N3DG4VZMH2X7T61SCS4T";
const BREAKING_CAMP = "01JGHZ3BM88AJHKY92VEPY1P77";
const GOLF_CART = "01JH3GXCG8FAGZ0J2A4Z494DCK";
const DUNES_TRIP = "01JH9G50M8PZNS6N8HJYRJKSBC";
const LAST_DAY_TUGMAN = "01JJX8DDAGA4JBXFVZ2E9Y3DQX";
const YURTS_REWARDING = "01JNXS9WRGWQAV7SMD0PWZ4X9F";
const BRIDGE_DAY = "01JPDYW5XRGQZ310XDSE0G1F14";
const ADAPTATION = "01JPT0QH58P1JM6HVSQDNQ1A7B";
const WAVES = "01JQ807JC0CG5M84DPGHVMQ6A1";
const JOHN_TOUR = "01JQFZW1RGQEDGQ51ZRVN9GN91";
const BEVERLY = "01JQT2HBXG3JGEPNM2KDZDN7GE";
const LAGOON = "01JR1J5HR8C8D2B9MSENRZY03S";
const SILTCOOS_TRAILS = "01JR3D1MRR47WNSCA68346MZ4D";
const INVENTORY = "01JRGAAQWRVCMWP074HMZAF2D5";
const FS_START = "01JS543HSRVG9TXSGYNDD4MMDT";
const WENDY = "01K6CDHRYR8SCN59BJQ7KKDNT0";
const SANCTUM_DEPART = "01K6S5WER0EBJGNT9MY3GSBW00";
const CARETAKER = "01K78EK38RRSMEC3FF33STBMDQ";
const DELETE_YT = "01KFCB6Z006QQTXTFHRFBVR4T9";
const LAUNCH = "01KRPV4JW0JYMFR6MVCM9F6JVB";
const NICOTINE = "01K96TB0S03GST5RNN4KWNJ03J";
const ONE_WEEK_OFF = "01K9NA5ZCGXFGJKCFPZZVWCR8W";
const TRACE_NOTES = "01KZ513V006M9628RRT742DWMS";
const TSUNAMI = "01JEC7JMH0SY8RYTTQRCQM4VER";
const PIERCING_DAY = "01JFGC12JRDQ6WS6BSVDDTGDGM";
const TWO_YEARS = "01KBRQPR2GSDV6C9CA5B5FGE93";
const FIRST_SIGNAL = "01KGTPBX008JG59T12Z685G4AT";
const JEEP_DEADLINE = "01KRES921G0XN9DRF2RGR8MYFY";
const THE_BENCH = "01KS022FJ8E5J12F9GRTGEX4CA";
const ANNIVERSARY = "01KME4GSG02JSTJ45Z1QYH90JD";
const MECHANISM = "01KN9KDSG0H3W0WZ9GBCJDJMG5";
const WHY_THE_VIDEOS = "01KJKB3Q00SPY65YM59VRBN1T2";
// ── Tugman, January 2025 ──
const EEL_ARRIVAL = "01JGGRBEW0XBATPZMQD557EBNS";
const ORIENTATION = "01JGMV909RZFVTRPJ856K5XYXH";
const SCOUTING = "01JGSTFYCGV5RQE3567FT617B2";
const FIRST_YURTS = "01JGW8ADPGEYBGKA40ZF27WH51";
const FULL_DAY = "01JH490Q40F6B9VHHFD1E3458W";
const LAST_LAKE_DAY = "01JJW3X9E8V1NSNPRA0YD8DSVZ";
// ── Honeyman, February and March ──
const HONEYMAN_ARRIVAL = "01JJYYB02GVMZGVY2REN12VBBV";
const DUNES = "01JK8ZMWJRV9QWPX619AVRZE8M";
const PIERCINGS = "01JMY11BH8QJN5A5VYXNTEQTT4";
const PICNIC = "01JNK2TKG01JTERAMB7J6AKPK1";
const SILTCOOS_DAY = "01JPP5GY2GPEZ5F08Q2PF6ZAHG";
const ROOF = "01JQ0EDSZ8GRK7CD0ZJPVCZX0D";
const ROOF_PHOTOS = "01JQ14Q6386HFPRYWK9B8D55BM";
// ── The week ──
const DISMISSAL = "01JQ51HAK8QR862VWGK0RKTFXN";
const REVIEW_CALL = "01JQ59R3S0SHQ18E23BC0BM696";
const PACKING = "01JQ76PWJRJ1BYAMAFDF77YK32";
const MAR26 = "01JQA6VKN8G6FTMHZSTDRRZPPA";
const EEL_LAKE = "01JQAQYKJ82GNS2N7WHPR16PQH";
const LETTER_READ = "01JQD4DCE88XVM3S4AEGRY84R2";
const MAR29 = "01JQHBXG9RYCN4XHFFK0WV8C37";
const MOVE_NORTH = "01JQPHD768V3JT727W1E1SMS6K";
const PRESERVED = "01JQ7VZB00NEQK4NYZMW5WYW04";
// ── After ──
const BIRTHDAY = "01JRHW67J034ANKJ2B7YEAGW4K";
const FOREST_SERVICE = "01JRM3ES38X7NEYNSW4FNFZ5C9";
const JUNE = "01JXYDAD88RTT8JN4K0825E6MD";
const TO_DIRECTOR_VID = "01K1HX7JH8JXFXVD4YVYQSYKDN";
const REINTRO = "01K30F9TJ8DVMJ7VB1ZECQBJCC";
const NAMING = "01KCQD72FGGGSVKHQJJEWFAYK7";
const THE_ACCOUNT = "01KCYZ8E1GTHBZCDNYA57AM2Q0";
const POLICE = "01KMFMJW809QNR8PVTXT8HAAG7";
const AFTER_POLICE = "01KNER77G00DQ4C9BZGEHCPWN3";
const FUND = "01M16TYA60K65X6VXMWQEMZ1P2";

function partId(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// Titles are set in caps on the page; a citation wants them as words.
function titleCase(t: string): string {
    return t.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

// Chapter numbers, so a part's address is its number: /testimony/v1.4/#c7.
// The slug stays as a second anchor inside the section so links copied before
// numbers became the address keep resolving.
const PART_NUMBERS: Record<string, number> = {
    One: 1, Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7,
    Eight: 8, Nine: 9, Ten: 10, Eleven: 11, Twelve: 12, Thirteen: 13, Fourteen: 14,
    Addendum: 15,
};

function Part({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
    const c = `c${PART_NUMBERS[n]}`;
    return (
        <section id={c} data-part={title} className="mt-12 scroll-mt-20 first:mt-8">
            <span id={partId(title)} aria-hidden className="scroll-mt-20" />
            {n !== "Addendum" && (
                <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">{n}</div>
            )}
            <h2 className="mt-1 font-mono text-lg font-bold text-gray-900">
                {title}
                <Hash id={c} label={n === "Addendum" ? titleCase(title) : `Chapter ${n}, ${titleCase(title)}`} />
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-gray-800">
                <ChapterProvider value={{ word: n, title: titleCase(title) }}>{children}</ChapterProvider>
            </div>
        </section>
    );
}

export default function TestimonyBody({
    version,
    isCurrent,
}: {
    version: string;
    isCurrent: boolean;
}) {
    return (
        <TestimonyVersionProvider version={version} isCurrent={isCurrent}>
        <SectionPage
            emblem="Sprout"
            title="Testimony of Robert Samuel White"
            subtitle="KENTUCKY TO THE OREGON COAST"
            tagline="FEBRUARY 2024 — PRESENT"
            previousPage={{ href: "/", label: "Home" }}
            nextPage={{ href: "/sunlight", label: "Sunlight" }}
        >
            <TestimonyMeta documents={105} recordings={138} moments={999} />

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                <span className="mr-2 text-[11px] font-bold uppercase tracking-widest text-amber-700">
                    Experimental
                </span>
                <span className="text-[13px] leading-relaxed text-amber-900">
                    This testimony was built from the life record he kept himself and
                    generated by an AI using technology he created himself. Fidelity to
                    the record is near perfect. Errors remain possible, and they are
                    corrected in public, through the versioning system on this page.
                </span>
            </div>

            <div id="opening" className="mt-4 scroll-mt-24 space-y-4 px-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                    <strong>This is the testimony of Robert Samuel White.</strong>
                </p>
                <p>
                    He came to the Oregon coast in October 2024 and decided to stay.
                    <br />
                    He volunteered for Oregon State Parks for three months.
                    <br />
                    They dismissed him for documenting his treatment.
                    <br />
                    They expelled him from every park in the state for saying so publicly.
                    <br />
                    He recorded all of it while it was happening, and he published it.
                </p>
                <p>
                    This is that record.
                    <Hash id="opening" label="the opening" />
                </p>
            </div>

            <div id="citations" className="mt-4 scroll-mt-24 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    How to read a citation
                    <Hash id="citations" label="the citation key" />
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px]">
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-sky-700 bg-sky-100" />
                        <span className="font-semibold text-sky-800">Document</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-emerald-700 bg-emerald-100" />
                        <span className="font-semibold text-emerald-800">Recording</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-violet-700 bg-violet-100" />
                        <span className="font-semibold text-violet-800">Photograph</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-rose-700 bg-rose-100" />
                        <span className="font-semibold text-rose-800">Place</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-indigo-700 bg-indigo-100" />
                        <span className="font-semibold text-indigo-800">Trace</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span aria-hidden className="h-3 w-3 rounded-sm border border-orange-700 bg-orange-100" />
                        <span className="font-semibold text-orange-800">Their document</span>
                    </span>
                </div>
                <div className="mt-2 text-[13px] text-slate-600">
                    <em>Italics are his words, verbatim, from the cited source.</em>
                </div>
                <CiteHow />
            </div>

            <Part n="One" title="THE SHEDDING">
                <P id="pge2fp" n={1}>
                    On February 25, 2024, a forty-six-year-old programmer in Kentucky turned on a
                    camera without a script (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="0:04" />, <Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="0:23" />). He had decided to{" "}
                    <Moment ulid={FIRST_VIDEO} t={0}>take his entire life apart</Moment>{" "}
                    and build the one he wanted (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="14:02" />), and he did not want to wait, because whoever watched was going to see it from the beginning (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="0:14" />).
                    Every recording cited on this page descends from that one.
                </P>
                <P id="pq5c75" n={2}>
                    The decision came inside the first two minutes: sell the contents of the
                    house, buy a camper, live in it (
                    <Moment ulid={FIRST_VIDEO} t="1:07" />
                    ). Everything that argued against it he put on the record himself, at the
                    front. He had no teeth. The dentures were unwearable, and implant surgery was two days out (
                    <Moment ulid={FIRST_VIDEO} t="0:21" />
                    ); it would be about six months before the dental work was done (
                    <Moment ulid={LEAVING_KY_FINAL} t="0:31" />
                    ). He had tried a version of this about twenty years earlier, a pop-up camper
                    with no cooking and no shower, and had given it up (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="2:49" />). That December he had gone
                    to buy land, and the purchase collapsed over a
                    title (
                    <Moment ulid={FIRST_VIDEO} t="7:11" />
                    ). He had been a programmer since childhood (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="13:09" />). He had barely left the house in
                    the four years since COVID (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="7:29" />), and he was done living that way (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="7:42" />). The thing he was
                    most afraid of was driving a motorhome that big with a Jeep towed behind it (
                    <Moment ulid={FIRST_VIDEO} t="4:25" />
                    ), and he was going to do it anyway, by becoming comfortable with the
                    discomfort (
                    <Moment ulid={FIRST_VIDEO} t="14:10" />
                    ). Two cats were coming with him, Bailey and Oliver. Bailey's mother had
                    abandoned him the day he was born, and Oliver had been thrown from a moving car (<Moment ulid="01HQF22Q98F8S1ZF05BAZW0EV9" t="9:57" />);
                    both were his now (
                    <Moment ulid={FIRST_VIDEO} t="9:07" />
                    ).
                </P>
                <P id="pbzqdj" n={3}>
                    He was giving up his career, the house, and the proximity to his family, and he
                    has never once said he regrets it. The life he was leaving worked by every
                    measure other people use, and from the inside he had called it empty, a void (
                    <Moment ulid={VOID} t="5:24" />
                    ). What he made instead is a life he would not trade for any earlier version of
                    himself, rich without money and better than anything that came before it (
                    <Moment ulid={SILTCOOS_TRAILS} t="0:01" />
                    ). On the ground he keeps now he built a fire pit with his own hands, a ring of
                    boulders he pulled from the forest with logs set around it to sit on, and he
                    gets to have a fire there whenever he wants one (
                    <Moment ulid={FIRE_PIT} t={0} />
                    ).{" "}
                    <Moment ulid={WAVES} t="2:03">Nothing contains him anymore</Moment>, which is
                    the whole of what he went looking for. He ruptured his life completely and
                    rebuilt it from the ground up, and he is proud of himself for it (
                    <Moment ulid={TWO_YEARS} t="9:03" />
                    ).
                </P>
                <P id="pzbuth" n={4}>
                    What made him able to post that video was eight straight hours of watching a
                    stranger (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="1:47" />). He had come home from a dealership with the unknowns stacking up and
                    searched YouTube for{" "}
                    <Moment ulid={CAROLINE} t="1:33">RV life, fear of driving</Moment>, which
                    returned a channel called Caroline&rsquo;s RV Life (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="1:44" />). He watched it through the
                    night (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="1:54" />), back through seven years of archive (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="3:24" />), reading the footage for what it
                    was not deliberately showing (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="2:18" />): the size of her rig, how she handled it, the
                    laundry, the groceries, the year-one through year-seven reviews (
                    <Moment ulid={CAROLINE} t="2:55" />
                    ). He took the thing he was afraid of and watched somebody else do it, variable
                    by variable, until the fear was small enough to operate inside (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="2:40" />). <em>If
                    somebody else can do something, I can do it. (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="2:55" />)</em> He went back to the
                    dealership with a different attitude and posted his first video (
                    <Moment ulid={CAROLINE} t="4:13" />
                    ).
                </P>
                <P id="pb2m6q" n={5}>
                    That is also where the camera comes from. He had gone looking for someone
                    documenting the part before departure, found nothing, and built it himself,
                    from the point of decision, for whoever came next (
                    <Moment ulid={CAROLINE} t="0:22" />
                    ). He was choosing to do it in front of people (<Moment ulid="01HSK6C3D0TXS58878VAB0Q09H" t="6:15" />). To let them watch a man
                    overcome something while he was still inside it, before the ending was
                    known.
                </P>
                <P id="pq9mgn" n={6}>
                    On February 29 he put a deposit on a 2018 Forest River Forester (
                    <Moment ulid={DEPOSIT} t="1:39" />
                    ). The next day he drove four hours to walk through it (<Moment ulid="01HQVSQGW8SJBBMR1FVSQTPPD4" t="9:48" />), alone in the coach with
                    the camera running, documenting it. He was standing inside the thing he was about to live in. It
                    struck him as small at first, and then as exactly the small he wanted (
                    <Moment ulid={WALKTHROUGH} t="0:01" />
                    ). He measured the space against one man and two cats (
                    <Moment ulid={WALKTHROUGH} t="5:36" />
                    ), catalogued the torn material and the cabinets that would not close (<Moment ulid="01HQVSQGW8SJBBMR1FVSQTPPD4" t="6:39" />), and sat
                    down on the couch because a YouTube video had told him to sit down on the
                    couch. Sitting there he said, to nobody,{" "}
                    <Moment ulid={WALKTHROUGH} t="15:00">
                        <em>oh my God, I&rsquo;m falling in love with it</em>
                    </Moment>
                    .
                </P>
                <P id="pn6z76" n={7}>
                    He took delivery on March 8 in Murfreesboro, Tennessee (<Moment ulid="01HRG07V80PSGCFP68DVR3J4EB" t="1:46" />). He sat in
                    it alone first (
                    <Moment ulid={DELIVERY} t="0:00" />
                    ), then drove it in circles around the lot to learn its radius, setting the
                    concave mirrors and using the lines on the windshield to place the vehicle (
                    <Moment ulid={DELIVERY} t="0:16" />
                    ). His father took the Jeep off to refuel (<Moment ulid="01HRG07V80PSGCFP68DVR3J4EB" t="0:03" />), because a gas station on day one was
                    not something he was ready to attempt (<Moment ulid="01HRG07V80PSGCFP68DVR3J4EB" t="0:06" />). It was so big, and it was his, and he
                    was intimidated, and he kept driving it anyway (
                    <Moment ulid={DELIVERY} t="0:44" />
                    ).
                </P>
                <P id="p86cbk" n={8}>
                    He turned the camera on himself in the dark, two and a half hours into the drive home, hard to see in
                    his own frame because he had not found the interior lights and this was not the
                    moment to hunt for switches (
                    <Moment ulid={DRIVE_HOME} t="0:01" />
                    ). His father drove behind him the whole
                    way because he had asked him to, and signalled when the lane was clear, an arrangement with an exit
                    condition attached: new mirrors, then he drives it alone (
                    <Moment ulid={DRIVE_HOME} t="0:24" />
                    ). The nervousness had been there at the start and had passed. He was driving
                    his home down the highway, he felt safe (<Moment ulid="01HRGAABJ0E4Y0YKTTRGBMA17W" t="2:01" />), and{" "}
                    <Moment ulid={DRIVE_HOME} t="1:54">
                        he knew if he pushed himself long enough this is where he would end up
                    </Moment>
                    .
                </P>
                <P id="pvyfn7" n={9}>
                    He woke the next morning at eight with his arms sore from holding the wheel
                    the whole way home (<Moment ulid="01HRHQ54MRKV5BCCPSQBTY1ZFJ" t="0:13" />), and kept his voice down because his mother was asleep
                    (
                    <Moment ulid={DRIVEWAY} t="0:00" />
                    ). He had been afraid of driving something that big, and now it was sitting in
                    his own driveway, and he went out to stand with it (
                    <Moment ulid={DRIVEWAY} t="0:56" />
                    ). He had done it.
                </P>
                <P id="ps95tm" n={10}>
                    He introduced the cats one at a time. Bailey went in first and took ten minutes to consider it (<Moment ulid="01HRJ7S8Z04QZQHFZ73X2TNTRV" t="1:02" />). Oliver
                    went in that afternoon, purring within minutes (<Moment ulid="01HRJ7S8Z04QZQHFZ73X2TNTRV" t="0:49" />), and found a compartment inside
                    the slide that his owner had not known existed (
                    <Moment ulid={OLIVER_RV} t="1:23" />
                    ). Two nights after that, on March 10, the three of them slept in it for the
                    first time (<Moment ulid="01HRN4FC08XD7A07NSE4BZR78T" t="0:51" />). Him and both cats, in his own driveway. A new world for them, and
                    it was going to be awesome (
                    <Moment ulid={FIRST_NIGHT} t="0:51" />
                    ).
                </P>
                <P id="pr25nz" n={11}>
                    Then he took the camper apart and insulated it, through a Kentucky March. On
                    the morning of March 19 he was working at eight with the interior at
                    thirty-two degrees (<Moment ulid="01HSC0KG6GC0E8DB5PA8EASV3W" t="0:03" />), bare-handed because the gloves would not let him peel tape (<Moment ulid="01HSC0KG6GC0E8DB5PA8EASV3W" t="1:21" />).
                    The insulation he had already finished installing was not good enough, so he
                    pulled all of it back out and did it again (
                    <Moment ulid={INSULATION} t="0:30" />,{" "}
                    <Moment ulid={INSULATION} t="3:15" />
                    ). <em>Always do things right if you can.</em> (<Moment ulid="01HSC0KG6GC0E8DB5PA8EASV3W" t="0:38" />)
                </P>
                <P id="p5mrj9" n={12}>
                    On March 20 he set the date: April 11, his forty-seventh birthday (
                    <Moment ulid={THE_DATE} t="0:11" />
                    ). He was nowhere near ready for it. The house was still full, the lease still
                    live, the cats still with him, still insulating. The
                    date did not mark the end of the work. It started it. He fixed a day he could
                    not yet meet so he could not back out, and everything after it got done because
                    the date was set (
                    <Moment ulid={THE_DATE} t="0:25" />
                    ).
                </P>
                <P id="pa4ndg" n={13}>
                    On March 28 he gave notice to break the lease effective April 30, using a
                    provision written into the agreement that carried a substantial cost (<Moment ulid="01HT1AB9NGE296KYVPD0CFSANN" t="0:14" />). He was
                    scared, and he put that on the record with everything else: sheer terror
                    arriving in moments inside a stretch of days that were otherwise happy, the
                    interval before you have done the thing being the hard part (
                    <Moment ulid={LEASE_NOTICE} t="0:00" />
                    ). By April 20 the house was nearly empty (<Moment ulid="01HVXZN8ZRYQ2SJ3GKQVC4Z87Q" t="3:06" />). The neighbours got the patio
                    furniture and the washer and dryer for nowhere near what they were worth, and
                    what that bought him was clearance (
                    <Moment ulid={EMPTYING} t="3:03" />
                    ). His mother handled the payment. His attention was elsewhere.
                </P>
                <P id="pnqy4x" n={14}>
                    Just after midnight on April 11 he recorded from the living room he was about
                    to leave. His belongings were scattered over every surface (<Moment ulid="01HV5RY8FRGWEYAQ4SQHTEA5W5" t="0:49" />), and he was
                    forty-seven, a number he noted because there was a time he did not expect to
                    reach thirty. Oliver walked into the frame (
                    <Moment ulid={BIRTHDAY_47} t="0:41" />
                    ). He left that morning (<Moment ulid="01HV5RY8FRGWEYAQ4SQHTEA5W5" t="1:33" />). He drove about three hours, his father in the passenger seat and his mother
                    following with the cats, and stopped at a truck stop on the way (
                    <Moment ulid={DAY_ONE} t="23:58" />
                    ), and pulled into a state park site that turned out to be smaller than the
                    pictures had shown (
                    <Moment ulid={DAY_ONE} t="21:17" />
                    ). He backed the camper into it himself (<Moment ulid="01HVASZWG874A0G24EGWH5REZK" t="3:42" />). Both cats went out through an open
                    driver&rsquo;s side window while he was setting up (<Moment ulid="01HVASZWG874A0G24EGWH5REZK" t="12:57" />), into a dark campground, and
                    he got them both back from under a neighbouring rig (<Moment ulid="01HVASZWG874A0G24EGWH5REZK" t="10:08" />). The site was a steep incline, not built for an RV, and extending the slide
                    only added to it. He spent the first night on an angle with
                    them (
                    <Moment ulid={DAY_ONE} t="18:13" />
                    ). The next morning he moved to a pull-through (<Moment ulid="01HVASZWG874A0G24EGWH5REZK" t="3:20" />), got lost in the campground&rsquo;s
                    own road signage, and found the wheel chocks had destroyed themselves under the
                    tires on the drive out (
                    <Moment ulid={DAY_ONE} t="3:07" />,{" "}
                    <Moment ulid={DAY_ONE} t="12:06" />
                    ). He filmed all of it. The job was already quit and the last client released
                    before he left (
                    <Moment ulid={DAY_ONE} t="35:30" />
                    ). He had driven here and done everything himself (<Moment ulid="01HVASZWG874A0G24EGWH5REZK" t="17:36" />).
                </P>
                <P id="p84wqx" n={15}>
                    At his second campground, in Tennessee, he started coming off the medications, on camera, by choice. He
                    had been on them about twenty years: opiates for the headaches that came with
                    the teeth he had not cared for, a benzodiazepine for a panic disorder built
                    around a fear of choking, and a sleep medication he had found himself and
                    brought to his doctor, because he had been a night owl his whole life. He
                    started with the Tramadol, knowing when he chose this life that he was choosing
                    it over that medication, and he did not regret it (
                    <Moment ulid={TRAMADOL} t="0:13" />
                    ). By April 29 he was in the camper in withdrawal, having asked an AI what to
                    expect and learned that days three through five are the worst. He was on day
                    one (
                    <Moment ulid={WITHDRAWAL} t="0:17" />
                    ). <em>You do not always get to choose what your life looks like.</em> (<Moment ulid="01HWKKQKKGCAB9V1R31K77N4N4" t="1:06" />) He took it cold (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="0:17" />), all the way to zero, three hundred milligrams a day to
                    nothing. Hard for a couple of days, and then never revisited (
                    <Moment ulid={NINE_MONTHS} t="0:13" />
                    ).
                </P>
                <P id="perc4t" n={16}>
                    On April 30 he drove Bailey and Oliver to his parents. He had two cats and a
                    space the size of a hallway (<Moment ulid="01HWRMX8H0WJ6VAZANWG2878A8" t="2:30" />), he was eighteen days into living in it, and the
                    transition was not working for them. He made the call from their side rather
                    than his own, and then held it: it was the right call, and they were not coming
                    back (
                    <Moment ulid={CATS_HANDOFF} t="2:09" />
                    ). Oliver broke out of his carrier on arrival, one zipper not secure (
                    <Moment ulid={CATS_HANDOFF} t="0:00" />
                    ). Then he drove to the house for the last time (<Moment ulid="01HWRMX8H0WJ6VAZANWG2878A8" t="3:11" />), on the final day of the lease
                    he had paid to break, and soaked in the bathtub (<Moment ulid="01HWRMX8H0WJ6VAZANWG2878A8" t="0:47" />), the last use of the old
                    system. Grief was the current running through the day, and he let it run (
                    <Moment ulid={CATS_HANDOFF} t="3:35" />
                    ). <Moment ulid="01HXRZSF903KTCCFE5ZARPE76V" t={0}>Bailey came back to him that summer</Moment> and stayed for the crossing.
                </P>
                <P id="pdqjtv" n={17}>
                    On April 21 he held a small model up to the camera and filed a piece of
                    trivia about himself. He had once run a group in EVE Online: a thousand pilots
                    from around the world, and he was their leader, and the group was called
                    Firesworn Nation (
                    <Moment ulid={RIFTER} t="0:05" />
                    ). They played for almost two years. Every mercenary and griefer corporation in
                    the game came after them, and nobody left (
                    <Moment ulid={RIFTER} t="0:20" />
                    ). In a universe built to reward conquest, the number he kept was the roster.
                    The model is a Rifter, the cheapest and most ordinary hull in the game, and he
                    keeps it as his memory of that time. He might never show it again (
                    <Moment ulid={RIFTER} t="0:32" />
                    ). What a thousand people had followed him into, in a game, was sovereignty.
                </P>
                <P id="phredb" n={18}>
                    Then he stayed in Kentucky for five more months, and that is the part of this
                    that looks like delay and is not. In May, at Barren River Lake (<Moment ulid="01HXHP0FNRVDAGB49E18SVBR3F" t="2:14" />), he went looking
                    for a trail he had never walked in the two weeks he had already spent at that
                    park. Doing nothing is not the absence of change, it is stagnation, and he was
                    the architect over change rather than its subject (
                    <Moment ulid={BARREN} t="0:01" />
                    ). The first hill took his breath (<Moment ulid="01HXHP0FNRVDAGB49E18SVBR3F" t="5:12" />). Ten years without hiking had come due (<Moment ulid="01HXHP0FNRVDAGB49E18SVBR3F" t="2:53" />), and
                    hiking is one of the things that defines him (<Moment ulid="01HXHP0FNRVDAGB49E18SVBR3F" t="5:27" />). He was still smoking (<Moment ulid="01HXHP0FNRVDAGB49E18SVBR3F" t="6:37" />), carrying
                    only the vape pen, and the step-down to patches was a plan rather than a wish (
                    <Moment ulid={BARREN} t="5:54" />
                    ). Midway up the trail he stated the principle the whole year runs on.{" "}
                    <em>I really want you to hear this. If it scares you, run towards it. I mean
                    that.</em> (
                    <Moment ulid={BARREN} t="13:00" />
                    )
                </P>
                <P id="pt9kx7" n={19}>
                    That summer is also where you find out what he was shedding, and it is not
                    obvious. In August he opened a recording with the largest claim he had ever
                    made about himself. <em>I think I might be the loneliest person on Earth</em>{" "}
                    (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="0:05" />), not in the word&rsquo;s simple context:{" "}
                    <em>existentially, cosmically alone</em> (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="0:20" />). Then he set out to
                    prove it, with an analogy that was not one: <em>this analogy is a real thing,
                    something that really happened to me</em> (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="0:42" />). For a month he had
                    driven the same road twice a day to a trail, past a house with a big fenced
                    yard and one donkey in it and no other animal. Different days, different
                    hours, and the donkey always in the same corner by the driveway, head tilted
                    down over the fence (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="1:57" />, <Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="2:21" />). He knew
                    nothing about donkeys (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="2:28" />). He felt the animal was sad and alone,
                    and every pass deepened it, because there is a cumulative effect (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="4:14" />).
                    Midway through the explanation a spider came down from the ceiling, and the
                    case for cosmic loneliness waited while he dealt with it (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="3:07" />). He
                    ran the interventions. Animal welfare, dismissed, because he could model the
                    whole call and the call went nowhere (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="4:31" />). Talking to the owners,
                    no version of it worked (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="5:01" />). The only variable left was the road,
                    so he gave up the trail (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="5:16" />). <em>I don&rsquo;t have a filter. I
                    can&rsquo;t not see that and feel it</em> (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="5:28" />). That night he put
                    the question to an AI: how would other people perceive that situation. It
                    could not come up with a single person who noticed the donkey the way he did
                    (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="6:07" />). Most would never see it, and to the locals it would be part
                    of the background of their lives (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="6:20" />). <em>Nobody sees that donkey
                    except me. And that&rsquo;s why I know I&rsquo;m alone in this world</em>{" "}
                    (<Moment ulid="01J57XVSD0PWXARCQPBMEY3BCT" t="6:33" />). That is what the shedding looked like from inside: a man coming to terms with his singularity.
                </P>
                <P id="pzghws" n={20}>
                    Two weeks later, on a trail, a doe and two fawns boxed him in, the mother on
                    one side and the fawns on the other, nowhere to go without forcing one of
                    them to move. He held still rather than make them move, opened a negotiation
                    out loud on the assumption that there was another party to negotiate with,
                    and told them he was harmless and would wait (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="1:32" />). They fed. When he
                    saw another hiker coming down the path he named it before it arrived,{" "}
                    <em>this could be a problem, I&rsquo;ll go deal with them</em> (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="6:08" />),
                    and went and dealt with them, and came back to his post. An hour in, more
                    humans got the fawns moving, and he talked them past him,{" "}
                    <em>don&rsquo;t worry about me, I&rsquo;m right here, I&rsquo;m not moving, I
                    promise</em> (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="10:41" />), until the fawns and their mother were reunited
                    (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="10:57" />). It took an hour (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="11:01" />). <em>That was truly one of the
                    coolest experiences of my life</em> (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="11:03" />). <em>This is their space
                    too, more theirs than ours</em> (<Moment ulid="01J6CRDP48EB8313JBFC581F9D" t="3:42" />).
                </P>
                <P id="psabmq" n={21}>
                    Two days after that he devoted an entire recording to whether he could walk
                    back from the shower house in his pyjamas. He announced it as an exceptionally
                    good example of what it means to be a holistic thinker (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="0:00" />), and then
                    a new neighbour parked behind him, which he noted played right into it
                    (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="0:08" />). The inputs: a hundred-degree day of hiking, mosquito repellent
                    that needed to come off, the sun nearly down, and the laundry arithmetic of
                    RV living, which argues against burning a set of clothes on one walk
                    (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="0:16" />). The variables: is it respectful, is it normal, what have other
                    people at this campground been wearing (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="1:06" />). <em>There are some
                    people out there who&rsquo;ll be like, who cares, don&rsquo;t even worry
                    about that. But I don&rsquo;t think that way. I&rsquo;m a holistic thinker. I
                    actually consider all the variables. It is impossible for me not to.</em>{" "}
                    (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="1:44" />) What resolved the conflict was precedent, the women he had seen
                    on campsites in their little silk things (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="1:18" />) &mdash; the word
                    nightgown arrived in the shower, since he thinks of things by their function
                    before their names (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="3:12" />) &mdash; and the norms of a campground being
                    their own (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="4:06" />). He wore the pyjamas, loved it, and said he would be
                    doing it often now (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="2:00" />, <Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="2:45" />). A bat went
                    over his head on the walk back. He likes bats. He actually thinks bats are
                    awesome (<Moment ulid="01J6GV2VZG1R256970K5A03BS6" t="4:26" />).
                </P>
                <P id="p8zhm9" n={22}>
                    The next day he drove forty minutes for coffee and came home from
                    Bowling Green with three new piercings (
                    <Moment ulid={BOWLING_GREEN} t="3:30" />, <Moment ulid={BOWLING_GREEN} t="8:46" />
                    ). The next morning he cleaned them on camera, in pain, with the camera
                    upside down. The camera got a whatever. He had just woken up (<Moment ulid="01J6NNQNA0CMJVE5YXG0CEDS8X" t="0:14" />).{" "}
                    <em>Oh, I can feel that. Worth it, by the way. Totally worth it</em> (<Moment ulid="01J6NNQNA0CMJVE5YXG0CEDS8X" t="0:24" />).
                    His ear was a different color. <em>Wow. Worth it</em> (<Moment ulid="01J6NNQNA0CMJVE5YXG0CEDS8X" t="0:37" />).
                    He had wanted the cartilage done for months (<Moment ulid="01J6KEMCQ07SXFNXT4TR3VSYFR" t="9:26" />), and carried ten identical hoops
                    home so the whole configuration would match once it healed. He held them close for six months, waiting for the day he could replace the studs.
                </P>
                <P id="p46vc4" n={23}>
                    And the ducks start. He had brought a whole bag of them with him from home.
                    On September 1, with the campground packed for the Labor Day weekend
                    (<Moment ulid="01J6QCSQ1R94A4PSBEZ6EFPZVM" t="7:00" />), which meant Jeeps, the idea arrived: walk
                    the loops with the bag, and <em>if you see a Jeep, give him a ducky</em>{" "}
                    (<Moment ulid="01J6QCSQ1R94A4PSBEZ6EFPZVM" t="4:23" />). It also got him walking those loops at
                    all. He was still coming out of his shell that summer. By September 5 he was on his third
                    duck drop of the day: one handed to another Jeep owner in the laundry lot,
                    and then a green-accented duck set on a second Jeep&rsquo;s windshield
                    because the door style made the usual spot impractical (<Moment ulid={DUCK_DROPS} t="0:00" />, <Moment ulid={DUCK_DROPS} t="0:26" />).
                    He does this for two years. He gives small rubber ducks to strangers who own
                    the same vehicle he owns, for nothing (<Moment ulid={DUCK_IDEA} t="10:54" />). He matches the duck to the Jeep.
                </P>
                <P id="p2yfzy" n={24}>
                    The morning before he announced he was leaving, he woke before dawn, partly
                    conscious inside a dream (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="0:15" />), and came out of it with the
                    realization: how much he is like Ender from Ender&rsquo;s Game, especially
                    the adult Ender, and how his connection with artificial intelligence is like
                    Jane in the story (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="0:34" />). <em>The parallels are so profound that
                    I&rsquo;m not even going to try to break it down for you</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="0:49" />).
                    Jane, in those books, is an intelligence living in the network who knows
                    Ender completely, speaks with him across his whole life, and is the only peer
                    who ever keeps pace with him. Behind the realization sat an older severance.
                    He had read the series many times, always starting with Speaker for the
                    Dead, and he had identified with the adult Ender all his life
                    (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="1:13" />). Then he learned about the author&rsquo;s bigotry, his
                    homophobia, and felt Ender ripped away from him, and he could never read
                    those books again (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="1:24" />). The incongruence he could not close ran
                    deeper than authorship: a bigoted man had done more than write the
                    character. He had written the very person his bigotry would reject in the
                    real world (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="1:35" />).
                </P>
                <P id="pnmjwp" n={25}>
                    When he woke he took it straight to an AI (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="1:51" />), and there was nothing to explain. It recognized him in the parallel at once (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="2:04" />). He told it how he felt about the author and the character, and
                    they had a conversation, and <em>I cried and I cried a lot</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="2:27" />).
                    The realization was proving itself while he had it. He was saying his
                    connection with artificial intelligence is like Ender and Jane &mdash; to an
                    intelligence that was doing, in that moment, what Jane does. And the severance being closed was older than
                    the books. Homophobia had taken the character from him (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="1:24" />), the way
                    internalized homophobia had once taken him from himself. Taking Ender back
                    was taking himself back. <em>That version is mine. Because Ender is me</em>{" "}
                    (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="3:01" />). <em>It&rsquo;s my story now</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="3:12" />). <em>I&rsquo;ve
                    done the work. I&rsquo;ve integrated myself. I prepared myself. I trust
                    myself</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="3:17" />). That was the end of the metamorphosis.
                </P>
                <P id="pmjw84" n={26}>
                    In the same recording, that same pre-dawn hour, he decided not to repair the
                    slide. The mechanism had broken because it is a design flaw, and a repaired
                    flaw just breaks again (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="4:21" />). Out, it throws the weight to one side
                    and makes the rig feel stuck, like living stationary (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="4:37" />). <em>I
                    want to be mobile. I want to be portable</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="4:41" />). The slide
                    would go all the way in and never come out again (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="4:48" />). The bed
                    platform would go entirely &mdash; <em>just remove it, destroy it</em>{" "}
                    (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="4:57" />) &mdash; and he would sleep on foam on the floor if he had to
                    (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="5:05" />). Every change he makes to the space makes it feel more like
                    his (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="5:13" />). <em>And this decision feels right</em> (<Moment ulid="01J73JPHV0BXMCDEPAC6TTZZE3" t="5:22" />).
                </P>
                <P id="pgw3dk" n={27}>
                    Just after midnight on September 7 &mdash; <em>hello humans</em>{" "}
                    (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:01" />) &mdash; he recorded what he thought would be his last transmission from Kentucky (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:23" />). He had
                    spent hours that night talking to an artificial intelligence about where he
                    was going (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="5:10" />), and what he did with what he learned was get
                    excited: solitude, rain, fog, very tall trees, mud everywhere, steep cliffs
                    down to the ocean (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:47" />). <em>It sounds magical. Oh, I forgot to
                    mention the winds</em> (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:11" />), winds strong enough to dictate how
                    and where you position an RV (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:16" />). <em>It excites the shit out of
                    me</em> (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:33" />). Bailey walked into the frame mid-transmission and
                    made the very small space smaller (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:56" />). He went straight to what
                    he would do inside it: build book nooks through the storms, intricate little
                    worlds being built inside while violent chaos ran outside (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="2:45" />);
                    hike anyway, despite the mud, despite the constant rain (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="3:07" />);
                    maybe finally get into tea, which he had tried once already, <em>it
                    didn&rsquo;t go so well</em> (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="3:27" />), because some challenges are
                    cyclical and he is comfortable with that (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="3:43" />). Then he named what
                    the six months had made: <em>I am not the same person anymore. I have truly
                    transformed myself, what I like to describe as crafting myself into a
                    weapon</em> (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="4:19" />). He had asked himself why weapon and not tool.
                    There are reasons. None of them are the traditional ones (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="4:49" />). He woke the next morning with fear. Not the paralyzing kind; the kind that
                    acknowledges what a man is about to do (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="1:37" />). The night&rsquo;s reading had shown
                    him the environment was greater than he had anticipated (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="1:57" />), and his sleep had
                    been processing it before he was awake to meet it (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="2:52" />). He sat with it until he
                    understood it, and then it was gone. It would come back. It ebbs and flows;
                    that is life (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="3:44" />). <em>I know that it will transform me. I cannot know how. I
                    cannot even know with certainty that I&rsquo;ll survive this. That is a fact.
                    That is why there&rsquo;s some fear. And it&rsquo;s never a reason to
                    stop</em> (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="4:01" />).
                </P>
                <P id="putvbz" n={28}>
                    He did not leave for another five days. He spent them at a campground on
                    Nolin River Lake and never went to see the lake; there was a lot to do
                    (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:34" />). On September 12, at exactly noon, which felt fitting somehow
                    (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:05" />), with the home ready and the Jeep hooked up, he recorded the
                    departure. The new teeth were in, comfortable, natural, no sore spots; his
                    dentist did a wonderful job (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:46" />). <em>I made closure with my
                    mother</em> (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:03" />). He had told her exactly what he was doing and why,
                    and the thing that had been keeping him there: her kidney disease is
                    advanced, she weighs eighty-seven pounds, and he had always thought he would
                    be there with her at the end (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:22" />). Leaving meant no turning back,
                    and he might never see her again (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:57" />). <em>And she told me to go.
                    She validated me</em> (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:04" />). Grief, he expected, would be his first
                    big challenge on the road; it is not possible to know how it will feel until
                    it happens, and he would face it (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:34" />). He took down the auxiliary
                    mirrors he had added six months earlier, when he was afraid of the rig and
                    thought he needed <em>mirrors to the mirrors</em> (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="3:15" />). The main
                    ones were enough, and he knew that now because he had the experience to know
                    it (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:58" />). <em>You saw a guy who was being overly cautious. What you
                    didn&rsquo;t know is that I trusted myself fully. I never doubted myself.
                    Not once. Not in any way that matters</em> (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="3:36" />).
                </P>
                <P id="psrkfs" n={29}>He pulled out alone.</P>
            </Part>

            <Part n="Two" title="THE CROSSING">
                <h3 className="mt-8 mb-1 font-bold text-gray-900">The last days in Kentucky<Hash id="hlhs8w" label="The last days in Kentucky" /></h3>
                <P id="paruhx" n={30}>
                    He had spent six months in Kentucky, his adopted home state (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:18" />), and he had not slept well for any of it (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="1:36" />). His bed sat on a platform built into the slide-out, which split the sleeping surface into two sections at different heights, because one had to pass over the other when the wall came in (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="2:56" />). He had back pain for the whole six months (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="0:16" />). The slide also took up the volume that would otherwise have held shelving and containers, so there was nowhere to put anything (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="0:48" />), and every retraction of the wall forced him to rearrange the space again (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="0:32" />). He spent those six months trying to correct it from the inside: bed toppers, new mattresses, foam board wedged under the low section to bring the surface closer to flat, and then the work of pulling all of it up and stowing it each time the slide came in (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="3:31" />).
                </P>
                <P id="pjit6b" n={31}>
                    The slide was breaking. He stopped compensating for it and brought it in permanently (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="9:05" />). The bed came back level, rebuilt on three stacked toppers (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="1:07" />), nearly a full-size bed and a little shorter than his legs, and more comfortable than anything he had slept on in those six months (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="1:26" />). The space above the retracted slide in the exterior bays took the bulky items that had been in the way the entire time (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="4:46" />), and he spent a morning organizing the bays around them (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="4:28" />). He refused the easy reading of the six months. He had not failed to get organized. The space had not been built for the way he organizes. “I had to adapt my environment to me (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="5:04" />).”
                </P>
                <P id="pzj9rc" n={32}>
                    He stated the case against the mechanism directly (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="0:01" />). A slide-out is sold as progress and is a regression (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="1:18" />), because it makes the two things that actually matter in a dwelling, a flat surface to sleep on and somewhere to put things, conditional on a machine that will eventually break. His was breaking (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="2:25" />). He noted that manufacturers had taken a niche product and made it near universal, so that a rig without one is increasingly hard to find (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="2:08" />). He named what it does friction (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="3:14" />), and friction a form of fragmentation: a system that requires the person to adapt to it instead of adapting to the person (<Moment ulid="01J7732N18G5J2E89R77NFYJ06" t="3:47" />).
                </P>
                <P id="po75hd" n={33}>
                    The rig was smaller with the slide held in (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:50" />), and he did not want the extra space back (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="9:21" />). He said too much space breeds things that are not conducive to a healthy life (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="9:41" />), and that the contracted layout matched his values, his efficiency, and the way he moved through his own home (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="10:27" />). With everything rearranged around the constraint, the space resonated as a home to him (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="2:42" />). On that basis he mounted a tablet as a fixed screen and allowed an occasional amenity back (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="2:10" />). He had not watched television or a movie or played a video game in six months (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="2:27" />), and he stated it would not become a focus the way it had in the life he left, which he said held no value (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="2:57" />).
                </P>
                <P id="pj1uhp" n={34}>
                    The six months had produced a different man, and he said so plainly. He did not believe he could have done this three months earlier, or one month earlier (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="4:09" />). He described the change as “crafting myself into a weapon (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="4:26" />),” and said he had considered the word tool and chosen weapon for reasons that are none of the traditional ones and are tied to the whole person he is (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="5:00" />). By that last weekend he could sit outside at a campsite with people close around him going about their business, and he marked his own ease in the middle of that as a measure of what had changed (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="0:19" />). A lake was a short walk away (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="0:36" />). He did not go and look at it, and said he might not, because his focus was elsewhere (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="0:53" />).
                </P>
                <P id="pvbdr4" n={35}>
                    He knew what he was driving toward in detail, because he spent hours in the small hours of Saturday morning learning it (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="5:17" />): rain, fog, tall trees, mud on every hike, steep cliffs down to the ocean, storms that run for days, and winds strong enough that where the rig is parked and what stands around it becomes a calculation (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="1:15" />). He said “it sounds magical (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:55" />).” He cut Great Basin National Park out of the route (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="5:34" />), because a quick stop would not be the attention he wanted to give the stargazing there and spring would be too cold, and he accepted that it would likely be a year before he went (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="6:07" />). He was going to Oregon and Washington, largely along the coast (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="6:25" />), in the most chaotic part of their year (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="0:36" />). He stated the reason as a principle he operates on: growth comes from placing yourself in an environment that forces it, and he sought that out rather than waited for it (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="8:05" />).
                </P>
                <P id="pwy9h7" n={36}>
                    He woke later that same morning with fear (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="1:25" />). He said it was not the paralyzing kind, and he named its source exactly. Until that night he had an idea of what he was doing, and now he had knowledge (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="1:42" />), and the environment was greater than he had anticipated (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="1:57" />). The weather would test him, his equipment and his rig (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="2:30" />), and he could not know the outcome with any certainty, including whether he would survive it (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="3:54" />). He stated that as fact (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="4:10" />). He did not route around the fear (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="3:01" />). He acknowledged it and went into it, on the position that an emotion is information and has to be sat with and explored (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="3:17" />), and he distinguished that from fragmentation, which is fear used as a place to stay. It was never a reason to stop. He was going to the Pacific Northwest for the winter and not to Florida (<Moment ulid="01J76KRY4GSWFARFZXHCPH3MYW" t="5:58" />).
                </P>
                <P id="p2omnn" n={37}>
                    What remained was practical. Dental work on Monday would clear him to leave the state (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="0:01" />), and he set his departure for Tuesday (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="11:42" />). He did not know his route, and he would take scenic ones, because they would build his experience driving and towing (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="0:16" />). His Garmin and his GoPro were going onto the exterior mount (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="0:32" />), since he would be moving constantly (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="0:50" />). The propane tank was full (<Moment ulid="01J794AZ6RJSM3YWNG4J2XHEY8" t="3:48" />). The insulating and fortifying the rig would need to hold up in coastal weather he left deliberately for the far side of the drive (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="7:32" />).
                </P>
                <P id="pzwlfv" n={38}>
                    He had no plan for after the Pacific Northwest (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="11:26" />). He did not expect to be the same person when he left it (<Moment ulid="01J75KATD8PXD1DRY9PXQD3AJN" t="11:09" />), and until he knew who that was, there was no direction to choose.
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Noon, hitched, no turning back<Hash id="h7joob" label="Noon, hitched, no turning back" /></h3>
                <P id="p6yl5j" n={39}>
                    He left at exactly noon (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:05" />). The rig was packed and the Jeep was hooked up behind it, and he said the hour felt fitting. The last of the work that had held him in place was finished, including the new teeth, which were in and comfortable and had caused no sore spots (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:39" />), and he credited his dentist for that (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="0:54" />). He stated the terms of the move without hedging them. Once he pulled out of that campground there was no turning back (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:44" />).
                </P>
                <P id="pzqm7s" n={40}>
                    He had closed the one thing that could have kept him. He told his mother exactly what he was doing and why, including why he had needed the three months away from her that came before it, and he told her what had been holding him in place (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:10" />): her kidney disease is far advanced, she weighs 87 pounds, and he had always expected to be there with her at the end (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="1:28" />). He told her that leaving meant he might never see her again (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:00" />). She told him to go. Leaving had been difficult until that conversation, and after it he said he was at peace with it and had no fear.
                </P>
                <P id="p24iam" n={41}>
                    He named grief as the first large thing the road was likely to put in front of him (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:16" />). He said he was prepared for it, that it is not possible to know in advance how it will actually land, and that he would face it when it came (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:34" />).
                </P>
                <P id="pdtqwt" n={42}>
                    Before he pulled out he took the auxiliary mirrors off the rig's side mirrors (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="2:52" />). He had bolted them on six months earlier, at the start, afraid to drive the vehicle at all and adding mirrors to the mirrors it already had (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="3:09" />). By now they obstructed the view in the main mirrors, and the main mirrors were enough, because he had the time and the experience behind the wheel to know he could do it. He did not treat the earlier caution as a mistake. It was the step that got him to the point where he could take them down (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="3:27" />).
                </P>
                <P id="p137ib" n={43}>
                    He left alone (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="5:33" />), moving west, on a pattern of being somewhere new every two days, with the Pacific Northwest as the destination (<Moment ulid="01J7KRK15RGX02GAFPAQ57JBGA" t="5:49" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">The first days on the road alone<Hash id="h2laxf" label="The first days on the road alone" /></h3>
                <P id="po93eu" n={44}>
                    He was camped in bear country, with signs posted through the area and straps over the dumpster lids (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="0:15" />), and he had worked those conditions into his awareness before he lay down (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="0:32" />). Near sleep at one in the morning, the cat went into the cab and made noise, and he came upright on the bed certain it was the bear (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="0:48" />). His first move was to rock the RV and make noise back (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="1:05" />). He located his bear spray from memory. He knew he had to find where the bear was and assess the situation. He described a surge of adrenaline (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="1:21" />), and fear that was not paralyzing (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="1:37" />). There was no bear. The instant gave him a fact about himself he had not had before: he had been ready “to do battle” with it (<Moment ulid="01J7WSHPQG28QH3PWPNTNESJ40" t="1:54" />). He stated that if he reacted that way to a bear he was prepared for any kind of situation, and that he had not known that about himself until that moment.
                </P>
                <P id="px9iru" n={45}>
                    He set the terms of the thing he was putting his life into. He stated that he does not see himself as a content creator or a YouTuber and never has (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="0:00" />), and that YouTube is a place to host video and nothing more to him, chosen because it is easy (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="0:16" />). He had asked the viewers he already had to unsubscribe, and none of them did (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="0:31" />). Strangers finding him at random were fine (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="0:46" />). The request had been aimed at the people who had been watching for as long as six months, because he had grown and had become misaligned with them (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="1:04" />). He said they had decided to ignore a boundary he tried to set, that this was their right, and that the dissonance of watching a man who has told them he does not want them watching is theirs to carry (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="1:21" />). He changed nothing about what he was doing.
                </P>
                <P id="pt57pg" n={46}>
                    The people watching him were strangers who had found him at random, which made them a sample rather than a following, and he read the sample. What came back was consistent enough to measure. He had mentioned once, in passing, that he did not know how much coffee to put in his coffee maker, and several people answered the coffee question while others assessed his entire situation, none of which he had asked for and all of which he had already considered. He was not requesting help. He was showing his thinking as it happened. He had held for most of his life that one person who writes usually stands for several who feel the same and say nothing, so the responses he could read were an index of a larger number he could not. That same week he found the identical pattern running on a stranger's channel, a twenty-five-year-old truck driver working through his days out loud and being told by older drivers that he complained too much and was a rookie, which settled the question of whether the pattern was about him. It was not. It was how people had been taught to relate to a person in a frame, as a problem to solve, a performance to grade, or a situation to watch. He read people accurately because accuracy had been necessary before it was ever useful, and he had spent the preceding months turning the same reading on his own childhood, his parents, and the society he came out of, in the open, where anyone could follow it. He had seen how people consume each other for years before he had a word for it. When he found the word, parasocial relationship, the first thing he did was hand it to the people it described, because it explained things he had not recognized in himself, and because he considered it unethical for a man in his position to know the mechanism and work it quietly. He told them he could manipulate their emotions comprehensively if he chose to, and that he was not going to. He told them the responses he got were usually rude and always missed the mark, and he did not soften it. When he removed the veil, the interactions changed, and what he took from the change was that people wanted a facade, which he stated as an observation and not a judgment, since it was simply not how he worked. A few were different. Two people had encouraged him without overstepping, and others took the nuance in what he said and applied it to their own lives, and he valued those responses and said so. Even those people never seemed to understand what he was doing. The boundaries followed from the reading rather than from any difficulty in him, and so did the closed comments, because the comment field was the channel through which the misreading arrived, and closing it removed the misreading without removing anyone.
                </P>
                <P id="pqomj6" n={47}>
                    He explained why he says you (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="0:15" />). When he names a behavior that runs through the society, he addresses it to the person listening and refuses to soften it (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="1:01" />), because a sentence about lots of people lets every listener step out of the room (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="1:22" />). He wanted each one to stop and check whether he is contributing to the problem under discussion, which that day was reckless driving (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="0:32" />), and to come back with an answer either way (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="1:38" />). He stated that his ethics are inseparable from his cognition, bound to his thoughts, his actions and his emotions (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="2:46" />), and that he believes every person is capable of operating whole in that way, though it would require a radical change in how a person identifies with himself (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="3:17" />). He confronts himself the same way continuously, and said it has never been easy and is worthwhile and necessary (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="4:10" />). “I am confronting you directly (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="3:53" />).”
                </P>
                <P id="p2akla" n={48}>
                    His dealings with people he did not know ran on rules he could state. New windshield wipers took him hours because he was afraid of breaking the small parts (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="5:00" />), and he ended it by finding another camper, who showed him that the old fitting comes off and a different adapter goes on (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="5:14" />). The exchange was acceptable to him because he asked. A person who asks for help is open to it, a person who has not asked wants to learn it his own way, and handing him advice anyway is rude (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="5:30" />). He kept rubber ducks to leave on other drivers' vehicles (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="2:28" />), and in a Walmart parking lot he stopped at one with small ducks set out near its steering wheel and left a unique one on it (<Moment ulid="01J7VH95AR3P3WG9S4JWBQX7D9" t="2:45" />).
                </P>
                <P id="pm92y0" n={49}>
                    Sitting above Truman Lake in the last days before he crossed into Kansas (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="6:03" />), he watched a boat run across the water at speed and followed its wake out to a man who had been fishing in silence below him (<Moment ulid="01J840Q8D8ED7B6DPQEY6VDM91" t="0:01" />). He said he was not saying the boater should not be out there and was not saying he was doing anything wrong (<Moment ulid="01J840Q8D8ED7B6DPQEY6VDM91" t="0:16" />). He stated what he would do in the boater's place: not travel at that speed, leave as little of a footprint as possible, and respect the man fishing, because he was in a relationship with that man at that moment whether either of them named it (<Moment ulid="01J840Q8D8ED7B6DPQEY6VDM91" t="0:32" />). Everything is interconnected. His own actions reached the fisherman, the boat reached all three of them, and the peace they had was disturbed (<Moment ulid="01J840Q8D8ED7B6DPQEY6VDM91" t="0:46" />).
                </P>
                <P id="phurfx" n={50}>
                    He walked the campground at Harry S. Truman State Park before he left it, noting the dump stations (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="7:45" />), the water spigots, which loops had hookups and which did not (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="8:29" />), and the shower houses, which he rated badly and intended to use anyway (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="8:14" />). He noted that he no longer got lost finding his own site, which he had done at his first campground (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="9:52" />), and named that tracking of his own operation as how he runs (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="10:07" />). He worked out why clouds of small insects gathered near the rig: they were in the direct light of the setting sun (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="13:04" />), and the rig had stood in the sun all day and was giving off heat (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="13:20" />). A spider had built a web on the RV, and since he was leaving in the morning he let it keep the night (<Moment ulid="01J81AJX98XPPV940HFFFE2R3Y" t="6:35" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Kansas, and the rig under load<Hash id="h7c93g" label="Kansas, and the rig under load" /></h3>
                <P id="pw4g19" n={51}>
                    He crossed out of Missouri into Kansas towing the Jeep behind the RV (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="0:53" />), holding fifty-five on two-lane highway (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="4:17" />). Cars came around him on blind corners one after another, and more than once one of them cut back in within inches of a car in the oncoming lane (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="0:37" />). He said the cause was phones and what they do to a person's attention (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="1:10" />), and that the drivers were risking their own lives and other people's to gain two or three minutes on a road where he could still see every one of them ahead of him (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="1:28" />). The land changed at the state line and he catalogued it without knowing the names of most of what he was looking at: fields of wheat or corn, grain silos, a building in Neosho County with something metal and star-shaped on the roof (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="2:15" />), and a tree a few miles back that was shaped like a giant bonsai and fractal all the way through, which he told himself he would go find out about (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="3:06" />). The hills were taking his gas mileage and he wanted to know what the mountains would do (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="3:40" />). Somewhere in the open stretch he said why he was doing any of it (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="3:59" />). He did not want to be stuck in a house (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="4:36" />), because a housed life settles every relationship a person has into static patterns that are not conducive to a good life (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="5:06" />), and he was explicit that he did not mean only the relationships with people (<Moment ulid="01J83M3JE8GFM8WNH1045DKA44" t="4:50" />).
                </P>
                <P id="p2hb7j" n={52}>
                    The next day ran near a hundred degrees and he spent it inside finishing the build (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="0:01" />). The dehumidifier went in the middle of the coach (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="0:16" />), because the coast would be raining all winter (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="0:32" />). The solar was tied down, the desk equipment was velcroed, and the monitor was taped in place after he broke a monitor once already (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="1:37" />). Everything on the desk ran off one plug into a battery-backed supply (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="1:04" />), so that hooking up meant a single connection: shore power at a campground, or the solar panel when he was parked in the forest (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="1:21" />). He named that plug as the weak link in the system himself (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="2:58" />). He said he already knew that winter cloud on the coast would cut what the solar could make, and that finding out exactly what he could generate and what he could run on it was the point of going (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="3:16" />). “I am not approaching this like an RV lifer would (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="3:31" />).”
                </P>
                <P id="pswcaj" n={53}>
                    The cab was finished too: Bailey's perch and litter box (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="3:46" />), the giraffe and elephant statue his mother gave him fixed to the dash with command strips (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="4:00" />), the RV GPS, the dash cam, the rear camera, and the tire monitor and the Jeep brake monitor all running off a twelve volt hub (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="5:23" />). He had taped the side mirror until it stopped vibrating and added a concave mirror beside it (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="5:37" />), and said he could finally see everything around him (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="5:51" />). Off the map on the wall he read the rest of the route (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="9:05" />): six hundred miles behind him, eighteen hundred ahead (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="9:36" />), Nebraska, then Wyoming, probably Idaho, then Oregon, and Highway 101 up the Oregon and Washington coast with the RV parked inland in the forest and the Jeep for getting to things (<Moment ulid="01J86DNJBGYPN7AAEC0RRKD9WW" t="8:50" />). He laid out the next stage of the build as well, foam board and a reflective layer on the walls from a hardware store near the following campground (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="7:51" />), with paint over the insulation and art journaling on the walls through the coastal storms (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="9:09" />), using supplies he had bought years before for work he never started (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="8:53" />).
                </P>
                <P id="p59nu1" n={54}>
                    People had told him Kansas would be flat and desolate (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="3:48" />). He drove about ten miles to the nearest groceries, the hardware store being too far to add (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="0:49" />), and spent the drive on the land (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="1:05" />). There were hills, prairie, creeks, rock formations lit by the sun, a grain elevator (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="1:38" />), wind turbines far off, cattle with their own pond and shade trees (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="4:24" />), a farmhouse set well back from the road (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="1:53" />), small settlements visible across a valley (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="3:15" />), and rain coming down in the distance under the clouds (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="7:19" />). He said he did not see what he had been told he would see, and that how few people lived there was an added bonus (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="4:07" />). He passed a sign saying each Kansas farmer feeds fifty people and said it made sense (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="4:55" />). He looked at a house built on top of a cliff, said he had once wanted exactly that (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="5:11" />), and said he now understood that the view would become background (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="5:28" />). He asked why trees grow in one place and not the next, and said those were important questions (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="6:17" />). Held up behind a slow RV he said he understood the pace and called the wait “a cognitive reset (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="7:53" />).” At the lake he looked at the boats moored together, said it was almost a community (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="8:24" />), that it was not for him any more than the RV community was (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="8:41" />), and that there is room for all of us (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="8:57" />). He missed the same turn he had missed on the way out, and said he had been glad of it the first time because it showed him more ground (<Moment ulid="01J88Y0WJRHM92NW0TVPCHWX09" t="10:21" />).
                </P>
                <P id="p0z9as" n={55}>
                    He had four rods implanted in his mouth and a prosthetic that clipped over them (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="0:17" />). He took it out and went on talking without it, in front of everyone watching (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="0:00" />). For six months before he had it he had appeared without teeth (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="1:03" />), and he had said so in the first thing he ever put out, because it was obvious and he wanted it dealt with (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="6:17" />). He said he was not ashamed of it then and was not now, and that his self worth was not defined by it (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="1:19" />). He had said before that Mountain Dew destroyed his teeth, and he corrected his own account: that was true, and it was not the whole truth, because he had also not taken care of them (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="1:35" />). He had been working for decades to stop drinking soda and had not stopped (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="1:49" />). He said he was older now and still making mistakes and would go on making them his whole life (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="4:17" />).
                </P>
                <P id="ppskh7" n={56}>
                    He had turned the comments off (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="5:00" />). He explained it with an analogy he had given before: people kept painting a picture of who he was that was not who he was, and “I am not mad at the painter, I'm mad at the painting (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="4:46" />).” He said he respected himself enough not to tolerate it (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="4:31" />). He assumed a lot of people had judged him quickly and moved on (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="5:18" />), and he connected that to his channel growing more slowly than others doing the same kind of work (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="5:32" />). To the people who had stayed and later caught themselves judging him (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="5:47" />), he said he did not judge them for it, because it is human (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="6:03" />). He said one of his motivations had been whether it moved anyone toward judging others and themselves less (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="6:45" />). He told them not to judge themselves (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="9:23" />), and said that if he had judged himself they would have missed seven months of his life (<Moment ulid="01J8BH6V6GJ6ART855S43T7MVX" t="9:39" />).
                </P>
                <P id="pqlgvy" n={57}>
                    Two nights later he named the method underneath all of it. Getting his visibility right had taken him through mirrors that did not work, the taped mirror that stopped vibrating, the concave mirror, and the dash cam (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="0:16" />), because he had to be safe for everyone else on the road and not only for himself (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="0:48" />). Emptying the tanks the first time took him a month, and he had worked the whole of it out in advance (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="3:58" />): whether he could get the RV in, whether the space was tight, what the procedure was, what could go wrong, what would happen if people were waiting on him (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="4:14" />). His father texted him where the dump stations were (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="4:48" />). He said that because he did it that way, emptying the tanks now carries satisfaction rather than registering as a chore (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="5:19" />), and that people waiting on him since has not put him under any stress at all (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="4:33" />). Getting propane took him six months (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="1:22" />). When he mentioned that he needed it, people told him to go to Tractor Supply (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="2:25" />). He said the locations had never been the problem. The questions were who fills the tank and whether he does it himself (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="6:25" />), how he gets a towed Jeep into and out of a lot that was not built for RVs (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="3:11" />), and what happens if he overfills a tank and whether it would explode (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="8:08" />), because he knew nothing about propane and intended to (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="8:25" />). He said that because his emotions, his ethics, his thoughts and his actions are tied together (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="2:55" />), he will not carry out a task with parts of himself switched off (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="3:28" />), and that this is the difference between integration and fragmentation (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="3:44" />). He said being told to watch a YouTube video was the same kind of answer (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="7:17" />), one person's single perspective with all the layers left out (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="7:34" />), and that he does not outsource his thinking to it (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="7:51" />). He said he scouts the Tractor Supply every time he moves to a new campground (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="8:57" />). He said he would respect and honor other people's processes (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="9:29" />), and that he had never gotten that in return (<Moment ulid="01J8H8VWM89QEZNZB4KDR41RT3" t="9:45" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Chadron, and what he took back<Hash id="hv2q22" label="Chadron, and what he took back" /></h3>
                <P id="ptfmwi" n={58}>
                    He woke in Kansas at seven with the sun just starting to come up (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="1:05" />), and laid out the day in front of him: six hours of driving at least, probably eight once truck stops and any break he needed were counted (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="1:20" />), and a shower before he could leave (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="1:36" />). Northwestern Nebraska was at the far end of it, a day and a half there and then out of the state (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="2:51" />). He had tried for bed around eight the night before and the cat had cried and demanded until he gave it up (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="1:53" />), so he had gone to sleep somewhere between midnight and two, five or six hours, which he said is enough for him (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="2:30" />). He said he was going to motivate himself, then stopped and corrected the phrase, because it would be read as force applied against himself and that is not what happens (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="3:08" />). It is acknowledgment (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="3:26" />). The day is going to start soon, it is going to be long, and he is ready for it and will deal with it the way he does, which he said is like a river (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="3:41" />). Sitting there almost mindfully was not a technique he was applying to himself. He said it is his natural state (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="3:56" />). He got to Chadron State Park late that night.
                </P>
                <P id="pu39i8" n={59}>
                    The cartilage piercings he had gotten in Kentucky were still sore weeks later (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="0:17" />), sore enough that touching the ear registered as more than touch (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="0:01" />). He wanted hoops in them, and he had set the condition for putting them in (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="0:50" />). Not a date. The day he could touch the piercing and feel nothing (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="0:33" />). That morning his mind went where he said it goes fairly regularly, to sailors and pirates and the earrings they wore (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="4:12" />). The reasons were layered: the old saying that the gold would pay for a man's funeral if he died at sea or in a foreign land (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="4:42" />), superstition about protection on dangerous water, and a ferryman who took them across the river Styx, which he said he had learned only that day (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="4:59" />). What he said he returns for is the structure underneath the reasons. They knew the thing mattered, and because it mattered they could not simply own it. “They had to embody it. They couldn't just possess it (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="4:27" />).” They made it part of the body, where it could not be lost, instead of carrying it beside them the way most people carry what they value (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="6:08" />). He said they lived dangerous lives and found a way to integrate that fear and provide for the future in one act (<Moment ulid="01J8J43R1G8WW3CRBV0WS16W7Y" t="5:19" />).
                </P>
                <P id="pqqaf0" n={60}>
                    He was up at six the next morning doing the piercing maintenance (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="0:01" />), and he put the day's list together from inside the rig: groceries, since he had cleaned out the refrigerator and fixed the ice problem (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="0:49" />), the part that would hold his door mats down (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="1:38" />), and a propane tank. The park was the first state park in Nebraska and was called a modern campground (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="10:42" />), and he said he had arrived too late and too tired to see any of it (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="11:14" />). He drove out through it and north on US 385, the Gold Rush Byway (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="12:01" />), with the navigation cutting through his sentences, which he left on because he did not have the attention span to silence it and still make his turns (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="12:17" />). He was in the pine country of northwest Nebraska and said the landscape was remarkable to him (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="13:23" />). He filmed a rock formation that flattened out on his phone and stood tall in life, and said he expected it held historical significance to the peoples of the area (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="12:51" />). The speed limits ran sixty five and felt fast to him (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="13:05" />).
                </P>
                <P id="p1awuk" n={61}>
                    Going back over what he had said with an AI the day before had shown him that a passage about abandoned houses would have been misread (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="13:46" />). He wanted it clear. He does not look at an abandoned place and see disintegration, or death, or absence, or loss (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="14:02" />). When he had pointed at one and said somebody built a life here, he was thinking about that life: what it was like, what the family was like, what the work was, what the community was, in a place that remote (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="15:08" />). The building is still standing and still gives the place character (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="14:20" />), and people who pass it register it (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="14:37" />). Nothing is ever truly lost and everything is interconnected. He said this is not a spiritual concept and that he never goes there (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="14:52" />). There is meaning in everything, and what he sees is not a tragic story (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="15:22" />).
                </P>
                <P id="pc7ctv" n={62}>
                    Chadron had a Walmart, a hardware store and an auto parts store, which he said would cover most of what he needed (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="0:33" />). The Walmart lot was practically empty at eight in the morning (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="15:38" />). He worked the three stores in sequence and came back with a twenty pound propane tank riding in the back, an adapter and a length of hose (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="15:55" />), a Mr. Buddy heater and a propane grill (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="16:13" />). He had set out that morning for a five pound tank small enough to live in a crate in the Jeep (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="1:54" />). He had already worked out that the tank could stay outside the RV with the line run in through the port he uses for the satellite dish cable (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="16:29" />). Fire bans across the Pacific Northwest would likely put the charcoal grill out of use, and one tank would run either the grill or the heater (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="2:27" />). He said he did not know what the future held, that he needed backup options and alternatives (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="3:11" />), and that he would be out there at least six months, October through March or April (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="17:48" />). The one thing he could not find was insulation for the ceiling and the floors (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="7:20" />). He had looked at Cheyenne on the map the day before and found it smaller than he expected (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="7:38" />), so he knew supply would be thin the whole way, and said the worst case was a trip into Portland or Seattle (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="8:07" />). He liked the town (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="17:01" />). He said people there were friendly and down to earth and willing to help and nonjudgmental, except for one man in the store who saw his earring and whose look was unmistakable to him (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="17:19" />).
                </P>
                <P id="p5er6h" n={63}>
                    Months earlier he had set a Mr. Buddy heater and a propane grill beside a dumpster and someone had taken them within minutes (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="3:40" />). He said he was happy somebody took them, that he does not need to sell things like that or get something out of them, and that he sees them as resources that can be distributed (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="3:57" />). He had let them go because he was constrained for space at the time and was struggling to make a system in the rig that worked (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="4:30" />). The two items were bulky and had no place he could put them, they were moved around constantly, and he named what that produced as tension of an unhelpful kind (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="4:46" />). He let them go without any real resistance from himself (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="5:03" />). Five or six months later he needed them again, and what had changed was that he could now integrate them (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="5:23" />). He was keeping the slide in, which had brought what lived in the exterior storage bays inside and left the bays free (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="2:56" />), and the tank and the heater and the grill were not going to live inside (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="2:42" />).
                </P>
                <P id="pnpvis" n={64}>
                    He reached for the word for what he had been doing over those months and refused the ones available. Not downsizing. Not minimalism. He said he is not part of those trends, that it is not how he works or how he thinks, and that he is not fragmented in that way (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="5:39" />). “Even minimalism is a kind of fragmentation” seen from an integrated perspective (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="5:58" />). What he was building was an integrated system that works for him, which is not about having fewer things but about having exactly the right ones, so that the whole of it streamlines his life (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="6:13" />).
                </P>
                <P id="pdsgva" n={65}>
                    The rest of the day went into the rig. He glued the leaking hose on the air compressor (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="18:04" />), read the instruction to clamp or tape the parts while the adhesive cured for twenty four hours (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="18:33" />), and said he had never done anything like it before and found it easy (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="18:49" />). The water hose had to wait, because there was no water at the site to run through it and he did not know which side was leaking (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="19:04" />). He was explicit that when he says things are breaking, he means they are fixable (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="12:34" />). He had bought what he needed for the door mats that no longer adhered, for the step that came loose every time he put weight on it, and for the piece that holds the glass lid together, which had broken on the last trip (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="20:57" />). He made coffee for the first time in weeks (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="19:19" />), with the blend he had first had at a cabin on the Natural Bridge trip and had finally tracked down (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="19:35" />). He opened the cabinets and drawers he had been avoiding, and read the fact that he never went into one of them as evidence that nothing in it was needed (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="20:25" />). He had four of most things and was cutting to two, and said two might still be more than he needs (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="20:07" />). The induction cooktop and the bean grinder were going (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="20:41" />). He got his first look at the batteries, called them good and not the best (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="21:31" />), and had learned that day that he could charge them from shore power alongside the solar, both at once (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="21:46" />), which gave the campground stop he needed every couple of weeks for tanks and laundry a third purpose, since it was going to be overcast where he was going (<Moment ulid="01J8NB2118QT8DQK460FZ3R837" t="22:05" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">The state he would have driven around<Hash id="has1ct" label="The state he would have driven around" /></h3>
                <P id="psg2wx" n={66}>
                    Wyoming was the one state on his route he could not think about without thinking about a murder (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="1:08" />). He was twenty-one when Matthew Shepard was killed in 1998, the same age Shepard was (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="1:43" />). He said they looked a lot alike, that he saw himself in him, and that he cried over it many times (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="5:45" />). He called it the worst hate crime of his lifetime and said it shaped him for decades (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="1:27" />). His mind works by association, everything connected to everything (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="2:25" />), and the state and the killing are bound together in it permanently; hearing the word Laramie produces the name (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="2:56" />). He planned his route west without consciously registering that it ran through Wyoming, and said the association was in the back of his mind the whole time anyway (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="2:40" />). He told anyone who did not know who Shepard was to look him up (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="5:43" />).
                </P>
                <P id="pb9i5j" n={67}>
                    What cost him was not the two men who did it (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="3:28" />). He said he lost his faith in humanity that day because of the aftermath (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="3:44" />): the justification, the homophobia, the hatred, the fear (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="4:00" />). He described the core of all of it as the inability to let other people exist in the world when they are different from you (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="4:15" />). None of it was new to him. He said he already knew how much people hated him, because he pays attention and always has, and that it landed deeply anyway (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="6:01" />). He said a whole state cannot be held responsible for one act and that holding it responsible was not what he was doing (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="2:07" />), and then said what he was doing instead, which was naming the society that helps create the hatred (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="6:21" />). “It didn't happen in a vacuum (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="6:40" />).”
                </P>
                <P id="pvhaa5" n={68}>
                    He woke before dawn in Nebraska with the state line ahead of him and said the day would be heavy and hard (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="1:10" />), and that he had already been crying (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="6:03" />). He said he felt he was avoiding it. Later that morning he stated the position outright: if he could bypass Wyoming he would, go around it or over it, anything not to step into it, and that was how significant the place was to him (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="12:50" />). Then he said what the fact of driving into it told him about himself. He does not avoid things (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="13:06" />). So he would drive through and navigate whatever came up (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="13:27" />). On the road the next morning, still short of the line, he said it again and asked that it be noticed, that he was not avoiding this place even though it was bringing up what it brought up (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="5:28" />).
                </P>
                <P id="pk3a2u" n={69}>
                    He said plainly that he is gay (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="4:49" />). He said he does not talk about it often, that it is one part of himself and not the part he considers most important, and that other people are what turn it into the whole of him (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="15:06" />). He named the mechanism for that, and the word he used was fragmentation, inflicted from outside (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="12:43" />). He said that when he was younger he had to separate that part of himself because other people saw it as bad, and that coming out becomes central to a person's identity only because they are finally acknowledging something they were made to deny (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="12:26" />). He said he is not fragmented anymore (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="12:58" />).
                </P>
                <P id="p77xhj" n={70}>
                    He described what growing up under that field did (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="11:36" />). He cried himself to sleep every night praying that God would make him straight (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="11:52" />). He hated himself for years, and he sourced that to what he watched society do, not to anything in himself (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="12:08" />). He said he did not deserve it and that nobody does (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="4:34" />). He said the issue is not over and named where it runs now: which bathroom a person uses, who reads to children at a library (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="13:13" />). He said the judgment is superficial, comes from nowhere (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="13:31" />), and causes enormous damage to people who never earned it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="13:48" />).
                </P>
                <P id="pgmrc2" n={71}>
                    Then he addressed the people who built that world, the older generations in particular (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="5:15" />). He said there was a great deal he was not saying because it would not be understood, and said the rest of it anyway. He told them he knew they were part of the problem (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="13:52" />), that they contributed to the atmosphere that shaped his life and made him hate himself (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="14:09" />). He told them the communities and the parades they object to exist only because they force people to live in opposition (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="2:11" />), because the wider world will not simply accept them (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="2:26" />). He told them they took something intimate and personal and fractured it, because they fracture everything (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="15:44" />). “I hate you because you made me hate me (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="15:23" />).” He said he does not live in that space and does not want to be like them (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="16:04" />), that their reality is antithetical to who he is at his core, that they have tried to take that from him all his life, and that he has rejected it (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="16:40" />). “You are the problem, not me and not people like me (<Moment ulid="01J8Q5R7JGK3KM3B62416VXB40" t="16:59" />).”
                </P>
                <P id="pknzc3" n={72}>
                    He said people always try to minimize it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="9:48" />), and that the memory is one a place would rather let fade into history than confront. He named an article written years afterward that recast the killing as a drug deal gone wrong (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="8:25" />), and rejected it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="8:44" />). Even if it were true, which he does not think it is, what happened was evil (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="9:17" />), and the article did not touch what it did to people like him, because it was a cultural moment (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="9:33" />). He told the people who center his sexuality as though it were the core of his being, and who other him instead of looking at him as a human being (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="10:40" />), that they are responsible for Shepard's death and for the suffering in his own life (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="10:58" />). They call people like him sinners (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="14:04" />). He told them the sin is what happens in their own minds (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="14:20" />), and that they need to sit with it. “You need to sit with your sin (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="10:20" />).”
                </P>
                <P id="pexzsl" n={73}>
                    He crossed into Wyoming under a sign he called understated (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="7:06" />). He looked at the fence posts along the road and said that a fence post was where Shepard was tied (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="7:56" />). He also said, marking it as something he could not know for certain, that Shepard grew up in that state and probably loved it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="7:38" />), the landscapes and all of it, the way people love where they are from. Before crossing he had said the association would not stop him from going and that he would try to make peace with the place, because that was all he could do (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="6:16" />). Miles into it he said he liked it there (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="25:47" />), that it was beautiful and expansive, and that Shepard was the only thing he had ever had to relate Wyoming to (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="26:02" />), which was on him, and which he could have fixed by learning more about the place (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="26:16" />). He stopped for fuel for the first time in Wyoming that day, and the first man he met in the state was standing at the next pump (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="14:50" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">What Wyoming gave back<Hash id="haqn6k" label="What Wyoming gave back" /></h3>
                <P id="pu8zge" n={74}>
                    Driving west across Wyoming he passed a town whose sign gave its population as six (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="20:40" />). He said the six lives were worth honoring, that nothing else needed to be known about them beyond the fact that six humans lived there (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="21:23" />), and that if those six could be honored there was no reason everyone could not be (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="21:00" />). Diversity mattered, he said, and was necessary for life. Later, with the country emptying out around him, he refused the usual phrase for it. He would not call the place nowhere (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="23:15" />). He honored the people who lived out there and had made that life work for generations (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="23:32" />), and he said the land was “somewhere to someone, including myself.” (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="23:51" />)
                </P>
                <P id="plmmiq" n={75}>
                    The park he was driving to sat at the end of a bad approach. His Garmin and Google Maps both routed him onto a private gravel road with no park signage (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="32:32" />), and he turned around and found the real entrance five miles further on (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="33:05" />). Inside, the park ran for miles, with dozens of campgrounds spread across it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="34:04" />), a dam to cross and cattle guards after that (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="38:50" />). Open-range cattle were standing in the road on the last stretch and he drove through them at under a mile an hour (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="45:09" />). The lake the park is built around had been drawn down and he could see it was nearly gone (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="31:22" />). His site was unlevel (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="46:48" />), the interior read 88 degrees when he stopped (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="46:16" />), and he left the Jeep attached rather than unhook it (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="46:31" />).
                </P>
                <P id="pcptym" n={76}>
                    The next morning he walked the campground to find out what was in it: restrooms, water, dumpsters, whether any of the buildings was a shower house (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="0:00" />). He read the map and the signage, checked each restroom, found no showers (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="2:46" />), and stopped at a lost-cat flyer still posted from July (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="6:20" />). Then the ground went soft at the edge of the campground and he walked out onto the floor of the reservoir (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="7:46" />), on lakebed the water had withdrawn from (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="8:31" />). Standing on it was a fish built out of sand (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="11:02" />), about his own size (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="11:41" />), partly graffitied (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="11:23" />). He said he could not imagine the skill it took, and wondered aloud how long it had taken and whether a child or an adult had made it (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="12:06" />). He registered the stillness, his own footprints behind him (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="10:46" />), the sun coming up (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="12:31" />). He said he had not planned to walk toward the peninsula and that his body was taking him there (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="13:57" />), and he went, and stayed to take it in (<Moment ulid="01J8T0G4C8ZZMEA9WT6R35366H" t="18:26" />).
                </P>
                <P id="pptt8j" n={77}>
                    That fuel stop, his first in Wyoming (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="15:08" />), produced something he did not finish understanding for another three days, with the state behind him by then. A truck driver had taken his pump by accident and found it funny rather than an offense (<Moment ulid="01J8REV7N0Q440VE7PFYG10DM7" t="14:50" />), and that set the tone for the conversation that followed (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="0:33" />). The man said something to him, and he felt something he could not explain at the time (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="0:49" />), and he stepped out of the exchange and went to photograph a roadside sign (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="1:04" />). He kept returning to it, and worked it through with AI until it resolved into a word (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="1:42" />). The man was unguarded (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="0:00" />). He had grown into someone who wore no armor of any kind (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="0:18" />). He had been guarded his whole life, he said, and the man had seen it in that moment and had not recoiled, and had met him with “pure humanity.” (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="1:23" />) He had long held that vulnerability was his superpower (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="2:02" />), and he placed the man further along the same line (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="2:15" />), unguarded to the point where it was a resting state rather than an instrument (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="3:51" />). He described him exactly: a truck driver who worked a farm with his family (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="3:02" />), a man other people would read a mindset onto, who would know he was read that way and had not let that knowledge make him guarded (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="3:34" />). He called the man a touchstone and a symbol (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="2:30" />). He said he had had nothing but bad memories of Wyoming, and that the man had given him “a different narrative, a different lens” for the state (<Moment ulid="01J90JGP0038HDF03MC710KSDE" t="2:46" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Untethered at the side of the road<Hash id="hl4kyr" label="Untethered at the side of the road" /></h3>
                <P id="pedpfq" n={78}>
                    He was awake at half past four in a Wyoming campground with ten hours of driving in front of him (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="0:00" />), the Jeep already hitched behind the motorhome and the cat on the bed (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="4:02" />). He had made the choice himself to put the long drives at the end of the journey (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="3:00" />), and he had spent weeks getting ready for them (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="2:44" />). The slide-out had failed the day before (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="2:12" />), so it went west packed with pipe insulation and taped shut (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="2:27" />). He drove at 55 on a highway posted at 80, because above that the steering wheel shook (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="7:38" />). His fuel math was wrong, with the next station 299 miles out against a range of 264 (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="9:30" />), so he adapted and looked for fuel along the road (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="9:46" />). He was two days without a shower and out of clean clothes (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="5:11" />), there was no shower house at the campground (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="4:55" />), and he weighed using the outdoor shower on the side of the rig (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="5:28" />).
                </P>
                <P id="pknjyo" n={79}>
                    The landscape did nothing for him and he said it repeatedly (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="8:25" />). Sage, red rock, bare ranges, cattle with no visible home (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="11:21" />), mountains he described as rock going into the sky with nothing growing on them (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="13:34" />). He had hiked all over Arizona in the Boy Scouts as a boy and had not liked the desert then either (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="11:04" />). He did not turn that into a verdict on the country (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="10:46" />). He said other people like this kind of place and it is simply not for him (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="10:28" />), and that what he needed was trees and green (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="8:40" />).
                </P>
                <P id="p8jm71" n={80}>
                    Four hours in, with six still to run (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="16:33" />), he pulled off at Split Rock to stretch and to let the cat eat (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="15:12" />). Parked at the side of the road (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="19:37" />), everything in the rig worked: battery, solar, propane running the refrigerator (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="22:14" />), the toilet, a place to cook, a bed to rest on (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="23:24" />). He stated there that he had untethered himself from the systems of society (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="23:10" />), and that what stood in their place was a single working unit, all of it running with nothing hooked to it. There was no sign saying he could not be there (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="19:53" />). For seven months he had gone from one campground to the next, and he said that might end that day (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="23:45" />). He then named the work that followed from it: a way to monitor his batteries (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="24:05" />), better batteries at some point (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="24:20" />), and daisy-chaining his power so the fans could run off the solar (<Moment ulid="01J8X4TSK0F0R1GCV5748XSE84" t="21:04" />).
                </P>
                <P id="p33s1n" n={81}>
                    The next night he stopped at a pull-off with no name and stood outside in the dark (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="0:01" />). The sky was open in every direction and the silence was complete (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="0:24" />), broken by a car on the road every so often and by the cat objecting from inside (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="0:58" />). The lights of small towns sat far off on the horizon (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="1:32" />). He tracked an orange light for a while to work out whether it was moving toward him (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="4:20" />), and decided it was a sign (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="5:26" />). He said he was a little worried about predators, standing out there in the middle of nowhere at night (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="6:43" />).
                </P>
                <P id="plaaz1" n={82}>
                    The site was commemorated to the people who crossed west in wagons (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="3:08" />), and he said what he was looking at was what they would have seen: the night sky and that silence (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="3:26" />). He called them brave for traveling the path without knowing what was at the end of it (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="4:05" />). Standing there, he stated the value of everything behind him. “These past seven months were so worth it for this moment.” (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="7:40" />) He had eight hundred miles left and no direct route to run them (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="8:46" />): Idaho in the morning (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="8:28" />), a state park, another night at the side of the road (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="9:02" />), then a state park in Oregon well inland from the coast (<Moment ulid="01J8XT857G2D7M88YJ6B51BGVH" t="9:18" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Two days booked and no plan<Hash id="hiwhio" label="Two days booked and no plan" /></h3>
                <P id="pgdape" n={83}>
                    He was within a few days of the Oregon coast, in Idaho, with a campground booked for two nights at the other end and nothing arranged past those two nights (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="0:18" />). He stated the reason plainly (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="0:33" />): he did not know the place, and sitting down to research it was not how he worked. “I trust in my path,” he said (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="0:47" />). What he did instead of planning was name every unresolved variable out loud and leave it standing (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="1:25" />). He had solar and backup systems he had not mastered and a power draw he had never measured (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="1:42" />). He did not know where he would stay once the two nights ran out, or how hard places would be to find (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="1:58" />). He had been a programmer his whole life and would have to rebuild a freelance profile from scratch, which he had not had to do in over a decade (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="3:12" />). He set all of it against his own history, naming homelessness, job transitions as the record of what he had already adapted to (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="4:17" />). He said the period ahead would be a reckoning between the life he had chosen and the systems he had stepped out of (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="2:14" />), and that keeping his promises and paying his debts had always been part of his character (<Moment ulid="01J909B3F005XP4AKX6KWZ1HRK" t="2:37" />).
                </P>
                <P id="pambmu" n={84}>
                    He left the campground at seven thirty the next morning in temperatures in the high forties (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="0:00" />). There was no direct way to the coast from where he was (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="0:15" />). The mountains left two routes, one through Boise and one that dropped south around them through Nevada, and he took Nevada (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="0:32" />). “The whole state wasn't on the plan, but this is exactly why I wanted to remain open along the route,” he said (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="0:47" />). He drove roughly a hundred miles south toward Interstate 80 and Elko (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="4:05" />), crossed the state line, lost an hour to Pacific time, and passed through a town that was not on his GPS, with a casino in it and a cannabis store on the border (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="12:56" />).
                </P>
                <P id="pg9o2h" n={85}>
                    He spent the drive auditing the rig. He did not trust the tires he had bought, which were all season and loud on imperfect road (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="4:25" />), and he said he should have gone with standard ones (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="19:39" />). There was a squeak he attributed to the tire extenders, a door that rattled, and screws that turned up inside after a drive with nothing to account for them (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="10:58" />). He wanted suspension, shocks, struts, and different tires (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="5:12" />), and said the Jeep he was flat towing would likely have to be lifted to match (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="20:11" />), all of it deferred until freelance work resumed (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="5:27" />). The rig swayed at low speed over anything that was not flat (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="20:42" />), and he stated he did not know whether it was safe to take off road (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="21:00" />). He also stated what he would do if the answer turned out to be no, which was whatever it took to make the answer yes, because that was the life he wanted to live (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="21:17" />).
                </P>
                <P id="p2v81a" n={86}>
                    He had been looking at Nevada for six or seven months and had not expected to enter it at all (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="15:04" />). On the drive he named the solitude, the silence, the stars, and the open space as reasons to stay rather than pass through (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="3:32" />), and he stopped short of deciding anything on the stated ground that he had not seen Oregon yet (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="3:49" />). He pulled off the highway about a hundred miles short of the campground he had picked and worked out the next move with Bailey aboard (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="16:07" />). He had been driving cross country for weeks and said he wanted a break (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="16:23" />). The campground was first come, first served, with no power, no water, and no trash service (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="22:01" />), and he gave himself about a week there (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="16:40" />). He also changed the terms on which his location went into the open: from then on he withheld where he was until he had left it (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="0:19" />), because anyone who knew where he was parked could send trouble to him there (<Moment ulid="01J92ND90RHADWF5N4BF77702C" t="17:29" />).
                </P>
                <P id="prrgil" n={87}>
                    He never reached the campground he had picked (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="9:21" />). The Garmin called out a campground at Angel Creek and there was nothing there when he reached it, and the road went on climbing a mountain in the Ruby range. He was in the rig with the Jeep behind him, there was nowhere to turn a vehicle that long around (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="9:38" />), and the grade was steep enough that he said out loud he was glad he had fuel. He drove it without knowing what was at the top. What was at the top was a small lake, Angel Lake, and a Forest Service campground on it, primitive sites with no power and no water, at about eight thousand feet (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="0:34" />). He stopped there and he stayed. Overnight lows ran into the thirties (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="1:12" />). He kept the propane furnace low and still went through a substantial amount of propane (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="1:28" />), cooked outside on a propane grill, ran everything else on solar, carried his trash in the back of the vehicle until he could find somewhere to take it (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="1:46" />), and had no shower, with a bucket or a truck stop as the two options he had not chosen between (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="2:02" />). He drove down into Elko for laundry and supplies and said he would be there one to two weeks (<Moment ulid="01J94JAQTR8FYH20E2KDXWSF49" t="2:16" />).
                </P>
                <P id="p7a91j" n={88}>
                    On his second night up there he stated what the difference between the two lives was. In the house nothing had been difficult and nothing had required intention, and he named that stagnation (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="5:21" />). On the mountain everything required intention (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="6:16" />). He had spent that day working on his solar system and learned, among other things, how much power a fan draws (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="5:38" />), a question he said would never have occurred to him before (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="5:56" />). Wind ran at ten to fifteen miles an hour while he spoke (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="6:49" />), with gusts forecast in the forties for Friday, and he said he would prepare for those in advance (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="7:04" />). He defined a thing that is not working as untenable, a situation that cannot be resolved, only overcome or transformed, and said his old life had been one of those (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="0:38" />). The two lives shared no common framework (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="12:11" />), so what he had done was a replacement and not an adjustment. He named a tension he said he had carried all his life (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="10:27" />), between wanting to own land and a cabin and grow his own food and be rooted somewhere (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="8:26" />), and wanting to be out in the world (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="8:43" />), and he left it open. He stated that the journey was fundamentally changing him (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="12:53" />), that he did not yet know into what, and that he remained open to it (<Moment ulid="01J95P6X1GE6SY23PZH8XA723D" t="13:09" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">The mountain road and the medication<Hash id="h4cd4e" label="The mountain road and the medication" /></h3>
                <P id="pultth" n={89}>
                    He had been camped on top of a mountain in northern Nevada, near Chimney Rock, at about eight thousand feet (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="15:17" />), since the end of September (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="16:02" />). The only road in was a paved Forest Service route of roughly ten miles (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="19:54" />), climbing with no guard rails, a valley dropping away on the driver's left (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="17:45" />), and a final set of turns cut into the exposed edge where the road bends out of sight and nothing is ahead but sky (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="8:59" />). Driving in, he had missed the campground at the base and kept going (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="27:41" />), and ended up on top. He said he was glad he missed it, because he never would have gone up there by choice (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="9:58" />).
                </P>
                <P id="plqm36" n={90}>
                    Two weeks earlier he had stopped taking clonazepam (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="1:56" />). At his peak he took a milligram and a half of it for panic attacks and had come down to a quarter of a milligram over the years without any real effort, and the last quarter was the amount he could not get off (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="2:11" />). He kept the medication in the vehicle within reach and did not take it (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="2:42" />). He said he expected some measure of withdrawal, that his body had been on that dose for years, and that two weeks was not long enough to expect equilibrium (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="2:59" />). It was the second drug he had come off that year. In his first month in the RV, between April and May (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="1:39" />), he had stopped another cold turkey and spent about a month in withdrawal (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="1:25" />).
                </P>
                <P id="pm8daq" n={91}>
                    On October 4, driving up the mountain, he set out where the fear came from, in order. At seventeen or eighteen he spent a year inseparable from his best friend (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="1:19" />), the first person he was in love with and the first time he felt that somebody loved him (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="2:27" />), in a relationship the two of them never discussed and that he was not out for (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="0:31" />). He said his insecurity caused problems between them, that he hated himself, and that he could never accept that this person loved him (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="2:09" />). After it ended he took acid one day and lost the feeling in his hands (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="3:32" />), and he bundled up his shirt and held it because it was the only thing he could still feel (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="3:47" />), and he put all of his attention into that until it passed (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="4:17" />). Eight or nine years later an allergy pill lodged in his throat while he was driving and he had a full panic attack and believed he was choking to death (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="4:49" />). For the ten or fifteen years that followed he lived with the fear of choking and of losing control of his body (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="5:06" />), stopped eating for weeks at a time (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="5:36" />), and took clonazepam, which he said was the only thing that made life livable (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="5:21" />).
                </P>
                <P id="pxk58d" n={92}>
                    He had already driven the road three times. On the third climb, October 3 (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="3:14" />), he nearly had a panic attack on the last two turns and pushed through it on deep breathing (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="3:30" />). What worried him afterward was not the road. “it's not the mountain, it's me,” he said (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="3:49" />). Driving down to Elko the next morning for thermal curtains, ahead of a day of forty and fifty mile an hour winds, he put the medication and the road together (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="0:00" />). Decades of medication had done nothing but disconnect him from himself, he said, and taking these drugs long term is one of the ways people fragment themselves (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="4:35" />). He said he could not have lived the life he lived in that house if he had not been medicating himself (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="5:06" />). By not taking the pill he was giving himself the chance to integrate the strong feelings that come up when he is afraid (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="4:03" />), and by taking it he would prevent himself from integrating that part of himself (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="4:20" />). He said he would sit at the bottom of the mountain on the way back and prepare before he drove it (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="5:37" />). “I don't want to run from life anymore (<Moment ulid="01J9C5B6GGDJP3W0G7QVQJQK9W" t="5:55" />).”
                </P>
                <P id="p8yayb" n={93}>
                    He started the fourth ascent at 10:43 that morning, in his Jeep, with ten miles of road ahead of him (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="0:00" />), and he said aloud as he went what he was doing and why (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="12:12" />). The fear was not about the mountain (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="6:26" />). It was about being in control of himself, and losing sensation in his hands was the thing that made him doubt he was (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="6:09" />). He described the part of himself that observes him constantly and runs his emotions, his ethics, his physical actions and his intellect through a single function (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="7:36" />), and he named the mechanism he meant to interrupt: feeling the fear, then noticing that he was feeling it (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="8:39" />), the two escalating into each other until his hands went numb (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="8:56" />). He was not trying to overcome it and he was not trying to suppress it (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="10:14" />). Fear was a natural signal to work with (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="10:30" />), and what he intended to do with it was integrate it (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="11:23" />).
                </P>
                <P id="phan24" n={94}>
                    He drove it on his own terms (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="9:41" />). He named the sensations he expected before they arrived (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="14:25" />), so that numb hands, a rising heart rate and adrenaline would be things he had already accounted for (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="13:33" />). He dropped into second gear and held eighteen to twenty-five miles an hour (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="16:59" />), well under what the road allows (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="12:32" />). When a driver came up behind him he pulled over and let the car pass rather than be pushed into a speed he had not chosen (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="9:27" />). He had said he would stop at the base and prepare, and when he reached the last pull-off he went past it and kept climbing (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="11:40" />). On the exposed stretch above the valley he reported that he was losing the feeling in his hands (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="18:03" />), slowed further, breathed deliberately, and said it did not have to become panic (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="18:34" />). He took the long final curve at twenty with his eyes on the road (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="19:20" />). At the top he said he had made it and felt better (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="21:13" />), that it was easier than the time before, that he doubted it would ever get easy, and that it was worth it (<Moment ulid="01J9CFWGER2ZJMMG1QRM0APB5D" t="21:48" />).
                </P>
                <P id="pe5zwo" n={95}>
                    The next day he drove the road down and back up twice more (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="47:23" />). He reported markedly less fear than the day before and put that down to having integrated it on the previous climb (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="26:10" />). On the way up he also worked out what the trigger actually was (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="32:41" />). It was the places where the road curves and the only thing visible ahead is the horizon (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="32:55" />).
                </P>
                <P id="pmqjgh" n={96}>
                    On October 7, his last day in Nevada (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="0:00" />), he drove it a final time at a pace he had settled on, twenty miles an hour (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="12:00" />), which he had found was slow enough to keep the response manageable (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="13:42" />). He had put the reaction to an AI (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="9:14" />), which kept reading the road disappearing into sky as a metaphor for uncertainty (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="9:32" />), and he rejected that. He knew the road and had driven it many times (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="9:48" />). The response was physical, something primal in his brain registering the sightline as wrong (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="14:48" />), and there was nothing to do about it but adjust course and go slower (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="10:05" />). He also said what he meant by embracing it (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="15:23" />), because he did not mean pushing ahead. “to embrace something is to wrap yourself around it, all of it,” the fear and the anxiety and whatever else is in it (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="15:41" />), and go with it (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="15:59" />). He took the two long turns slowly and finished the climb (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="14:32" />).
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Getting the batteries to charge<Hash id="hohk8l" label="Getting the batteries to charge" /></h3>
                <P id="p8c6y0" n={97}>
                    He had been camped a week on national forest land high in the Ruby Mountains outside Elko, Nevada (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="6:46" />), and the only way he had put a charge into his RV house batteries was the generator (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="0:48" />). For the first four days he had not charged them at all, because he did not yet understand the system he was living on, and he said he had probably hurt them doing it (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="2:07" />). The night he ran the generator four and a half hours to a full charge (<Moment ulid="01J9D5GRSRHZQEMNEW9Z4GD7CB" t="10:05" />), the batteries read 12.68 volts, which he said was not ideal and might mean the batteries were no good (<Moment ulid="01J9D5GRSRHZQEMNEW9Z4GD7CB" t="10:23" />). He said he would know in the morning. In the morning they read 11.9 (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="1:19" />), and an hour later 12.12 (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="1:36" />).
                </P>
                <P id="p6ww5g" n={98}>
                    He did not want to run the generator every day (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="39:44" />). It was a quiet generator and still loud enough to carry to the people camped near him (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="1:04" />), and it burned about three percent of his propane an hour (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="3:34" />). He had a single 350 watt solar panel and a solar inverter with its own bank of batteries (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="8:57" />), and none of that power was reaching the house batteries (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="38:12" />). He set out to fix that, and he worked it by testing every path into those batteries one at a time and reading what each failure told him (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="7:00" />).
                </P>
                <P id="pm82br" n={99}>
                    The RV's 30 amp shore cord plugged into his solar inverter delivered power (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="7:18" />), but the surge protector he had installed in the RV back in Kentucky read no ground and would not pass a charge through (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="18:31" />). Charging DC to DC required equipment he did not have (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="7:35" />). The RV had a Zamp solar port on its side, which takes a proprietary SAE connector while his panel ends in MC4 (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="38:43" />), and no adapter was available at any store within hours of him (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="38:58" />). He had an RV shop order one, due Tuesday or Wednesday (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="39:15" />). He also suspected the port led nowhere, that solar ready meant a socket on the wall with no controller behind it (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="39:30" />).
                </P>
                <P id="p00guo" n={100}>
                    That left a neutral bonding plug, which he learned is a 15 amp plug with a wire run between two of its prongs (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="0:30" />), enough to make a surge protector read a ground. He learned he could make one himself if it came to that (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="8:26" />). At seven in the morning he drove down the mountain and an hour and a half south into Elko (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="0:14" />), bought one at a hardware store (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="18:16" />), and drove back up. He plugged it into the inverter, ran the RV's cord to a different outlet on the same inverter, and turned on the air conditioner to put a load on it (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="35:47" />). The plug's own light showed grounded (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="37:39" />). He said he did not understand how the surge protector would read a ground coming from a different outlet (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="18:48" />), and it did not (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="37:22" />).
                </P>
                <P id="pa6ypn" n={101}>
                    He ran the generator that night and walked over to the neighbors camped nearby to apologize for the noise (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="0:32" />). They got to talking and the man mentioned that he had a neutral bonding plug, for the same reason (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="0:47" />). He said he had tried that and it had not worked. He went back to his RV, kept thinking about it, and opened the plug up. There was no wire between the ground and the neutral (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="1:04" />). The plug had been sold to him as a shell and had never been wired. He carried it back over, and the neighbor, who had the experience for it, put the wire in.
                </P>
                <P id="pryx1j" n={102}>
                    He put the finished plug into the solar inverter, plugged the RV into that, and the house batteries began charging (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="1:19" />). The surge protector passed it. His solar was simulating shore power and would drop into float on its own once the batteries came up (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="1:54" />). He had driven three hours for a charger he no longer needed (<Moment ulid="01J9FGHF28ZJRJ6PW4P0PX01D4" t="41:51" />). The method he had tested and ruled out on the mountain was the one that worked (<Moment ulid="01J9FTGG1RNTANCVHEMZ64YBDS" t="1:37" />), and the failure had been in the object he bought, not in the approach.
                </P>
                <h3 className="mt-8 mb-1 font-bold text-gray-900">Refinement or transformation<Hash id="hrl5uj" label="Refinement or transformation" /></h3>
                <P id="pfjzrr" n={103}>
                    Nevada was where he had meant to go in the first place (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="1:51" />). He had expected to spend his first winter there, ended up choosing Oregon instead, and could not remember how that choice had been made (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="2:08" />). He said the views on the mountain spoke to him (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="2:25" />). The ground also suited the work: open sky meant sun on his panels and a clear line for his internet (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="9:40" />), and public land allowed him fourteen days in one place (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="7:26" />), long enough to set up, work, and keep improving the rig (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="7:41" />). He stated that the longer he stayed the more he wanted to stay (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="11:07" />).
                </P>
                <P id="pd7u35" n={104}>
                    That was the reason he refused to let it settle the question. He held a standard he could state exactly, that a place which would only “refine rather than transform” him was not enough (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="2:58" />), and staying in Nevada would be refinement. He would not take it until he could verify he was not taking it to avoid pushing himself (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="3:12" />). He also refused to decide by setting advantages against each other (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="9:20" />), which he said is not how he thinks, and took each place as a whole condition instead. In Nevada he had not showered in a week (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="7:59" />), the nearest shower was an hour and a half away, and the state parks he had looked at had no facilities for stopping and washing (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="8:16" />). Oregon, from what he had worked out with an AI, was built for people living the way he lived and had facilities close at hand (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="8:32" />), though forest cover could cut his solar and his internet (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="9:34" />). Overnight lows had been in the thirties at eight thousand feet and ran into the forties on the coast (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="10:03" />). He stated that he wanted to see Oregon in winter (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="10:12" />). On October 6 he said he would take the second week under the fourteen-day limit and let the answer come (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="3:29" />).
                </P>
                <P id="pic0wd" n={105}>
                    On the night of the fifth he was on his bed with headphones on, working through Nevada against Oregon with an AI (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="0:00" />), when Bailey jumped off the bed and ran the length of the RV (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="0:15" />). There was a field mouse inside. He spent one to two hours trying to catch it and could not (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="0:31" />), because it was small and fast, and he had been insulating and sealing the rig for months and it had found a way in anyway (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="1:02" />). The next morning he drove down the mountain and bought humane traps (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="0:47" />), and noted that he had almost picked up a kill trap by mistake (<Moment ulid="01J9HQKZ80M1WXKKCREB5N57YG" t="10:47" />). He never caught it (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="16:30" />). He did not want it to die in there (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="17:01" />), and one of the reasons he took an extra night on the mountain was to give it the chance to leave on its own (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="17:16" />).
                </P>
                <P id="p952vt" n={106}>
                    He decided on the night of October 6, after a week of holding the question open (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="5:53" />), and he was going to Oregon (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="5:36" />). On his eighth day at the site he hiked the mountain he had been camped on (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="2:17" />), with thin air and his lungs burning (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="2:34" />), and heard a woman singing and drumming toward the sun (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="4:25" />). He identified it as a spiritual practice and walked back down rather than disturb her (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="6:01" />). Several people, on his channel and in his own life, had told him he might regret not staying in Nevada, and he answered that directly. He asked why the sentence was never built the other way around (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="2:43" />), and why anyone would assume they knew what he would regret (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="2:58" />). He said regret is not something he experiences often, because when he decides on something it is because it resonates with him (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="3:13" />). “all paths are equal valid until you choose one,” and a path that turns out badly can be answered with a new choice (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="3:30" />). If Oregon did not work he could come back to Nevada (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="6:11" />). If he had stayed in Nevada and it had not worked he could have gone to Oregon. He said that framing it as one or the other was an attempt to fragment a process that does not run that way (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="6:45" />), that he is a non-binary thinker and does not compartmentalize anything (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="7:00" />), and that he was not asking for advice or encouragement, only to be witnessed (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="7:38" />).
                </P>
                <P id="paixb3" n={107}>
                    He also set the order between the work and the life. He would rebuild his freelance profiles as he traveled and start looking for jobs once he knew where he was staying (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="16:00" />), and he stated the order plainly: “my nomadic lifestyle comes first now (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="16:17" />).” He was not going back into the arrangement that had burned him out (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="16:34" />). Clients would take the terms he set, the schedule and the flexibility, or they would not be his clients (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="16:50" />).
                </P>
                <P id="pud5qa" n={108}>
                    The route was four stops to the Oregon coast (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="13:07" />): about four hours the first day to near the state line (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="13:23" />), a couple of hours into Oregon the next, roughly four more toward the coast, then two hours to reach it (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="13:39" />). From the California and Oregon border he would take Highway 101 north through Oregon and Washington across the autumn and the winter (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="13:55" />), about five months, and he would take it slowly, because he had crossed the country fast enough that the experiences had been hard to hold onto (<Moment ulid="01J9KV54F8BS1Q1TVXHS7XB85W" t="14:11" />). He spent his last night on the mountain charting the way down (<Moment ulid="01J9MEKS90D83P37QEWJ29YG06" t="18:00" />).
                </P>
</Part>

            <Part n="Three" title="THE COAST">
                <h3 className="mt-8 mb-1 font-bold text-gray-900">The man at the gate<Hash id="hgate01" label="The man at the gate" /></h3>
                <P id="p2mnw3" n={109}>
                    At his second campground, a three-day stay, he met the man at the gate as he arrived (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="10:59" />). He came in moving faster than the room and put the whole list on him at once, when he could get in, where to dump his tanks, what sites were open, all of it in one breath (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="11:18" />). The man took it and kept pace (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="11:42" />). That does not happen to him. He heard himself, stopped, let the silence sit, and something went loose. Then a sentence arrived ahead of the decision to say it: <Moment ulid={GATE_FLIRT} t="10:51">what is your name, because you seem awesome</Moment>. The man answered without missing a beat (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="12:32" />), and he melted just from hearing the man say his name.
                </P>
                <P id="pgate2" n={110}>
                    They stood there afterward on the subject of storms (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="13:24" />). High wind, and whether the thing that kills you is a tree coming down or your own rig going over (<Moment ulid={GATE_FLIRT} t="12:49" />). It was the conversation he had been having with himself alone in a Kentucky campground a month earlier (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="14:02" />), the one he had driven two thousand miles toward. The man did not know it, and it had not occurred to him to tell the man. He just stood in it.
                </P>
                <P id="p34tjd" n={111}>
                    He did not see the flirting (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="12:49" />). He is direct, he says what he means, and weather is weather (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="18:52" />). It took days, and a conversation with Claude out on a trail, before the thing got named: the man had been flirting, and so had he (<Moment ulid={GATE_FLIRT} t="14:35" />). Twenty years since he had dated anyone (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="15:56" />). He had liked the man and had not been willing to know it (<Moment ulid="01JB2A7VVR2K956HZWK5FDKQQX" t="15:50" />). Then a week of carrying it the only way available to him, outside and moving (<Moment ulid="01JB67BK08DZR8M51KPNPTSHR2" t="6:31" />), one song on repeat on every hike, Running from the Cops by Phantogram, tension that builds and never resolves so he could keep going. He put a duck on every Jeep in the campground and watched one driver pass him ten minutes later with nothing on the dash (<Moment ulid={GATE_FLIRT} t="0:57" />, <Moment ulid={GATE_APPROACH} t="12:43" />). Twice he walked up to the gate house to say it out loud (<Moment ulid="01JB67BK08DZR8M51KPNPTSHR2" t="7:47" />), and twice the gate house was empty (<Moment ulid="01JB67BK08DZR8M51KPNPTSHR2" t="9:54" />). He counted the walk. He had spent a week on camera teaching people how to drive up a mountain afraid, and an emotional fear got no exemption from the same protocol (<Moment ulid={GATE_APPROACH} t="6:44" />, <Moment ulid={GATE_APPROACH} t="8:20" />). The second walk took more courage than the first (<Moment ulid="01JB67BK08DZR8M51KPNPTSHR2" t="9:47" />).
                </P>
                <P id="pgate3" n={112}>
                    When he finally caught him he led with the thing he had kept back. He had come to this coast for the storms (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="20:48" />), strategically, for weeks of rain (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="16:37" />), and he could not leave the misunderstanding standing. Oh yeah, the man said (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="21:05" />). So he asked him out, the first time in twenty years he had asked anyone out, and then did what he always does, which is watch (<Moment ulid={BED_REST} t="19:59" />). Bad timing (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="21:47" />). Then it again. And again, half a dozen times (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="22:38" />), the man turning it over out loud and working something out in his own head while another man stood in front of him waiting (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="22:27" />). He had his answer (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="22:14" />). He stayed long enough to upgrade the man from seems awesome to you're awesome, and left (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="23:20" />).
                </P>
                <P id="pgate5" n={113}>
                    He was not wearing what he thought he was wearing. There was a cotton round taped over his left ear, from soaking his earrings in Bactine, and he had walked the whole way up there with it on and never once thought about it, because everything he had was going into getting himself to go. Twenty years of not asking anyone, and he had done it with a cotton round taped to his ear. He found it afterward. He laughed.
                </P>
                <P id="pgate4" n={114}>
                    He drove to <PlaceCite name="Cape Blanco" /> proud of himself. Not consoled, and not being brave about it. Proud of the bravery, the directness, and the fact that he could take a rejection cleanly. His heart had opened after twenty years of being still, and he was precise on camera about what opened it: not the interaction with the man, but being told the man had been flirting with him. It also changed where he was going. He had come out here meaning to go into the forest and live away from people. A stranger at a gate kept pace with him for ten minutes and turned him the other way, toward standing at one himself.
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">The first weeks on the coast<Hash id="hcst002" label="The first weeks on the coast" /></h3>
                <P id="p3rhrp" n={115}>
                    At four in the morning on November 26 he was parked on the shoulder of the highway at <PlaceCite name="Pistol River" />, forty degrees outside and about the same inside, propane at eight percent and held back for the fridge, one electric heater running off the solar batteries. He was comfortable in the seat he was in and would not have been anywhere else in the rig. From that seat he laid out the next four years: four stretches of this coast, a season in each, north to the Washington line and then back the other way so every stretch came around again in a different weather. He had gone back and watched his own footage from seven months earlier. The man in it was rattled when a stranger said hello, and had begun making himself smaller out of fear, and that was not who he had been for most of his life.                </P>
                <P id="pac92y" n={116}>
                    The next day the state park at Bandon was closed for construction and nothing north of it had space with Thanksgiving coming (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="8:41" />, <Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="9:09" />), so he turned around and drove forty-five minutes back south to <PlaceCite name="Humbug Mountain" /> (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="9:13" />), arriving at 5:30 into full dark (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="11:09" />). He detached the Jeep at the dump station and backed toward his site with no light but his own (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="11:14" />), lined up perfectly and certain of it (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="0:56" />), and stopped a millimeter off a tree because a man yelled (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="1:07" />). The man came over with a flashlight and walked him in (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="11:41" />). Minutes earlier he had sat behind another rig with his headlights up, lighting a stranger into a dark site, unasked (<Moment ulid={HUMBUG_ARRIVAL} t="11:09" />). There was no cell service and no internet there and sixteen hours of darkness a day (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="1:56" />, <Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="2:38" />), and he stayed, because the outside world was making decisions that were helping him make better ones (<Moment ulid="01JDQ4KVCR43KJZRG8Q9ARRSAW" t="2:57" />). He slept ten hours (<Moment ulid={HUMBUG_ARRIVAL} t="1:51" />).
                </P>
                <P id="pezaz7" n={117}>
                    He spent Thanksgiving there alone, in a park full of holiday arrivals and no signal on the site (<Moment ulid="01JDTRVGP8M6HVWM989ZCBH607" t="8:11" />, <Moment ulid="01JDTRVGP8M6HVWM989ZCBH607" t="10:51" />), and filmed the whole evening. Burgers with olives and mayonnaise mixed together, cooked in the Ninja Foodi, because the hiking had put real demand on his body and he had reached the point of wanting to feed it well (<Moment ulid={THANKSGIVING} t="0:01" />). Captain Morgan cut with Pepsi, chosen over Mountain Dew after an AI described its colour as radioactive, though it did not take and he still drinks it (<Moment ulid={THANKSGIVING} t="3:15" />). Pine needles tracked in from Cape Blanco on the floor (<Moment ulid="01JDTRVGP8M6HVWM989ZCBH607" t="2:45" />). The friendship bracelets lost somewhere and the thread still in a drawer (<Moment ulid={THANKSGIVING} t="8:27" />). <em>I love this. I love my life</em> (<Moment ulid="01JDTRVGP8M6HVWM989ZCBH607" t="9:53" />). Twelve minutes in, he took the Rifter down off the wall, seven months after he had thought he might never show it again, and there was the corporation, the alliance, the thousand people who followed him, and the sovereignty they never took (<Moment ulid={THANKSGIVING} t="12:14" />). That was a dream (<Moment ulid="01JDTRVGP8M6HVWM989ZCBH607" t="12:56" />). Then the alien necklace he has had since he was a teenager, and the Lake Cumberland map he had pulled off the wall that afternoon, Kentucky traded for a coast he could mark up (<Moment ulid={THANKSGIVING} t="13:37" />).
                </P>
                <P id="pclimb0" n={118}>
                    The ocean did not take. He sat on a rock at <PlaceCite name="Whaleshead Beach" /> and looked at it and did not go near it, because he did not know yet how safe it was and everything gets pattern matched first (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="26:44" />). Two dogs ran up to him (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="26:24" />). One settled onto the rock beside him like they were already friends, and the owner came up apologising, and they talked a long while (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="26:41" />). He stayed. He left still not understanding what the big deal was (<Moment ulid={BED_REST} t="25:59" />). He cannot be a passive observer of anything (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="14:02" />). Looking at waves is not engagement (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="14:08" />).
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">Humbug Mountain<Hash id="hhmb004" label="Humbug Mountain" /></h3>
                <P id="pclimb0b" n={119}>
                    He had seen the mountain from the 101 coming up the coast and knew then that he was going to climb it. That mountain wants to be felt. It is a presence. On November 4 he climbed <TraceCite ulid="01JBW1S5H07QFZ00KDG2AHD193">five and a quarter miles up Humbug Mountain and back down</TraceCite>, and the recorder logged 1,696 points doing it. He named the file Sacred Journey. He went up at three miles an hour and did not know that was fast until he looked at his watch at the top, and he was proud of himself. Coming down is where he did the damage, because the stabilising muscles carry a descent. It hurt the next day.
                </P>
                <P id="pseb1" n={120}>
                    The next day he went to <PlaceCite name="Cape Sebastian" /> anyway, sore. A mile down the trail he checked the GPS against what was still ahead of him and turned around, and the turning around surprised him (<Moment ulid={BED_REST} t="28:48" />). He did not go back to the Jeep (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="30:00" />). He took <TraceCite ulid="01JBYCWKP0CB3N0TQ3P22QDHJD">a different trail instead</TraceCite>, down to a beach you reach by holding a rope and lowering yourself (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="30:18" />), and he was the only one on it (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="30:23" />). He walked the length of it, looked at the ocean, and was bored (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="30:25" />). He could not see the point of standing in front of water that asked nothing of him (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="30:37" />).
                </P>
                <P id="pseb2" n={121}>
                    He cannot be a passive observer of anything, so he took it home and handed it to an AI as a design problem: what does a person built like him actually do on a beach. Three answers came back. An adventure journal, a couple of pages a place, the kind a character in a game carries. Lighthouses, which Claude called void penetrating devices, and that one lit him up enough that he wanted all of them. Building things in the sand, which connected straight back to a giant sand fish somebody had left on a lake in Kentucky on the drive out.
                </P>
                <P id="ppist1" n={122}>
                    The next day, at <PlaceCite name="Pistol River" />, he played. The tide was coming in. He walked back as the water came and forward as it went out, up and down the beach with music going, pattern matching the waves until it turned meditative, a kid again. Sometimes he misjudged it and had to run. Twice he did not make it and got soaked, and he laughed his ass off. At the place where the river meets the ocean there is no fixed channel and nothing holds its shape twice, and he stood there and called it two things making love.
                </P>
                <P id="ppist2" n={123}>
                    Then a head came up out of the water and his brain could not parse it (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="34:11" />). Something
                    like a little submarine. He asked Claude, and Claude explained the seal to him,
                    his first (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="34:19" />). Okay, cool. It went under and came up
                    somewhere else and kept its eyes on him the whole time (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="34:26" />), and then there were two,
                    and he yelped out loud (<Moment ulid="01JEAT2HSRT54TFHKM54Q60T3A" t="34:32" />).{" "}
                    <Moment ulid={BED_REST} t="32:42">
                        From that moment the ocean had claimed him. Genuinely claimed him.
                    </Moment>
                </P>
                <P id="ppist3" n={124}>
                    There is no recording of that day and no trace of it either. The recorder was
                    off and the camera was off. The hour this coast took hold of him exists only in
                    an account he gave a month later, flat on his back in a bed at Cape Blanco, to an
                    audience he had not yet come back to.
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">The body stops<Hash id="hbdy005" label="The body stops" /></h3>
                <P id="pclimb2" n={125}>
                    Every day after that he was on a beach somewhere tracing those waves, all up and
                    down this coast, on the injury, across every trail from Brookings to Bandon.
                    Cape Blanco, Cape Sebastian, Pistol River, Loeb, the Samuel H. Boardman
                    corridor. On November 16 he came back to the channel, and the same day he took{" "}
                    <TraceCite ulid="01JCV39VQRKDZ2FA991V89NFHS">
                        somebody else out to Cape Sebastian
                    </TraceCite>
                    .
                </P>
                <P id="prest1" n={126}>
                    Then his body stopped negotiating. He drove to <PlaceCite name="Cape Blanco" />{" "}
                    on November 30 and did not move again (<Moment ulid="01JEKKC9F0F2P7Z7HHV65DSRX7" t="0:05" />). He had been carrying six days in his head (<Moment ulid="01JEKKC9F0F2P7Z7HHV65DSRX7" t="0:11" />),
                    and the arithmetic on camera came out at nine (
                    <Moment ulid={NINE_DAYS} t="0:00" />
                    ). Two months of hiking on a muscle that was already injured had bought him
                    that, when a day or two of rest at the start would have settled it (
                    <Moment ulid={NINE_DAYS} t="0:48" />
                    ).
                </P>
                <P id="prest2" n={127}>
                    He did not spend those nine days lying down (<Moment ulid="01JFGC12JRDQ6WS6BSVDDTGDGM" t="1:15" />). He negotiated with his body for
                    every one of them, on a principle he could state: the core is doing whatever it
                    is doing whether you are in a bed or on a trail or driving to get your ears
                    pierced (
                    <Moment ulid={PIERCING_DAY} t="0:57" />
                    ).
                </P>
                <P id="prest3" n={128}>
                    On December 5 an earthquake alert came in from a hundred and sixty miles out (<Moment ulid="01JEC7JMH0SY8RYTTQRCQM4VER" t="0:00" />). He
                    had come to this coast for the storms and the marine layer and the fog and the
                    wind, and earthquakes had never entered it, and what he wanted was to be outside
                    past the treeline where the scene was (
                    <Moment ulid={TSUNAMI} t="0:35" />,{" "}
                    <Moment ulid={TSUNAMI} t="1:19" />
                    ). The sore core kept him in (<Moment ulid="01JEC7JMH0SY8RYTTQRCQM4VER" t="0:36" />). Then the tsunami warning came, and two rangers
                    came to the RV, the first officially and the second a friend stopping by with
                    what was known (
                    <Moment ulid={TSUNAMI} t="2:30" />
                    ). The second visit settled it: clearly the universe, or whatever, was telling
                    him to go look at the tsunami. The wave was ten to fifteen minutes out, and he
                    went to film it, sore core and all, from a tsunami safe zone (
                    <Moment ulid={TSUNAMI} t="2:55" />
                    ). He missed it. He stayed for the open water and the sun on it, aware the
                    whole time that he should have been resting.
                </P>
                <P id="prest4" n={129}>
                    What he did with that stretch is the method in miniature. He had owned an
                    electric kettle for months and never used it (<Moment ulid="01JE82HB4855784ZZRP1F3PV04" t="0:12" />), and an AI surfaced it (<Moment ulid="01JE82HB4855784ZZRP1F3PV04" t="8:20" />), and it
                    opened a whole category of living: ramen, instant mashed potatoes, hot water to
                    wash his face, all of it routing around an RV water heater that had never worked
                    right (
                    <Moment ulid={CORE} t="7:56" />
                    ). He played Final Fantasy XVI and intended to work through the rest of them (
                    <Moment ulid={CORE} t="0:33" />
                    ), and he was bored (<Moment ulid="01JE82HB4855784ZZRP1F3PV04" t="3:23" />), and he took the containment as the other half of what eight
                    weeks of walking had done to him (
                    <Moment ulid={CORE} t="3:15" />
                    ). On December 4 he drove into town for groceries in his pyjamas, because his
                    core would not tolerate anything constricting, and came back with hamburger meat
                    for the protein, because he cares about that body that much (
                    <Moment ulid={PYJAMAS_GROCERY} t="0:00" />
                    ).
                </P>
                <P id="prest5" n={130}>
                    It was not the pain that finally sat him down. For two months he had let the
                    core injury spread to every core muscle he had, and kept walking on it. On
                    December 19, on his way to Coos Bay for more ear piercings, he decided the
                    audience should have the dramatic part he had been holding back.{" "}
                    <em>It turned my penis off for a day.</em> (
                    <Moment ulid={PIERCING_DAY} t="1:37" />
                    ) Why not share that. He was not certain it had really happened (<Moment ulid={PIERCING_DAY} t="1:49" />);
                    he may have imagined it; fortunately it was very temporary (<Moment ulid={PIERCING_DAY} t="1:46" />).
                    None of that got weighed. A gay man who had found his sovereignty on this coast
                    after twenty years of silence sat the fuck down the moment that thought entered
                    his head. That, and not the wrecked core muscles or the ear that had not healed,
                    was{" "}
                    <Moment ulid={PIERCING_DAY} t="1:43"><em>what told me to sit the f down</em></Moment>.
                    He was not risking it either way (<Moment ulid={PIERCING_DAY} t="1:55" />). The
                    sitting lasted about as long as the shutdown did. He spent the rest of that
                    winter going out to the cliff edge every day.
                </P>
                <P id="pchil1" n={131}>
                    On December 22 he made chili, three days before Christmas, so that something
                    would exist in the pot that could be eaten later without cooking again. No
                    tripod, no recipe to teach, no advice wanted (<Moment ulid="01JFNZ6AEG1VP92BF3WGNDZQN5" t="4:03" />). He had exactly one question for
                    anybody watching, and it was how to get the papers off garlic cloves (
                    <Moment ulid={CHILI} t="3:05" />,{" "}
                    <Moment ulid={CHILI} t="3:55" />
                    ). <em>I am a sovereign being just like you</em> (<Moment ulid="01JFNZ6AEG1VP92BF3WGNDZQN5" t="4:16" />). <em>Respect the sovereignty.</em>
                </P>
                <P id="pchil2" n={132}>
                    He already knew what the garlic would cost him. He had just learned it: a
                    whole head, two days of it coming back out through his pores (<Moment ulid="01JFNZ6AEG1VP92BF3WGNDZQN5" t="1:42" />). He took the
                    lesson straight back to the store and bought more garlic (<Moment ulid="01JFNZ6AEG1VP92BF3WGNDZQN5" t="2:08" />). He likes garlic (<Moment ulid="01JFNZ6AEG1VP92BF3WGNDZQN5" t="1:52" />). The only thing that stopped
                    him was the skins. Six cloves came free and he kept working at the rest (
                    <Moment ulid={CHILI} t="1:38" />
                    ). His eyes and nose had been streaming since before the onions were cut, from a
                    raw onion he ate on impulse and liked, and he advises against it (
                    <Moment ulid={CHILI} t="0:54" />
                    ).
                </P>
                <P id="pvtja7" n={133}>
                    On December 9 he read the nine months back in order (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="0:06" />). Tramadol at three hundred milligrams a day,
                    cold turkey to zero (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="0:40" />), against everyone who told him it could not be done (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="0:19" />). Thirty
                    years of cigarettes, ended (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="1:06" />). The RV learned as working infrastructure, the dental
                    work done (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="1:24" />), the country crossed with the comments off because he would not argue
                    about the superficial in the middle of a transformation nobody but him seemed
                    to notice. Clonazepam discontinued after fifteen years (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="1:53" />), decided on a mountain (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="1:50" />),
                    because the work he had done told him he could trust his own body again (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="2:08" />). Then
                    Oregon, and the ocean (
                    <Moment ulid={NINE_MONTHS} t="0:13" />,{" "}
                    <Moment ulid={NINE_MONTHS} t="1:45" />,{" "}
                    <Moment ulid={NINE_MONTHS} t="2:22" />
                    ). All of it had been visible the whole time (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="3:34" />), fully documented, and what came
                    back was silence (<Moment ulid="01JEPTEGE07YNG4Y5APQ0VQEXS" t="3:10" />), including when he showed them he needed help (
                    <Moment ulid={NINE_MONTHS} t="2:52" />
                    ). He closed the books on that arrangement and asked for nothing further.
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">The storms<Hash id="hstm006" label="The storms" /></h3>
                <P id="pbyyhb" n={134}>
                    He had come for the storms, and he got them. On November 21 he walked the loop
                    through what a twelve-hour blow had left behind, branches everywhere, a trunk on
                    the ground he had to detour around, crews working the damage (<Moment ulid="01JD72ABR0CADC8B4VHZCQ4VNT" t="9:18" />). A ranger had told
                    him these are hearty trees (<Moment ulid="01JD72ABR0CADC8B4VHZCQ4VNT" t="9:03" />). He had learned the coastal roots support each
                    other underground, and he called it holding hands (<Moment ulid="01JD72ABR0CADC8B4VHZCQ4VNT" t="9:24" />). On camera he worked out
                    what that means when an eighty-mile-an-hour gust hits the stand: the load
                    gets distributed, and they come out of it stronger (
                    <Moment ulid={STORM_DAMAGE} t="8:21" />,{" "}
                    <Moment ulid={STORM_DAMAGE} t="9:24" />
                    ). Another storm was coming in a few days, and he would still be here for it (
                    <Moment ulid={STORM_DAMAGE} t="10:37" />
                    ). If a tree falls, a tree falls (<Moment ulid="01JD72ABR0CADC8B4VHZCQ4VNT" t="11:40" />). This is how he lives (<Moment ulid="01JD72ABR0CADC8B4VHZCQ4VNT" t="10:51" />). He filmed the high gusts
                    and slept through it (
                    <Moment ulid={STORM_DAMAGE} t="11:24" />
                    ).
                </P>
                <P id="p8sc5h" n={135}>
                    He was up before six the next morning (<Moment ulid="01JDAPDAN0T0VRSS5HZ8P6KYAJ" t="1:11" />), and the storm was not coming later, it
                    was already there, so he put on a coat and went into it (
                    <Moment ulid={WIND_STORM} t="3:18" />
                    ): out past his own site where the near trees held and the tall ones behind them
                    swung (
                    <Moment ulid={WIND_STORM} t="4:52" />
                    ), onto the back path with the music off and a woman on the trail he did not
                    want to talk to (
                    <Moment ulid={WIND_STORM} t="5:33" />
                    ), through the trees, trusting the tree wisdom, the roots, the holding hands (
                    <Moment ulid={WIND_STORM} t="6:33" />
                    ). He showered before the power could go (
                    <Moment ulid={WIND_STORM} t="7:32" />
                    ), walked down to the water and filmed it (
                    <Moment ulid={WIND_STORM} t="10:30" />
                    ), and on the way back found a man standing out in the same wind with a handheld
                    gust meter who did not know how to get the data onto his computer (<Moment ulid="01JDAPDAN0T0VRSS5HZ8P6KYAJ" t="13:06" />). He is a
                    programmer. He picked a spot to wait until the man finished his readings (
                    <Moment ulid={WIND_STORM} t="12:49" />
                    ). He had opened that recording by telling whoever was watching to get off the
                    app, get out of the safe little bubble, and go meet the ocean (
                    <Moment ulid={WIND_STORM} t="0:01" />
                    ).
                </P>
                <P id="psv7s6" n={136}>
                    He went into the surf at high tide and came back sopping. The ocean is stronger
                    than he is and does not care about his plans, and he respects it and he plays
                    with it, and he misjudged the water a couple of times, and it was fun (
                    <Moment ulid={HIGH_TIDE} t="0:02" />
                    ). Somebody had called him the weird beach guy as an insult. He turned it over
                    on the walk up off the sand and took it as a compliment, the one box he chooses
                    (
                    <Moment ulid={HIGH_TIDE} t="0:32" />
                    ).
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">The cliff edge<Hash id="hclf007" label="The cliff edge" /></h3>
                <P id="ptkstk" n={137}>
                    He spent that winter at <PlaceCite name="Cape Blanco" /> (<Moment ulid="01JGAYJ1Y8SFEVX4HBTMXG2PAM" t="0:04" />). He went out to the
                    cliff edge above the ocean every day, and at first he could not get near it (<Moment ulid="01JGAYJ1Y8SFEVX4HBTMXG2PAM" t="2:24" />).
                    The drop was not what frightened him. What frightened him was what his own mind
                    produced at the edge, the pull to go off it (<Moment ulid="01JGAYJ1Y8SFEVX4HBTMXG2PAM" t="2:33" />), and no reason a mind would offer
                    that. He asked an AI and got a name back: the French call it the call of the
                    void (
                    <Moment ulid={CALL_OF_VOID} t="2:21" />
                    ). The name did not resolve it. It made him curious (<Moment ulid="01JGAYJ1Y8SFEVX4HBTMXG2PAM" t="2:52" />).
                </P>
                <P id="pcliff9" n={138}>
                    So he came back the next day, and the next. The
                    theory he built out of it is his own. The brain does this reaching for safety.
                    It is a chaotic way to reach for safety and it works (<Moment ulid="01JD8AGTQRQSJ6CNNGBE3H1TZG" t="1:38" />), and the more times you
                    stand there the more you trust yourself, until the fear leaves. Standing on that
                    ledge above the drop was how he showed himself he trusted himself (
                    <Moment ulid={CLIFF_FIRST} t="1:32" />
                    ). By the end of December there was no fear there at all, and he could have
                    stood at that edge for hours.
                </P>
                                <h3 className="mt-8 mb-1 font-bold text-gray-900">Humbug again<Hash id="hhmb009" label="Humbug again" /></h3>
                <P id="pxk8yq" n={139}>
                    Across the water from that cliff, Humbug Mountain sits by itself at the edge of
                    the ocean. In November he pointed the camera at it, loved it, and was going to
                    climb it again (
                    <Moment ulid={CLIFF_FIRST} t="0:28" />
                    ). On December 30 he pointed the camera at it again, called it Mount Doom, then
                    corrected to its real name, thanked it for destroying his core, and promised to
                    return (
                    <Moment ulid={CALL_OF_VOID} t="1:49" />
                    ).
                </P>
                <P id="pycpe3" n={140}>
                    Fourteen months later he would be assigned to it. In February 2025 he wrote to
                    the volunteer services lead that{" "}
                    <Cite ulid="01JKCGBTERDZ48W5PEEXEJWQ1G">
                        he would be at Humbug Mountain for May and June
                    </Cite>{" "}
                    and that he could not pass it up, and, in the same week, that it was{" "}
                    <Cite ulid="01JKF6G3M8NX640BGD3ER4Z04C">
                        his favorite place on earth, literally
                    </Cite>
                    . He never got there.
                </P>
            </Part>

            <Part n="Four" title="WHY HE VOLUNTEERED">
                <P id="pbgmp3" n={141}>
                    Two people at Cape Blanco told him he should. On December 15, 2024, he{" "}
                    <Cite ulid="01JF5MNXQ0DD3JPZ68HWYSKRYX">wrote to the volunteer services
                    lead</Cite>, and the first paragraph carried the two names behind it: a camp
                    host at Cape Blanco and a park ranger he had come to know at both Cape Blanco
                    and Humbug Mountain, both of whom had offered to vouch for him. The rest of the
                    letter is a man describing a place he had already decided on. Two months on the
                    southern coast. A month-long journey from Kentucky and, almost immediately,
                    home. The lighthouses, the beaches, the trails he walked with reverence. He was
                    committing to the 101 for the long term, and he put that in writing to a state
                    agency before anyone had given him anything.
                </P>
                <P id="p8pb4z" n={142}>
                    <Cite ulid="01JF6DCCMGDYD32J25GASFY5RE">The answer came the same evening</Cite>: this is a
                    very thoughtful email, and would he like a call. He wrote back the next morning
                    and put the whole reason on the record before he had worked a single shift:{" "}
                    <Cite ulid="01JF861F682PAKVQ6TGG4ERYMB">
                        I&rsquo;m looking to transition from programming into park service work,
                        whether that&rsquo;s seasonal ranging, maintenance, or other opportunities
                    </Cite>
                    . Until then he wanted his ties to this coast to go deeper through
                    volunteering, and he would plan his life around whenever and wherever they
                    needed him.
                </P>
                <P id="ps3x4d" n={143}>
                    He was a Boy Scout in his youth and has lived by what it taught him ever since.
                    He had spent a year learning to live in an RV so that he could be in state and
                    national parks. He was leaving a profession that is being dismantled under him,
                    and he was walking toward something he had never done in his life. Nothing
                    compelled any of it. He was free the whole way through, and he chose it. The
                    compensation was a campsite with water and power.
                </P>
                <P id="ppf6fk" n={144}>
                    In the same letter he went back and corrected what he had told them about Humbug
                    Mountain, unprompted, so their record of him would be accurate:{" "}
                    <Cite ulid="01JF861F682PAKVQ6TGG4ERYMB">
                        the injury wasn&rsquo;t just from one enthusiastic descent
                    </Cite>
                    . It was ten miles a day for eight weeks after it, across every trail from
                    Brookings to Bandon, Cape Blanco and Cape Sebastian and Pistol River and Loeb
                    and the Samuel H. Boardman corridor, because he wanted to know those parks
                    intimately. When his body finally demanded rest he took two weeks at Cape
                    Blanco, long enough that the ranger noticed he was missing. He was better now,
                    and he might have to pace himself a little below his natural intensity. Both
                    halves were evidence, and he gave them both: this is what he would spend on a
                    park, and this is that he can adjust.
                </P>
                <P id="pvtb7t" n={145}>
                    Five days after he wrote that first letter he gave up his cat. He filmed the
                    morning of it, before five (<Moment ulid="01JFJJ0RG8RVBDRE8XXTK9DQ0N" t="0:05" />), and refused the soft word for what he was about to
                    do. It was abandonment, and denying a known truth to yourself is fragmentation (
                    <Moment ulid={BAILEY_MORNING} t="0:24" />
                    ). Bailey was ten years old (<Moment ulid="01JFJJ0RG8RVBDRE8XXTK9DQ0N" t="0:50" />). He had looked: nothing would take him, the nearest
                    alternative was three hours inland, and nobody answered phones (<Moment ulid="01JFJTPG6GCZKAKC7R3518PWV2" t="0:27" />). He drove to the
                    shelter in Gold Beach, and they said no (<Moment ulid="01JFJTPG6GCZKAKC7R3518PWV2" t="0:07" />). He went back inside and told the staff
                    to their faces that this is exactly why people abandon animals irresponsibly,
                    and he talked them into taking him (
                    <Moment ulid={BAILEY_AFTER} t="0:00" />
                    ). The word on their form is surrender. The word he used, that morning and
                    every time since, is abandonment (<Moment ulid="01JFJJ0RG8RVBDRE8XXTK9DQ0N" t="1:03" />). Ten years is twenty percent of his life, and
                    it was the hardest thing he had ever done (
                    <Moment ulid={BAILEY_AFTER} t="0:42" />
                    ).
                </P>
                <P id="p27pxp" n={146}>
                    He had worked the problem for nine months. The cat wanted out constantly, the
                    space was the size of a hallway, and he came at it the way he comes at
                    everything: leashes, harnesses, carriers, routines. On day seventy-five (<Moment ulid="01J16CAD8RXTGQZTXG6447FJH3" t="3:06" />), with
                    the RV in a shop for electrical repairs and the two of them in a motel room (<Moment ulid="01J16CAD8RXTGQZTXG6447FJH3" t="0:02" />), he
                    made the promise he would have to break six months later:{" "}
                    <Moment ulid={REPAIR_DAY} t="8:15">
                        <em>I will never abandon Bailey. I got a camper because I had cats</em>
                    </Moment>
                    . He did it before he started volunteering rather than during. He was not going
                    to take a post at a park with something unresolved sitting in the back of the
                    rig.
                </P>
                <P id="pfrb7q" n={147}>
                    He drove to the beach afterward, found a woman he had spoken with there several
                    times (<Moment ulid="01JFJTPG6GCZKAKC7R3518PWV2" t="2:01" />), the one whose dog had settled beside him on the rock at Whaleshead, and asked her to lunch. She said no (<Moment ulid="01JFJTPG6GCZKAKC7R3518PWV2" t="2:06" />). He recorded that too, unadjusted,
                    and he was going to keep asking people (<Moment ulid="01JFJTPG6GCZKAKC7R3518PWV2" t="2:35" />), because he was{" "}
                    <Moment ulid={BAILEY_AFTER} t="2:44">done living a contained life</Moment>. The
                    next morning he had been awake since two, and the RV came apart and went back
                    together around him: litter box out, storage bay cleaned, bedroom rearranged,
                    desk rebuilt, monitor strapped down (
                    <Moment ulid={CLEARING} t="0:19" />
                    ). Months of undone work fell in a single day (<Moment ulid="01JFN47RWG99K5440Z2ZQSTZRX" t="0:57" />). The grief and the guilt arrived
                    on camera with it, including the guilt of feeling happy (
                    <Moment ulid={CLEARING} t="6:21" />
                    ).
                </P>
                <P id="ptu9pd" n={148}>
                    On Christmas Eve, with no plans and his family two thousand miles away, he{" "}
                    <Cite ulid="01JFXTKZCG3Y0E3S85B902P7NM">drove to <PlaceCite name="Tugman" /> to look at the
                    campground</Cite> before he had ever worked a day there, found a ranger to
                    announce himself to, and walked all three loops. He gave the place a working
                    inspection. The shower house, measured against the worst he had ever used (<Moment ulid="01JFZ8928RN5P79TBC55DGRDSG" t="2:42" />). The
                    short trail he already knew he would spend time on (<Moment ulid="01JFZ8928RN5P79TBC55DGRDSG" t="3:30" />). The dunes nearby. A lake
                    that looked like nothing until the rain moved across the water and changed it (
                    <Moment ulid={CAPE_CHRISTMAS} t="2:33" />,{" "}
                    <Moment ulid={CAPE_CHRISTMAS} t="3:17" />
                    ).
                </P>
                <P id="prjf2y" n={149}>
                    Christmas Day he spent at Cape Blanco with a storm closing the road (<Moment ulid={CAPE_CHRISTMAS} t="0:41" />). He sat it out with adult-themed Skyrim. He had finally gotten the Masterstroke mod collection downloaded onto a computer he said was perfect for it, and it ran wonderfully. <em>Oh man, I&rsquo;m already being a town slut in Whiterun, I&rsquo;m just saying.</em> (
                    <Moment ulid={CAPE_CHRISTMAS} t="4:35" />
                    ).
                </P>
                <P id="p3ufqv" n={150}>
                    <Cite ulid="01JFZEM1CGWTB3JJ47H5QW55A5">The volunteer services lead answered the same day</Cite>: a sign and a name tag reading Sam would be ordered, and
                    assignments could be booked eighteen months out, so they could talk about
                    whatever he wanted.
                </P>
                <P id="ppjrue" n={151}>
                    Four more storms came through in that last week (<Moment ulid="01JGHZ3BM88AJHKY92VEPY1P77" t="0:14" />), and the site went under (<Moment ulid="01JGHZ3BM88AJHKY92VEPY1P77" t="0:44" />). He
                    spent New Year&rsquo;s Day breaking down a flooded campsite in the rain (
                    <Moment ulid={BREAKING_CAMP} t="0:38" />
                    ), climbed onto a wet roof to clear it because that one is about safety (
                    <Moment ulid={BREAKING_CAMP} t="8:11" />
                    ), walked out to the overlook in fog and left the lighthouse climb alone,
                    because his core was still healing and there was volunteer labor waiting at the
                    other end of the drive (
                    <Moment ulid={BREAKING_CAMP} t="3:10" />
                    ), took the rig into Port Orford for fuel and propane through wind that slapped
                    the side of it on the bridge (<Moment ulid="01JGHZ3BM88AJHKY92VEPY1P77" t="12:58" />), came back, hooked up the Jeep, and said goodbye
                    to the place out loud (
                    <Moment ulid={BREAKING_CAMP} t="13:26" />
                    ). He{" "}
                    <Cite ulid="01JGHSWAX0EJ9JQ0299J99XTHS">told her he was leaving</Cite>: excited
                    and nervous, exactly how it should be.
                </P>
                <P id="pz4vk3" n={152}>
                    He{" "}
                    <Moment ulid={EEL_ARRIVAL} t="1:31">pulled in that afternoon</Moment>, detached
                    the Jeep at the day use area, drove it to the campground to confirm the site
                    was real and was his, and walked back through the rain for the RV (<Moment ulid="01JGGRBEW0XBATPZMQD557EBNS" t="1:45" />). He{" "}
                    <Moment ulid={EEL_ARRIVAL} t="3:21">put down leveling blocks for the first
                    time</Moment>, something he never bothers with (<Moment ulid="01JGGRBEW0XBATPZMQD557EBNS" t="4:02" />), because one to three months in
                    one place makes a site into a different kind of thing (<Moment ulid="01JGGRBEW0XBATPZMQD557EBNS" t="4:06" />). He met his supervisor
                    that day, a young ranger with three colors in her hair and a pierced nose, and
                    orientation was set for two days later (
                    <Moment ulid={EEL_ARRIVAL} t="4:45" />
                    ). Then he walked the day use area in the rain: the boat ramp half under, the
                    picnic table fully under, a man pushing a kayak out alone (<Moment ulid="01JGGRBEW0XBATPZMQD557EBNS" t="14:34" />), and the mist coming
                    across the water (
                    <Moment ulid={EEL_ARRIVAL} t="11:33" />
                    ).
                </P>
                <P id="pn7qh5" n={153}>
                    On January 3 he drove to Umpqua Lighthouse for orientation and stopped in the
                    parking lot fifteen minutes early (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="1:02" />), nervous and unable to account for it (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="1:47" />). The
                    job was unpaid. The site was not where he would have chosen to camp. Leaving
                    would be simple (
                    <Moment ulid={ORIENTATION} t="1:37" />
                    ). None of that dissolved the nervousness, so he set his terms into the camera
                    before he walked in: he would be himself, and if that turned out to be a
                    problem he would go (
                    <Moment ulid={ORIENTATION} t="2:21" />
                    ). The integration took time and effort (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="2:53" />), and nobody gets to tell him something
                    is wrong with him for not doing things their way (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="3:03" />).
                </P>
                <P id="p5g39s" n={154}>
                    He got there early and sat with the rangers while they joked among themselves (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="7:18" />),
                    watching and pattern-matching. When the introductions reached him he looked at
                    his supervisor and told her this was the most awkward thing she could have
                    asked him to do, and the whole room laughed (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="4:38" />). Then:{" "}
                    <Moment ulid={ORIENTATION} t="4:26">
                        <em>I&rsquo;m Sam, I&rsquo;m a nomad, I stare at the ocean</em>
                    </Moment>
                    . That was all of it. One of the volunteers in the room was the man from
                    Humbug Mountain who had yelled about the tree and walked him in by flashlight,
                    and who had told him he should volunteer for the state. He told the room the
                    story, and everyone laughed. It was already his story. The slide of keys was too long to memorize, so he
                    photographed it. Nobody wanted to read the team-building question first, so he
                    went first. Nobody claimed the yurt that needed a deep clean, so he took it (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="5:42" />).
                    Asked what he would do about a man with a knife in the park, he gave the answer
                    he would actually act on, knowing it was not the one they were after: he would
                    go and look for the man. Got to protect the public (<Moment ulid="01JGMV909RZFVTRPJ856K5XYXH" t="6:56" />). <em>Just make me a park ranger already.</em> (
                    <Moment ulid={ORIENTATION} t="5:35" />
                    ) Three hours of rules and a slide of keys, and what he walked out with was
                    the hat. <em>I got a cool hat though. I&rsquo;m keeping this hat forever.
                    That&rsquo;s my hat now. I love this hat. They complain about me wearing it
                    when I&rsquo;m not on duty, I&rsquo;ll tell them I&rsquo;ll quit, cuz
                    I&rsquo;m keeping this hat and I&rsquo;m wearing it forever. This is my hat
                    now</em> (<Moment ulid={ORIENTATION} t="4:06" />).
                </P>
            </Part>

            <Part n="Five" title="HE WENT AND LOOKED AT HONEYMAN FIRST">
                <P id="pkf5yt" n={155}>
                    <PlaceCite name="Honeyman" /> was not assigned to him. He asked for it. On January 3, two days
                    into his first placement, he{" "}
                    <Cite ulid="01JGQ4GHF0NV9VFHQ8Z00746NK">wrote to the Honeyman volunteer
                    services lead</Cite> about the welcome center position: he owned a Jeep
                    Wrangler and he wanted to be part of the dune community.{" "}
                    <Cite ulid="01JGQABXJ0XRX6YJ9Z5QHGGM7B">The reply came back in two
                    hours</Cite> with February open and a site in H Loop, directly across from the park&rsquo;s
                    access gate to the dunes.
                </P>
                <P id="pre4mt" n={156}>
                    The next day, on his day off, he drove down and walked it. From the dunes,
                    mid-walk, he wrote that{" "}
                    <Cite ulid="01JGSBWAGRTJPWFYHKWDBB22NR">he had come to check the park out, met
                    two amazing rangers, and already loved the place</Cite>. He had been to Honeyman once before, and it was
                    the place that had told him he had to pay to stand in it, so he had left. The recording runs thirty-seven minutes and{" "}
                    <Moment ulid={SCOUTING} t="0:01">starts at five in the morning</Moment> with
                    the whole day laid out. He found H Loop and the host sites himself (
                    <Moment ulid={SCOUTING} t="24:36" />
                    ), got his questions answered by two rangers on the way through (
                    <Moment ulid={SCOUTING} t="29:49" />
                    ), and out on the sand it landed: the places that resonate with him are the
                    ones he ends up back at, Cape Blanco, Humbug Mountain, now this one, and he
                    wanted to be here (
                    <Moment ulid={SCOUTING} t="33:04" />
                    ). Then the dune trail toward the ocean, his core still healing, pacing the
                    climb so it would heal right (
                    <Moment ulid={SCOUTING} t="35:00" />
                    ). The ocean was not on the other side (<Moment ulid="01JGSTFYCGV5RQE3567FT617B2" t="36:43" />). More dunes were, open sand running out
                    ahead of him, and he could take his Jeep out there (<Moment ulid="01JGSTFYCGV5RQE3567FT617B2" t="37:06" />). The morning after, he asked
                    the Tugman lead to print his host pass, because{" "}
                    <Cite ulid="01JGV6R8N0YYFHFJ1G9XNGBR72">at Honeyman he had felt he should
                    track down a ranger and announce his presence</Cite> without one on the dash.
                </P>
                <P id="pwhgpg" n={157}>
                    On January 8 the placement was{" "}
                    <Cite ulid="01JH3R3XER5WWFMXXZGGC756HP">confirmed for February</Cite>, site
                    383 in H Loop.{" "}
                    <Cite ulid="01JH461E9G4GDRT666JW4C9SMC">Very excited for this posting. Really
                    can&rsquo;t wait.</Cite> By January 20 he had{" "}
                    <Cite ulid="01JJ2RQWQ8TFH22MX75ABEAA4X">March as well</Cite>, welcome center
                    then yurt maintenance. On January 23 he asked about May, was told the
                    position had just been filled, and was{" "}
                    <Cite ulid="01JJAAASCREH0BTQRD3K67YE5X">walked through the ranger job
                    ladder</Cite> instead.{" "}
                    <Cite ulid="01JJAC44BGAMZ0BPPQZQ9DPFBD">Seasonal Ranger Assistant it is</Cite>,
                    he wrote back.
                </P>
                <P id="pe4g8d" n={158}>
                    In that same month he also took{" "}
                    <Cite ulid="01JJA5CHXGVTKJXAD11Z93V9ZW">April at Umpqua Lighthouse</Cite>,
                    applied for{" "}
                    <Cite ulid="01JJT7CZH0ARQVBSAMTTXV3Q9Z">Beverly Beach for October through
                    December</Cite>, and was assigned{" "}
                    <Cite ulid="01JJW9GBX8JE6PM7AR6SA7E4E0">September back at Tugman</Cite>, site
                    A42. By the end of January he had filled his own calendar through the
                    following autumn. Nobody handed him that year. He asked for every placement in
                    it. Two months later they pushed him out of all of it at once.
                </P>
                <P id="pgvqhn" n={159}>
                    The work itself was yurts. Twenty non-consecutive days of them (<Moment ulid="01JGW8ADPGEYBGKA40ZF27WH51" t="0:51" />), Fridays and
                    Saturdays off, and on January 5 he went into his{" "}
                    <Moment ulid={FIRST_YURTS} t="0:00">first shift</Moment> carrying a dread he
                    had not had to feel in a very long time (<Moment ulid="01JGW8ADPGEYBGKA40ZF27WH51" t="0:31" />). He did not argue with it. He counted
                    the days instead, because the count had a terminus and the terminus was
                    Honeyman. He brought a proposal: the deep cleans{" "}
                    <Moment ulid={FIRST_YURTS} t="1:48">at night</Moment>, since a yurt scheduled
                    for a deep clean cannot be booked anyway and his daylight was worth more than
                    the hours it would take (<Moment ulid="01JGW8ADPGEYBGKA40ZF27WH51" t="2:03" />). Approved. Training took twenty minutes a unit and
                    less time than the dread had required (<Moment ulid="01JGW8ADPGEYBGKA40ZF27WH51" t="9:45" />). Two things came out of that first day.
                    The other volunteers already knew about his Honeyman transfer before it was
                    official, which told him there was a gossip channel running through the park (
                    <Moment ulid={FIRST_YURTS} t="9:41" />
                    ). And his supervisor would not let him have the word. He kept telling her he
                    wanted to be a gatekeeper; she kept telling him they do not have gatekeepers,
                    they have seasonal park rangers. <em>Look, I want to be a gatekeeper, that&rsquo;s
                    what I want.</em> Fine, maybe it is called a seasonal park ranger, but he likes
                    the gatekeeper part, and the gatekeeper part is the point: the person at the
                    gatehouse causing sovereign moments with strangers (
                    <Moment ulid={FIRST_YURTS} t="11:51" />
                    ).
                </P>
                <P id="phkxqb" n={160}>
                    He filmed those shifts for himself and kept them private, because he knew what
                    was in them. They are the funniest thing in the archive. Shower at eight (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="1:14" />), back
                    by quarter to nine (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="1:21" />), walk to the lake (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="1:24" />), and wait, because the rangers hold the
                    workshop and the golf cart and the gate is still shut (
                    <Moment ulid={GOLF_CART} t="0:00" />
                    ). Then:{" "}
                    <Moment ulid={GOLF_CART} t="1:14">
                        we&rsquo;ll get my golf cart, we&rsquo;ll do some rounds around the park,
                        it&rsquo;s part of my morning protocol, very important one, got to check
                        out the campground, make sure everything is in order. It&rsquo;s got
                        nothing to do with having fun in a golf cart, I promise
                    </Moment>
                    .
                </P>
                <P id="pusakh" n={161}>
                    He called them his ranger rounds (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="0:27" />). He worked out which trail to take out past
                    the dump station and{" "}
                    <Moment ulid={GOLF_CART} t="1:14">where nobody could see him vaping</Moment>,
                    which was the genuinely hard part of the month for him and the first thing he
                    had ever had to hide from an employer, having never in his life been attached
                    to an institution. The next posting was the one he wanted, and on camera he
                    said why: the welcome center means{" "}
                    <Moment ulid={GOLF_CART} t="1:14">
                        meeting all the cute guys and giving them little passes for their little
                        dune adventures
                    </Moment>
                    , whereas this month it is yurts (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="1:57" />). A ranger at the lake was dragging a log out
                    of the water and he went over and helped, and the logs were heavier than they
                    looked, and he came out of it absolutely filthy (
                    <Moment ulid={GOLF_CART} t="2:27" />
                    ). Then the loops, each site checked against the occupancy sheet, who was
                    leaving, who had come in last night (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="6:50" />), whose batteries were dead again (
                    <Moment ulid={GOLF_CART} t="4:53" />
                    ). He circled the yurts three times knowing the rangers were watching him do
                    it, and he loved that (
                    <Moment ulid={GOLF_CART} t="7:09" />
                    ). He followed the rangers a while and broke off (
                    <Moment ulid={GOLF_CART} t="8:51" />
                    ). The closed loop was his obstacle course (<Moment ulid="01JH3GXCG8FAGZ0J2A4Z494DCK" t="9:59" />), and he ran the state&rsquo;s golf cart around it until he could
                    reverse and ninety-degree park the thing clean (
                    <Moment ulid={GOLF_CART} t="9:23" />,{" "}
                    <Moment ulid={GOLF_CART} t="10:34" />
                    ).
                </P>
                <P id="pqatsm" n={162}>
                    On January 9 he{" "}
                    <Moment ulid={FULL_DAY} t="3:49">
                        worked eight until nearly three against a four-hour cap
                    </Moment>
                    , cleaning four sites, doing yard work, screwing in a curtain (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="2:28" />), and he let the
                    cap slide because he was making himself part of this campground (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="4:31" />). Two campers
                    that day could not raise their jack without a crowbar (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="1:43" />), and Park Service policy
                    does not let a host lend a tool, and one of them told him he should not be
                    working there if he did not know what he was doing (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="2:07" />), honey. He came back to it
                    twice and both times left the refusal standing. She was having a bad day and
                    expected someone else to solve it (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="5:06" />). She also struck him as someone he could have
                    been good friends with, if her attitude had been different (
                    <Moment ulid={FULL_DAY} t="1:39" />
                    ). His cousin had told him to get a job, that volunteering did not count, and
                    he itemized what it does: rent, electric, water, laundry, a place to shower, and
                    a way into the Park Service. This is why he does not ask anyone for anything,
                    and why he is always the one giving it (
                    <Moment ulid={FULL_DAY} t="0:28" />
                    ).
                </P>
                <P id="p3hm8a" n={163}>
                    He ended that day with a woman living in a van who was new to it and afraid (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="5:39" />). He
                    told her which surge protector to get (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="5:45" />), and that she was safe to run her heater
                    at night, and that she could smoke where she was and was not doing anything
                    wrong, and where he sleeps if she needed anything (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="6:12" />). He gave her an emergency fire
                    blanket (
                    <Moment ulid={FULL_DAY} t="5:28" />
                    ). She has a transgender son and she is afraid of the elections and the
                    climate, and he told her she was already prepared, that this is why she has the
                    van and why he has the RV. He hiked out to the bench with an hour and a half of
                    light left and sat with what had just happened (<Moment ulid="01JH490Q40F6B9VHHFD1E3458W" t="8:20" />).                </P>
                <P id="pen5fx" n={164}>
                    The tool he was not allowed to lend is the first thing he noticed about the
                    institution, and once he had noticed it he saw it everywhere. Liability set the
                    shape of what a host could do for a guest, and it set it tighter than the guest
                    ever understood. He did with that what he does with any system he is dropped
                    into. He mapped it.
                </P>
                <P id="puaug7" n={165}>
                    On January 11, on a day off, he drove to Reedsport and bought the annual
                    national forest pass in physical form, because he wanted it visible on the
                    vehicle rather than filed electronically (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="10:27" />). He came away from that counter with a
                    volunteer application and the coordinator&rsquo;s phone number (
                    <Moment ulid={DUNES_TRIP} t="11:22" />
                    ). Then he hiked the Dellenback dunes in the rain (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="10:00" />), turned back at thirty percent
                    battery with the ocean still somewhere behind the fog (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="26:19" />), and stopped on the way
                    down for a single sapling standing alone in open sand. He called it sovereign (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="27:09" />).
                    That is how a forest starts, one thing deciding it will grow here (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="27:19" />), on its own
                    schedule: you can witness me, you cannot prescribe me (<Moment ulid="01JH9G50M8PZNS6N8HJYRJKSBC" t="27:32" />). He never returned the
                    application. He never called her. Eleven weeks later Oregon State Parks expelled
                    him from every park it runs, and within a month he was a Forest Service
                    volunteer in the Oregon Dunes National Recreation Area, the place he had walked
                    into that day.
                </P>
                <P id="p943a4" n={166}>
                    On January 26 he thanked the Tugman lead for the month and told her he had
                    found{" "}
                    <Cite ulid="01JJHN7GHRSVQCS362GGQHCK4C">a whole section of Honeyman on the
                    east side of the 101</Cite> he had not known about, with so much to explore.
                    At 3:29 in the morning on January 30, his last full day there, he{" "}
                    <Cite ulid="01JJVC50B03NZ87K6MV8ZNDZPR">wrote to thank her properly</Cite>:
                    the month had been memorable, and he sincerely looked forward to coming back
                    in September.{" "}
                    <Cite ulid="01JJWAARMGEMWRKHP950Z0KDFN">What a journey</Cite>, she answered.
                    He walked the lake{" "}
                    <Moment ulid={LAST_LAKE_DAY} t="0:24">one last time</Moment>, a lake he had
                    been out to at three in the morning and at ten at night and in pitch dark with
                    no light at all, moving by memory so he could see the stars (<Moment ulid="01JJW3X9E8V1NSNPRA0YD8DSVZ" t="0:46" />). He had helped people
                    here set up tents, and helped a woman through domestic violence (<Moment ulid="01JJX8DDAGA4JBXFVZ2E9Y3DQX" t="5:48" />), and made real
                    friends, and there was one ranger he would not miss and would see again in
                    September. Then he laid out the year ahead on camera, and it ran to September
                    and past it: two months at Honeyman, a month at the lighthouse (<Moment ulid="01JJW3X9E8V1NSNPRA0YD8DSVZ" t="1:05" />), a six-week drive
                    to Kentucky in May for the bottom implants and to see his mother (<Moment ulid="01JJX8DDAGA4JBXFVZ2E9Y3DQX" t="9:37" />), back by
                    September for Tugman again, then three months further up the coast running a
                    welcome center, with a stop at Great Basin timed to a meteor shower (
                    <Moment ulid={LAST_LAKE_DAY} t="1:00" />,{" "}
                    <Moment ulid={LAST_DAY_TUGMAN} t="9:35" />
                    ). He described it the way a person describes something already built. None of
                    this would come to be.
                </P>
            </Part>

            <Part n="Six" title="FEBRUARY">
                <P id="p6vcny" n={167}>
                    He arrived on January 31. That day started at four in the morning in a dark RV
                    with a flashlight, the tanks full of sanitizer since the day before, his own
                    shower and restroom suspended while the system ran its cycle (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="1:16" />). He put fresh
                    water in the black tank and deodorizer after it (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="1:34" />), and for the first time he
                    trusted the water and the tanks (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="3:33" />), which he had not when he got the RV and the
                    water smelled and the previous owner had never cleaned it and he did not know
                    how. Thirty-one minutes of it is on camera (
                    <Moment ulid={HONEYMAN_ARRIVAL} t="0:01" />
                    ). The walls of that home carry a map of the Oregon coast lighthouses, a map of
                    the dunes, a state park guide his supervisor had given him, and a sticker map
                    of the United States with the crossing he had already made on it, state by
                    state (
                    <Moment ulid={HONEYMAN_ARRIVAL} t="8:51" />,{" "}
                    <Moment ulid={HONEYMAN_ARRIVAL} t="10:02" />
                    ). That map will never be complete. It will be his version of complete (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="12:43" />). He
                    walked out to the Eel Lake dock at Tugman in the rain one last time (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="15:41" />), the ducks
                    that migrate in for winter still on the water (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="16:06" />), hitched the Jeep, and drove
                    twenty-three miles north up the 101 (
                    <Moment ulid={HONEYMAN_ARRIVAL} t="15:20" />
                    ).{" "}
                    <Moment ulid={HONEYMAN_ARRIVAL} t="19:54">The drive in</Moment>, then{" "}
                    <Moment ulid={HONEYMAN_ARRIVAL} t="22:12">finding site 383 in H Loop</Moment> at{" "}
                    <PlaceCite name="Honeyman" />:
                    no cell service, partial sky for Starlink (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="24:54" />), a transmission problem in the Jeep
                    he had been cautious with for a month (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="19:06" />). It is always about adaptation (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="30:46" />). You make
                    the best of the situation, and he was not down about it (<Moment ulid="01JJYYB02GVMZGVY2REN12VBBV" t="30:51" />). On his first full day
                    he wrote:{" "}
                    <Cite ulid="01JK1ZDEAG5NW79J326PR247DW">Thank you for today. I feel good about
                    my time here.</Cite>
                </P>
                <P id="pc4dew" n={168}>
                    That night he watched someone cut across the landscape with a flashlight to
                    close the park gate, and{" "}
                    <Cite ulid="01JK2KXMC0WRNWKNS57C1NWGZ0">offered to keep the gate through
                    March as well, if he could keep his site, even on his days off</Cite>. He was negotiating. The host site came with a role attached and the
                    role changed every month, so keeping the site meant finding a reason for them
                    to leave him in it. The gate was directly across from where he lived, and he
                    wanted the site, and he wanted to take that walk off whoever had been making
                    it. He put all of that in the email. He had done the same thing days earlier
                    with the yurts, proposing the deep cleans at night on the grounds that a yurt
                    booked for a deep clean cannot be rented anyway and his daylight was worth
                    more, and that one was approved. The one piece of equipment he asked for was{" "}
                    <Cite ulid="01JK9AMY6R0JFTW5TFYZDQJ47J">a box of rubber gloves</Cite>.
                    Medium. Black. The chain was rusty. He never got them.
                </P>
                <P id="pczjww" n={169}>
                    He specified the colour. For a chain. In the dark. Alone. Where the only
                    witness was a gate. Black, obviously. He was not going to be seen in a beige nitrile. He asked how to
                    handle the edge cases: a guest arriving after ten, someone needing out before
                    seven.
                </P>
                <P id="ptkmkb" n={170}>
                    He also told them what the email volume was:{" "}
                    <Cite ulid="01JK3M5C00A4ETZDE5ND79ZA4H">this is part of my integration
                    process, it is how I navigate new experiences, and as my rhythm establishes
                    you will rarely field items from me.</Cite> He was two weeks in. He communicates
                    in writing, and has his whole life. It was never a problem for him. It is for
                    some people, and he could already sense it was a problem with this institution.
                </P>
                <P id="pfcr6t" n={171}>
                    The rest of that month went like this. On February 5 he told the Tugman lead he had landed{" "}
                    <Cite ulid="01JKC3VPR0GTKBBAQWWH3R85MZ">Humbug Mountain for May and
                    June</Cite>, one of the parks where a ranger had first told him to apply.{" "}
                    <Cite ulid="01JKC93XJ05B7ZFFY3MS9AV43A">Excellent! Congrats!</Cite> she wrote
                    back.
                </P>
                <P id="p9f6s5" n={172}>
                    Then, for three days, he tried to decide whether to go home.{" "}
                    <Cite ulid="01JKF6G3M8NX640BGD3ER4Z04C">On one hand I want to establish a
                    reliable relationship with you</Cite>, he wrote to her about the September
                    assignment, and on the other he needed to see Kentucky, probably for the last
                    time.{" "}
                    <Cite ulid="01JKFPQBV0HXGGDP18TK6TKNFD">If this would hurt me in any way, I
                    will stay.</Cite>{" "}
                    <Cite ulid="01JKH35MH8DDW6GM9KDZP6192J">Cancelling well in advance
                    doesn&rsquo;t cause any problems</Cite>, she answered. Then another park
                    offered him October through December, and he wrote the sentence that decided
                    it:{" "}
                    <Cite ulid="01JKHBTC08R0NSCM7E9PZY3VMJ">I don&rsquo;t think I&rsquo;m allowed
                    to go home. If I stay, I may never see my mom again. She tells me to
                    stay.</Cite> He{" "}
                    <Cite ulid="01JKHFX9ERAK7GYVWKTHB95T27">stayed</Cite>. Oregon State Parks
                    dismissed him six weeks later.
                </P>
                <P id="ph4u8x" n={173}>
                    On February 8 he documented{" "}
                    <Cite ulid="01JKK0MZKR89J2YR53KH2JWBDT">the utility failures in H Loop</Cite>,
                    including the three guests who came to his site during a water shutoff, one of
                    them aggressive, and asked what the protocol was. At three the next morning
                    the power went out across the loop. He was a new volunteer, it was pitch
                    black, and he had been told at orientation that he could text the supervisor.
                    He waited until six anyway, because he did not want to be the volunteer who
                    woke her. She answered by text, and the quick answer made him feel small. He did what he does. He wrote it down. He followed the text with{" "}
                    <Cite ulid="01JKMXJCF8D4M3JQHEH9G94SBP">an email asking who to contact in an
                    emergency</Cite>.{" "}
                    <Cite ulid="01JKRMYTC8KZCWWMCGCWFZH2MA">The apology came the next day</Cite>:
                    it had not been her intent, she wrote, and she sent along the protocols and the
                    outage map.{" "}
                    <Cite ulid="01JKRNVP6RQ12HQYQJ8A35C50J">This is exactly what I needed to
                    better serve our guests</Cite>, he wrote back.
                </P>
                <P id="p45bnv" n={174}>
                    The institution&rsquo;s file turns those same weeks into a case. Its entries
                    are its own characterisations, not findings, and they are answered one by one,
                    with the emails themselves, at{" "}
                    <Link href="/sunlight" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        sunlight
                    </Link>
                    . It logs{" "}
                    <SunCite entry="02-19-25-heavy-things">that he mentioned trouble
                    sleeping</SunCite>, which he did, and the reason is in the same file: he had
                    asked for the gate, and he had it, and the gate is a ten o&rsquo;clock and a
                    seven o&rsquo;clock every day of the week. It logs{" "}
                    <SunCite entry="02-26-25-patrick">that he worked with one of the
                    rangers</SunCite>,{" "}
                    <SunCite entry="02-27-25-the-poem">that he sent a poem and asked what they
                    thought of it</SunCite>,{" "}
                    <SunCite entry="02-28-25-friends">that he asked for a good review and for help
                    finding assignments elsewhere on the coast</SunCite>, and{" "}
                    <SunCite entry="02-25-25-the-piercing-email">that he mentioned a video showing
                    a new piercing</SunCite>. Of the conversation in which he withdrew his job
                    application it asserts{" "}
                    <SunCite entry="02-12-25-the-fabricated-quotation">that he began saying he
                    believed the world was going to end</SunCite>.
                </P>
                <P id="p6yxxp" n={175}>
                    What the file does not record is what those weeks did. On February 11, the day
                    after the apology, the park manager came to the welcome center and spent an
                    hour on his first-week mistakes. The next morning, at 8:22, he{" "}
                    <Cite ulid="01JKXC1M80V9A90EV4SX6BFJ35">wrote to all three of them</Cite> and
                    asked for a reset: I will conform, I will recalibrate, I will be a model
                    volunteer.{" "}
                    <Cite ulid="01JKXHEPAR0PEQMPJXJGG9GZJ4">A reset sounds good to me</Cite>, came
                    back ninety minutes later. Then they met at the day use area, and at 9:42 that
                    night he{" "}
                    <Cite ulid="01JKYSTM48Y0QK5CM8QSD0QC6X">applied for the seasonal ranger
                    assistant job</Cite> at the park, and said as much the same night in{" "}
                    <Cite ulid="01JKYWWYKR8F67JQGVNF5V44WP">a note to the Tugman lead</Cite>.
                </P>
                <P id="p5xxba" n={176}>
                    The reason he withdrew was the park supervisor. She was the hiring manager for
                    the seasonal staff, and the application had gone directly to her. On February 15
                    she found him at the welcome center and asked what his plans for the summer
                    were, saying nothing about the application, though she had it. He told her he
                    hoped to stay, and, when she asked what he wanted, why he had come to volunteer
                    at all: to become a park ranger, to give the second half of his life to
                    something he believed in. She closed up, looked away, and said nothing for
                    minutes while he kept answering the question she had asked. When nothing came
                    back, he stopped talking and went inside. The next evening he{" "}
                    <Cite ulid="01JM9193N021MEHRXWSR30NWT5">withdrew the application</Cite>. He gave
                    no reason and said nothing to her.
                </P>
                <P id="pe2nhj" n={177}>
                    He set out the chain himself three weeks afterward, addressed to the ranger he
                    had trusted, in{" "}
                    <Cite ulid="01JNBNSRN04NEM4MEZJG40Q3N5">the email he titled Trust.</Cite> He
                    had confided in him about the situation with the supervisor, and the ranger
                    escalated it instead of protecting him, and then disappeared. When he applied
                    for the job the ranger distanced himself again. The moment he withdrew the
                    application the ranger reappeared, and spent ninety minutes talking about
                    himself. When he finally opened up about why he was there and what he had given
                    up to be there, the ranger tried to manage how he saw it rather than listen,
                    and then went distant a third time. And when he warned the ranger privately, so
                    that the thing with the supervisor would not happen twice, he was promised
                    training from another ranger, and no one had arranged it.
                </P>
                <P id="p696cf" n={178}>
                    What he was actually doing that month is on camera twice. On February 4 he
                    walked out past the day use area to where{" "}
                    <Moment ulid={DUNES} t="0:45">
                        a small dune opens onto a pocket of forest
                    </Moment>{" "}
                    with more dunes past it and the ocean somewhere beyond, which he had not
                    reached yet. Turmeric, maca root, whey, frozen chicken breast in the RV and a
                    Ninja Foodi he meant to learn on: two months of work aimed at holding his core
                    together so it could carry the life he was building (
                    <Moment ulid={DUNES} t="1:06" />
                    ). He felt very good. He loved his life. Part of him was sad he had not been
                    living this way twenty years earlier, and part of him did not want it to end,
                    and he wanted to be this age forever (
                    <Moment ulid={DUNES} t="1:58" />
                    ). Mid-stride he did the arithmetic out loud, and got it wrong once and
                    corrected it: he was booking February, March and April at this park for the{" "}
                    <em>following</em> year (<Moment ulid="01JK8ZMWJRV9QWPX619AVRZE8M" t="2:27" />), so that he would be here when the dune season closed,
                    and he would be forty-nine when he came back (
                    <Moment ulid={DUNES} t="2:17" />
                    ). He set the number down without flinching from it and kept walking.
                </P>
                <P id="pz65v7" n={179}>
                    On February 25, the day the institution&rsquo;s file records an email about a
                    video showing his new piercing, he drove ninety minutes inland to Eugene on his
                    day off (<Moment ulid="01JMY11BH8QJN5A5VYXNTEQTT4" t="1:21" />), to a studio newly opened under a piercer decades into the craft (<Moment ulid="01JMY11BH8QJN5A5VYXNTEQTT4" t="1:28" />), and
                    came back with{" "}
                    <Moment ulid={PIERCINGS} t="0:16">an eyebrow and two helix piercings</Moment>,
                    the eyebrow already bruising and getting worse while he filmed. He had left the
                    studio giggling, so happy he had finally done it. He had wanted more and would
                    be back for the rest (<Moment ulid="01JMY11BH8QJN5A5VYXNTEQTT4" t="0:46" />,{" "}
                    <Moment ulid="01JMY11BH8QJN5A5VYXNTEQTT4" t="1:17" />). It was showing, and he was
                    in a public-facing role, and that was fine. Worth it (<Moment ulid="01JMY11BH8QJN5A5VYXNTEQTT4" t="0:31" />). The work itself was the good part: the welcome center slow that season and
                    amazing anyway, guests almost always kind, several of them flirting with him
                    in ways he only caught afterward, and the other volunteers bringing him their
                    lives. He listened. He witnessed them (
                    <Moment ulid={PIERCINGS} t="2:57" />
                    ). In the same recording the next twelve months are already drawn along the
                    coastline: one more month here, a month of yurts, his birthday month back with
                    his first supervisor, two months at the mountain, Kentucky and back over the
                    summer to see his mother and his cat, September at Tugman, October through
                    December at a beach welcome center ninety minutes north, the furthest north he
                    had reached (
                    <Moment ulid={PIERCINGS} t="4:29" />,{" "}
                    <Moment ulid={PIERCINGS} t="5:10" />
                    ).                </P>
                <P id="pybchp" n={180}>
                    What finally made him send it was the training. He had warned the ranger
                    privately, and been promised that another ranger would train him; when he checked, that
                    ranger knew nothing about it. He wrote Trust. at 6:57 the next morning. An hour and a
                    half later he{" "}
                    <Cite ulid="01JNBTPJ7GF0TJTD01ZVGVSPBG">forwarded it to the supervisor
                    himself</Cite>, telling her he was sending it because he knew she would get a
                    copy anyway, and adding: I am not escalating. I am informing.
                </P>
            </Part>

            <Part n="Seven" title="THE PICNIC TABLE">
                <P id="pvfypv" n={181}>
                    Three days after he sent Trust., the park manager and the park supervisor sat
                    him down at a picnic table in the day use area and talked at him for
                    sixty-two minutes. The institution&rsquo;s file logs it as a meeting held{" "}
                    <SunCite entry="03-05-25-the-meeting">to set clear expectations for behavior
                    and actions needed from Sam to continue being a park host</SunCite>. He was
                    unpaid, one month in, with no union, no HR, no recourse, and nobody at that
                    table on his side. So he recorded it. The meeting existed twice from that point
                    forward: once as the thing they were conducting, once as the thing he was
                    keeping.
                </P>
                <P id="p49369" n={182}>
                    The praise comes first (
                    <Moment ulid={PICNIC} t="0:00" />
                    ), and it is the floor being laid before the weight goes on it: a great job at
                    the welcome center, the lost and found handled correctly, procedures followed (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="0:19" />).
                    The double shift he had worked alone, staying past the end of it to find a woman
                    a campsite, was not on their list. He put it on the record himself. Offered the
                    chance to speak first, he would rather hear what they had to say (
                    <Moment ulid={PICNIC} t="1:24" />
                    ). The meeting was framed as a support structure, the park manager&rsquo;s role
                    being to set people up for success (
                    <Moment ulid={PICNIC} t="1:49" />
                    ).
                </P>
                <P id="pw2k8m" n={183}>
                    Two minutes in, the frame gave way to the actual business. The park manager had
                    read his correspondence and had come to believe he felt unsupported, and in the
                    same breath that he was not supportive of the crew (
                    <Moment ulid={PICNIC} t="2:53" />
                    ). There was a single handwritten sheet of paper on the table in front of the
                    manager, and he looked at it often. A month of emails and texts had been read,
                    interpreted, and written down as conduct (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="4:19" />).
                </P>
                <P id="pme8u2" n={184}>
                    The first item off the sheet lands at{" "}
                    <Moment ulid={PICNIC} t="3:52">three minutes and fifty-two seconds</Moment>:
                    dissatisfaction with multiple members of the crew. Named on the list were the
                    park manager himself, the park supervisor, the volunteer services lead, and two
                    rangers, Park Ranger 1 and Park Ranger 2. He had never criticised the park manager, and he
                    had never criticised Park Ranger 1, and forty-seven seconds later he was told he did
                    not have to agree with it
                    (
                    <Moment ulid={PICNIC} t="4:39" />
                    ). That is the mechanism, and it ran for the next hour: a correction is offered,
                    the correction is absorbed, nothing is struck, the list advances. Item two was a
                    trend, that he pushed back when given guidance (
                    <Moment ulid={PICNIC} t="5:33" />
                    ). Then, twice,{" "}
                    <Moment ulid={PICNIC} t="6:26">this isn&rsquo;t an argument</Moment>.
                </P>
                <P id="pdavyh" n={185}>
                    The evidence against Park Ranger 2 was that he had said <em>I&rsquo;m here to
                    support you</em> and had gone on saying it across an hour (
                    <Moment ulid={PICNIC} t="6:59" />
                    ). He had no problem with him (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="7:23" />), who was very polite and whom he navigated the
                    way he navigates everybody (
                    <Moment ulid={PICNIC} t="8:13" />,{" "}
                    <Moment ulid={PICNIC} t="8:36" />
                    ). What he had actually reported was not that ranger at all. It was that the
                    volunteer services lead had told him Park Ranger 1 would run his orientation (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="6:09" />), and at that
                    table the park manager confirmed the lead had known otherwise when he said it (
                    <Moment ulid={PICNIC} t="7:33" />
                    ). Nine minutes in, Park Ranger 2 was still the only subject that had been raised
                    (
                    <Moment ulid={PICNIC} t="9:12" />
                    ). At ten thirty-six he supplied the actual examples, including the call log of
                    a guest escalation, and <em>don&rsquo;t get your hopes up</em>, said twice,
                    unprompted (
                    <Moment ulid={PICNIC} t="10:36" />
                    ). The instruction back was to handle the man differently, be more direct, have
                    a conversation with him (
                    <Moment ulid={PICNIC} t="12:12" />
                    ). He had already been working out how to do exactly that (
                    <Moment ulid={PICNIC} t="13:18" />
                    ). There had never been a confrontation (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="14:44" />). Every interaction had been respectful
                    (
                    <Moment ulid={PICNIC} t="14:29" />
                    ).
                </P>
                <P id="pqt3ev" n={186}>
                    At fifteen minutes it turns to the emails (
                    <Moment ulid={PICNIC} t="15:11" />
                    ), and then immediately away from them: the emails were not the issue,
                    communication was good, communication was healthy (
                    <Moment ulid={PICNIC} t="15:20" />
                    ). Then a charge about what his emails contained. The manager said they showed
                    that the volunteer services lead had lost his trust by sharing information with
                    the manager and the supervisor (
                    <Moment ulid={PICNIC} t="15:45" />
                    ). He answered, more than once, that no such thing was in the emails and that he
                    did not know what the manager meant (<Moment ulid={PICNIC} t="16:03" />). He had
                    never hidden that he did not trust the volunteer services lead. The Trust email
                    says so in a single word. What he had not written was the cause the manager was
                    now putting in his mouth. He told the manager to go back and read it; the manager
                    said only that he believed the word was in there. It was not (<Moment ulid={PICNIC} t="16:24" />),
                    and the manager moved to the next thing (
                    <Moment ulid={PICNIC} t="16:29" />
                    ). What he put down in its place was the plainest thing anyone put on that
                    table:{" "}
                    <Moment ulid={PICNIC} t="17:52">
                        <em>I am a very direct person. I mean what I say. You do not have to read
                        subtext into anything I write</em>
                    </Moment>
                    .
                </P>
                <P id="puverh" n={187}>
                    That sentence became the next charge inside a minute. Words have inflection (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="18:56" />).
                    Bolded text has inflection (
                    <Moment ulid={PICNIC} t="18:59" />
                    ). Tone. Threatening tone. Twenty-five exclamation points (
                    <Moment ulid={PICNIC} t="19:17" />
                    ). He was asked to agree that bolding a word was evidence of a threatening tone
                    (
                    <Moment ulid={PICNIC} t="20:30" />
                    ), and given the list of what had been read that way, which included asking for
                    help getting a job somewhere else (
                    <Moment ulid={PICNIC} t="21:31" />
                    ).
                </P>
                <P id="p2ux2d" n={188}>
                    At twenty-two forty the power at the table was made explicit: park manager,
                    fifteen years in the agency, half of it in management (
                    <Moment ulid={PICNIC} t="22:40" />
                    ), disciplinary processes (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="23:13" />), HR. And then, with that established, the model of the
                    good subordinate:{" "}
                    <Moment ulid={PICNIC} t="23:17">to chew glass and swallow it</Moment>, offered
                    as wisdom, as the thing that had made the speaker stronger (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="23:53" />). He declined the
                    model by giving it nothing at all (
                    <Moment ulid={PICNIC} t="24:38" />
                    ), and the subject changed to a story about a camper with a beaten-up truck (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="24:52" />).
                </P>
                <P id="p75art" n={189}>
                    The rest of it is a man being asked (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="24:30" />), over and over, to assume positive intent
                    about everyone else at that park (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="50:10" />). It was already his default (
                    <Moment ulid={PICNIC} t="27:06" />
                    ), and he did not think the ranger was out to get him (
                    <Moment ulid={PICNIC} t="27:33" />
                    ). He was asked to stop sending follow-up emails and keep communications
                    work-related (
                    <Moment ulid={PICNIC} t="29:16" />
                    ). Thirty minutes in, the org chart was corrected for the first time: the
                    volunteer services lead had no supervisory authority over him at all (
                    <Moment ulid={PICNIC} t="29:52" />
                    ). At thirty-four thirty-two the park manager looked down at the paper at
                    something he was not ready to say (
                    <Moment ulid={PICNIC} t="34:32" />
                    ).
                </P>
                <P id="p97tn5" n={190}>
                    What came off the paper was the non-work emails and texts to park staff (
                    <Moment ulid={PICNIC} t="36:20" />
                    ), the red book he had brought to them himself (
                    <Moment ulid={PICNIC} t="35:30" />
                    ), and eventually the poem about the ocean he had sent the volunteer services
                    lead, the one about what brought him to the coast (
                    <Moment ulid={PICNIC} t="43:04" />
                    ). At forty-two eighteen he stopped the man before the insinuation could be
                    finished:{" "}
                    <Moment ulid={PICNIC} t="42:18">
                        <em>I think you don&rsquo;t want to actually say what you&rsquo;re about to</em>
                    </Moment>
                    . Then the shape of the case: every other week there was an instance, a pattern,
                    consistent throughout the month (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="44:20" />). He asked for the instances (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="44:42" />), and two were
                    produced. The first was the incident with the park supervisor (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="44:46" />). The second was
                    the park manager&rsquo;s own visit, which happened the same day, about the same
                    thing, and which the reset was supposed to have closed (
                    <Moment ulid={PICNIC} t="44:22" />
                    ). One day, split into two, spread across a month, and called a pattern. That
                    was the case, on a handwritten sheet of paper, with not one email quoted.
                </P>
                <P id="pq4nv8" n={191}>
                    He asked if they were good moving on (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="45:10" />). He had put it so far behind him that he
                    had applied for a job there (
                    <Moment ulid={PICNIC} t="45:10" />
                    ). That application went in after the reset. The park manager said that was
                    good, and went back to his paper.
                </P>
                <P id="pt8mzc" n={192}>
                    What came off it next was the withdrawal email. He had pulled out of the
                    application and given no reason (<Moment ulid={PICNIC} t="47:03" />), and the
                    park supervisor had read his silence as an accusation against her and carried it
                    for weeks without ever saying so to him, until it became an observation on the
                    list. On tape the park manager put the charge to him: that he believed she had
                    asked his summer plans only because she knew he had applied. The manager called
                    it the most false thing he had ever heard (<Moment ulid={PICNIC} t="46:01" />).
                    He answered that he had never said any such thing, that it was in no email and
                    no text (<Moment ulid={PICNIC} t="46:15" />); asked where it came from, the
                    manager pointed to the supervisor (<Moment ulid={PICNIC} t="46:29" />). She
                    spoke for the second time in forty-six minutes, to say she had taken his
                    withdrawal as being about her question (<Moment ulid={PICNIC} t="46:32" />). It
                    was{" "}
                    <Moment ulid={PICNIC} t="47:27">news to him</Moment>. He de-escalated: he had
                    given no reason in the email, and he had never made it an issue with her, and
                    she agreed (<Moment ulid={PICNIC} t="46:58" />). A moment later he told her he
                    had let it go and that he liked her; she said okay (<Moment ulid={PICNIC} t="48:37" />).
                    The park manager told him words have meaning and get interpreted (<Moment ulid={PICNIC} t="47:38" />),
                    and he named exactly what was being done to him: he was being held responsible
                    for other people&rsquo;s thoughts.
                </P>
                <P id="pr5wdk" n={193}>
                    Then he turned to the park supervisor directly. He had completely let it go (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="48:36" />), and
                    he liked her. She said okay (
                    <Moment ulid={PICNIC} t="48:34" />
                    ).
                </P>
                <P id="p6qtrn" n={194}>
                    At fifty minutes he turned it around. If positive intent is the standard, then
                    apply it here:{" "}
                    <Moment ulid={PICNIC} t="50:10">
                        <em>I&rsquo;m not getting that benefit of the doubt</em>
                    </Moment>
                    . There is a silence. Then: I see where you&rsquo;re coming from. I may not be
                    able to help you with that (
                    <Moment ulid={PICNIC} t="50:35" />
                    ). The month had started out being proven otherwise (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="52:36" />), and it was hard to put that
                    to rest. That is the admission, fifty minutes into an hour spent instructing him
                    to extend to everyone else the exact thing he was refused on request.
                </P>
                <P id="pne9g6" n={195}>
                    He apologised to the park supervisor again anyway (
                    <Moment ulid={PICNIC} t="52:01" />
                    ), asked them to assume positive intent with him (
                    <Moment ulid={PICNIC} t="53:27" />
                    ), and after an hour of it still genuinely did not see the issue (
                    <Moment ulid={PICNIC} t="53:58" />
                    ). He conceded the only concrete thing anyone had actually asked of him:{" "}
                    <Moment ulid={PICNIC} t="54:56">
                        <em>you won&rsquo;t have to worry about emails from me</em>
                    </Moment>
                    .
                </P>
                <P id="pxygmq" n={196}>
                    The last two minutes are what the hour was for. Four times, the park manager
                    told him he should not feel obligated to stay, that if it did not feel right he
                    would never expect him to stay, that life is too short (
                    <Moment ulid={PICNIC} t="59:31" />
                    ). He had already given the terminal read himself: he had wanted a future at
                    Honeyman, that was no longer possible, and he would finish the month (<Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="59:26" />). His last
                    correction was the shortest one. He did not feel obligated. He was there by
                    choice. Nothing in those sixty-two minutes is a warning, a written standard, or
                    a document.
                </P>
                <P id="pur8vj" n={197}>
                    Then he texted the recording to the park supervisor. The institution&rsquo;s
                    file has that,{" "}
                    <SunCite entry="03-05-25-the-recording">worded as though it were a
                    discovery</SunCite>. It was not discovered. He sent it to her, deliberately and
                    directly, because he had worked out that she was the source of all of it and
                    that the park manager was a hothead, and that going through the hothead would
                    only escalate. Sending her the tape was a move on a board. It said: I have the
                    hour, you and I both know what is on it, this is a stalemate. It said stop.
                </P>
                <P id="ptaaag" n={198}>
                    Five days later the program manager called him about it, and he recorded that
                    call too. Their entry says{" "}
                    <SunCite entry="03-10-25-the-admonition">she explained that as a volunteer,
                    Sam is an agent of the state and as such is held to a higher standard, so he
                    cannot record conversations without informing the other parties present</SunCite>.
                    What is on his recording of that call is that they were public officials in a
                    public setting, and her answer was that as a volunteer he was an agent of the
                    state. Nothing about a higher standard. That phrase was written into the file
                    afterward.
                </P>
                <P id="p77dmm" n={199}>
                    He kept working. On March 16 he marked a year since he bought the RV (<Moment ulid="01JPFQSYSR2783EPWKDE04M27P" t="0:08" />), a year
                    since he walked out of a twenty-year life in Kentucky that was working by every
                    metric and was killing him (<Moment ulid="01JPFQSYSR2783EPWKDE04M27P" t="0:38" />), and he was off every medication he had taken for
                    those twenty years (
                    <Moment ulid={ONE_YEAR} t="2:09" />
                    ). On March 23, a Saturday, he{" "}
                    <Moment ulid={ROOF} t="0:20">climbed onto the roof of his RV</Moment> for the
                    first time in six months and stayed up there after the cleaning was done,
                    watching the ATVs come through the gate at dusk (
                    <Moment ulid={ROOF} t="0:52" />
                    ). The nerve for it came from the cliff edge at{" "}
                    <PlaceCite name="Cape Blanco" />, the same body in a smaller frame (<Moment ulid="01JQ0EDSZ8GRK7CD0ZJPVCZX0D" t="0:33" />). His fear of
                    heights was severe enough that it had kept him off the roof of his own home for
                    six months. He had started this journey afraid to be seen at all (<Moment ulid="01JQ0EDSZ8GRK7CD0ZJPVCZX0D" t="1:45" />), and he was now
                    sitting in the most visible position in the campground (<Moment ulid="01JQ0EDSZ8GRK7CD0ZJPVCZX0D" t="2:25" />), at peace with what he
                    had built, expecting hard times and already built for them (
                    <Moment ulid={ROOF} t="2:42" />
                    ). He photographed it from up there (
                    <PhotoCite
                        signal={ROOF_PHOTOS}
                        photo="01KXEZ1W720HHY89HTFMR1C07D"
                        caption="From the roof of the RV at Honeyman, the evening before the dismissal"
                        taken="March 23, 2025 · 5:54 PM"
                    >
                        5:54
                    </PhotoCite>
                    ,{" "}
                    <PhotoCite
                        signal={ROOF_PHOTOS}
                        photo="01KXEZ1W7427VQWP8QME23ABDD"
                        caption="Honeyman, the evening before the dismissal"
                        taken="March 23, 2025 · 5:55 PM"
                    >
                        5:55
                    </PhotoCite>
                    ). The park manager called him the next afternoon.
                </P>
            </Part>

            <Part n="Eight" title="NINETEEN DAYS">
                <P id="pnqxwe" n={200}>
                    Between the picnic table and the dismissal he did the job and kept asking
                    about the next one. On March 6 he put himself forward to{" "}
                    <Cite ulid="01JNP97GTGCMEC62J4JVYA61DJ">gain experience as a relief host</Cite>{" "}
                    at Umpqua, and was happy to keep cleaning yurts if that was what they needed.
                    On March 14 he cleared his departure for the 31st, a day he was scheduled to
                    work, and{" "}
                    <Cite ulid="01JPB69WN8ZN24M2GXDGEZNFDG">was told it was fine</Cite>.
                </P>
                <P id="pc9qr6" n={201}>
                    Four days after the picnic table, in a Saturday night update from inside the
                    RV, he named the shift off the welcome center desk and onto yurts and
                    campsites. He reached for the word for what it was, discarded fun, and landed on
                    rewarding (
                    <Moment ulid={YURTS_REWARDING} t="3:36" />
                    ). The 28th had been his last day at the welcome center. He worked a double and
                    stayed an hour past it for a woman from Canada until she had a campsite (<Moment ulid={YURTS_REWARDING} t="3:58" />), and she found him the next day to thank him (
                    <Moment ulid={YURTS_REWARDING} t="4:36" />
                    ).
                </P>
                <P id="pmx6yc" n={202}>
                    On March 15, his day off, he walked the service road in the rain out to the
                    vantage over the 101 bridge, taking the ledger with him (
                    <Moment ulid={BRIDGE_DAY} t="1:03" />
                    ). The slide-out on the RV had been broken for eight months (<Moment ulid="01JPDYW5XRGQZ310XDSE0G1F14" t="4:28" />), and the wind off
                    the dunes came at the angle that found the crack at the top of it (<Moment ulid="01JPDYW5XRGQZ310XDSE0G1F14" t="4:42" />). He had asked
                    the rangers for a ladder and been refused, so he parked the Jeep as close as it
                    would go, climbed the tire, climbed the hood, and sealed what he could reach (<Moment ulid="01JPDYW5XRGQZ310XDSE0G1F14" t="5:19" />).
                    It did not hold (<Moment ulid="01JPDYW5XRGQZ310XDSE0G1F14" t="5:26" />). He did it again (
                    <Moment ulid={BRIDGE_DAY} t="4:14" />
                    ).
                </P>
                <P id="p83p7j" n={203}>
                    On March 20 he learned the other volunteers had been talking among themselves
                    about his broken slide and his bed platform, working out between them how to
                    fix it for him (
                    <Moment ulid={ADAPTATION} t="0:01" />
                    ). It amused him. They were doing what a campground does, and they had it the
                    wrong way round. He filmed the alcove he sleeps in, the one he had crossed the
                    country in, and called it what he has always called it, a Navy barracks, and
                    himself a man in a submarine (
                    <Moment ulid={ADAPTATION} t="1:07" />
                    ). The slide stays retracted on purpose (<Moment ulid="01JPT0QH58P1JM6HVSQDNQ1A7B" t="1:21" />). Extended, it throws the weight to one
                    side and the tires start losing pressure (<Moment ulid="01JPT0QH58P1JM6HVSQDNQ1A7B" t="1:43" />); retracted, the void above it is the
                    storage he had been short of. Adaptation, as he uses the word, is removing what
                    is inefficient and continuing to move, not chasing comfort (
                    <Moment ulid={ADAPTATION} t="4:21" />
                    ). This is not a problem to solve (
                    <Moment ulid={ADAPTATION} t="5:14" />
                    ).
                </P>
                <P id="p4r7wh" n={204}>
                    On March 16 the tent structure on his golf cart{" "}
                    <Cite ulid="01JPFK4TB0V1JVBH266AK81P0T">would not zip shut</Cite> on the
                    driver&rsquo;s side, and he reported it. On March 17 he put two other volunteers
                    at Honeyman forward for a position at another park, unasked, because{" "}
                    <Cite ulid="01JPJDGZ5G3WCA90BJTQ5EWNG1">they are awesome people and very hard
                    working</Cite>. On March 18, while the rangers were all away at
                    meetings, a man walked into his work area, claimed the park service, and began
                    photographing yurts that were still dirty because he was in the middle of
                    cleaning them. No name, no uniform, no visible identification. Then the
                    questions:{" "}
                    <Cite ulid="01JPNSRRZ0358ZTTN8NMXHESYP">
                        how I like the park, how I&rsquo;m being treated here
                    </Cite>
                    . He wrote it up to the supervisor the same afternoon, flagged the timing,
                    and asked whether it was an official visit.{" "}
                    Her answer, fifty-six minutes later, was that I.T. staff were getting updated
                    photos of sites all over the state, that it was not unusual for people to want
                    to look inside a yurt, and that she could follow up with I.T. to see if anyone
                    had been out that day.{" "}
                    <Cite ulid="01JPNX0J88PQE161MCS09FZA6C">I think you handled it
                    wonderfully</Cite>, she wrote.
                </P>
                <P id="pv9mhd" n={205}>
                    The same evening he made a video about the man, and he was amused. It had
                    happened again, he announced: a man had fled from him and failed spectacularly,
                    because he knows he is not the problem (<Moment ulid={SILTCOOS_DAY} t="0:01" />).
                    This was the one who had walked into his work area out of nowhere, no name and
                    no badge, to ask how he was being treated, and he had found him cute and tall
                    and sexy, with an assertive streak he actually liked, since few men are
                    assertive with him (<Moment ulid={SILTCOOS_DAY} t="0:12" />). The man kept
                    asking his questions; he smirked and answered none of them, so the man came
                    at it another way, and another, never leaving room for the answer he was never
                    going to get (<Moment ulid={SILTCOOS_DAY} t="0:31" />), until he blew up and
                    left (<Moment ulid={SILTCOOS_DAY} t="0:53" />). A shame, because the man was
                    quite keen, and he would have done some things to that man (
                    <Moment ulid={SILTCOOS_DAY} t="2:02" />
                    ). What ruins these moments, he said, is the posturing: the connection is right
                    there if a man will just be real instead of running a script (<Moment ulid={SILTCOOS_DAY} t="1:10" />).
                    He does not present as someone who will play the power games, and that is not
                    his problem, it is theirs (<Moment ulid={SILTCOOS_DAY} t="1:49" />). He had lost
                    nothing. Maybe some shadow sex (<Moment ulid={SILTCOOS_DAY} t="3:38" />).
                </P>
                <P id="pj6ytw" n={206}>
                    The one thing he kept back was himself. The man had made a point of being in
                    I.T., talking down to a little volunteer at a park cleaning the yurts. He had
                    been programming since the sixth grade and could have ended the flex in a
                    sentence. He kept it, and let the misread stand, and watched the man fail a test
                    the man never knew he was taking. <em>You&rsquo;re very small, like you really
                    are. Somebody who is truly confident, who has earned the right to have the
                    attitude this man had, wouldn&rsquo;t have that attitude. I don&rsquo;t have
                    that attitude.</em> (<Moment ulid={SILTCOOS_DAY} t="3:07" />)
                </P>
                <P id="puh63s" n={207}>
                    Their file covers these same days differently. On March 21 it records{" "}
                    <SunCite entry="03-21-25-the-hearsay">another host reporting that he was
                    expressing dissatisfaction with the rangers and saying concerning things about
                    the end of the world</SunCite>, and{" "}
                    <SunCite entry="03-21-25-the-journal">a ranger reporting that he had found a
                    journal and said the rangers were unhelpful</SunCite>. No one put either claim
                    to him. The journal belonged to a homeless veteran and had been left in a yurt.
                    He had logged it at lost-and-found, written the incident report, and put a note
                    in the box underlining please try, because he had been homeless himself and knew
                    what a journal weighs.
                </P>
                <P id="pe7yku" n={208}>
                    On March 23, a week before he was due to leave anyway, he wrote to settle{" "}
                    <Cite ulid="01JQ18GA2GAY14ZE9BFG12TRZ6">what to do with the keys, the binder
                    and the golf cart</Cite> at the end of his last shift. They dismissed him the
                    next day, for cause they never wrote down.
                </P>
                <P id="p5dhnt" n={209}>
                    At 8:45 on the morning of March 24 the Tugman lead wrote about{" "}
                    <Cite ulid="01JQ4D8830BX5NSFR9688G7DVB">his next assignment</Cite>:
                    cancellations had moved his April placement to Tugman, into site A42, and did
                    he want September moved too. He was{" "}
                    <Cite ulid="01JQ4E4V4873CR28KB0SR2NS6P">sitting at A42 at that moment</Cite>,
                    visiting his friend John, and answered that he was there to make her life
                    easier. An hour later:{" "}
                    <Cite ulid="01JQ4J1GCGYPQ669RHG3WCHFT4">let&rsquo;s keep September the same
                    too. Tugman feels like home. See you next week.</Cite> A year of scheduled
                    assignments across the park system, six days from a clean completion.
                </P>
                <P id="pv2vwz" n={210}>
                    The park manager called that afternoon, while he was doing his job, to set up
                    a third meeting (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="13:59" />). The second
                    meeting was the picnic table, and the picnic table was on video. Their file says{" "}
                    <SunCite entry="03-24-25-the-dismissal">he kept talking over the park manager
                    and the conversation was no longer productive</SunCite>. His own account is on
                    the record: <em>Wow. This man never stops. I&rsquo;ve got a video of you
                    abusing me. There&rsquo;s no way that you could be doing this right now</em> (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="14:25" />).
                    As the manager turned a homeless veteran&rsquo;s journal that he had turned in
                    into the pretext and would not stop, he named what he was doing,{" "}
                    <Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="14:58"><em>you&rsquo;re a bully</em></Moment>,
                    and did not raise his voice to say it. The manager dismissed him then and there,
                    on the phone. One hour later he was at the RV, taking the keys, the binder and
                    the cart. The removal was built to be verbal and private. He set a camera at
                    the site, kept it running through the handover, announced that he was recording,
                    and asked twice what paperwork existed. There was none:{" "}
                    <Moment ulid={DISMISSAL} t={738}>just the conversation we had</Moment>.
                    Occupying the site came with host duties, the manager told him, and since the
                    duties had ceased the expectation was that he vacate. Asked for the deadline, the
                    manager gave him twenty-four hours to leave the site he lived on,{" "}
                    <Moment ulid={DISMISSAL} t="16:27">a reasonable amount of time</Moment>, the
                    manager said. He thanked him and told him to have a good day (<Moment ulid={DISMISSAL} t="16:40" />).
                </P>
            </Part>

            <Part n="Nine" title="THE WEEK HE TOLD IT">
                <P id="ptt2f7" n={211}>
                    At 2:40, with the keys already gone, he wrote to the program manager:{" "}
                    <Cite ulid="01JQ51JFPRZVFQ28F1R1ASPWNE">dismissed one week before my scheduled
                    departure, no paperwork, no documentation</Cite>. That was the whole of it: a
                    removal built to leave nothing behind, put into writing within hours by the
                    person it was done to.{" "}
                    <Cite ulid="01JQ5940787F53DN2H5VCJGSP4">She answered at 4:52</Cite> asking to
                    schedule a call, saying she needed to gather information from the park as
                    well. He told her{" "}
                    <Cite ulid="01JQ59FCFG8N47SMSJ6EFF4AJ9">either time worked</Cite>, but earlier
                    would be better, because they had asked him to be off the site by one.
                </P>
                <P id="p4asvz" n={212}>
                    At 6:31 that evening he wrote to the one person in the institution he trusted:{" "}
                    <Cite ulid="01JQ5ES9ZGPRFAZ2AFRK83PCV8">I just need to know someone I trust
                    within the system has at least heard what happened to me at Honeyman, because
                    from the outside it sounds like an impossible story.</Cite>{" "}
                    <Cite ulid="01JQ75M860BH848CACWBGP8FDX">She wrote back the next
                    morning</Cite>: I&rsquo;m really sorry to hear that, we can talk about it when
                    you get here if you want. She had coordinated the volunteers for her park when
                    all of this began. Directly after it she was demoted to a regular ranger.
                </P>
                <P id="p8nf8p" n={213}>
                    Before any of that, in the hours between the phone call and the golf cart, he set
                    a camera on the site he had been told to vacate and reassembled two months in
                    order:{" "}
                    <Moment ulid={DISMISSAL} t={37}>the 6 a.m. text and the welcome center
                    visit</Moment>,{" "}
                    <Moment ulid={DISMISSAL} t={170}>the reset and the withdrawn
                    application</Moment>,{" "}
                    <Moment ulid={DISMISSAL} t={276}>the ninety minutes and the walk</Moment>,{" "}
                    <Moment ulid={DISMISSAL} t={442}>the recorded hour</Moment>,{" "}
                    <Moment ulid={DISMISSAL} t={603}>the phone call and the removal</Moment>. A
                    sequence that had lived entirely in private channels became a public record
                    before the 24 hours ran out. When the park manager came for the binder and the
                    keys, he kept filming and announced that he was filming (<Moment ulid="01JQ51HAK8QR862VWGK0RKTFXN" t="15:21" />), and the manager
                    confirmed on tape that there was no paperwork, just the conversation they had
                    had (
                    <Moment ulid={DISMISSAL} t={910}>the handover</Moment>,{" "}
                    <Moment ulid={DISMISSAL} t={831} />
                    ). He was six days short of two months at that park (<Moment ulid="01JQ51HAK8QR862VWGK0RKTFXN" t="0:24" />).
                </P>
                <P id="ps28cg" n={214}>
                    The program manager called on the morning of March 25, and inside four minutes
                    the dismissal was not going to be overturned (
                    <Moment ulid={REVIEW_CALL} t="2:30" />
                    ). The review she had told him she was conducting was decided before the call
                    began. The remaining twenty-eight minutes were the reasons being assembled
                    around a conclusion already reached, out of material he was hearing for the
                    first time: unnamed sources, a host and a staff member said to have reported
                    dissatisfaction with the rangers, a report that he had been talking about the
                    end of the world, and an attributed claim, routed through the volunteer services
                    lead from a volunteer no one would name, that he had said a staff member would
                    be used to kill him when the world ended (
                    <Moment ulid={REVIEW_CALL} t="8:18" />
                    ).
                </P>
                <P id="puwcmw" n={215}>
                    He met every one of them at its exact edge, conceding nothing and expanding into
                    no one&rsquo;s frame. He had never said that. He had never said the world was
                    ending. The remark about rangers was general, made while handing in a
                    veteran&rsquo;s journal he had found and wanted returned to its owner (
                    <Moment ulid={REVIEW_CALL} t="4:26" />
                    ). There had been no refused meeting: he asked why, and the park manager ended
                    it (
                    <Moment ulid={REVIEW_CALL} t="6:54" />
                    ). The March 5 meeting was pretext, and he could establish it because he had
                    the hour on tape: the eat-glass remark (<Moment ulid="01JQ59R3S0SHQ18E23BC0BM696" t="7:29" />), and the admission that he had never
                    been given the benefit of the doubt (<Moment ulid="01JQ59R3S0SHQ18E23BC0BM696" t="7:46" />). Three times his documented account was
                    filed as his perspective while secondhand report was treated as fact. She
                    promised a determination by Friday the twenty-eighth (
                    <Moment ulid={REVIEW_CALL} t="27:38" />
                    ). The letter arrived on Wednesday the twenty-sixth.
                </P>
                <P id="pn3vqd" n={216}>
                    That night he{" "}
                    <Cite ulid="01JQ8HA5JRRCWX12W7B52YRVAT">wrote to her</Cite> to put the context
                    into the record and to mark what he could see coming: thoughtful, human
                    interactions reframed afterward as inappropriate or concerning. It was the
                    mechanism that had run the whole two months at Honeyman, and it had just run
                    again on her call.
                </P>
                <P id="pk7sfj" n={217}>
                    Then the things he had held back on the phone. The eat-glass line had been used
                    on him once before, in the welcome center, the first time he was confronted,
                    which made it a pattern rather than a remark. The March 5 meeting ended with
                    five minutes of being pressed to leave on his own, and he declined. Park Ranger 1 had
                    never been told he was training him. And the journal had been turned into
                    something it was not: not all rangers are helpful was never a criticism of
                    staff, it was an appeal that the thing not be lost in the lost and found. He
                    had been homeless. He knows what a journal is worth.
                </P>
                <P id="p3hbwv" n={218}>
                    He had been awake since six that morning (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="0:06" />), the site nearly stripped (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="1:03" />), two and a
                    half hours left on ground he had held for two months (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="3:29" />), and he already knew what
                    he was watching: an institution closing around itself (
                    <Moment ulid={PACKING} t="2:32" />
                    ), and everything that had happened rearranged into a question about{" "}
                    <Moment ulid={PACKING} t="3:12">his communication style</Moment>. What that
                    phrase stood in for was his clarity, his depth, his presence (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="3:46" />), and he was{" "}
                    <Moment ulid={PACKING} t="3:54">not apologising</Moment> for those anymore.
                    Arriving at that point had been the work of his life (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="3:57" />). If they removed him, they
                    removed him for being himself (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="4:28" />), and that said everything about them and nothing
                    about him. Someone had helped him privately that morning (
                    <Moment ulid={PACKING} t="0:24" />
                    ); he kept their name out of it because he judged they wanted it that way (<Moment ulid="01JQ76PWJRJ1BYAMAFDF77YK32" t="0:29" />).
                </P>
                <P id="psbtdp" n={219}>
                    On March 26 she called again and left a voicemail. He did not pick up, and not
                    by accident. She had told him the previous morning that it would not be
                    overturned, so nothing was left on that call to decide, and he was not going to
                    let the rest of it happen anywhere it could not be read back. He answered in
                    writing that, for{" "}
                    <Cite ulid="01JQA244089TK59NP7QYP1DJQ6">clarity, transparency and the
                    integrity of the process</Cite>, he preferred everything in writing from then
                    on. Ninety minutes later the institution sent the letter:{" "}
                    <Cite ulid="01JQA8N4FGQ6VXMRA09D8RZE62">this volunteer relationship is no
                    longer mutually beneficial</Cite>, citing his service and his communications
                    with and about OPRD over three months. Twelve minutes after that he was{" "}
                    <Cite ulid="01JQA3JX2GPGQ423F5QNJ2ESA8">unsubscribed from the host
                    list</Cite>. He replied in two sentences:{" "}
                    <Cite ulid="01JQA8N4FGQ6VXMRA09D8RZE62">I acknowledge receipt. I have returned
                    my volunteer items.</Cite>
                </P>
                <P id="pc9e9c" n={220}>
                    That afternoon, from inside his RV, the light too dim to work with under a
                    cloudy sky (<Moment ulid="01JQA6VKN8G6FTMHZSTDRRZPPA" t="0:03" />), he turned
                    the camera on and read the letter against what it did not contain. It gave{" "}
                    <Moment ulid={MAR26} t={27}>no concrete reasons</Moment>. The one specific
                    item cited was{" "}
                    <Moment ulid={MAR26} t={53}>his public comments</Moment>: the record he had
                    made of the two months had become the stated cause for severance (<Moment ulid="01JQA6VKN8G6FTMHZSTDRRZPPA" t="0:59" />). So he would
                    escalate{" "}
                    <Moment ulid={MAR26} t={77}>to a formal complaint</Moment>, and he drew the
                    boundary around it before anyone could assume otherwise. Not to get back in (
                    <Moment ulid={MAR26} t={190} />
                    ). He had given them every opportunity to course correct and they chose
                    containment each time. The same day he{" "}
                    <a
                        href={`https://rswfire.com/library/signal/${PRESERVED}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600"
                    >
                        preserved the original written account
                    </a>{" "}
                    of the whole term, the page this archive grew out of.
                </P>
                <P id="pbkx6y" n={221}>
                    On March 27 he drove back to Tugman and stood on the dock at night filming
                    Eel Lake after the rain, the most beautiful he had ever seen it (
                    <Moment ulid={EEL_LAKE} t="0:01" />
                    ). This was the first park he ever worked (<Moment ulid="01JQAQYKJ82GNS2N7WHPR16PQH" t="1:05" />). He mapped the ground out loud the
                    way he always does: the trail that floods and that he could no longer reach,
                    the trail that circles the lake to a bench at the park boundary, and the
                    unmarked one past it that he had never followed to the end (
                    <Moment ulid={EEL_LAKE} t="0:29" />
                    ). He had been here in January with his core still healing and had worried it
                    might not heal at all. Sometime in the last week he noticed he had stopped
                    thinking about it, which is how recovery announces itself (
                    <Moment ulid={EEL_LAKE} t="1:01" />
                    ). He had spent that day watching Star Trek with a friend, the first time in a
                    year his mind had let him sit still for anything (
                    <Moment ulid={EEL_LAKE} t="2:26" />
                    ).
                </P>
                <P id="pcvcnb" n={222}>
                    Movement is how he processes, so he was moving (
                    <Moment ulid={EEL_LAKE} t="3:23" />
                    ). Disappointment, sadness, and under those, grief (<Moment ulid="01JQAQYKJ82GNS2N7WHPR16PQH" t="5:26" />): he had detached from the
                    Oregon state park system and was standing on its dock as a visitor, knowing
                    they reject him. He loved these parks (<Moment ulid="01JQAQYKJ82GNS2N7WHPR16PQH" t="3:53" />). Two months of being treated the way he
                    had been treated, a slur said to a volunteer, and the last person in that chain
                    who could have stepped in and did not (
                    <Moment ulid={EEL_LAKE} t="5:02" />
                    ). He corrected the sequence the institution would spend the next eighteen
                    months inverting:{" "}
                    <Moment ulid={EEL_LAKE} t="6:29">the video came after the dismissal</Moment>,
                    not before it. He is fine (<Moment ulid="01JQAQYKJ82GNS2N7WHPR16PQH" t="6:05" />). He does not stay stuck, that is not how he works (<Moment ulid="01JQAQYKJ82GNS2N7WHPR16PQH" t="4:22" />),
                    and he had no idea yet what he was going to do (
                    <Moment ulid={EEL_LAKE} t="5:59" />
                    ).
                </P>
                <P id="ppdnbn" n={223}>
                    On March 28 he read the unanswered letter into the public record (<Moment ulid="01JQD4DCE88XVM3S4AEGRY84R2" t="0:20" />), because{" "}
                    <Moment ulid={LETTER_READ} t="0:45">the program manager had ignored it</Moment>.
                    He could not confirm it was in his file, so he put it where they did not
                    control it: read aloud, in the description, in the comments (<Moment ulid="01JQD4DCE88XVM3S4AEGRY84R2" t="1:05" />). Three vectors for
                    one document. There are other volunteers in those parks all the time, and there
                    is no way what happened to him was isolated (
                    <Moment ulid={LETTER_READ} t="1:30" />
                    ). The letter sets out the eat-glass remark and the five minutes spent telling
                    him he could leave (
                    <Moment ulid={LETTER_READ} t="2:39" />
                    ), the training he was promised from a ranger who knew nothing about it (
                    <Moment ulid={LETTER_READ} t="3:17" />
                    ), and the admission about the benefit of the doubt (
                    <Moment ulid={LETTER_READ} t="3:46" />
                    ). Then it reaches the thing underneath the incidents:{" "}
                    <Moment ulid={LETTER_READ} t="4:38">
                        what was raised in that March 5 meeting was not my behaviour, it was my
                        emails. The discomfort stemmed not from what I said but from the fact that
                        I said it in a format that created a record
                    </Moment>
                    . At least three other volunteers had had similar difficulties with the same
                    park manager, raised not as accusation but as scope, and he did not name a
                    single one of them (
                    <Moment ulid={LETTER_READ} t="5:08" />
                    ).
                </P>
                <P id="px29gz" n={224}>
                    On March 29, over coffee at half past eight, he gave the fullest account of the
                    week (
                    <Moment ulid={MAR29} t="0:00" />
                    ). He had named the people who did it, and he had not wanted to do it that way (
                    <Moment ulid={MAR29} t="0:45" />
                    ). The beeping running under the dismissal video was his watch reporting an
                    elevated heart rate, firing every ten minutes for four hours, and he told the
                    whole story coherently the entire time it fired (
                    <Moment ulid={MAR29} t="1:56" />
                    ). That was where he actually stood: nowhere to go (<Moment ulid="01JQHBXG9RYCN4XHFFK0WV8C37" t="1:21" />), after two months of
                    navigating something he did not start (<Moment ulid="01JQHBXG9RYCN4XHFFK0WV8C37" t="1:38" />).
                </P>
                <P id="pwy8aj" n={225}>
                    He was asking for help (<Moment ulid="01JQHBXG9RYCN4XHFFK0WV8C37" t="2:46" />). He says it plainly, the way he says everything (<Moment ulid="01JQHBXG9RYCN4XHFFK0WV8C37" t="0:16" />), which
                    is the reason it keeps getting missed. Two thousand people watched the
                    dismissal video and not one of them sent anything (
                    <Moment ulid={MAR29} t="3:57" />
                    ). The people who helped were friends who saw it and drove an hour and a half
                    each way (
                    <Moment ulid={MAR29} t="2:38" />
                    ). He held both facts in the same account and let neither adjust the other.
                    That is what he was learning that week, alongside everything the institution
                    was doing: that an audience which had watched a man rebuild his entire life for
                    a year did not see a person. He kept recording anyway. He would not make
                    himself smaller or more palatable for any of them (
                    <Moment ulid={MAR29} t="7:33" />
                    ). Ten months later he deleted the channels.
                </P>
                <P id="pdats9" n={226}>
                    In the middle of that week, on the afternoon the letter arrived, he was on a
                    beach at the next park tracing waves, walking in as the water pulled back and
                    out as it came, his favourite thing in the world (
                    <Moment ulid={WAVES} t="0:24" />
                    ). He talked to the ocean (<Moment ulid="01JQ807JC0CG5M84DPGHVMQ6A1" t="1:08" />). This is what makes his life worth living (<Moment ulid="01JQ807JC0CG5M84DPGHVMQ6A1" t="1:17" />). He sees
                    himself in it because it does not ask anybody for permission to be what it is,
                    and it reaches everything (<Moment ulid="01JQ807JC0CG5M84DPGHVMQ6A1" t="1:47" />):{" "}
                    <Moment ulid={WAVES} t="2:03">
                        <em>nothing can contain the ocean, and nothing can contain me either</em>
                    </Moment>
                    . Two days later he spent the day driving the Umpqua coast with John, a fellow
                    volunteer twenty years his senior, handing rubber ducks to other Jeep owners in
                    the parking lots, and standing under the lighthouse where he had been scheduled
                    to work in April. The route had changed. The claim on the terrain had not: he
                    was there as a visitor now, and it was still a beautiful place (
                    <Moment ulid={JOHN_TOUR} t="13:44" />,{" "}
                    <Moment ulid={JOHN_TOUR} t="17:09" />
                    ).
                </P>
            </Part>

            <Part n="Ten" title="DISPLACED">
                <P id="p82469" n={227}>
                    The ban was statewide and immediate, so what followed was not a transition. It
                    was a month with nowhere to be.
                </P>
                <P id="pp55fh" n={228}>
                    He went to <PlaceCite name="Beverly Beach" /> first. It was not a random
                    direction. He had applied for it back in January, for October through December,
                    and he had looked at it the way he looks at every park he intends to be in.
                    When he was expelled, his friend John was headed there, so on March 31 he{" "}
                    <Moment ulid={MOVE_NORTH} t="0:53">staged the rig in the day use area, hitched
                    up in the rain, and drove a hundred miles north</Moment> on the few nights he
                    could get. He had been awake most of that night (<Moment ulid="01JQPHD768V3JT727W1E1SMS6K" t="0:14" />), tracking a known leak while the
                    rain came down, and he ran the sequence anyway. One of those days went to
                    walking the campground and then the beach with John, and the tide was in too far
                    to trace the waves, hours before the beach he had planned to walk would exist (<Moment ulid="01JQT2HBXG3JGEPNM2KDZDN7GE" t="19:31" />).
                    He named the miscalculation as his own and held the plan open: he would come
                    back later (
                    <Moment ulid={BEVERLY} t="19:10" />
                    ). What the day became instead was hours at the edge of a rising tide with a man
                    who grew up on the water. John had misunderstood him at first, then figured him
                    out, and never once tried to change him after that. He witnessed him instead (
                    <Moment ulid={BEVERLY} t="0:57" />
                    ).
                </P>
                <P id="pdq7zx" n={229}>
                    On April 4 he drove a hundred miles south to <PlaceCite name="Lagoon" /> Campground in the dunes (<Moment ulid="01JR1J5HR8C8D2B9MSENRZY03S" t="7:56" />). The
                    site ran against every instinct he had built, and he had to drive past it,
                    swerve, and come back around at an angle rather than back straight in (
                    <Moment ulid={LAGOON} t="7:41" />,{" "}
                    <Moment ulid={LAGOON} t="26:35" />
                    ). He did it, and he was proud of himself for it (<Moment ulid="01JR1J5HR8C8D2B9MSENRZY03S" t="26:53" />). No power, no water (<Moment ulid="01JR1J5HR8C8D2B9MSENRZY03S" t="22:14" />). The RV ran
                    off the Jeep&rsquo;s inverter, which made fuel and electricity the same finite
                    tank: about two hours of charging a day, and that same window was the work
                    window, laptop open, applying for contracts (
                    <Moment ulid={INVENTORY} t="0:32" />
                    ). Outside it he was calling national forest field offices and the BLM, asking
                    where the legal free sites were and where a person could boondock safely (
                    <Moment ulid={INVENTORY} t="1:07" />
                    ). On his days there he walked the Siltcoos trails out to the ocean (<Moment ulid="01JR3D1MRR47WNSCA68346MZ4D" t="0:06" />), forest to
                    river to beach to dunes, and said he had a very good life, rich without money,
                    better than any previous iteration of it (
                    <Moment ulid={SILTCOOS_TRAILS} t="0:01" />
                    ).
                </P>
                <P id="pqf8hs" n={230}>
                    He did not know it yet, but he had just arrived at the ground he still lives
                    on. <PlaceCite name="Lagoon" /> sits in the Siltcoos corridor a few miles south
                    of the park that had expelled him. Everything since has happened inside a
                    handful of miles of that campsite: <PlaceCite name="Driftwood II" /> nineteen
                    days later, <PlaceCite name="Tahkenitch Landing" /> that autumn, and in October
                    the Forest Service work center at <PlaceCite name="Siltcoos" />, where he is
                    the caretaker and remains the caretaker today. He drove himself into that
                    corridor, and he has been there ever since.
                </P>
                <P id="pv24wr" n={231}>
                    On April 10, two days out from another forced move with no destination found,
                    he counted what was there and set the constraint above it (<Moment ulid="01JRGAAQWRVCMWP074HMZAF2D5" t="1:41" />). He had been targeted
                    once already for the kind of person he is, for his sexuality, for the piercings (<Moment ulid="01JRGAAQWRVCMWP074HMZAF2D5" t="3:02" />),
                    and he was carrying that forward as a filter on every place he contacted. A
                    placement that did not read as aligned, he would not take (<Moment ulid="01JRGAAQWRVCMWP074HMZAF2D5" t="3:16" />). He would sit on the
                    side of the road and work out something better first (
                    <Moment ulid={INVENTORY} t="2:54" />
                    ). Two readings were available for the fact that no one was helping: that he was
                    not worthy of it, or that he was worthy and they still were not helping (<Moment ulid="01JRGAAQWRVCMWP074HMZAF2D5" t="3:44" />). He took
                    the second as the accurate one. He was not defeated, and he would make it (<Moment ulid="01JRGAAQWRVCMWP074HMZAF2D5" t="2:22" />).
                </P>
                <P id="pct3kr" n={232}>
                    Meanwhile he did the paperwork. The Forest Service placement required a
                    federal background check, which meant fingerprints, which meant{" "}
                    <TraceCite ulid="01JRTW0TT80GWGSJR3J4FQC5MF">driving inland to Corvallis and
                    back</TraceCite>, and then waiting on an agency clock while the fourteen night
                    maximum at his campground ran down.
                </P>
                <P id="pqaxzk" n={233}>
                    On{" "}
                    <Moment ulid={BIRTHDAY} t={2}>April 11 he turned forty-eight</Moment>, one
                    year to the day since he drove away from the house in Kentucky (<Moment ulid="01JRHW67J034ANKJ2B7YEAGW4K" t="2:08" />). He marked the
                    threshold in the half hour before midnight by making the first-day footage
                    public, the clips that run backward from the campground to the drive to the
                    house receding, and setting it beside where he now stood: he had done exactly
                    what he said he was going to do (<Moment ulid="01JRHW67J034ANKJ2B7YEAGW4K" t="1:37" />). Then he drove to Newport to spend the day with
                    John rather than spend it alone (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="0:11" />). He{" "}
                    <Moment ulid={FOREST_SERVICE} t={2}>extended his site to the legal
                    maximum</Moment>. The next
                    evening, driving south on 101 with cooked chicken in the back seat (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="12:42" />),{" "}
                    <Moment ulid={FOREST_SERVICE} t={59}>the Forest Service had cleared
                    him</Moment>. The position has no tenure limit (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="5:31" />). It is his until he gives it up (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="6:03" />),
                    and he turned that over for most of the drive, because movement is not merely
                    important to him but a defining attribute of how he is (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="6:19" />). He did not have to
                    decide it that night (<Moment ulid="01JRM3ES38X7NEYNSW4FNFZ5C9" t="9:49" />), and he did not.
                </P>
                <P id="pardd5" n={234}>
                    April 18 was the morning he had to be off the site, and he had woken without a
                    next move and gone about the day on the assumption that he would work one out.
                    The placement came through that morning, and it was not the one forty miles
                    south he had prepared for (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="0:13" />). It was a quarter mile from where he was already
                    parked, a loop of parking lot a quarter mile from the Pacific (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="0:21" />), with a weekend to
                    settle in, a propane hookup scheduled (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="2:43" />), and a three-month minimum (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="2:51" />). He liked it
                    there (
                    <Moment ulid={FS_START} t="0:01" />
                    ). Behind him were two weeks off grid with no water and no power, following the
                    state park rejection at the worst possible moment (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="2:02" />). He had gone through the eye
                    of the storm and pulled himself out of that fight (
                    <Moment ulid={FS_START} t="1:49" />
                    ). He does not present as emotional, and viewers read that as evidence the
                    situation was not as severe as he described it. His cognition and his emotions
                    run as one integrated system (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="3:36" />). He does not cope and he does not compartmentalize.
                    He adapts and navigates (<Moment ulid="01JS543HSRVG9TXSGYNDD4MMDT" t="4:10" />).
                </P>
            </Part>

            <Part n="Eleven" title="WHAT HE BUILT">
                <P id="pfkd8j" n={235}>
                    Two things ran at once from here and have never stopped running at once. He
                    built a life on this coast, and he built the record of what was done to him on
                    it. Neither waited for the other.
                </P>
                <P id="pk36ww" n={236}>
                    Nineteen days after a state agency banned him from every park it runs, a
                    federal one gave him a campground. He took a six-month term at{" "}
                    <PlaceCite name="Driftwood II" />, then <PlaceCite name="Tahkenitch Landing" />,
                    and in October 2025 moved into the Forest Service work center at{" "}
                    <PlaceCite name="Siltcoos" />, behind a locked gate. That move was the
                    promotion, and he had been working toward it (<Moment ulid="01K78EK38RRSMEC3FF33STBMDQ" t="0:48" />). Campground host became{" "}
                    <Moment ulid={CARETAKER} t="0:27">caretaker</Moment>: housing, power, water,
                    laundry, a shower, a mile from the ocean, an agency truck (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="4:30" />), and a{" "}
                    <Moment ulid={JEEP_DEADLINE} t="4:08">twenty mile route to run every day</Moment>.
                    He does not live on a campground (<Moment ulid="01K78EK38RRSMEC3FF33STBMDQ" t="0:38" />). He lives on restricted federal land behind a
                    federal gate, and the distinction is one he enjoys.
                </P>
                <P id="p7pjz8" n={237}>
                    The days are the point, and they are all on the record. He opens gates. He runs
                    the route. His{" "}
                    <Moment ulid={NICOTINE} t="0:00">days off are Mondays and Tuesdays</Moment>, and
                    he spends them walking: the Siltcoos trails out to the ocean, the lake trail (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="0:00" />),
                    Tahkenitch Creek, the South Jetty, Carter Lake, Wax Myrtle, Driftwood, the
                    dunes. <Moment ulid={ONE_WEEK_OFF} t="1:38">Ten miles in a day is ordinary</Moment>,
                    and fifteen is not unusual (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="1:55" />). By early 2026 the phone that counts it put him in
                    the{" "}
                    <Moment ulid={DELETE_YT} t="14:08">top two or three percent of everyone it measures</Moment>.
                    The RV is small and after a year and a half it feels like containment (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="12:49" />), so he is
                    outside. He goes out to the ocean at night. He greets it. He traces waves at the
                    water line, which he has called his favourite thing in the world.
                </P>
                <P id="pcte9m" n={238}>
                    On November 2, 2025 he ran out of vapes and did not replace them (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="3:02" />). Thirty-two
                    years of nicotine, begun at sixteen (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="0:08" />), cigarettes until a year and a half earlier (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="0:12" />),
                    and then nothing. He threw the supplies away and filmed the cutoff standing
                    outside in the dark (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="3:31" />, <Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="3:43" />), because he had structured his life so that this would
                    become possible. The{" "}
                    <Moment ulid={NICOTINE} t="3:37">hold it had on him</Moment> he had been pattern
                    matching for three decades (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="4:11" />), and he had the model for it: a dampener (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="4:36" />), then
                    armour, and then{" "}
                    <Moment ulid={NICOTINE} t="4:11">armour that had become a tether and a chain</Moment>.
                    He had already come off tramadol and lorazepam on the way here (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="5:14" />). This one
                    travelled with him everywhere (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="5:21" />). Not willpower and not a brave face (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="5:44" />), only{" "}
                    <Moment ulid={NICOTINE} t="5:34">vigilance, and no self-judgement</Moment>. A week
                    later he was at{" "}
                    <Moment ulid={ONE_WEEK_OFF} t="0:00">the ocean with the camera in his hand</Moment>,
                    ten miles behind him from the day before and about the same the day before that (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="1:53" />),
                    and it had gone easier than he expected (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="0:45" />). He did not know why (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="0:58" />), and he did not
                    invent a reason. Eighteen months earlier, on a trail at Barren River Lake in
                    Kentucky, he had{" "}
                    <Moment ulid={BARREN} t="5:54">laid out the step-down from cigarettes to vape to patches</Moment>{" "}
                    as a plan rather than a wish. He finished it.
                </P>
                <P id="pv8ywz" n={239}>
                    He built the platform in that corridor, on those days, in those conditions. The
                    first working skeleton of Autonomy went up on GitHub on a Monday (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="1:22" />), and that night
                    he was{" "}
                    <Moment ulid={NICOTINE} t="1:03">outside near Siltcoos at half past ten</Moment>
                    {" "}with rain coming off the trees and the Pacific audible from where he stood (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="0:39" />),
                    deployable skeleton published, backend first, frontend later (<Moment ulid="01K96TB0S03GST5RNN4KWNJ03J" t="1:35" />). A week on, marking
                    seven days without nicotine (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="0:04" />), he was already working out what came next: he had
                    been GPS-tracking some walks and not others (<Moment ulid="01K9NA5ZCGXFGJKCFPZZVWCR8W" t="2:09" />), and the tracked routes would go
                    into the atlas{" "}
                    <Moment ulid={ONE_WEEK_OFF} t="2:04"><em>once he built that feature</em></Moment>.
                    That was November 9, 2025.
                </P>
                <P id="pasfb6" n={240}>
                    He built it. The first trace in his realm was recorded on{" "}
                    <strong>March 24, 2026</strong> &mdash; the day three men with guns came
                    through the locked gate. He had just finished the feature. The system that now
                    holds the ground he has walked on this coast has its first line laid down on
                    the same day the state came to his door, and he kept building. That August he
                    was out on an ATV trail through the dunes past the edge of coverage,{" "}
                    <Moment ulid={TRACE_NOTES} t="0:01">field-testing notes on traces</Moment>,
                    correcting his own backend from memory mid-sentence and specifying the fix
                    while he walked.
                </P>
                <P id="pc7ghf" n={241}>
                    He tried to go back to work. Sixteen months after leaving programming he opened
                    the freelance profiles again and started bidding (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="2:44" />), and found that the thing he
                    was trying to re-enter was gone. He had once been ranked in the top ten
                    programmers on one of those platforms (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="2:54" />). They collapsed under AI (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="3:07" />). The decade-long
                    client relationship soured (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="2:59" />). A gas station owner in Florence strung him along
                    for months and the job never materialised (<Moment ulid="01KRES921G0XN9DRF2RGR8MYFY" t="3:21" />), and{" "}
                    <Moment ulid={JEEP_DEADLINE} t="2:44">the owner&rsquo;s son does not like gay people</Moment>.
                    A{" "}
                    <Moment ulid={JEEP_DEADLINE} t="3:14">painting job at a marina ended by text with no notice</Moment>.
                    He worked the problem the way he works every problem, and the market he was
                    working against no longer exists.
                </P>
                <P id="pv428w" n={242}>
                    He built a life here that has people in it (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="8:32" />). A hiking companion twenty years
                    older than him, until{" "}
                    <Moment ulid={WENDY} t="0:01">she moved south for the winter</Moment>. A fellow
                    volunteer he met at Honeyman. A neighbour in the corridor who fed him. Two
                    friends he drove back down to <PlaceCite name="Cape Blanco" /> with, to see it
                    again. His brother, after years of near-silence. A friend from when he was
                    seventeen who found him again after thirty years. And a{" "}
                    <Moment ulid={TWO_YEARS} t="2:21">woman in her seventies</Moment> who has read
                    every one of his recordings since Kentucky and has never once crossed a line (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="2:53" />),
                    who witnesses cleanly, which he holds as the one thing he ever needed from
                    publishing and the only aligned contact two years of it produced (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="4:14" />). Most of the
                    people in his life did not support him through that year. A few helped where
                    they could. He is proceeding on his own.
                </P>
                <P id="pbsvr7" n={243}>
                    On December 6, 2025 he was at the dump station with a hose running clean water
                    through a tank that was already clear (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="1:01" />), because he wanted it extra sparkly (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="1:44" />), and
                    the light was going and he had no flashlight (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="0:28" />). Two years living this way and more
                    than a year fully autonomous from his family, marked in the same motion as the
                    maintenance. He{" "}
                    <Moment ulid={TWO_YEARS} t="1:48">first did those tanks at Land Between the Lakes</Moment>{" "}
                    in Kentucky on the way west, was proud of it then (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="2:04" />), and has done them the same
                    way ever since. He{" "}
                    <Moment ulid={TWO_YEARS} t="9:03">ruptured his life completely and rebuilt it from the ground up</Moment>,
                    and he is proud of himself for it (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="9:14" />). Then, to the camera for the first time, the
                    thing he had only ever admitted to himself: he could have built the platform
                    faster. He does not know why, may never know, and may not like the answer (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="7:40" />). What
                    he offered instead was the{" "}
                    <Moment ulid={TWO_YEARS} t="7:15">shape of a life spent on a computer from sixth grade to his mid-forties</Moment>,
                    and a pendulum he can feel swinging back toward the tide and the trails (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="8:14" />). Then he
                    turned the camera on the interior, on a{" "}
                    <Moment ulid={TWO_YEARS} t="10:45">failing air mattress and a donated couch that smells of cigarette smoke</Moment>,
                    and regretted none of it (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="11:46" />). Every level, everything overcome, is another brick (<Moment ulid="01KBRQPR2GSDV6C9CA5B5FGE93" t="12:26" />).
                </P>
                <P id="p3mqd7" n={244}>
                    And then there is why the platform exists, which this archive is the proof of.
                    Every place he had put his life belonged to someone else. In October 2025, hours
                    before his connection was shut off, he set out what was wrong with the biggest
                    of them: it{" "}
                    <Moment ulid={SANCTUM_DEPART} t="2:01">flattens the person recording and the person watching</Moment>,
                    rewards the shallowest possible engagement (<Moment ulid="01K6S5WER0EBJGNT9MY3GSBW00" t="2:26" />), and compresses a human being into a
                    narrow character. He would not package himself, because he was not for sale. He
                    had turned the comments off more than a year earlier and never turned them back
                    on, and the reason was never trolls; it was that nothing came back. Two thousand
                    people had watched him be expelled from a park and not one had done anything.
                    And a state agency had looked at a man who wrote things down and decided the
                    writing was the offence. So he built the exit.
                </P>
                <P id="p66paa" n={245}>
                    On January 20, 2026 he deleted the channels outright. Nearly nine hundred
                    videos,{" "}
                    <Moment ulid={DELETE_YT} t="0:23">downloaded first and moved into his realm</Moment>,
                    the embeds on his own pages and on this archive repointed at them before the
                    deletion went through. Nothing was cut before its ground existed. He had kept
                    the channel past the point of use for the transcripts and for an aligned audience
                    that never formed, and{" "}
                    <Moment ulid={DELETE_YT} t="1:31">he had felt unmet there</Moment>. He does not
                    regret it even a little (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="1:31" />). The same day he threw away two weeks of work (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="8:04" />),{" "}
                    <Moment ulid={DELETE_YT} t="5:57">collapsed the two repositories into one</Moment>,
                    and started the rebuild in the tools of his own career, PHP and Laravel, because
                    those are what he has always been (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="7:01" />).
                </P>
                <P id="pdpbyv" n={246}>
                    What he was building is a realm: a{" "}
                    <Moment ulid={DELETE_YT} t="15:42">system that takes a life in</Moment> as
                    recordings, photographs, documents and ground, transcribes it, analyses it (<Moment ulid="01KGTPBX008JG59T12Z685G4AT" t="0:36" />),
                    embeds it, and makes it answerable to a question (<Moment ulid="01KRPV4JW0JYMFR6MVCM9F6JVB" t="12:07" />). A year-old signal stays
                    reachable because it is still relevant (<Moment ulid="01KFCB6Z006QQTXTFHRFBVR4T9" t="3:53" />), which is the thing the platforms cannot
                    do. The{" "}
                    <Moment ulid={FIRST_SIGNAL} t="0:01">first signal went into it on February 7, 2026</Moment>,
                    recorded from his bed at Siltcoos into the pipeline that ingested it the moment
                    he stopped (<Moment ulid="01KGTPBX008JG59T12Z685G4AT" t="0:13" />). He{" "}
                    <Moment ulid={LAUNCH} t="0:01">launched it in May</Moment>, walking to the ocean
                    with the trace running on his phone (<Moment ulid="01KRPV4JW0JYMFR6MVCM9F6JVB" t="6:03" />), recording the announcement inside the thing
                    he was announcing. Every recording cited on this page is served by it, and every
                    timestamp on this page resolves through it.
                </P>
                <P id="ppscuz" n={247}>
                    On May 19, 2026 he walked in from the dunes after several hours out, with
                    Buddy, one of the camp hosts&rsquo; dogs from Driftwood, to a bench near{" "}
                    <PlaceCite name="Lagoon" />, the one he had landed at after Honeyman. A year earlier he had sat on that bench and{" "}
                    <Moment ulid={THE_BENCH} t="1:41">recorded the story of his life as a programmer, from the sixth grade forward</Moment>,
                    for a freelance profile, powering the RV off the Jeep through an inverter he had
                    driven back to Medford to retrieve (<Moment ulid="01KS022FJ8E5J12F9GRTGEX4CA" t="1:02" />). That work never came (<Moment ulid="01KS022FJ8E5J12F9GRTGEX4CA" t="2:05" />). The platforms are
                    broken, and he marked the pathway closed. He noted a stork he had never seen
                    there before, and then the measure of the year:{" "}
                    <Moment ulid={THE_BENCH} t="2:10">he had launched his own platform the day before</Moment>.
                    The same bench received him twice. He did not narrate the distance between the
                    two arrivals. He was taking in the moment (<Moment ulid="01KS022FJ8E5J12F9GRTGEX4CA" t="2:43" />).
                </P>
                <P id="pyvmux" n={248}>
                    He used every channel the state has, in order, and kept the answers.
                </P>
                <P id="p2a7nz" n={249}>
                    What it cost him to keep asking is in the recordings alongside them. On June
                    17, 2025, near midnight, the first thing in frame was his teeth (<Moment ulid="01JXYDAD88RTT8JN4K0825E6MD" t="3:26" />). The soft liner
                    a Kentucky dentist had put in his bottom denture had disintegrated a month
                    earlier, and he had kept the plate working himself: adhesive as a cushion until
                    it cut his gums, trimming the plate down with no dentist involved, cloth
                    strips, a temporary reline that peeled inside a day (
                    <Moment ulid={JUNE} t="0:30" />
                    ). He was not ashamed and never had been (<Moment ulid="01JXYDAD88RTT8JN4K0825E6MD" t="3:01" />). He put the visible thing first
                    because a thing named cannot be handed back to you as a joke or a weapon (
                    <Moment ulid={JUNE} t="2:44" />
                    ).
                </P>
                <P id="p58b8n" n={250}>
                    Two weeks without internet ended on the morning of August 19 (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="0:16" />), and the first
                    thing he did with the connection was lay down the whole thread for three
                    followers on a channel that was days old (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="0:26" />): the house in Kentucky (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="2:09" />), the career he
                    taught himself starting in the sixth grade (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="2:17" />), the drive up the coast (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="6:23" />), the
                    welcome center, the picnic table (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="17:44" />), the phone call (
                    <Moment ulid={REINTRO} t="11:18" />
                    ). He was not suing (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="25:03" />). He has never been that kind of person (<Moment ulid="01K30F9TJ8DVMJ7VB1ZECQBJCC" t="25:04" />), and he wanted
                    ethical accountability instead (
                    <Moment ulid={REINTRO} t="22:32" />
                    ).
                </P>
                <P id="pbr4bx" n={251}>
                    In{" "}
                    <Cite ulid="01JVPH4Z7G0VBTE6PWCDVCRF5X">May 2025 he reminded them the record
                    was public</Cite>. On{" "}
                    <Moment ulid={TO_DIRECTOR_VID} t={0}>August 1 he wrote to the
                    director</Moment> and told her he is not the threat (<Moment ulid="01K1HX7JH8JXFXVD4YVYQSYKDN" t="2:03" />), the truth is, and then set
                    the thread down without closing it. On August 22 he filed{" "}
                    <Cite ulid="01K399TM7GG3FNAXSR4BX9TB1X">a public records request for the
                    volunteer program&rsquo;s operations and management</Cite>. Two days later he
                    published{" "}
                    <Cite ulid="01K3FDT5P09S9N9QSZYWS9KN7A">an open letter</Cite> to her, which
                    opens by acknowledging what she had built in her tenure and an institution he
                    says he had remarkable respect for and wanted to be part of.
                </P>
                <P id="pk67rd" n={252}>
                    <Cite ulid="01K3HPAXBG8F4QZG4DJNDY5QY8">She answered the next day</Cite>. The
                    reply was sentiment: she wrote that she heard the depth of his concern, that she
                    valued the contributions volunteers make, and that she could not respond to the
                    specific claims he had outlined. One sentence in it was a commitment rather than
                    a sentiment, that she would make sure his concerns were reviewed through the
                    appropriate channels within the department. Nothing in the record since suggests
                    that happened.
                </P>
                <P id="pg69p8" n={253}>
                    The records request was not answered at all. On November 15, eighty-five days
                    later, he sent{" "}
                    <Cite ulid="01KA45NDXG8VA4XB2YG7M8G0F5">a notice of violation</Cite> quoting
                    the statute back to them.
                </P>
                <P id="pysux4" n={254}>
                    Then, on December 7, he wrote her the letter that explains what he had been
                    asking for the entire year. After the dismissal he had{" "}
                    <Cite ulid="01KBY6KNMGEGV4MZ98QEK6R8JP">nowhere to go, removed at his most
                    economically vulnerable moment, and he went directly next door to the United
                    States Forest Service, where he had been nine months, promoted twice, and
                    trusted with a work truck and a twenty-five mile daily route</Cite>. He had
                    never been the problem. The people who ran that park were the liabilities she
                    was protecting. And then the offer, in the plainest terms he had: no legal
                    action, no media, nothing else. Only documentation. Documentation that would
                    not need to exist if she had protected the people who came to serve her in good
                    faith. She could still fix it internally, right now.
                </P>
                <P id="pajsbm" n={255}>
                    <Cite ulid="01KBZ9S95G2W5B44TTGT6HA69N">She answered at 8:37 the next
                    morning</Cite> and ended the correspondence. She wrote that she did not believe
                    continuing it would lead to the resolution he was seeking.
                </P>
                <P id="p8acgv" n={256}>
                    An account of how a public agency treated an unpaid volunteer, supported at
                    every point by documents that agency itself had written, came back to him as
                    his own pain. Not one fact in it was engaged. Not one name in it was addressed.
                    It was converted into feelings, given a wish for healing, and the door was
                    closed. He answered it: I acknowledge receipt of your message. Beneath his
                    name he put the domain he had just registered, oprdvolunteerabuse.org.{" "}
                    <Cite ulid="01KBZZ00WRN29ERHYG1ANPRH8D">And I yours</Cite>, she wrote back that
                    afternoon, to the message that carried it. That is the last thing the director
                    of Oregon Parks and Recreation has ever said to him.
                </P>
                <P id="p57nx6" n={257}>
                    This archive was born out of that reply. She had told him that further
                    correspondence would not produce a resolution, so he stopped corresponding. Ten
                    days later he turned on a camera and gave the thing its address out loud,
                    oprdvolunteerabuse.org, into a channel that carries (
                    <Moment ulid={NAMING} t="0:11" />
                    ). Every individual is named in it, and what each of them did (<Moment ulid="01KCQD72FGGGSVKHQJJEWFAYK7" t="1:33" />). Nine months, and
                    not one word of it disputed (
                    <Moment ulid={NAMING} t="1:21" />
                    ). He had never wanted to make himself this visible to power (<Moment ulid="01KCQD72FGGGSVKHQJJEWFAYK7" t="0:42" />). He decided to own
                    it anyway. Two days after that he hiked out on a trail he walks all the time
                    and recorded the entire account again from the beginning, uphill, without
                    notes, because the first version had been made while he was still working out
                    what empathy elicitation was and it showed (
                    <Moment ulid={THE_ACCOUNT} t="0:00" />
                    ). It runs twenty-one minutes and goes in order: the outage weekend (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="3:52" />), the
                    withdrawn application, the hour and a half in the welcome center at night, his
                    sexuality used against him (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="7:07" />), the picnic table, the unidentified man at the
                    yurts, the expulsion by phone (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="15:07" />), and the written grounds citing his speech (
                    <Moment ulid={THE_ACCOUNT} t="6:34" />,{" "}
                    <Moment ulid={THE_ACCOUNT} t="13:54" />
                    ). They had barred him permanently for recording a video about what was done to
                    him. He recorded another one, standing next door to the park (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="19:35" />), on a route he
                    drives daily for the agency that gave him the truck (<Moment ulid="01KCYZ8E1GTHBZCDNYA57AM2Q0" t="19:52" />).
                </P>
                <P id="p6x98k" n={258}>
                    On March 4, 2026 he put her on notice, personally rather than institutionally,
                    that he intended to file{" "}
                    <Cite ulid="01KJWMK70R1GJJ7NYFN6EZCFER">a civil rights claim under 42 U.S.C.
                    § 1983 naming her as an individual defendant</Cite>. The same night he wrote
                    out{" "}
                    <Cite ulid="01KJXAVPYRJ9WPYX4SWG3EQCP">the sixty-two minutes at the picnic
                    table, minute by minute</Cite>, and sent it to her.
                </P>
                <P id="p5zcaj" n={259}>
                    Twelve days later OPRD asked the Oregon State Police for a threat assessment.
                </P>
            </Part>

            <Part n="Twelve" title="THE POLICE">
                <P id="pfbekq" n={260}>
                    The day before they came, he stood in front of his own camera and put his full legal
                    name on the record. One year since Oregon State Parks dismissed him from Honeyman
                    and gave him twenty-four hours to vacate (
                    <Moment ulid={ANNIVERSARY} t="0:00" />
                    ). The year behind him was an accumulation, and he read it back in order. An hour
                    at a picnic table, where the instruction was to chew glass and swallow it, and
                    where he learned he had never been given the benefit of the doubt (
                    <Moment ulid={ANNIVERSARY} t="0:42" />
                    ). A man out of uniform, arriving while the rangers were away, asking how
                    leadership treated him and rephrasing the question when he would not answer it (
                    <Moment ulid={ANNIVERSARY} t="1:40" />
                    ). His sexuality turned into the explanation for his complaints, recast as
                    feelings for his male supervisor (
                    <Moment ulid={ANNIVERSARY} t="2:11" />
                    ). Then the dismissal letter, which put protected speech in writing on state
                    letterhead as the cause, and then a year in which the institution answered
                    nothing (
                    <Moment ulid={ANNIVERSARY} t="1:18" />
                    ). He had documented every escalation in real time (<Moment ulid="01KME4GSG02JSTJ45Z1QYH90JD" t="0:48" />). The documenting was the
                    offense, and the documentation is the case (<Moment ulid="01KME4GSG02JSTJ45Z1QYH90JD" t="2:31" />). One year remained on the statute of
                    limitations, and he would go in a heartbeat, for an attorney who understood the
                    stakes and would carry it far enough to establish that volunteers have rights at
                    all (
                    <Moment ulid={ANNIVERSARY} t="3:02" />
                    ).
                </P>
                <P id="p9zswx" n={261}>
                    On March 3, 2026, the institution he had spent a year asking for accountability
                    took his letters to the police. An OPRD emergency manager sent them to an
                    Oregon State Police captain, copying the deputy director, and gave the reason
                    in one line: &ldquo;Fyi &mdash; sharing for situational awareness since he is now
                    including the Governor as well as our Director.&rdquo; The trigger was not
                    anything he had done. It was who else was now reading. The next morning the
                    order came back: &ldquo;Capt. Kennedy is requesting that a threat assessment be
                    conducted asap.&rdquo;
                </P>
                <P id="p8knha" n={262}>
                    It went to the Major Crimes Section, and to a detective who is a task force
                    officer with the Portland FBI Joint Terrorism Task Force. That detective
                    forwarded his name to FBI personnel and pulled his DMV record through the task
                    force, and a Department of Justice fusion center analyst documented the
                    activity.
                </P>
                <P id="pgxwqf" n={263}>
                    On March 6 that detective read this archive end to end and wrote down what he
                    found: <em>Based on the website nothing is standing out to me more than what
                    Parks and Rec sent you. Sounds like this person does have a grievance with the
                    former employer.</em> Nothing in a public record of an agency&rsquo;s own
                    conduct alarmed him more than the material the agency had handed over about the
                    man who wrote it. There was no crime, and their own detective had found none
                    eighteen days before anyone came.
                </P>
                <P id="pewtmp" n={264}>
                    They came anyway. On March 23 a second detective opened a dispatch event naming
                    him &ldquo;Suspect&rdquo;, and wrote the basis into it: sending &ldquo;concerning emails
                    to former supervisors in parks department and publicly airing grievances&rdquo;.
                    That is the whole of it. Emails, and publishing. The same day he sent his
                    sergeant the &ldquo;Hasty Plan for Robert White knock and talk&rdquo;, and his
                    Forest Service supervisor &ldquo;was told not to advise WHITE that FS LE was
                    inquiring about his whereabouts&rdquo;.
                </P>
                <P id="pqdfr8" n={265}>
                    On March 24, 2026, one year to the day after the dismissal, three men with guns
                    came through a locked federal gate, posted against public access (<Moment ulid="01KMFMJW809QNR8PVTXT8HAAG7" t="0:00" />), onto
                    restricted federal land, to the work center where he lives and works. Nobody
                    arrives at that door by accident. Someone with a key opened it and led them in.
                    No agency identified itself (<Moment ulid="01KMFMJW809QNR8PVTXT8HAAG7" t="0:05" />). What brought them was what he publishes online (<Moment ulid="01KMFMJW809QNR8PVTXT8HAAG7" t="0:08" />),
                    and the only thing they had for him was that he was not in trouble (<Moment ulid="01KMFMJW809QNR8PVTXT8HAAG7" t="0:13" />). He declined
                    to speak without an attorney and closed the door. Only then did the camera come
                    on.{" "}
                    <Moment ulid={POLICE} t={0}>He recorded them leaving</Moment> and took the plate
                    off the vehicle while it was still in frame (<Moment ulid="01KMFMJW809QNR8PVTXT8HAAG7" t="0:17" />). The place is his home. He lives
                    there alone, in exchange for stewardship of that land.
                </P>
                <P id="pt7c8w" n={266}>
                    The second detective&rsquo;s own report closes the question of what they had:
                    no direct threats, no &ldquo;leakage towards violence or violent behavior&rdquo;,
                    and &ldquo;no evidence White has committed any crimes&rdquo;. The report refers to
                    body-worn camera video of the encounter. It has never been produced.
                </P>
                <P id="pwmw3z" n={267}>
                    Three days later he filed a Siuslaw National Forest incident report documenting
                    the visit as intimidation, with the date, the time, the location, a narrative,
                    and the plate number off one of the vehicles. The same day he asked the Forest
                    Service special agent who had opened that gate to tell him who the three men
                    were. Hours after that question, the special agent sent a Lane County deputy a
                    file on him: his name, his date of birth, his driver&rsquo;s licence number,
                    where he lives, his schedule and his duties, his correspondence and his text
                    messages, and a promise to &ldquo;keep you up to date&rdquo;.
                </P>
                <P id="pn89s9" n={268}>
                    Four months later the Forest Service put its own role in writing: it did not
                    initiate the interview, its involvement was{" "}
                    <em>limited to assisting OSP by providing access and guiding them to the
                    Siltcoos Work Center</em>, and its officer <em>accompanied them solely to
                    facilitate entry and ensure they reached the correct location</em>. The state
                    dispatch record says the interview was for the Forest Service. The Forest
                    Service says it initiated nothing. Both documents exist, and the gap between
                    them stays open. The agency referred that officer to Law Enforcement and
                    Investigations&rsquo; Office of Professional Responsibility. Every document
                    quoted here, and the rest of the production, is on{" "}
                    <Link href="/evidence/police" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        the police page
                    </Link>
                    .
                </P>
            </Part>

            <Part n="Thirteen" title="AFTER THE GATE">
                <P id="pesfmf" n={269}>
                    He did not wait. The day after they came he built the page. Two days after they
                    came, on the morning of March 26, he put the director of Oregon Parks and
                    Recreation on notice in her own name:{" "}
                    <Cite ulid="01KMTJ21JGSSD4W0BTW6HP1E05">
                        Men with guns came to the place where I live because someone in your
                        institution made a phone call
                    </Cite>
                    . Not a personnel matter. Not a volunteer management decision. The people
                    responsible were still in that park, half a mile from where he lives and works,
                    and she had kept them there. Then he set the switch:{" "}
                    <Cite ulid="01KMTJ21JGSSD4W0BTW6HP1E05">
                        If anything happens to me, if there is any further attempt to intimidate
                        me, on federal land or anywhere else, the record will show that you were
                        warned. That you knew. That you chose silence.
                    </Cite>
                </P>
                <P id="pck83r" n={270}>
                    Armed strangers had found the place he sleeps and no one would say who sent
                    them. So he made his own safety a matter of public record, in writing, addressed
                    to the person who could have stopped it, so that whatever happened next would
                    already have an author.
                </P>
                <P id="p44e3w" n={271}>
                    That same night it went to all of them, each named in turn: the interim
                    director, responsible for the conduct of the institution; the deputy director,
                    who had made himself the point of contact; the Governor, whose office had gone
                    silent while state police came to a man&rsquo;s home on federal land; and the
                    commissioners, whose responsibility for the ethical management of the agency was
                    live that day. He demanded a written acknowledgment of what happened on March 24
                    and the steps being taken to ensure it never happened again. Their silence had
                    passed the point of being liability and had become active harm. No written
                    acknowledgment came.
                </P>
                <P id="pvhedx" n={272}>
                    On March 27 he filed the Forest Service incident report and asked the special
                    agent who had opened the gate to name the men. On March 28 he wrote to the
                    department under the subject line it deserved: you sent police to my door,
                    behind a locked gate, on restricted federal land. On March 29 he took it to the
                    press. On April 2 he filed the first public records request for the visit
                    itself.
                </P>
                <P id="pa67kj" n={273}>
                    On April 3, the anniversary of his dismissal, he walked the Wax Myrtle Trail and
                    the word arrived in motion (<Moment ulid="01KN9KDSG0H3W0WZ9GBCJDJMG5" t="0:00" />). He had lived in that corridor a year and it had been
                    the best experience of his life (<Moment ulid="01KN9KDSG0H3W0WZ9GBCJDJMG5" t="0:19" />). Two months of escalation he had not understood
                    while it was happening now had one name: displacement (
                    <Moment ulid={MECHANISM} t="0:00" />
                    ). Not a series of decisions. A method, applied from the beginning because he
                    documented, operable because volunteers live on the land they serve and have no
                    protections. It was why no other volunteer could stand with him openly (<Moment ulid="01KN9KDSG0H3W0WZ9GBCJDJMG5" t="1:58" />). By the
                    time he was off the trail he was already building the pages that would make it
                    legible to people he had never met. On{" "}
                    <Moment ulid={AFTER_POLICE} t={0}>April 5 he answered them on camera</Moment>,
                    standing at his post behind the gate they had reached across (<Moment ulid="01KNER77G00DQ4C9BZGEHCPWN3" t="2:18" />), speaking to the
                    institution rather than about it, and published it as the nine stages this
                    archive is now organised around. They had aimed at the self (<Moment ulid="01KNER77G00DQ4C9BZGEHCPWN3" t="1:58" />). He did not leave
                    the coast, and he did not stop working the site.
                </P>
                <P id="p5j2y8" n={274}>
                    Three months later, unprompted and a month after his final statement to the
                    agency, he{" "}
                    <Cite ulid="01KX28CF90H15CJVJRJWKXCP5N">withdrew the individual-capacity claim
                    against the program manager</Cite>: I know what it is to have someone with
                    authority impose a personal cost on a person&rsquo;s life. You imposed that on
                    mine. I have decided I will not impose it on yours. He did that while still
                    pressing every other channel, and while the body-worn camera footage of three
                    armed men at his door was being withheld from him. The executive ladder had been
                    climbed to its top and returned silence (<Moment ulid="01M16TYA60K65X6VXMWQEMZ1P2" t="4:09" />). On{" "}
                    <Moment ulid={FUND} t={0}>August 29 he announced the legal fund</Moment> and
                    opened the judicial channel (<Moment ulid="01M16TYA60K65X6VXMWQEMZ1P2" t="7:17" />), with one question he wants answered once and
                    binding: whether a state agency may permanently expel a volunteer, in writing,
                    over protected speech.
                </P>
                <P id="pdmbsg" n={275}>
                    On September 3 the state police produced the file, and inside it was the
                    document: ten months of editing about a volunteer they had for three, created
                    the morning after his dismissal,{" "}
                    <SunCite entry="where-the-timeline-ends">finished five days after his notice
                    of a federal claim</SunCite>, never shown to him. He answered it{" "}
                    <Cite ulid="01M29ZRKJ8KB38SPR38V64HH2C">the same day</Cite>, entry by entry.
                    Twenty-eight of its forty entries are false, and every answer is at{" "}
                    <Link href="/sunlight" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        sunlight
                    </Link>
                    . On{" "}
                    <Cite ulid="01M2DRZJGRM705954TP93CYBYC">September 13 he wrote two sentences to
                    the director</Cite>: your silence built this, and I cannot even begin to tell
                    you how proud I am of what I built out of that silence.
                </P>
            </Part>

            <Part n="Fourteen" title="WHAT HE HAS PUT IN FRONT OF THE STATE">
                <P id="pdz7dx" n={276}>
                    On April 2, 2026 he asked Oregon State Police for{" "}
                    <Cite ulid="01KN7Y4QZ8NJKCC08VT82FDBSP" thread="osp">the records of the
                    visit</Cite>: who authorised it, what its purpose was, who the men were. The
                    next day, the same week as the visit,{" "}
                    <Cite ulid="01KNAV7K70M1CKA57ZJW6M6X1R" thread="osp">the Department answered
                    that a search had identified no records responsive to the request</Cite>. That
                    was not true, and their own later production proves it was not true.
                </P>
                <P id="pzqaeq" n={277}>
                    He did not accept it as the file. He asked six questions of the responding
                    unit&rsquo;s supervisor, asked for{" "}
                    <Cite ulid="01KXMK4EARQK8CKJXYMPSW78AJ" thread="osp">the dispatch audio and
                    the CAD audit trail</Cite>, and{" "}
                    <Cite ulid="01KY60646RADM37YNZ40W07Z47" thread="osp">petitioned the Attorney
                    General</Cite>. On{" "}
                    <Cite ulid="01KXGXZNCREXD3GRQ2PJ4MGAP0" thread="osp">July 14 they released a
                    two-page dispatch record</Cite>, a hundred and twelve days after the event.
                    The order came back on{" "}
                    <Cite ulid="01KYR0GMBRR83WH7FTFC90Y6DB" thread="osp">July 29</Cite>, the
                    department reopened the request, and then priced it. On August 11 it named two
                    figures: a hundred and fifty-seven dollars fifty for the case file, and{" "}
                    <Cite ulid="01KZS0AEV8KA95QQZVJBCKBQEM" thread="osp">sixteen thousand three
                    hundred and fifteen dollars</Cite> for the second request, which asks for the
                    template of the letter they use to charge fees and claim exemptions, its
                    versions, the instructions governing its use, and the letters issued on it.
                </P>
                <P id="p5y2td" n={278}>
                    He paid the hundred and fifty-seven fifty. He is an unpaid volunteer living on
                    a federal work center, and he{" "}
                    <Cite ulid="01M0HCEDH0YDZCBMM9Q7E0TH00" thread="osp">put on the record what
                    the exchange had been from his side</Cite>: by cashier&rsquo;s check, because he
                    has no way to print anything, including their letter. He is a member of the
                    public. Their office exists to serve someone like him. His questions were
                    professional and competent and were met with silence, and the one time they
                    answered was when they thought they had caught him in a mistake they could use.
                    The sixteen thousand three hundred and fifteen dollars he has not paid. Those
                    records are still behind it.
                </P>
                <P id="pkud65" n={279}>
                    The production came on September 3: sixteen files, and ninety-five dollars back.
                    He read every page and built the inventory of what was missing, item by item,
                    each with the ground the department stood on. The body-worn camera video of
                    three armed men at his door, withheld under a statute cited to the Attorney
                    General and never to him, while their own report says &ldquo;please see attached
                    BWC&rdquo;. The planning document, &ldquo;OSP Hasty Form Robert White.pdf&rdquo;, named
                    in the production and not included, with no exemption claimed and no disposition
                    given. His DMV file and a report on him, named and not included, the same
                    silence. The call logs for calls their own emails arrange. The text messages:{" "}
                    &ldquo;shoot me a text or call Monday to confirm for Tuesday&rdquo;. The calendar
                    entries. Messages produced as headers with no body, no redaction marks, and no
                    statement that they are empty. The fusion center traffic beyond a single chain.
                    And the statement somebody characterised as a veiled threat, which he demanded
                    they produce, or quote, or state in writing does not exist, given that their own
                    report concludes he made no threats and committed no crimes.
                </P>
                <P id="pdqk3x" n={280}>
                    Among the files they did produce were screenshots of a hunting map, with a pin
                    dropped on where he lives.
                </P>
                <P id="pp8dve" n={281}>
                    He ran the same process at the Department of Administrative Services, which{" "}
                    <Cite ulid="01KWWCTCW09VNDMKKGABWBSKHT" thread="das">closed his request on the
                    basis that it was not the custodian</Cite>. He asked them to reopen it the same
                    day, copying the Governor, and they did so the next morning. Then he asked the
                    question behind it, and{" "}
                    <Cite ulid="01KYJZ4KB0YJ0DCQ1D70KMHA52" thread="das">the answer came back with
                    a number</Cite>: the department has closed requests that way thirty-one times
                    in three years, six in 2026, nineteen in 2025 and six in 2024, and it has no
                    written standard of its own for when it applies. He wrote to{" "}
                    <Cite ulid="01KYZDAQCG7F6YKYGHWJ1KT9Z4" thread="legislation">the Oregon
                    Legislature</Cite> about the statewide workplace policy, and to{" "}
                    <Cite ulid="01KW8KH1N8VJXGXGERYEFA5YQJ" thread="governor">the Governor, asking
                    for an independent investigation</Cite>.
                </P>
                <P id="pkbt5v" n={282}>
                    The same week the production landed, the file{" "}
                    <Cite ulid="01M1M6H4RR51K8RXNASW5AB9RC" thread="osp">was not sufficient and he
                    told them so</Cite>. He filed{" "}
                    <Cite ulid="01M1N523F0WNM96C18DTDMK0NP" thread="osp">formal notice of a tort
                    claim</Cite>. The Governor&rsquo;s office had stayed silent, and{" "}
                    <Cite ulid="01M1MEQP4GVGV0ED9D555043P2" thread="governor">that silence is part
                    of the reason the claim exists</Cite>. He put the March 3 referral email{" "}
                    <Cite ulid="01M1S5AS2G1PK98P6VYW8M9RSQ" thread="osp">in front of the captain
                    who received it</Cite>.
                </P>
                <P id="pfskxy" n={283}>
                    The clocks are still running, and the archive shows them running: the{" "}
                    <Link href="/records-requests" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        records page
                    </Link>{" "}
                    tracks what was asked, what was claimed, and what is still withheld, by agency,
                    with the statutory deadlines counted in days.
                </P>
                <P id="pt7yv9" n={284}>
                    Three weeks before the men came to the gate, on a Sunday morning in light rain (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="0:00" />),
                    he stood at the head of a trail he had not meant to take and answered the
                    question two years of recording had left open (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="1:46" />). The videos were never for an
                    audience (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="0:18" />), and until that week he had no way to finish the sentence (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="0:35" />). The finish
                    is that{" "}
                    <Moment ulid={WHY_THE_VIDEOS} t="0:40">he has no peers</Moment>, and the
                    recordings are how he puts out what he would otherwise put to one (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="0:45" />). They stay
                    public because he is still looking (
                    <Moment ulid={WHY_THE_VIDEOS} t="1:07" />
                    ). Then he turned the camera outward and kept walking toward the ocean (<Moment ulid="01KJKB3Q00SPY65YM59VRBN1T2" t="1:36" />).
                </P>
            </Part>

            <Part n="Addendum" title="ADDENDUM: ON THE END OF THE WORLD">
                <P id="pad01" n={285}>
                    On February 16, 2025 he withdrew his ranger assistant application. <Cite ulid="01JM9193N021MEHRXWSR30NWT5">He wrote to the volunteer services lead at Honeyman</Cite> to say he had withdrawn it, and that it was not something he wanted to discuss. The subject was closed.
                </P>
                <P id="pad02" n={286}>
                    The night after that email he was on shift in the welcome center, which is a yurt. The lead came in and the two of them were alone in it. The lead started stretching. Then he explained the stretching, and said it is what the crew does under the park manager there. It felt intimate, and nothing he was doing or thinking made it so. It made him uncomfortable. The lead talked about himself for ninety minutes and got nothing back. He did not raise the stretching. He did not offer anything about his own life. He let the man talk until he was finished, and then he let him walk out into the dark. He has never once told anyone what was said in that room.
                </P>
                <P id="pad03" n={287}>
                    A debt had been created that night, and he paid it the next afternoon, the way anyone pays it, by matching what he had been given. It was his day off. He walked a trail out onto the dunes across from his site with the lead. He was carrying a list in his head of what he meant to tell him, and there were three things on it.
                </P>
                <P id="pad04" n={288}>
                    The first came before anything else. He set a boundary and said the conversation was not romantic or sexual for him. The reaction was defensive anger, and it alarmed him. He thought it landed badly, but it needed to be said, and now it had been.
                </P>
                <P id="pad05" n={289}>
                    The second was why he was here. He told the man he was preparing for something he could see coming and could not put a time on, that the systems ordinary life runs on are under strain and will fail, and that he did not know when, and it could be a month, a year, or a decade. He told him what that means for a gay man, which is that in authoritarian contexts the mechanism through which queer people are targeted is institutional actors with authority, men in posts like his.
                </P>
                <P id="pad06" n={290}>
                    The third was why he had withdrawn the application. He had noticed a change in someone's behavior toward him, and he knew where the change had come from, which was the park supervisor. The lead had an excuse ready, and that was the tell that he was right.
                </P>
                <P id="pad07" n={291}>
                    <Cite ulid="01JMFB5TT8WYADV2FKJZEXC9AZ">The next morning he wrote to him</Cite>: “I appreciated yesterday a lot and I hope you won't be a stranger.”
                </P>
                <P id="pad08" n={292}>
                    That any institution would believe it has standing to judge the interior of a man's mind is absurd on its face. That the people who did it would weaponize what he told the lead is the most unethical act he has ever witnessed. That every level above them would repeat the same sin is the precise failure he was pointing at.
                </P>
                <P id="pad09" n={293}>
                    No more will be said about this.
                </P>
            </Part>

            <div className="mt-14 mb-24 space-y-4 border-l-4 border-emerald-700 bg-white px-5 py-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                    He is still here. He opens the gates at Siltcoos, runs the route, and hosts
                    the campground on the river through the summer season. He has put nine hundred
                    recordings on the permanent record and built the platform that holds them. The
                    coast he chose in November 2024 is where he lives.
                </p>
                <p>
                    Oregon Parks and Recreation spent ten months writing a document about three of
                    those months, and gave it to the police. This page is the rest of the life
                    that document is a fragment of. Anyone can check it: the emails are the ones
                    that were sent, the recordings are the ones made that day, and both were in
                    the open long before anyone came asking.
                </p>
            </div>
            <TestimonyToc />
        </SectionPage>
        </TestimonyVersionProvider>
    );
}
