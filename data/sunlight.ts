export interface SunlightBlock {
    t: "says" | "record" | "p" | "links";
    md: string;
}

export interface SunlightSection {
    heading: string;
    blocks: SunlightBlock[];
}

// The document's answer, entry by entry — generated from the redacted
// response of September 11, 2026. The prose is the published document;
// links carry their original targets, including ?t= seeks into the tapes.
export const SUNLIGHT_INTRO: string[] = [
    "Here is what Oregon State Parks did to me at Honeyman State Park.",
    "I volunteered. I put my concerns in writing, because writing is how I communicate. The park's staff decided the writing was the problem. They called me to a picnic table and spent an hour pressuring me to resign. I did not resign. So the park manager dismissed me by phone, and the program manager then spent ten months building the document reproduced at the end of this record. It takes every ordinary thing I did and recasts it as a pattern, to justify a decision that had already been made. Then it was handed to the police.",
    "I kept my own record the entire time. Every email, sent and received. Two recordings. All of it contemporaneous, all of it published, every item at a permanent address. That record is why the document does not survive contact with the facts.",
    "What follows is the document, bullet by bullet. Its words first, in quotation marks, exactly as written. Then the record, with the links to prove it."
];

export const SUNLIGHT_SECTIONS: SunlightSection[] = [
    {
        "heading": "January 2025 \u2014 Tugman",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger [Tugman Volunteer Services Lead] discusses with Sam that he has been sending to many texts and emails to staff.\""
            },
            {
                "t": "record",
                "md": "This is the document's first entry. It is about Tugman, a month before Honeyman, and Tugman is not named again anywhere in the document. Placed first, it supplies the appearance of a pattern before the document reaches Honeyman.\n\nLook at how [Tugman Volunteer Services Lead] actually wrote to me. [\"Excellent! Congrats!\"](https://oprdvolunteerabuse.org/accountability/oprd/01JKC93XJ05B7ZFFY3MS9AV43A/) and [\"I am not surprised. I think you'll have a good time there.\"](https://oprdvolunteerabuse.org/accountability/oprd/01JMMXCP10R37WHGGVDPZ07ZQ3/)\n\n[On the morning of March 24, 2025, hours before Honeyman dismissed me, she wrote to me about my next assignment](https://oprdvolunteerabuse.org/accountability/oprd/01JQ4D8830BX5NSFR9688G7DVB/): last-minute cancellations had moved my April relief-greeter placement from Umpqua to Tugman, and she asked whether to switch my September assignment as well. [I answered that morning](https://oprdvolunteerabuse.org/accountability/oprd/01JQ4J1GCGYPQ669RHG3WCHFT4/): \"Actually let's keep September the same too. Tugman feels like home. See you next week!\" The park manager called me that afternoon.\n\nAnd when she learned I had been dismissed from Honeyman, [her last letter to me](https://oprdvolunteerabuse.org/accountability/oprd/01JQ75M860BH848CACWBGP8FDX/): \"I'm really sorry to hear that! I know you were really looking forward to hosting there so it's a shame it didn't work out. We can talk about it when you get here if you want. Take it easy this week!\" That is not how someone writes to a person whose communication was a problem."
            },
            {
                "t": "p",
                "md": "*One observation. [Tugman Volunteer Services Lead] coordinated volunteers for her park when this began. Directly after all of this, she was demoted to a regular ranger. The one person in this record who treated me with plain decency is the one who lost standing.*"
            }
        ]
    },
    {
        "heading": "02/09/25 \u2014 the power outage",
        "blocks": [
            {
                "t": "says",
                "md": "\"Power goes out at 3 a.m. Sam texts ranger supervisor at 6 a.m who responds via text. Sam sends email to Ranger Supervisor [Park Supervisor] wanting additional clarification who to contact during emergencies. [Park Supervisor] Responds later by email. Sam then emails Ranger Supervisor [Park Supervisor] and Ranger [Volunteer Services Lead] expressing [Park Supervisor] made him feel small/not appreciated in her texts.\""
            },
            {
                "t": "record",
                "md": "False. I texted the supervisor at 6 a.m. and she answered by text. She did not answer an email, because no email existed yet.\n\nI documented it. [I emailed her](https://oprdvolunteerabuse.org/accountability/oprd/01JKMXJCF8D4M3JQHEH9G94SBP/), and [I emailed the volunteer services lead](https://oprdvolunteerabuse.org/accountability/oprd/01JKMXKQE8BSX3BFPWVAK1PXRZ/). Only then did she write to me. [She apologized](https://oprdvolunteerabuse.org/accountability/oprd/01JKRMYTC8KZCWWMCGCWFZH2MA/), \"that was absolutely not my intent,\" and gave me the written protocols [I thanked her for](https://oprdvolunteerabuse.org/accountability/oprd/01JKRNVP6RQ12HQYQJ8A35C50J/).\n\nThe document reverses that order. In its sequence she answers me and I write again to say she made me feel small. In the record my email is what produced her apology. The reversal turns documentation into a complaint about a matter already handled."
            }
        ]
    },
    {
        "heading": "02/10/25 \u2014 the call",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam calls park manager trying to get ahold of the rangers.\""
            },
            {
                "t": "record",
                "md": "True. A guest needed an answer and I called down the escalation chart, the rangers first, the park manager last. He did not answer.\n\nI described this call at the picnic table a month later, as my example of Patrick’s condescension: a guest situation I had to escalate, where I called everyone including him, and when he arrived he recited the entire call log back to me ([10:36](https://oprdvolunteerabuse.org/evidence/coercion/?t=10:36))."
            }
        ]
    },
    {
        "heading": "02/11/25 \u2014 the visit",
        "blocks": [
            {
                "t": "says",
                "md": "\"Park Manager [Park Manager] stops by welcome center to talk with Sam and ensure he is up to speed on things, including after hours communication and expectations. Additionally, [Park Manager] asks Sam to stop writing poems, drawing in the red book and to only include relevant work information in this book.\""
            },
            {
                "t": "record",
                "md": "False. He came, and nothing the entry gives as the reason is true.\n\n[The next morning I put in writing, to all three of them, what this was](https://oprdvolunteerabuse.org/accountability/oprd/01JKXC1M80V9A90EV4SX6BFJ35/): \"the volunteer asserted a boundary as softly as he could and he felt it was respected and was already moving on, but the system saw it differently, and a park manager showed up at the start of his shift, without his direct supervisor for support, and this created a whole new situation.\"\n\nThe red book: I raised it myself. I showed him the book and asked. I stopped the doodles that day, and said so at the picnic table weeks later ([35:30](https://oprdvolunteerabuse.org/evidence/coercion/?t=35:30)). I photographed every page of that book. There are no poems in it. There are notes between staff and volunteers wishing each other a good day. I have the photographs."
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 dissatisfaction",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam expresses dissatisfaction with park manager stopping by, as well as with Rangers [Park Supervisor] and [Volunteer Services Lead]. Park manager e-mails back with Sam.\""
            },
            {
                "t": "record",
                "md": "False. I expressed no dissatisfaction. That is a characterization. The email is quoted above, and it asked for a reset: \"I will conform. I will recalibrate. I will be a model volunteer.\" [The park manager agreed](https://oprdvolunteerabuse.org/accountability/oprd/01JKXHEPAR0PEQMPJXJGG9GZJ4/): \"A reset sounds good to me.\"\n\n[I forwarded it to the program manager on December 19, 2025](https://oprdvolunteerabuse.org/accountability/oprd/01KCW58AYR8F09QY561CPNAY9F/)."
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 the reset meeting",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger [Volunteer Services Lead] and Ranger Supervisor [Park Supervisor] had an 'informal' meeting with Sam, at a picnic table at Sand Dunes day use area so that [Park Supervisor] could talk with Sam in person, apologize for the text communication making him feel small and explain the intent. The meeting went well and Sam said all was good when they ended the conversation.\""
            },
            {
                "t": "record",
                "md": "True. I believed the reset was real. [I applied for a job at Honeyman that night.](https://oprdvolunteerabuse.org/accountability/oprd/01JKYSTM48Y0QK5CM8QSD0QC6X/)"
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 the fabricated quotation",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam reached out to Ranger [Volunteer Services Lead] to discuss his withdrawal of an application to become a PRA with OPRD,\" and in that conversation attributes to me talk that the world was going to end and a dramatic quotation ending \"That's just who I am.\""
            },
            {
                "t": "record",
                "md": "This is false on its face. [I applied for the position the night of February 12.](https://oprdvolunteerabuse.org/accountability/oprd/01JKYSTM48Y0QK5CM8QSD0QC6X/) [I did not withdraw it until February 16.](https://oprdvolunteerabuse.org/accountability/oprd/01JM9193N021MEHRXWSR30NWT5/) And I did not discuss the withdrawal with [Volunteer Services Lead] until February 19, when [I emailed him](https://oprdvolunteerabuse.org/accountability/oprd/01JMFWR8VREQS149ZWH8ENVVM3/): \"could you stop by my campsite? There's something I'd like to talk to you about. I will tell you why I withdrew my application.\"\n\nA conversation about withdrawing an application cannot have happened on the day I applied and four days before I withdrew. This document collapses events a week apart into a single dated entry, and hangs a fabricated quotation on it."
            }
        ]
    },
    {
        "heading": "02/15/25 and 02/16/25 \u2014 the withdrawal",
        "blocks": [
            {
                "t": "says",
                "md": "\"[Park Supervisor] and [Volunteer Services Lead] working at welcome center on fence. Ranger Supervisor asks Sam what his plans for the summer are.\" And: \"Sam later withdraws his PRA application and makes this known because Supervisor [Park Supervisor] asked what his plans were for the summer.\""
            },
            {
                "t": "record",
                "md": "The conversation happened. What the document strips from it is who was asking. [Park Supervisor] was the hiring manager for seasonal staff. My application for a summer position at Honeyman had gone [directly to her](https://oprdvolunteerabuse.org/accountability/oprd/01JKYWWYKR8F67JQGVNF5V44WP/); the cover letter opens, \"I recognize this might not be the application you expected to land on your desk.\"\n\nShe asked me what my volunteer plans on the coast were for the summer. My hope was to work at Honeyman, and I said that to her. She became uncomfortable. If she was asking about my summer volunteer plans, she was not considering hiring me.\n\n[I withdrew the application](https://oprdvolunteerabuse.org/accountability/oprd/01JM9193N021MEHRXWSR30NWT5/) and gave no reason to anyone, \"not something I want to discuss,\" and said nothing, especially not to her.\n\n[On the March 5 recording, at 46:29](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:29), she says she \"interpreted\" my withdrawal as a response to something she said, and confirms I never made it an issue with her. I never did. [Program Manager] had access to the recording. She knew about it from March 10, when she called me about it."
            }
        ]
    },
    {
        "heading": "02/19/25 \u2014 \"heavy things\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email expressing that he has been having trouble sleeping and that he is dealing with 'some pretty heavy things right now and I haven't processed them all' and that [Volunteer Services Lead] may have noticed.\""
            },
            {
                "t": "record",
                "md": "False. The gate is what that email is about. On February 1, [I volunteered to open and close the dune-access gate](https://oprdvolunteerabuse.org/accountability/oprd/01JK2KXMC0WRNWKNS57C1NWGZ0/), unpaid, \"Even on my days off.\" That meant 7 a.m. and 10 p.m., every day.\n\nTwo and a half weeks in it was costing me sleep, and [I asked [Volunteer Services Lead] to find someone else for the night close](https://oprdvolunteerabuse.org/accountability/oprd/01JMFB5TT8WYADV2FKJZEXC9AZ/) and kept the morning open. [[Volunteer Services Lead]'s own answer that day](https://oprdvolunteerabuse.org/accountability/oprd/01JMG1XWNGPJZ1Z2JS08T2TGDT/) was to split the gate \"between two people so that you don't feel so boxed in with the hours.\"\n\nThe same morning, when the person covering my day off forgot the gate, [I offered to handle it myself, \"so they don't feel called out.\"](https://oprdvolunteerabuse.org/accountability/oprd/01JMFBX010S39S8XW9EZQQC8GF/) That afternoon [I agreed to close the gate on the other closers' days off](https://oprdvolunteerabuse.org/accountability/oprd/01JMG2NFHR1H360GDY8WDQSK69/)."
            }
        ]
    },
    {
        "heading": "02/25/25 \u2014 the piercing email",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email telling him to check out his new video as it shows off his new piercing. Sam claims the email was meant for someone else.\""
            },
            {
                "t": "record",
                "md": "True, and [I corrected it within hours on my own](https://oprdvolunteerabuse.org/accountability/oprd/01JMYAV0MR16ZWGVW9HM44HT59/): \"Sorry, that was meant for a friend. Please disregard.\" A misdirected message, caught and retracted by me. It is in the file because everything is in the file."
            }
        ]
    },
    {
        "heading": "02/26/25 \u2014 Patrick",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam emails Ranger [Volunteer Services Lead] to express concern with working with Ranger Patrick.\""
            },
            {
                "t": "record",
                "md": "[I asked, without escalation](https://oprdvolunteerabuse.org/accountability/oprd/01JN0Q6H10990Z8DBSZ1E25HT7/), whether I would be trained by a ranger who had been repeatedly condescending, and said \"no need to escalate\u2014just wanted to clarify.\"\n\nOn the March 5 tape I say Patrick was very polite ([8:13](https://oprdvolunteerabuse.org/evidence/coercion/?t=8:13)), that I had no issue with him and navigated him easily ([6:59](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:59)), that I navigate him like I do everybody ([9:12](https://oprdvolunteerabuse.org/evidence/coercion/?t=9:12)), and that he is not out to get me, he is just being himself ([27:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=27:33)). I never had a conflict with Patrick.\n\nThe issue was that I had been told a different ranger would train me, and that turned out not to be true. The park manager confirms it himself on the tape: the volunteer services lead told me Leaf would train me ([7:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=7:33)), and it was the park manager who overrode it, and nobody told me ([28:49](https://oprdvolunteerabuse.org/evidence/coercion/?t=28:49))."
            }
        ]
    },
    {
        "heading": "02/27/25 \u2014 the poem",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] a poem asking for feedback.\""
            },
            {
                "t": "record",
                "md": "[I sent a poem about the coast](https://oprdvolunteerabuse.org/accountability/oprd/01JN5AXYC0SD3DEBEQ8TYBCQ99/) to the coordinator I was asking to help me find placements at other parks, so he would understand why the coast mattered to me. Not for feedback; as context for a request for help. I sent the same poem to [Tugman Volunteer Services Lead]. [It was a nice poem.](https://rswfire.com/library/signal/01JGF4VGG0DXDJAKWA4VDBZ67E)"
            }
        ]
    },
    {
        "heading": "02/28/25 \u2014 \"friends\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email asking him to leave him a positive performance review, for help finding volunteer assignments elsewhere on the coast, and to return to Honeyman next year. He also shares that he thought Ranger [Volunteer Services Lead] and Sam could be friends, but he now understood 'That's not the case.'\""
            },
            {
                "t": "record",
                "md": "True. [The letter is on the record.](https://oprdvolunteerabuse.org/accountability/oprd/01JN7XVHD89PACJKYM3JMKTYFW/) It was my last day at the welcome center: \"I had a very good day. I helped a lot of people, and I'm going to miss the welcome center.\" Three requests: a strong review, help finding the same role at other coastal parks, consideration for a return next year.\n\nAnd the document stops quoting one sentence early. The letter continues: \"I accept this. What I do know is that I bring value \u2014 to this park, to this system, to the people I serve. I trust that you will advocate for me in a professional capacity.\""
            }
        ]
    },
    {
        "heading": "03/01/25 \u2014 Patrick again",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends an email to Ranger [Volunteer Services Lead] expressing dissatisfaction with Ranger Patrick... Sam did not want to attend a training led by Ranger Patrick. Staff arranged to have an additional Ranger, Ranger Leaf, present at the training with Sam and Patrick. Sam was still dissatisfied with having to work with Patrick.\""
            },
            {
                "t": "record",
                "md": "False. [Volunteer Services Lead] promised me Leaf would train me. That morning I texted Leaf. He knew nothing about it. I told him I would not go until I talked to [Volunteer Services Lead]. He offered to attend the training alongside Patrick and asked if that would work. I said yes. I went to the training.\n\nOn the tape the park manager acknowledges I attended with no issue ([6:38](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:38)), and I say I went and did the training ([29:08](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:08)).\n\nThat evening I documented it. [The first email](https://oprdvolunteerabuse.org/accountability/oprd/01JNAHNHM85XV15M7438MYXR5A/): \"I wasn't getting my hopes up - I wanted to know if we had the same flexibility here that I had at Tugman.\" [The second](https://oprdvolunteerabuse.org/accountability/oprd/01JNAM0E3RRXDZ8TX45JFQ708D/): \"This is the pattern I'm talking about... I am not the problem in this equation. I have had zero issues with guests and volunteers my entire time here.\" [The third](https://oprdvolunteerabuse.org/accountability/oprd/01JNAP0748259QVFXDPCDREPQ6/): \"I was proactive about this, even this morning, trying to ensure Leaf would be the one who trained me because I knew to expect this behavior from Patrick. I told you about it.\" \"I will not let you or anyone else make me the problem. I will protect myself. I see what's happening. You all keep trying to manage me like I'm a problem when all I really am is a mirror to the actual problem\u2014the way you try to manage me.\"\n\nThe Trust email came the next morning."
            }
        ]
    },
    {
        "heading": "03/02/25 \u2014 the \"trust\" email",
        "blocks": [
            {
                "t": "says",
                "md": "that I said I no longer trusted [Volunteer Services Lead], and quotes only: \"You will ensure that my contributions are recognized appropriately in your system. I will not allow the dysfunction here to interfere with my larger trajectory. If there is any pushback on this, understand that I am fully prepared for it.\""
            },
            {
                "t": "record",
                "md": "The document quotes the last four lines and deletes everything above them. [The email](https://oprdvolunteerabuse.org/accountability/oprd/01JNBNSRN04NEM4MEZJG40Q3N5/) states what [Volunteer Services Lead] did: \"When I confided in you about the situation with [Park Supervisor], you escalated it instead of protecting me. Then you disappeared.\" \"The moment I withdrew my application, you reappeared\u2014spending ninety minutes talking about yourself.\" \"You responded by trying to manage my perception instead of actually listening.\" \"You assured me Leaf would train me. That didn't happen.\"\n\nThen it states what I would do. I wrote it to protect myself. [I forwarded it to the supervisor myself, the same morning](https://oprdvolunteerabuse.org/accountability/oprd/01JNBTPJ7GF0TJTD01ZVGVSPBG/): \"I am not escalating. I am informing.\""
            }
        ]
    },
    {
        "heading": "03/05/25 \u2014 the meeting",
        "blocks": [
            {
                "t": "says",
                "md": "that [Park Manager] and [Park Supervisor] met with me \"to set clear expectations for behavior and actions needed from Sam to continue being a park host.\""
            },
            {
                "t": "record",
                "md": "This entire meeting is on tape. Sixty-two minutes, public for over a year, with transcript, chapters, and analysis:"
            },
            {
                "t": "links",
                "md": "- [The recording, with transcript and analysis](https://rswfire.com/library/signal/01JNK2TKG01JTERAMB7J6AKPK1)\n- [The chaptered record, in the archive](https://oprdvolunteerabuse.org/evidence/coercion/)"
            },
            {
                "t": "p",
                "md": "It was not expectation-setting. This is what is on the tape."
            },
            {
                "t": "p",
                "md": "The park manager opened with praise: I was doing a great job at the welcome center ([0:00](https://oprdvolunteerabuse.org/evidence/coercion/?t=0:00)). Then he read from a list of talking points, a single piece of paper in front of him ([2:53](https://oprdvolunteerabuse.org/evidence/coercion/?t=2:53)). When I disagreed, he said \"You don't have to agree with it\" ([4:39](https://oprdvolunteerabuse.org/evidence/coercion/?t=4:39)), and \"this isn't an argument,\" twice ([6:26](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:26)).\n\nNine minutes went to Patrick, a ranger I called very polite ([8:13](https://oprdvolunteerabuse.org/evidence/coercion/?t=8:13)); at the end of them he said, \"So I understand you have a conflict with Patrick\" ([9:12](https://oprdvolunteerabuse.org/evidence/coercion/?t=9:12)). His example of tone was the difference between introducing yourself politely and telling a camper to \"shut the fuck up\" ([12:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=12:52)).\n\nHe told me the emails were not the issue, that communication was healthy; I asked, \"Do you really mean this?\" and he said he did ([15:20](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:20)). He claimed my emails contained words they do not contain; I told him they were not in there; he said \"fair enough\" and moved on. He had no emails at that table. He had a handwritten piece of paper ([15:45](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:45)).\n\nThe supervisor spoke for the first time in nineteen minutes. One word: \"Tone\" ([18:59](https://oprdvolunteerabuse.org/evidence/coercion/?t=18:59)). He instructed me to have only conversations that do not result in threats or demands ([21:15](https://oprdvolunteerabuse.org/evidence/coercion/?t=21:15)), and quoted demands I never wrote; I denied them and he could not produce them ([21:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=21:31)). He reminded me of his fifteen years in the agency, the disciplinary processes, HR ([22:40](https://oprdvolunteerabuse.org/evidence/coercion/?t=22:40)). Then he told me to chew glass and swallow it ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17)).\n\nHe told me to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16)). Thirty minutes in, and for the first time, he told me the volunteer services lead had no supervisory authority, and: \"If we do dismissal \u2014 it's not the volunteer services lead doing a dismissal. It's the park supervisor or myself\" ([29:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:52)). He raised the poem and said he did not need an explanation ([36:20](https://oprdvolunteerabuse.org/evidence/coercion/?t=36:20)).\n\nHe counted my first week, one day and one text message, as two incidents, and called it a pattern ([44:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:42)). He described a claim I never made about the supervisor and called it \"the most false thing I've ever heard\"; I told him I never said it, and he answered, \"that's how it was received\" ([45:30](https://oprdvolunteerabuse.org/evidence/coercion/?t=45:30)). The supervisor then confirmed the interpretation was hers ([46:29](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:29)).\n\nWhen I said I was not being given the benefit of the doubt, he answered, \"I may not be able to help you with that\" ([50:10](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:10)). When I asked for examples of the pattern, he said he had provided them ([52:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=52:42)). In the final two minutes he told me four times I did not have to stay ([59:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:31))."
            },
            {
                "t": "p",
                "md": "The \"Manager notes\" make six claims about that meeting. The tape answers each."
            },
            {
                "t": "says",
                "md": "\"when [Park Manager] stated he does not trust Ranger [Volunteer Services Lead] \u2014 Sam would act like he never said that and has no recollection of saying that. When presented information and an explanation he would express that he in fact does not trust Ranger [Volunteer Services Lead].\""
            },
            {
                "t": "record",
                "md": "I never wavered on the tape. Nineteen minutes in, I stopped him: \"Let's get to the real issue here.\" I did not trust the volunteer services lead. He had given me no reason to trust him. I laid out why ([19:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=19:17)): he told me another ranger would train me, and that did not happen ([7:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=7:33)).\n\nWhen the park manager claimed I had written things I had not, I told him it was not in the emails, and he said \"fair enough\" and moved on because he could not produce them ([15:45](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:45)). The contradiction it describes did not occur."
            },
            {
                "t": "says",
                "md": "\"Sam stated that he does not understand that words have implied meaning... When presented an example of a correspondence he sent that BOLDED specific words he said he did that 'to get his point across.' Disproving his prior point.\""
            },
            {
                "t": "record",
                "md": "I bolded words to emphasize them. That is what bold text is for. I said I was direct and meant exactly what I wrote, so no one needed to read hidden meaning into it ([17:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=17:52)). The exchange is on the tape ([20:30](https://oprdvolunteerabuse.org/evidence/coercion/?t=20:30)).\n\nA volunteer bolded a word in an email. That is what this entry is about, in a document a state agency wrote about a person and delivered to the police."
            },
            {
                "t": "says",
                "md": "\"Sam was informed that he does not get to direct which staff members he will or will not work with.\""
            },
            {
                "t": "record",
                "md": "These are the park manager's words, said to me at that table. I said nothing, because it is obvious. His words imply I thought otherwise. I never did.\n\nI reported that the volunteer services lead told me a specific ranger would train me. That was his commitment, not my demand ([5:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=5:33)). On the tape the park manager confirms it was management that overrode it, without telling me ([28:49](https://oprdvolunteerabuse.org/evidence/coercion/?t=28:49))."
            },
            {
                "t": "says",
                "md": "\"When presented our goal to assume positive intent until proven otherwise, Sam said he felt we were not assuming positive intent with him, but when given examples of why the meaning of his words indicated differently he was disproved of his original viewpoint and was given specific examples of times he proved us otherwise.\""
            },
            {
                "t": "record",
                "md": "The sentence asserts I was disproved. It does not say of what, or by what. The examples it refers to, twice, appear nowhere in the document.\n\nThe exchange it describes is on the tape: when I said I was not being given the benefit of the doubt, the park manager answered, \"I may not be able to help you with that\" ([50:10](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:10))."
            },
            {
                "t": "says",
                "md": "\"Sam stated that he just wants to finish out the time here and move on. That he does not see a future here... Manager [Park Manager] reminded him that he is not required to stay... he is free to go.\""
            },
            {
                "t": "record",
                "md": "I told him I had genuinely wanted a future at Honeyman and no longer believed it was possible, after an hour of what that meeting was ([57:57](https://oprdvolunteerabuse.org/evidence/coercion/?t=57:57)).\n\nThe \"free to go,\" which the notes present as reassurance, was said to me four times in the final two minutes ([59:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:31)). That is not reassurance. It is pressure to leave, and stripped of the hour that produced it, the notes hide that."
            },
            {
                "t": "says",
                "md": "\"Overall Sam accepted the feedback but Management found they had to really explain each point and provide examples and tie multiple interactions together.\""
            },
            {
                "t": "record",
                "md": "The park manager claimed a pattern: an instance every other week, consistent throughout the month ([44:02](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:02)). I asked for the examples ([44:22](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:22)). He gave two: the supervisor's text message from the first week of February, and his own visit. Both happened on the same day ([44:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:42)).\n\nI asked again near the end of the meeting. He said he had provided them, \"lots of emails and texts\" ([52:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=52:42)). No email and no text was produced at that table, and the only incident named in sixty-two minutes was the text message from the first week of February."
            }
        ]
    },
    {
        "heading": "03/05/25 \u2014 the recording",
        "blocks": [
            {
                "t": "says",
                "md": "\"Unprompted, Ranger Supervisor [Park Supervisor] received a text from Sam of a YouTube link that is a recording of their conversation. Sam never informed Park Manager [Park Manager] or [Park Supervisor] the conversation was being recorded.\""
            },
            {
                "t": "record",
                "md": "True. Two public officials sat an unpaid volunteer down at a picnic table in a public park and questioned him for an hour. I recorded it.\n\nI sent it to them afterward, and I kept it private, because I thought knowing a record existed would make them stop. They expelled me anyway. I waited two months after the expulsion, then released the recording publicly on May 27, 2025, [with notice to [Program Manager] the same day](https://oprdvolunteerabuse.org/accountability/oprd/01JW9WVW38VHEKAGZVCX7554C8/).\n\nI make no apology for recording public officials, in a public setting, questioning an unpaid volunteer. That recording is the only reason any of this can be checked."
            }
        ]
    },
    {
        "heading": "03/10/25 \u2014 the admonition",
        "blocks": [
            {
                "t": "says",
                "md": "that [Program Manager] called me about \"the uninformed recording\" and explained that \"as a volunteer, Sam is an agent of the state and as such is held to a higher standard, so... he cannot record conversations without informing the other parties present.\""
            },
            {
                "t": "record",
                "md": "Five days after the meeting, the program manager called me. The subject of the call was not what happened at that table. It was that I had recorded it."
            }
        ]
    },
    {
        "heading": "03/21/25 \u2014 the hearsay",
        "blocks": [
            {
                "t": "says",
                "md": "\"Another Park Host at Honeyman reaches out to park management to inform them that Sam has been expressing dissatisfaction with the rangers, stating they are unhelpful, and has been saying some concerning things (re-end of the world).\""
            },
            {
                "t": "record",
                "md": "Secondhand, from an unnamed source, repeating the same apocalyptic invention that appears nowhere in ten weeks of my correspondence. It is not evidence. It is the fabrication, cited a second time to make it look corroborated."
            },
            {
                "t": "p",
                "md": "The document claims that week held a volunteer \"saying some concerning things.\" This is what that week held. On March 18, six days before my dismissal, with every ranger away at a regional event, a man [the agency later confirmed as its own employee](https://oprdvolunteerabuse.org/accountability/oprd/01JPTVM380TK5VF35A8TSM9EGJ/) came to me while I worked alone and probed me about leadership: how I was being treated, whether leadership was treating me well.\n\n[I documented it within hours.](https://oprdvolunteerabuse.org/accountability/oprd/01JPNSRRZ0358ZTTN8NMXHESYP/) [The supervisor replied within the hour with the explanation](https://oprdvolunteerabuse.org/accountability/oprd/01JPNX0J88PQE161MCS09FZA6C/): IT staff photographing sites, and \"I think you handled it wonderfully.\" [My reply noted the photographs were taken before I had cleaned.](https://oprdvolunteerabuse.org/accountability/oprd/01JPTVWKPRBZ74W0XHC9XVSWEJ/)\n\n[I named the encounter as a baited assessment to the program manager on May 26, 2025](https://oprdvolunteerabuse.org/accountability/oprd/01JW7QYBXRQ096VC43S9EQJC94/), and [to the director on August 15, 2025](https://oprdvolunteerabuse.org/accountability/oprd/01K2QNT3G0QP8S42VBMG49CD7Y/). Neither responded. [The full record of the encounter is in the archive.](https://oprdvolunteerabuse.org/evidence/surveillance/)"
            }
        ]
    },
    {
        "heading": "03/21/25 \u2014 the journal",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger Faye informed Park Supervisor [Park Supervisor] that Sam had a found item (a journal)... During this interaction Sam also told Faye that the Rangers at Honeyman were unhelpful. Ranger Faye stated that Sam said this multiple times to her throughout the interaction.\""
            },
            {
                "t": "record",
                "md": "We spent minutes on this in the recorded March 25 call. A veteran's journal came through lost and found. I told a park host that not every ranger goes the extra mile on things like that, and I wanted someone to try ([4:38](https://oprdvolunteerabuse.org/evidence/expulsion/?t=4:38)).\n\nThe program manager asked which rangers I was referring to. I told her it was a general comment, not about Honeyman: \"I was not dissatisfied. I did not express any dissatisfaction. I was not talking about Honeyman in particular. This was a general comment\" ([5:28](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:28)).\n\nAnd: \"I'm very surprised this is the reason being used because it was not meant as anything in particular. It was just me trying to frame how important I thought it was that we tried to get this journal back to its owner\" ([6:09](https://oprdvolunteerabuse.org/evidence/expulsion/?t=6:09))."
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the dismissal",
        "blocks": [
            {
                "t": "says",
                "md": "\"Park Manager [Park Manager] called Sam to arrange time for an in-person discussion... Sam kept talking over [Park Manager], and as the conversation was no longer productive... Park Manager [Park Manager] dismissed Sam from volunteer service at Honeyman State Park, and gave him 24 hours to leave his park host site.\""
            },
            {
                "t": "record",
                "md": "The park manager dismissed me by phone on March 24. [My departure was already arranged for March 31, one week away, and signed off in writing on March 14.](https://oprdvolunteerabuse.org/accountability/oprd/01JPB7G1BRWV6V8BFPPHGCY688/)\n\n[I wrote to the program manager the same afternoon](https://oprdvolunteerabuse.org/accountability/oprd/01JQ51JFPRZVFQ28F1R1ASPWNE/): \"I was not given any paperwork or official documentation. I was simply told to turn over my keys and leave within 24 hours.\" I named it in that email: \"I believe this dismissal was not only unprofessional but retaliatory, stemming from a series of escalating tensions initiated after I submitted a respectful email expressing concern over a prior interaction with leadership. Since that moment, I've experienced a breakdown in communication, exclusion, and intimidation. Today's action felt targeted and final, without process or fairness.\"\n\nI told her I had no current housing and limited funds, and I asked for review and immediate support: \"I believe I've served with integrity and deep commitment to the mission of Oregon State Parks, and I only ask that I be treated with the same respect.\"\n\nThat evening the park manager came to my site to collect the keys and binder. [I recorded it](https://oprdvolunteerabuse.org/evidence/dismissal/?t=15:09) at 15:09. On camera, he confirmed there would be no paperwork."
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the video",
        "blocks": [
            {
                "t": "says",
                "md": "that my email to [Program Manager] included \"a link to a public YouTube video that details his opinions of park staff, including their names,\" titled \"I Was Dismissed Without Cause: My Experience at Honeyman State Park, Oregon (OPRD).\""
            },
            {
                "t": "record",
                "md": "The same email. My words in it about the video: \"To help provide a fuller picture, I've recorded a video explaining the sequence of events and the emotional and practical weight this situation has placed on me. I've also included my documentation.\" [The video is in the archive.](https://oprdvolunteerabuse.org/evidence/dismissal/)\n\nIn it, I say what happened and what I will do about it: \"I have been a model volunteer here. The volunteers love me. The guests love me. Most of the rangers do\" ([0:01](https://oprdvolunteerabuse.org/evidence/dismissal/?t=0:01)). \"I am going to file a complaint with the human resources department. I'm making this public. I'll probably reach out to the lawmakers. I will think through this because now I'm escalating. And I'm going to hold them accountable for how they treated me\" ([12:17](https://oprdvolunteerabuse.org/evidence/dismissal/?t=12:17)). \"I am absolutely broke. I have nowhere to go. I'm supposed to leave within 24 hours\" ([13:52](https://oprdvolunteerabuse.org/evidence/dismissal/?t=13:52)).\n\nA citizen, dismissed by a state agency that day, said so in public."
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the recording, shared",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends a link to his recording of the 3/5/25 conversation to another park host at Honeyman.\""
            },
            {
                "t": "record",
                "md": "True."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 the videos",
        "blocks": [
            {
                "t": "says",
                "md": "\"[Program Manager] goes to review the video Sam shared earlier, and a second public video was posted sharing more of his opinion of the dismissal at Honeyman. The second video was later removed and is not listed on Sam's YouTube account.\""
            },
            {
                "t": "record",
                "md": "False. There was no second video."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 the [Program Manager] call",
        "blocks": [
            {
                "t": "says",
                "md": "that on the call it was \"difficult for him to provide detailed grounded references to situations.\""
            },
            {
                "t": "record",
                "md": "[I recorded that call.](https://oprdvolunteerabuse.org/evidence/expulsion/) I recorded the March 5 meeting it was about.\n\nAnd hours after the call, [I sent her the specifics in writing](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/): what was said, by whom, at which meeting."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 \"for being me\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Following the conversation with [Program Manager], Sam posts another video sharing his opinion on the phone call, 'If I'm kicked out, it will be for being me.'\""
            },
            {
                "t": "record",
                "md": "[Here is the video.](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32) It is a morning update to my audience, recorded at 10:30 with two and a half hours left before my departure deadline: the packing, the tent structure, the emptied tanks, moving the rig for the first time in two months, the campground south I was heading to. It names no one.\n\nAnd the line they quote is not what I said. What I said: \"I'm not apologizing for those things anymore. That was part of my journey, getting to the point in myself where I didn't let other people make me small and treat me like I'm a problem when I'm not.\" And: \"So if I'm kicked out of the program, I'm kicked out of the program for being me.\" And: \"If that happens, that says everything about them and nothing about me.\"\n\nI was moving because they forced me to, and telling people what I was doing. A program manager for a state government was watching it, and put it in a file."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 \"eat glass\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"In a phone call between [Program Manager] and Park Manager [Park Manager] confirms that he did not tell Sam to 'eat glass' in a derogatory way, but was using it as an analogy to say that feedback can be hard to accept at first, but in the long run, it makes us stronger \u2013 like eating glass.\""
            },
            {
                "t": "record",
                "md": "He said it to me twice, on tape ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17), [42:05](https://oprdvolunteerabuse.org/evidence/coercion/?t=42:05)), after reminding me of his fifteen years, the disciplinary processes, and HR ([22:40](https://oprdvolunteerabuse.org/evidence/coercion/?t=22:40)).\n\nI was an unpaid volunteer, alone at that table, with no union, no HR access, and no recourse.\n\nThe program manager had known the recording existed since March 10. She did not play it. She called him, and what he told her about himself became the record."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 my follow-up",
        "blocks": [
            {
                "t": "says",
                "md": "that my follow-up email to [Program Manager] made \"claims,\" and lists them: that [Park Manager] said I could leave, said eat glass aggressively, and had not given me the benefit of the doubt; that [Volunteer Services Lead] promised training that didn't happen; the [Park Supervisor] text; and that \"Management's response to him was due to him putting complaints in writing.\""
            },
            {
                "t": "record",
                "md": "[That email is on the record.](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/)\n\nEach statement it lists is on the March 5 tape: he told me I could leave, four times in the final two minutes ([59:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:31)); he told me to chew glass and swallow it ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17)); he said he may not be able to give me the benefit of the doubt ([50:10](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:10)); the training commitment is confirmed in his own words ([7:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=7:33)); and he told me to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16))."
            }
        ]
    },
    {
        "heading": "03/26/25 \u2014 the letter",
        "blocks": [
            {
                "t": "says",
                "md": "that [Program Manager] sent \"notification of Sam's dismissal from Volunteer Service, including a copy of the formal letter.\""
            },
            {
                "t": "record",
                "md": "True."
            }
        ]
    },
    {
        "heading": "The determination",
        "blocks": [
            {
                "t": "says",
                "md": "that I \"was not receptive,\" that I shared my opinion \"publicly rather than through the internal channels OPRD made available to him,\" and that due to \"the public statements made about park staff and the dismissal\" I am \"not able to be a professional representative of the park host program.\""
            },
            {
                "t": "record",
                "md": "This reasoning exists only in this file. It is not in the dismissal letter, not in any email, not on either recorded call.\n\nAnd there were no \"internal channels OPRD made available\" to me. As a volunteer I had no HR access. The person I was told was my supervisor had no supervisory authority ([29:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:52)). Park management's instruction to me, on tape, was to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16)). The program manager's first call to me was about my recording. When I called her back and told her what was happening, she told me to \"put my head down, every park is different.\" That is every channel there was.\n\nThe grounds are named in their own words: \"the public statements made about park staff and the dismissal.\" They expelled me for public statements about their agency, and they wrote that reason down themselves. A state agency punishing a person for public statements about it violates the First Amendment."
            }
        ]
    },
    {
        "heading": "The closing note",
        "blocks": [
            {
                "t": "says",
                "md": "\"There are numerous additional emails and texts sent to staff, primarily Rangers [Volunteer Services Lead] and Leif that are not included as a reference, but should be noted for excessive communication.\""
            },
            {
                "t": "record",
                "md": "Baseless."
            }
        ]
    },
    {
        "heading": "05/20/25",
        "blocks": [
            {
                "t": "says",
                "md": "\"Robert Samuel Smith has sent two follow up emails... Neither email requested a response. [Program Manager] went to look to see if this was related to a new YouTube Video posted on his channel, and found that almost all of his videos had been deleted... To document what had been observed on the videos by multiple OPRD staff, the previous videos posted included negative remarks about Honeyman park staff, [Park Supervisor], [Park Manager], and [Volunteer Services Lead], as well remarks about [Program Manager].\""
            },
            {
                "t": "record",
                "md": "[The emails it refers to are on the record.](https://oprdvolunteerabuse.org/accountability/oprd/01JVPH4Z7G0VBTE6PWCDVCRF5X/) By this date the agency had expelled me from every park in Oregon, two months earlier. There was no volunteer relationship left.\n\nI was a private citizen with a channel, and I deleted it because I built my own platform for my videos.\n\nThis entry records a state employee, and \"multiple OPRD staff,\" still watching a private citizen after their own agency had severed every tie to him."
            }
        ]
    },
    {
        "heading": "08/2025 \u2013 01/2026",
        "blocks": [
            {
                "t": "says",
                "md": "\"Additional email received from Sam White to [Program Manager], Honeyman staff, and Lisa Sumption. Most are informative form Sam as to his experience and expectations and do not request a response.\""
            },
            {
                "t": "record",
                "md": "I wrote to them about what they had done, and asked for nothing. [All of it is published.](https://oprdvolunteerabuse.org/accountability/oprd/)"
            }
        ]
    },
    {
        "heading": "01/06/26",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam White sends an email threatening to sue [Program Manager].\""
            },
            {
                "t": "record",
                "md": "No email from January 6 exists. [On January 9 I wrote to her](https://oprdvolunteerabuse.org/accountability/oprd/01KEK5MQNRVQK9HPE1AB1N2PPE/), and [on January 16 I gave notice under 42 U.S.C. \u00a7 1983](https://oprdvolunteerabuse.org/accountability/oprd/01KF3KC3AR9KFMTRD44ZFFMZ2C/).\n\nFive days after that, the metadata of this document shows its author returned to it and finished her final edits. Six weeks after that, it was in the hands of the state police.\n\n[On July 8, 2026, I withdrew the individual capacity claim against her.](https://oprdvolunteerabuse.org/accountability/oprd/01KX28CF90H15CJVJRJWKXCP5N/)"
            }
        ]
    },
    {
        "heading": "Where the timeline ends",
        "blocks": [
            {
                "t": "p",
                "md": "The last edit to this document was January 21, 2026. Nothing was ever added after that.\n\nTwo months later, on March 24, 2026, one year to the day after my dismissal, [armed officers came to my door, behind a locked gate, on restricted federal land](https://oprdvolunteerabuse.org/accountability/oprd/01KMTJ21JGSSD4W0BTW6HP1E05/).\n\nThey sent police over a document that records no threat, no crime, and no new event in the two months before they sent them. Its last entry is my notice of a lawsuit."
            }
        ]
    }
];
