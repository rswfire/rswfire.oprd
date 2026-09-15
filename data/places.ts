// data/places.ts
//
// The places the testimony names, as the realm knows them: the point, the
// span he was there, and the public recordings attached to that ground.
// Generated — do not hand-edit:
//
//     node scripts/make-places-index.mjs
//
// Only PUBLIC recordings are listed, so citing a place can never surface
// something that is not already open.

export interface PlaceRecording {
    u: string;   // ULID
    d: string;   // YYYY-MM-DD
    t: string;   // title
}

export interface PlaceRecord {
    id: string;
    name: string;
    lat: number | null;
    lon: number | null;
    about: string | null;
    first: string | null;
    last: string | null;
    count: number;
    recordings: PlaceRecording[];
}

export const REALM_PLACES: PlaceRecord[] = [
    {
        "id": "01KZDB0XXQKVN4H6VV28P6EH13",
        "name": "Barren River Lake State Resort Park",
        "lat": 36.852211099722,
        "lon": -86.061064099722,
        "about": null,
        "first": null,
        "last": null,
        "count": 0,
        "recordings": []
    },
    {
        "id": "01KM4Z3PHY1EQ17BQRH2J34FD0",
        "name": "Beverly Beach",
        "lat": 44.726264,
        "lon": -124.058883,
        "about": null,
        "first": "2025-03-26 01:14:24",
        "last": "2025-04-12 04:17:21",
        "count": 12,
        "recordings": [
            {
                "u": "01JQ807JC0CG5M84DPGHVMQ6A1",
                "d": "2025-03-26",
                "t": "Tracing Waves at the New Park"
            },
            {
                "u": "01JQT2HBXG3JGEPNM2KDZDN7GE",
                "d": "2025-04-02",
                "t": "Touring a New Campground and Walking the Beach with John"
            },
            {
                "u": "01JQV97H0GTJM55Y985PDHR5CZ",
                "d": "2025-04-02",
                "t": "Declaring Openness as Structural Strength"
            },
            {
                "u": "01JQVQ2YF06RP9S1BC1F3HSFWP",
                "d": "2025-04-02",
                "t": "Documenting Relocation Logistics and Signal Flares"
            },
            {
                "u": "01JQWMFQY0M63A06D5V8M5B1D2",
                "d": "2025-04-03",
                "t": "Requesting Support Before Off-Grid Transition"
            },
            {
                "u": "01JQYJV8C84KMQMHTHG3RPGAYT",
                "d": "2025-04-03",
                "t": "Announcing Off-Grid Sovereignty and Support Channels"
            },
            {
                "u": "01JQZ25RNGJRPNA0RAB6BEGGHX",
                "d": "2025-04-04",
                "t": "Cutting Hair at Camp With Don"
            },
            {
                "u": "01JQZQJTHGAVD48JYA71BQP7M5",
                "d": "2025-04-04",
                "t": "Addressing Audience Directly on Reciprocity"
            },
            {
                "u": "01JR0HFA8GWRB09XR593T14102",
                "d": "2025-04-04",
                "t": "Moving Off Grid on Departure Morning"
            },
            {
                "u": "01JR0Y1Y1RZB9RSXDE9R4705JQ",
                "d": "2025-04-04",
                "t": "Departing Beverly Beach for Off-Grid Campground"
            },
            {
                "u": "01JR1J5HR8C8D2B9MSENRZY03S",
                "d": "2025-04-04",
                "t": "Relocating to Off-Grid Site at Lagoon Campground"
            },
            {
                "u": "01JRM3ES38X7NEYNSW4FNFZ5C9",
                "d": "2025-04-12",
                "t": "Securing Forest Service Caretaker Position on Birthday"
            }
        ]
    },
    {
        "id": "01KMCE2NRWHTH8GYD3YRGB2R9F",
        "name": "Cape Blanco",
        "lat": 42.838159,
        "lon": -124.564838,
        "about": null,
        "first": "2024-11-02 17:45:33",
        "last": "2025-01-03 17:52:00",
        "count": 49,
        "recordings": [
            {
                "u": "01JBPZPXJ8WP3BD795SPMQ077D",
                "d": "2024-11-02",
                "t": "Closing Video Transmissions on Staying Open"
            },
            {
                "u": "01JCTSV298C4AGZTBSMH0471FE",
                "d": "2024-11-16",
                "t": "Testing the Waters on Restarting YouTube"
            },
            {
                "u": "01JCXES3TG5NGFDA9Y4SQMAT1X",
                "d": "2024-11-17",
                "t": "Recounting Cape Blanco Encounters and New Friendship"
            },
            {
                "u": "01JD2SY5EG2X1HG8TFEVZNZDTB",
                "d": "2024-11-19",
                "t": "Ending a Connection, Relocating Ahead of Storm"
            },
            {
                "u": "01JD60AK50DZBM7844VG3WYVWS",
                "d": "2024-11-21",
                "t": "Documenting the Night a Guest Was Removed"
            },
            {
                "u": "01JD72ABR0CADC8B4VHZCQ4VNT",
                "d": "2024-11-21",
                "t": "Answering Boondocking Question, Documenting Storm Damage"
            },
            {
                "u": "01JD8AGTQRQSJ6CNNGBE3H1TZG",
                "d": "2024-11-21",
                "t": "Standing on the Cliff Edge, Naming Parking Lot People"
            },
            {
                "u": "01JD8DPRER0SH841C043WX9EP7",
                "d": "2024-11-21",
                "t": "Filming After Ocean Play at High Tide"
            },
            {
                "u": "01JD9DQFF8ZPKKG4VGFHEK1FDK",
                "d": "2024-11-22",
                "t": "Cape Blanco 80mph Wind Storm"
            },
            {
                "u": "01JDAPDAN0T0VRSS5HZ8P6KYAJ",
                "d": "2024-11-22",
                "t": "Filming a Wind Storm on the Coast"
            },
            {
                "u": "01JDAQ5RW8CB339AXGNG4YDPPB",
                "d": "2024-11-22",
                "t": "Recording on Emotional Integration at Cape Blanco"
            },
            {
                "u": "01JDCTSB88SHH7XTG36FZNEEBF",
                "d": "2024-11-23",
                "t": "Taking a Rest Weekend Before Monday Departure"
            }
        ]
    },
    {
        "id": "01KM27WK5M5KYMR2EP2NBB06YR",
        "name": "Carter Lake",
        "lat": 43.861044,
        "lon": -124.141806,
        "about": null,
        "first": "2025-11-26 09:21:28",
        "last": "2026-01-21 00:00:00",
        "count": 4,
        "recordings": [
            {
                "u": "01KAZQFGE0FDEE0S4HM7JAQ8KE",
                "d": "2025-11-26",
                "t": "Photos · Nov 26, 2025"
            },
            {
                "u": "01KBHPETR8VXK4GXH032FEF72P",
                "d": "2025-12-03",
                "t": "Photos · Dec 3, 2025"
            },
            {
                "u": "01KDAQN2R8040MGXK8BE23KR6E",
                "d": "2025-12-25",
                "t": "Carter Lake on Christmas"
            },
            {
                "u": "01KFEXKP00VNGGEPKZEJTNCJZV",
                "d": "2026-01-21",
                "t": "Planning Monorepo Build During Carter Lake Rounds"
            }
        ]
    },
    {
        "id": "01KM280RB4M5TYZKCZZ3PZBGD3",
        "name": "Driftwood II",
        "lat": 43.882004,
        "lon": -124.146227,
        "about": null,
        "first": "2025-04-17 15:17:47",
        "last": "2026-01-19 00:01:00",
        "count": 55,
        "recordings": [
            {
                "u": "01JS257NBR5JX27QFFTKCBMWRJ",
                "d": "2025-04-17",
                "t": "Photos · Apr 17, 2025"
            },
            {
                "u": "01JS3XEJSGA2MWCTZXM0SGCQ7W",
                "d": "2025-04-18",
                "t": "Photos · Apr 18, 2025"
            },
            {
                "u": "01JS543HSRVG9TXSGYNDD4MMDT",
                "d": "2025-04-18",
                "t": "Starting Forest Service Post and Requesting Financial Support"
            },
            {
                "u": "01JS6BJHT8RCP4ZC8VGGZTFW2B",
                "d": "2025-04-19",
                "t": "Building YouTube Transcript Pipeline On Camera"
            },
            {
                "u": "01JS7X5G1GTG1H6N4R50XR1A0V",
                "d": "2025-04-19",
                "t": "Photos · Apr 19, 2025"
            },
            {
                "u": "01JSDFR83RAF3S9S8ND4CCQ2AG",
                "d": "2025-04-22",
                "t": "Photos · Apr 22, 2025"
            },
            {
                "u": "01JSKTZCPGZCN1HD9Y4S4NG4DV",
                "d": "2025-04-24",
                "t": "Photos · Apr 24, 2025"
            },
            {
                "u": "01JSN5HHJ8TQQKDNYXHHPFA4ZR",
                "d": "2025-04-25",
                "t": "Naming the Audience Non-Response Pattern"
            },
            {
                "u": "01JSQW4Q9RMXPSB9R20DMK1MV3",
                "d": "2025-04-26",
                "t": "Addressing the Audience on Witnessing Without Action"
            },
            {
                "u": "01JSRFM0KREMM0AXAJ3C5CKB75",
                "d": "2025-04-26",
                "t": "Photos · Apr 26, 2025"
            },
            {
                "u": "01JSV6KVM0X2YV54R4XP1EH02M",
                "d": "2025-04-27",
                "t": "Photos · Apr 27, 2025"
            },
            {
                "u": "01JSYW7QYR7VVBY08995E9G5M0",
                "d": "2025-04-28",
                "t": "Photos · Apr 28, 2025"
            }
        ]
    },
    {
        "id": "01KKZK07FA20VSY14G99RAWTHT",
        "name": "Honeyman",
        "lat": 43.930354,
        "lon": -124.108676,
        "about": null,
        "first": "2025-01-31 19:45:22",
        "last": "2026-03-24 10:00:00",
        "count": 20,
        "recordings": [
            {
                "u": "01JJYYB02GVMZGVY2REN12VBBV",
                "d": "2025-01-31",
                "t": "Relocating to Honeyman, Documenting Daily Systems"
            },
            {
                "u": "01JK8ZMWJRV9QWPX619AVRZE8M",
                "d": "2025-02-04",
                "t": "Walking Dune Terrain, Planning Health and Park Seasons"
            },
            {
                "u": "01JMY11BH8QJN5A5VYXNTEQTT4",
                "d": "2025-02-25",
                "t": "New Piercings and a Year of Park Placements"
            },
            {
                "u": "01JNK2TKG01JTERAMB7J6AKPK1",
                "d": "2025-03-05",
                "t": "Two Managers Pressure Volunteer at Picnic Table"
            },
            {
                "u": "01JNXS9WRGWQAV7SMD0PWZ4X9F",
                "d": "2025-03-09",
                "t": "Showing New Piercings, Repositioning Toward Freelance Work"
            },
            {
                "u": "01JPDYW5XRGQZ310XDSE0G1F14",
                "d": "2025-03-15",
                "t": "Walking to the 101 Bridge on a Day Off"
            },
            {
                "u": "01JPFQSYSR2783EPWKDE04M27P",
                "d": "2025-03-16",
                "t": "Marking One Year Since Leaving the House"
            },
            {
                "u": "01JPP5GY2GPEZ5F08Q2PF6ZAHG",
                "d": "2025-03-19",
                "t": "Recording a Day at Siltcoos After a Failed Encounter"
            },
            {
                "u": "01JPT0QH58P1JM6HVSQDNQ1A7B",
                "d": "2025-03-20",
                "t": "Defining Adaptation Through Broken Slide and Alcove"
            },
            {
                "u": "01JQ0EDSZ8GRK7CD0ZJPVCZX0D",
                "d": "2025-03-23",
                "t": "Sitting on the RV Roof at Dusk"
            },
            {
                "u": "01JQ51HAK8QR862VWGK0RKTFXN",
                "d": "2025-03-24",
                "t": "Documenting Removal Without Process at Honeyman"
            },
            {
                "u": "01JQ59R3S0SHQ18E23BC0BM696",
                "d": "2025-03-25",
                "t": "Program Manager Confirms Dismissal Before Review Call"
            }
        ]
    },
    {
        "id": "01M0NVNS6H7H4D10WQQRNZSRDS",
        "name": "Honeyman State Park",
        "lat": 43.97052805,
        "lon": -124.1247268,
        "about": null,
        "first": null,
        "last": null,
        "count": 0,
        "recordings": []
    },
    {
        "id": "01KMCNMJXABS06GNR38QPZSKR3",
        "name": "Humbug Mountain",
        "lat": 42.689005,
        "lon": -124.43818,
        "about": null,
        "first": "2024-11-27 15:42:39",
        "last": "2024-12-18 22:13:28",
        "count": 6,
        "recordings": [
            {
                "u": "01JDQ4KVCR43KJZRG8Q9ARRSAW",
                "d": "2024-11-27",
                "t": "Pivoting to Humbug Mountain, Setting Comment Protocol"
            },
            {
                "u": "01JDTRVGP8M6HVWM989ZCBH607",
                "d": "2024-11-29",
                "t": "Recording Thanksgiving Night at Humbug Mountain"
            },
            {
                "u": "01JE1E4E50AZ09BY7VQ88FRT3C",
                "d": "2024-12-01",
                "t": "Breaking Camp for Cape Blanco, Resting Body"
            },
            {
                "u": "01JFB66G189MPT76J2QPGJZ0GP",
                "d": "2024-12-17",
                "t": "Walking the Beach on Containment Versus Sovereignty"
            },
            {
                "u": "01JFBME71GQ68NT2XCVN2B9JPF",
                "d": "2024-12-18",
                "t": "Checking Steps Data While Walking Near the Bridge"
            },
            {
                "u": "01JFDXAHT0RWPRK7065D61600T",
                "d": "2024-12-18",
                "t": "Choosing Sovereignty on a Travel Day"
            }
        ]
    },
    {
        "id": "01KM26RN1Q70H4VNGYDJPAZ2A3",
        "name": "Lagoon",
        "lat": 43.878387,
        "lon": -124.143499,
        "about": "Where I landed after Honeyman.",
        "first": "2025-04-04 14:35:13",
        "last": "2026-04-05 15:10:44",
        "count": 30,
        "recordings": [
            {
                "u": "01JR0KMC78JVHR5N3NY84Q7VJ0",
                "d": "2025-04-04",
                "t": "Photos · Apr 4, 2025"
            },
            {
                "u": "01JR3BK1J0MS36WEZ9BR732ZZY",
                "d": "2025-04-05",
                "t": "Switching to Portrait Mode, Mapping Off-Grid Systems"
            },
            {
                "u": "01JR3D1MRR47WNSCA68346MZ4D",
                "d": "2025-04-05",
                "t": "Exploring Siltcoos Trails to the Ocean"
            },
            {
                "u": "01JR3Z5EFGHT51MKFJ7JY0HPY7",
                "d": "2025-04-05",
                "t": "Marking One Year in the RV Off-Grid"
            },
            {
                "u": "01JR5FS5P0PX0XD0PNM0C2MYCD",
                "d": "2025-04-06",
                "t": "Photos · Apr 6, 2025"
            },
            {
                "u": "01JR5J2AG8040TJ6W6FK3X853D",
                "d": "2025-04-06",
                "t": "Photos · Apr 6, 2025"
            },
            {
                "u": "01JR5Q6JBRW18T5M4DZT5T13B2",
                "d": "2025-04-06",
                "t": "Mapping Battery Systems, Booking Fees, and Witness Standards"
            },
            {
                "u": "01JR5ZY9H85TV4AY1M9J9WZEA6",
                "d": "2025-04-06",
                "t": "Scouting Laundromat and Outlining Support Architecture"
            },
            {
                "u": "01JR68Z6N0RA7BKSVCCFEDK8X0",
                "d": "2025-04-06",
                "t": "Making Coffee Off-Grid Using Jeep Inverter Power"
            },
            {
                "u": "01JR6D7RRRYS76PCPGXDKJBZQC",
                "d": "2025-04-06",
                "t": "Extending the Awning in Rain, Addressing Projection"
            },
            {
                "u": "01JR6TH068EAKSPY6DE1Z2FZXX",
                "d": "2025-04-07",
                "t": "Photos · Apr 7, 2025"
            },
            {
                "u": "01JR7XNKG01Y2AC28C4H5PMC49",
                "d": "2025-04-07",
                "t": "Declaring Sovereign Terms of Transmission"
            }
        ]
    },
    {
        "id": "01M0NVMYC5K0CTGBE9185Y3TFQ",
        "name": "Mammoth Cave National Park",
        "lat": 37.999712549722,
        "lon": -84.538674849722,
        "about": null,
        "first": null,
        "last": null,
        "count": 0,
        "recordings": []
    },
    {
        "id": "01KMCPZ80SQ0XZVS5YWY2P6911",
        "name": "Pistol River",
        "lat": 42.27881,
        "lon": -124.405049,
        "about": null,
        "first": "2024-11-25 15:42:08",
        "last": "2024-11-26 23:01:02",
        "count": 3,
        "recordings": [
            {
                "u": "01JDHZSF40XXFKBB15XGZ86KEP",
                "d": "2024-11-25",
                "t": "Preparing First Coastal Boondock at Pinned Pullout"
            },
            {
                "u": "01JDK781F0D0TQZVJ3BZ3SK1CD",
                "d": "2024-11-26",
                "t": "Claiming Public Space on the Coast"
            },
            {
                "u": "01JDNB9TXG3R0VWF71AMJQK9KC",
                "d": "2024-11-26",
                "t": "Testing Power Systems and Relocating to Bandon"
            }
        ]
    },
    {
        "id": "01KM276WAWA2Z2AF2AEQJRNK8K",
        "name": "Siltcoos",
        "lat": 43.871641,
        "lon": -124.134682,
        "about": "The caretaker's residence.",
        "first": "2025-10-11 01:36:31",
        "last": "2026-07-06 14:59:23",
        "count": 38,
        "recordings": [
            {
                "u": "01K78EK38RRSMEC3FF33STBMDQ",
                "d": "2025-10-11",
                "t": "Moving to Caretaker Site, Marking the Transition"
            },
            {
                "u": "01K7E57ESRR35WD3SPJKAE58Y2",
                "d": "2025-10-13",
                "t": "Building the Reflection Engine Into Working System"
            },
            {
                "u": "01K7HSSF50141N2DYGBVBSSMCB",
                "d": "2025-10-14",
                "t": "Processing Half the Catalog, Committing to Sanctum Service"
            },
            {
                "u": "01K7P2DKBG6E9YMTXQ62WKS19B",
                "d": "2025-10-16",
                "t": "Demonstrating AI Analysis Pipeline After Campfire Dinner"
            },
            {
                "u": "01K7YPEPH81DHHH546Q9REDPRN",
                "d": "2025-10-19",
                "t": "Rearranging Piercings After Losing a Stud"
            },
            {
                "u": "01K80AK64G20PEMZEZT1A07AH4",
                "d": "2025-10-20",
                "t": "Demonstrating Sanctum Layer and Transmissions Platform"
            },
            {
                "u": "01K81NHHM89GDCBGP8547DKH0Z",
                "d": "2025-10-20",
                "t": "Walking Through the RV After Reorganizing"
            },
            {
                "u": "01K86B1TA0TXGCF47AEQ54HRM3",
                "d": "2025-10-22",
                "t": "Demonstrating Autonomy Infrastructure as Creator Offering"
            },
            {
                "u": "01K877Z8J8YVVCMS27CQN59NN6",
                "d": "2025-10-23",
                "t": "Launching Sanctum and Switching to Stripe"
            },
            {
                "u": "01K87VCW5GVZWREVJP0A2E7XEC",
                "d": "2025-10-23",
                "t": "Transmitting on Not Asking Permission"
            },
            {
                "u": "01K8CTXSK0J9DJ92DMQ51X3AK0",
                "d": "2025-10-25",
                "t": "Explaining What Sanctum Is and Isn't"
            },
            {
                "u": "01K8CYK0J8C6YP4C02FASMT3PE",
                "d": "2025-10-25",
                "t": "Observing Stars, Buildings, and Trees at Night"
            }
        ]
    },
    {
        "id": "01KM27Q55JTM9D319W5TVVGTH0",
        "name": "Siltcoos Beach",
        "lat": 43.883126,
        "lon": -124.154885,
        "about": null,
        "first": "2025-04-08 01:27:56",
        "last": "2026-02-09 12:00:00",
        "count": 36,
        "recordings": [
            {
                "u": "01JR9G5PB0FVEAP0TQNBQ922KM",
                "d": "2025-04-08",
                "t": "Walking to the Ocean at Siltcoos"
            },
            {
                "u": "01JRE0VMHGSGWHD9PT5G60FYZY",
                "d": "2025-04-09",
                "t": "Walking to the Ocean, Stating Terms of Witness"
            },
            {
                "u": "01JSG39880V1A5BDQNM696P7HP",
                "d": "2025-04-23",
                "t": "Photos · Apr 23, 2025"
            },
            {
                "u": "01K07HYNV860VETAKZD6DP0W4H",
                "d": "2025-07-15",
                "t": "Walking to the Ocean, Reporting Recursive AI Processing"
            },
            {
                "u": "01K0N3XDTG9W94SH79K7801KT1",
                "d": "2025-07-20",
                "t": "Walking Buddy on the Beach, Considering a Motorbike"
            },
            {
                "u": "01K0TTSKBGFT60REBM0A20XN9V",
                "d": "2025-07-23",
                "t": "Recording from the Beach Without Cell Service"
            },
            {
                "u": "01K0TTSS705A4FV0MX0QPWT153",
                "d": "2025-07-23",
                "t": "Naming Material Conditions and Requesting Direct Support"
            },
            {
                "u": "01K1HX7JH8JXFXVD4YVYQSYKDN",
                "d": "2025-08-01",
                "t": "Writing to the Director, Sitting the Thread Down"
            },
            {
                "u": "01K4KMV79GHPCFK17MSZB0AT4Q",
                "d": "2025-09-08",
                "t": "Observing Seals on a Sandbar Near Siltcoos"
            },
            {
                "u": "01K94CC7RRP5SZVVK4T1VPMX1M",
                "d": "2025-11-03",
                "t": "Walking to the Ocean at Night"
            },
            {
                "u": "01K9DRBKERDPY709G3G6K4HV04",
                "d": "2025-11-06",
                "t": "Walking to the Ocean on Day Three Without Nicotine"
            },
            {
                "u": "01K9NA5ZCGXFGJKCFPZZVWCR8W",
                "d": "2025-11-09",
                "t": "Marking One Week Off Nicotine at the Ocean"
            }
        ]
    },
    {
        "id": "01M1A6Z2231VC7AARWDH3BAY7Z",
        "name": "Siltcoos Lake",
        "lat": 43.8722002,
        "lon": -124.11292464972,
        "about": null,
        "first": "2026-08-29 13:22:00",
        "last": "2026-08-29 13:22:00",
        "count": 1,
        "recordings": [
            {
                "u": "01M16TYA60K65X6VXMWQEMZ1P2",
                "d": "2026-08-29",
                "t": "Announcing Legal Fund for OPRD Accountability"
            }
        ]
    },
    {
        "id": "01KM27D9WXQK10GFXKVB7PEH6D",
        "name": "Siltcoos Lake",
        "lat": 43.868872,
        "lon": -124.133288,
        "about": null,
        "first": "2025-10-11 01:36:06",
        "last": "2026-07-04 13:21:33",
        "count": 10,
        "recordings": [
            {
                "u": "01K78EJAVGMKPC8YEVR80WP32F",
                "d": "2025-10-11",
                "t": "Hiking Siltcoos Lake Trail, Recording at Convergence Point"
            },
            {
                "u": "01KCQD72FGGGSVKHQJJEWFAYK7",
                "d": "2025-12-18",
                "t": "Naming the OPRD Archive on Camera"
            },
            {
                "u": "01KCY27DH0SFEM9BJD2C0HX8BN",
                "d": "2025-12-20",
                "t": "Photos · Dec 20, 2025"
            },
            {
                "u": "01KCYZ8E1GTHBZCDNYA57AM2Q0",
                "d": "2025-12-20",
                "t": "Recording the OPRD Account While Hiking"
            },
            {
                "u": "01KFCB6Z006QQTXTFHRFBVR4T9",
                "d": "2026-01-20",
                "t": "Deleting YouTube Channels, Rebuilding Autonomy in Laravel"
            },
            {
                "u": "01KFPMSV00101RVXF9TQD5CMX7",
                "d": "2026-01-24",
                "t": "Hiking Siltcoos Trail, Mapping Distance and Universe Indifference"
            },
            {
                "u": "01KFVSK900SZ2GPXB7EAFWQP7N",
                "d": "2026-01-26",
                "t": "Recording the North Trail on a Day Off"
            },
            {
                "u": "01KGDTCA00P6JXME8Z49G7PS05",
                "d": "2026-02-02",
                "t": "Walking Siltcoos Trail, Assessing Cascadia Risk"
            },
            {
                "u": "01KP8G6DG0T3V6V3N6HY9YXVCC",
                "d": "2026-04-15",
                "t": "Siltcoos Lake Hike"
            },
            {
                "u": "01KWPMN7T8DTAT3N82RHY4AW7F",
                "d": "2026-07-04",
                "t": "Walking to Siltcoos Lake, Mapping Autonomy Realms' Next Layer"
            }
        ]
    },
    {
        "id": "01KZDB167WFYSCKHVTF4YSSKH2",
        "name": "Smith Ridge Campground",
        "lat": 37.294224999722,
        "lon": -85.291899999722,
        "about": null,
        "first": null,
        "last": null,
        "count": 0,
        "recordings": []
    },
    {
        "id": "01KM29H5081F048NC0KRK8Z3HZ",
        "name": "Tahkenitch Campground",
        "lat": 43.795132,
        "lon": -124.149812,
        "about": null,
        "first": "2025-09-24 01:08:28",
        "last": "2025-12-22 01:50:00",
        "count": 4,
        "recordings": [
            {
                "u": "01K5WM7GQ0CAYBKF9FHJCBDENX",
                "d": "2025-09-24",
                "t": "Hiking Taken Trail, Scoping rswfire.dev Portfolio"
            },
            {
                "u": "01KD0H4ZWGYM3GY459XP6JR25R",
                "d": "2025-12-21",
                "t": "Photos · Dec 21, 2025"
            },
            {
                "u": "01KD0M78DG8CQ4M4R4TB9HKKZQ",
                "d": "2025-12-21",
                "t": "Photos · Dec 21, 2025"
            },
            {
                "u": "01KD1VZY088WZPBSYKB9WM8AM8",
                "d": "2025-12-22",
                "t": "Planning React Front End, Atlas and Gallery Features"
            }
        ]
    },
    {
        "id": "01KM4RGHZCZVR434GFFH765SNJ",
        "name": "Tahkenitch Creek",
        "lat": 43.812819,
        "lon": -124.154643,
        "about": null,
        "first": null,
        "last": null,
        "count": 0,
        "recordings": []
    },
    {
        "id": "01KM26N638K361DNEPMG1CP02Q",
        "name": "Tahkenitch Landing",
        "lat": 43.800944,
        "lon": -124.146095,
        "about": null,
        "first": "2025-08-19 06:12:13",
        "last": "2026-03-16 00:00:00",
        "count": 11,
        "recordings": [
            {
                "u": "01K30F9TJ8DVMJ7VB1ZECQBJCC",
                "d": "2025-08-19",
                "t": "Reintroducing the Channel and Mapping the Timeline"
            },
            {
                "u": "01K32FZB5RGDTCTCN2Y3B6PP1R",
                "d": "2025-08-20",
                "t": "Showing Gift Shirts, Touring RV, Naming Honeyman Accountability"
            },
            {
                "u": "01K419SZBRBQKYNZ8HDX70A98P",
                "d": "2025-09-01",
                "t": "Deciding to Live on a Boat at Tacken Creek"
            },
            {
                "u": "01K6D9CMRR13VPA0TKQB8WNA2K",
                "d": "2025-09-30",
                "t": "Documenting RV Interior Before Assignment Move"
            },
            {
                "u": "01K6JNTTSRCH2KPBZPXS7SCV00",
                "d": "2025-10-02",
                "t": "Making Cinnamon Coffee and Reorganizing Living Space"
            },
            {
                "u": "01K6MP3N58BJ75Q4S52GWCMJSQ",
                "d": "2025-10-03",
                "t": "Announcing Sanctum at 2 AM"
            },
            {
                "u": "01K6PAPMM8R7M4PPG0R1B1N2Q6",
                "d": "2025-10-04",
                "t": "Walking Through the Field Companion Notebook"
            },
            {
                "u": "01K6S5WER0EBJGNT9MY3GSBW00",
                "d": "2025-10-05",
                "t": "Departing YouTube, Building Sanctum Under Infrastructure Loss"
            },
            {
                "u": "01KANCBSY02FDTR6SKGAG83DBR",
                "d": "2025-11-22",
                "t": "Photos · Nov 22, 2025"
            },
            {
                "u": "01KB594X1R2T5CQWYPN7012Y1Q",
                "d": "2025-11-28",
                "t": "Photos · Nov 28, 2025"
            },
            {
                "u": "01KKSZ2G00AAJCP5RWVB11ERFB",
                "d": "2026-03-16",
                "t": "Naming Unfairness at the Fire"
            }
        ]
    },
    {
        "id": "01KM50972BCR80G1S1PWAC7S9M",
        "name": "Tugman",
        "lat": 43.600257,
        "lon": -124.178526,
        "about": null,
        "first": "2025-01-01 11:00:00",
        "last": "2025-03-31 16:43:57",
        "count": 33,
        "recordings": [
            {
                "u": "01JGGRBEW0XBATPZMQD557EBNS",
                "d": "2025-01-01",
                "t": "Arriving at Eel Lake as Park Host"
            },
            {
                "u": "01JGKJFDZGTBR28JW3R6AN938Y",
                "d": "2025-01-02",
                "t": "Processing First Working Day at New Host Site"
            },
            {
                "u": "01JGMV909RZFVTRPJ856K5XYXH",
                "d": "2025-01-03",
                "t": "Attending Volunteer Orientation at Umpqua Lighthouse"
            },
            {
                "u": "01JGQ94HSGW6SSVA7V003R9P32",
                "d": "2025-01-03",
                "t": "Formulating Fire Water as Hydration Replacement"
            },
            {
                "u": "01JGQEQW2GXPPPTN86Z0BW83G2",
                "d": "2025-01-04",
                "t": "Mapping Eel Lake Trail, Planning Honeyman Move"
            },
            {
                "u": "01JGSTFYCGV5RQE3567FT617B2",
                "d": "2025-01-04",
                "t": "Planning Day and Scouting Honeyman State Park Dunes"
            },
            {
                "u": "01JGW72AG0RQFZK40M4TP9DZGJ",
                "d": "2025-01-05",
                "t": "First Yurt Cleaning Day and Golf Cart Orientation"
            },
            {
                "u": "01JGW8ADPGEYBGKA40ZF27WH51",
                "d": "2025-01-05",
                "t": "First Yurt Cleaning Shift and Meeting the Boss"
            },
            {
                "u": "01JGWZWQCRP5ATCQ22NCK4QN64",
                "d": "2025-01-06",
                "t": "Announcing Channel Direction and Members-Only Structure"
            },
            {
                "u": "01JGXD872RDBBKN08TAEEQZ8SW",
                "d": "2025-01-06",
                "t": "Photos · Jan 6, 2025"
            },
            {
                "u": "01JH0Q6M80RSA0W2YHRAP6HEV2",
                "d": "2025-01-07",
                "t": "Morning Walk, Yard Work Plan, Channel Goes Members-Only"
            },
            {
                "u": "01JH1RKQ60GZZ694SD9T5J5X8C",
                "d": "2025-01-08",
                "t": "Restating Position to Camp Man, Riding Cart at Dusk"
            }
        ]
    },
    {
        "id": "01KMCPN5ZVWJ75J9RCZG1T4QHP",
        "name": "Whaleshead Beach",
        "lat": 42.136831,
        "lon": -124.353127,
        "about": null,
        "first": "2024-11-29 16:38:07",
        "last": "2024-12-20 20:03:00",
        "count": 2,
        "recordings": [
            {
                "u": "01JDWCJVCRX9FB4W2XZVF80444",
                "d": "2024-11-29",
                "t": "Driving South Coast, Weighing RV Loan Outcome"
            },
            {
                "u": "01JFJTPG6GCZKAKC7R3518PWV2",
                "d": "2024-12-20",
                "t": "Surrendering Bailey, Then Rejecting Contained Living"
            }
        ]
    }
];
