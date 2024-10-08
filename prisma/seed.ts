import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const descendantList: Prisma.DescendantsCreateInput[] = [
    {
        id: "101000001",
        descendant_name: "Lepic",
        slug: "lepic",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/6cecbb40acd1b4479a44caaf22817751",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 186,
                                max_shield: "Max Shield",
                                shield_value: 49,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 188,
                                max_shield: "Max Shield",
                                shield_value: 50,
                                max_mp: "Max MP",
                                mp_value: 131,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 223,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 196,
                                max_shield: "Max Shield",
                                shield_value: 54,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 210,
                                max_shield: "Max Shield",
                                shield_value: 60,
                                max_mp: "Max MP",
                                mp_value: 136,
                                def: "DEF",
                                def_value: 246,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 218,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 228,
                                max_shield: "Max Shield",
                                shield_value: 68,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 284,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 243,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 309,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 262,
                                max_shield: "Max Shield",
                                shield_value: 79,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 339,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 282,
                                max_shield: "Max Shield",
                                shield_value: 85,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 364,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 301,
                                max_shield: "Max Shield",
                                shield_value: 91,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 406,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 326,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 147,
                                def: "DEF",
                                def_value: 452,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 355,
                                max_shield: "Max Shield",
                                shield_value: 107,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 498,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 379,
                                max_shield: "Max Shield",
                                shield_value: 114,
                                max_mp: "Max MP",
                                mp_value: 151,
                                def: "DEF",
                                def_value: 547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 408,
                                max_shield: "Max Shield",
                                shield_value: 123,
                                max_mp: "Max MP",
                                mp_value: 154,
                                def: "DEF",
                                def_value: 598,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 437,
                                max_shield: "Max Shield",
                                shield_value: 132,
                                max_mp: "Max MP",
                                mp_value: 156,
                                def: "DEF",
                                def_value: 651,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 466,
                                max_shield: "Max Shield",
                                shield_value: 140,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 706,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 500,
                                max_shield: "Max Shield",
                                shield_value: 150,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 763,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 529,
                                max_shield: "Max Shield",
                                shield_value: 159,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 563,
                                max_shield: "Max Shield",
                                shield_value: 170,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 884,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 597,
                                max_shield: "Max Shield",
                                shield_value: 180,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 631,
                                max_shield: "Max Shield",
                                shield_value: 190,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1013,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 675,
                                max_shield: "Max Shield",
                                shield_value: 203,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1080,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 709,
                                max_shield: "Max Shield",
                                shield_value: 213,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 748,
                                max_shield: "Max Shield",
                                shield_value: 225,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 786,
                                max_shield: "Max Shield",
                                shield_value: 236,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1295,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 830,
                                max_shield: "Max Shield",
                                shield_value: 250,
                                max_mp: "Max MP",
                                mp_value: 190,
                                def: "DEF",
                                def_value: 1371,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 869,
                                max_shield: "Max Shield",
                                shield_value: 261,
                                max_mp: "Max MP",
                                mp_value: 194,
                                def: "DEF",
                                def_value: 1448,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 908,
                                max_shield: "Max Shield",
                                shield_value: 273,
                                max_mp: "Max MP",
                                mp_value: 197,
                                def: "DEF",
                                def_value: 1529,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 956,
                                max_shield: "Max Shield",
                                shield_value: 288,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 1611,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 995,
                                max_shield: "Max Shield",
                                shield_value: 299,
                                max_mp: "Max MP",
                                mp_value: 206,
                                def: "DEF",
                                def_value: 1695,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1043,
                                max_shield: "Max Shield",
                                shield_value: 314,
                                max_mp: "Max MP",
                                mp_value: 210,
                                def: "DEF",
                                def_value: 1781,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1087,
                                max_shield: "Max Shield",
                                shield_value: 327,
                                max_mp: "Max MP",
                                mp_value: 215,
                                def: "DEF",
                                def_value: 1869,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1136,
                                max_shield: "Max Shield",
                                shield_value: 342,
                                max_mp: "Max MP",
                                mp_value: 220,
                                def: "DEF",
                                def_value: 1959,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1179,
                                max_shield: "Max Shield",
                                shield_value: 354,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1228,
                                max_shield: "Max Shield",
                                shield_value: 369,
                                max_mp: "Max MP",
                                mp_value: 229,
                                def: "DEF",
                                def_value: 2146,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1276,
                                max_shield: "Max Shield",
                                shield_value: 384,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 2242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1325,
                                max_shield: "Max Shield",
                                shield_value: 398,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 2340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1373,
                                max_shield: "Max Shield",
                                shield_value: 413,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 2441,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Grenade Throw",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/40fda38dfa17be7aff4a6209a8c7ee26",
                        skill_description: "Throw a grenade forward, dealing Burst damage.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Overclock",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2be7856296eb7ba788084605fa557cc4",
                        skill_description: "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Traction Grenade",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/5b29fba44f49f8531ce43c2fd6b2c848",
                        skill_description: "Throws a Traction Grenade forward to inflict Towed on enemies within range.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Overkill",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b3625d8bb410f48fbefe5caf8f2d6872",
                        skill_description: "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by Unique Weapon bullets take Burst DMG. The impact point of the Unique Weapon creates a damage zone, dealing continuous damage.",
                    },
                    {
                        skill_type: "Passive Skill",
                        skill_name: "Close Call",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f7d84e8a94df0511683922ab007c38f7",
                        skill_description: "Upon receiving fatal damage, gains Close Call. While Close Call is active, grants DMG Immunity and Immobilization. When Close Call ends, recovers HP proportional to own Max HP."
                    },
                ]
        }
    },
    {
        id: "101000002",
        descendant_name: "Ajax",
        slug: "ajax",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/74d88097b3547c406a36651c9378638c",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 238,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 281,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 240,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 329,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 244,
                                max_shield: "Max Shield",
                                shield_value: 66,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 381,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 436,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 493,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 553,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 283,
                                max_shield: "Max Shield",
                                shield_value: 82,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 617,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 300,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 687,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 319,
                                max_shield: "Max Shield",
                                shield_value: 93,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 763,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 334,
                                max_shield: "Max Shield",
                                shield_value: 99,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 845,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 359,
                                max_shield: "Max Shield",
                                shield_value: 106,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 939,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 384,
                                max_shield: "Max Shield",
                                shield_value: 113,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 1047,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 415,
                                max_shield: "Max Shield",
                                shield_value: 122,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 1164,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 452,
                                max_shield: "Max Shield",
                                shield_value: 133,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 1284,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 483,
                                max_shield: "Max Shield",
                                shield_value: 142,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 1410,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 520,
                                max_shield: "Max Shield",
                                shield_value: 153,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 1541,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 557,
                                max_shield: "Max Shield",
                                shield_value: 164,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 1678,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 594,
                                max_shield: "Max Shield",
                                shield_value: 175,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 1820,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 637,
                                max_shield: "Max Shield",
                                shield_value: 188,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 1967,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 674,
                                max_shield: "Max Shield",
                                shield_value: 199,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 2120,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 717,
                                max_shield: "Max Shield",
                                shield_value: 212,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 2278,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 761,
                                max_shield: "Max Shield",
                                shield_value: 224,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 2441,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 804,
                                max_shield: "Max Shield",
                                shield_value: 237,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 2610,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 859,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 2784,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 903,
                                max_shield: "Max Shield",
                                shield_value: 266,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 2963,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 952,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 3147,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1002,
                                max_shield: "Max Shield",
                                shield_value: 295,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 3338,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1057,
                                max_shield: "Max Shield",
                                shield_value: 312,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 3533,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1107,
                                max_shield: "Max Shield",
                                shield_value: 326,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 3733,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1156,
                                max_shield: "Max Shield",
                                shield_value: 341,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 3940,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1218,
                                max_shield: "Max Shield",
                                shield_value: 359,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 4151,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1267,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 4367,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1329,
                                max_shield: "Max Shield",
                                shield_value: 392,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 4589,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1385,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 4817,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1447,
                                max_shield: "Max Shield",
                                shield_value: 427,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 5049,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1502,
                                max_shield: "Max Shield",
                                shield_value: 443,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 5286,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1564,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 5530,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1626,
                                max_shield: "Max Shield",
                                shield_value: 479,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 5777,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1688,
                                max_shield: "Max Shield",
                                shield_value: 498,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 6032,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1749,
                                max_shield: "Max Shield",
                                shield_value: 516,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 6291,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Orbit Barrier",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/32d5aad86c4fd613c91b03f24c984bf8",
                        skill_description: "Create a Barrier in front that blocks damage.\nWhen the Barrier is hit, inflicts Reflection Damage on the enemy.\nWhen using an Enhanced Skill, enhances Reflection Damage. Max Reflection Damage Rate is based on DEF, followed by Skill Power.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Void Walk",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8b2776cacdd9785ea322b1b6f05c5a3f",
                        skill_description: "Jumps forward and deals damage upon landing, inflicting Stun.\nWhen using an Enhanced Skill grants the Leap Enhancement effect.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Expulsion",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0d679bd5e3336f8d85e20b4021d42c26",
                        skill_description: "Deals damage to nearby enemies and inflicts Knockback. When using an Enhanced Skill increases base damage and range.",
                    },
                    {
                        skill_type: "Active Skill",
                        skill_name: "Hyper Cube",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/52241d69bb871d664802af9d811c14f7",
                        skill_description: "Create a dome-shaped Barrier that blocks damage.\nWhen using an Enhanced Skill grants the Barrier Enhancement effect to allies.",
                    },
                    {
                        skill_type: "Passive Skill",
                        skill_name: "Event Horizon",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0e2d7cfd1cd7ac6e9e86f7cc9f058d22",
                        skill_description: "When the skill ends, gains Void Energy.\nThe amount of Void Energy determines Singularity effect.\nWhen Void Energy is at maximum, use an Enhanced Skill. When using an Enhanced Skill grants additional effects to the existing skill.\nCannot gain Void Energy while using an Enhanced Skill, and Void Energy is consumed if Out of Combat."
                    },
                ]
        }
    },
    {
        id: "101000003",
        descendant_name: "Viessa",
        slug: "viessa",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/b2be3dc734d2fb10e694de951a5d1079",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 106,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 156,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 108,
                                max_shield: "Max Shield",
                                shield_value: 53,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 158,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 111,
                                max_shield: "Max Shield",
                                shield_value: 56,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 115,
                                max_shield: "Max Shield",
                                shield_value: 60,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 168,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 120,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 176,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 127,
                                max_shield: "Max Shield",
                                shield_value: 70,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 186,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 134,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 197,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 142,
                                max_shield: "Max Shield",
                                shield_value: 82,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 210,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 152,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 225,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 168,
                                max_shield: "Max Shield",
                                shield_value: 95,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 241,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 180,
                                max_shield: "Max Shield",
                                shield_value: 102,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 109,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 291,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 208,
                                max_shield: "Max Shield",
                                shield_value: 118,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 323,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 227,
                                max_shield: "Max Shield",
                                shield_value: 128,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 357,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 242,
                                max_shield: "Max Shield",
                                shield_value: 137,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 392,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 261,
                                max_shield: "Max Shield",
                                shield_value: 147,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 428,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 280,
                                max_shield: "Max Shield",
                                shield_value: 158,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 466,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 298,
                                max_shield: "Max Shield",
                                shield_value: 168,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 506,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 320,
                                max_shield: "Max Shield",
                                shield_value: 180,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 339,
                                max_shield: "Max Shield",
                                shield_value: 191,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 589,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 360,
                                max_shield: "Max Shield",
                                shield_value: 204,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 633,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 382,
                                max_shield: "Max Shield",
                                shield_value: 216,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 678,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 404,
                                max_shield: "Max Shield",
                                shield_value: 228,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 725,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 432,
                                max_shield: "Max Shield",
                                shield_value: 244,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 774,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 453,
                                max_shield: "Max Shield",
                                shield_value: 256,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 478,
                                max_shield: "Max Shield",
                                shield_value: 270,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 875,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 503,
                                max_shield: "Max Shield",
                                shield_value: 284,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 928,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 531,
                                max_shield: "Max Shield",
                                shield_value: 300,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 982,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 556,
                                max_shield: "Max Shield",
                                shield_value: 313,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1037,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 581,
                                max_shield: "Max Shield",
                                shield_value: 327,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1095,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 612,
                                max_shield: "Max Shield",
                                shield_value: 345,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1154,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 636,
                                max_shield: "Max Shield",
                                shield_value: 359,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1214,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 667,
                                max_shield: "Max Shield",
                                shield_value: 376,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1275,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 695,
                                max_shield: "Max Shield",
                                shield_value: 392,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1339,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 726,
                                max_shield: "Max Shield",
                                shield_value: 410,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1403,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 754,
                                max_shield: "Max Shield",
                                shield_value: 425,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1469,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 785,
                                max_shield: "Max Shield",
                                shield_value: 443,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1537,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 816,
                                max_shield: "Max Shield",
                                shield_value: 460,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1606,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847,
                                max_shield: "Max Shield",
                                shield_value: 478,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 1676,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 878,
                                max_shield: "Max Shield",
                                shield_value: 495,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1748,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frost Shards",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c707b1cb867017488d0bd9a606c64083",
                        skill_description: "Fires Frost Shards to deal damage to hit enemies and Burst damage to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Frost Road",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/54a2d0af721c5f89c0b50f3c5f040c7a",
                        skill_description: "Activates the Frost Road state. \nWhile in the Frost Road state, creates Ice Sheets on the ground touched. Enemies that touch the Ice Sheets are inflicted with Ice Shackle."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cold Snap",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/432aed3fe47809f57b7f2292ee1ec76a",
                        skill_description: "Launches Chill toward the front. Inflicts damage and Ice Shackle on enemies that come into contact with Chill."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blizzard",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/223e856846a532c44e1a566104d912e4",
                        skill_description: "Creates a Blizzard at a designated location. Enemies within the Blizzard take continuous damage. When the Blizzard ends, it explodes and deals Burst DMG to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Ice Sphere",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/3fbbc5263d8466f5675b2228a3d72439",
                        skill_description: "Upon using a skill to put an enemy into an Ice Shackle stage, creates an Ice Sphere that flies around nearby.\nThe Ice Sphere that is created flies at a nearby enemy, dealing damage to the hit enemy and Burst damage to nearby enemies.\nThe hit enemy is inflicted with Ice Shackle.\nIce Shackle decreases the Speed, and increases in stage when the effect stacks."
                      },
                ]
        }
    },
    {
        id: "101000004",
        descendant_name: "Ultimate Lepic",
        slug: "ultimate-lepic",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/e2f1ec94648d91eede78f377c3b7aa19",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187,
                                max_shield: "Max Shield",
                                shield_value: 56,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 230,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 189,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 131,
                                def: "DEF",
                                def_value: 248,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 59,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 278,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 198,
                                max_shield: "Max Shield",
                                shield_value: 62,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 311,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 204,
                                max_shield: "Max Shield",
                                shield_value: 65,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 346,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 212,
                                max_shield: "Max Shield",
                                shield_value: 70,
                                max_mp: "Max MP",
                                mp_value: 136,
                                def: "DEF",
                                def_value: 382,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220,
                                max_shield: "Max Shield",
                                shield_value: 75,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 420,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 231,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 460,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 246,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 504,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 94,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 552,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 288,
                                max_shield: "Max Shield",
                                shield_value: 101,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 604,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 308,
                                max_shield: "Max Shield",
                                shield_value: 108,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 663,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332,
                                max_shield: "Max Shield",
                                shield_value: 117,
                                max_mp: "Max MP",
                                mp_value: 147,
                                def: "DEF",
                                def_value: 731,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362,
                                max_shield: "Max Shield",
                                shield_value: 127,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 807,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387,
                                max_shield: "Max Shield",
                                shield_value: 136,
                                max_mp: "Max MP",
                                mp_value: 151,
                                def: "DEF",
                                def_value: 886,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417,
                                max_shield: "Max Shield",
                                shield_value: 146,
                                max_mp: "Max MP",
                                mp_value: 154,
                                def: "DEF",
                                def_value: 968,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 446,
                                max_shield: "Max Shield",
                                shield_value: 157,
                                max_mp: "Max MP",
                                mp_value: 156,
                                def: "DEF",
                                def_value: 1054,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 476,
                                max_shield: "Max Shield",
                                shield_value: 167,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1143,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 511,
                                max_shield: "Max Shield",
                                shield_value: 179,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 1236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540,
                                max_shield: "Max Shield",
                                shield_value: 189,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 1332,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 575,
                                max_shield: "Max Shield",
                                shield_value: 202,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1431,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610,
                                max_shield: "Max Shield",
                                shield_value: 214,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1533,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 644,
                                max_shield: "Max Shield",
                                shield_value: 226,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1640,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689,
                                max_shield: "Max Shield",
                                shield_value: 242,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1749,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1862,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 763,
                                max_shield: "Max Shield",
                                shield_value: 268,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 1977,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 2097,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847,
                                max_shield: "Max Shield",
                                shield_value: 297,
                                max_mp: "Max MP",
                                mp_value: 190,
                                def: "DEF",
                                def_value: 2219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 887,
                                max_shield: "Max Shield",
                                shield_value: 311,
                                max_mp: "Max MP",
                                mp_value: 194,
                                def: "DEF",
                                def_value: 2345,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 927,
                                max_shield: "Max Shield",
                                shield_value: 325,
                                max_mp: "Max MP",
                                mp_value: 197,
                                def: "DEF",
                                def_value: 2475,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976,
                                max_shield: "Max Shield",
                                shield_value: 342,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 2608,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1016,
                                max_shield: "Max Shield",
                                shield_value: 356,
                                max_mp: "Max MP",
                                mp_value: 206,
                                def: "DEF",
                                def_value: 2744,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1065,
                                max_shield: "Max Shield",
                                shield_value: 373,
                                max_mp: "Max MP",
                                mp_value: 210,
                                def: "DEF",
                                def_value: 2883,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1110,
                                max_shield: "Max Shield",
                                shield_value: 389,
                                max_mp: "Max MP",
                                mp_value: 215,
                                def: "DEF",
                                def_value: 3026,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1159,
                                max_shield: "Max Shield",
                                shield_value: 407,
                                max_mp: "Max MP",
                                mp_value: 220,
                                def: "DEF",
                                def_value: 3172,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204,
                                max_shield: "Max Shield",
                                shield_value: 422,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 3321,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254,
                                max_shield: "Max Shield",
                                shield_value: 439,
                                max_mp: "Max MP",
                                mp_value: 229,
                                def: "DEF",
                                def_value: 3474,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1303,
                                max_shield: "Max Shield",
                                shield_value: 457,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 3630,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1353,
                                max_shield: "Max Shield",
                                shield_value: 474,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 3789,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1402,
                                max_shield: "Max Shield",
                                shield_value: 491,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 3953,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Grenade Throw",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b0aae25dab0555a9866c9197a1b4de7f",
                        skill_description: "Throw a grenade forward, dealing Burst damage."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Overclock",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2118622f5b0d167315f2bd643c066eae",
                        skill_description: "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Traction Grenade",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8bf813d0dc712767dfde08c7209a71b7",
                        skill_description: "Throws a Traction Grenade forward to inflict Towed on enemies within range."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Overkill",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6aab485ab7359a6a0eafd6eb518cab3e",
                        skill_description: "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by Unique Weapon bullets take Burst DMG. The impact point of the Unique Weapon creates a damage zone, dealing continuous damage."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Close Call",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/beb966f4d74cf223e6a83a6ec661227a",
                        skill_description: "Upon receiving fatal damage, gains Close Call. While \nClose Call is active, grants DMG Immunity and Immobilization. When \nClose Call ends, recovers HP proportional to own Max HP."
                      },
                ]
        }
    },
    {
        id: "101000005",
        descendant_name: "Jayber",
        slug: "jayber",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/79c5cbb60e2e06209a0a515775cfa3b6",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 131,
                                max_shield: "Max Shield",
                                shield_value: 30,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 192,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 133,
                                max_shield: "Max Shield",
                                shield_value: 31,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 194,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 136,
                                max_shield: "Max Shield",
                                shield_value: 32,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 198,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 140,
                                max_shield: "Max Shield",
                                shield_value: 33,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 204,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 146,
                                max_shield: "Max Shield",
                                shield_value: 34,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 210,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 153,
                                max_shield: "Max Shield",
                                shield_value: 36,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 218,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 161,
                                max_shield: "Max Shield",
                                shield_value: 38,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 228,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 170,
                                max_shield: "Max Shield",
                                shield_value: 40,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 243,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 181,
                                max_shield: "Max Shield",
                                shield_value: 43,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 263,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 46,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 288,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 207,
                                max_shield: "Max Shield",
                                shield_value: 49,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 318,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 221,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 353,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 239,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 392,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 261,
                                max_shield: "Max Shield",
                                shield_value: 62,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 433,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 278,
                                max_shield: "Max Shield",
                                shield_value: 66,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 475,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 300,
                                max_shield: "Max Shield",
                                shield_value: 71,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 519,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 321,
                                max_shield: "Max Shield",
                                shield_value: 76,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 565,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 343,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 613,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 368,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 663,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 389,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 715,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 414,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 768,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 439,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 464,
                                max_shield: "Max Shield",
                                shield_value: 110,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 880,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 496,
                                max_shield: "Max Shield",
                                shield_value: 117,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 938,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 521,
                                max_shield: "Max Shield",
                                shield_value: 123,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 999,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 549,
                                max_shield: "Max Shield",
                                shield_value: 130,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 1061,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 578,
                                max_shield: "Max Shield",
                                shield_value: 136,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 1125,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610,
                                max_shield: "Max Shield",
                                shield_value: 144,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1191,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 638,
                                max_shield: "Max Shield",
                                shield_value: 150,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1258,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 667,
                                max_shield: "Max Shield",
                                shield_value: 157,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1328,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 703,
                                max_shield: "Max Shield",
                                shield_value: 166,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1399,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 731,
                                max_shield: "Max Shield",
                                shield_value: 172,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1472,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 767,
                                max_shield: "Max Shield",
                                shield_value: 181,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 799,
                                max_shield: "Max Shield",
                                shield_value: 188,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1623,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 834,
                                max_shield: "Max Shield",
                                shield_value: 197,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1702,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 867,
                                max_shield: "Max Shield",
                                shield_value: 204,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1782,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 902,
                                max_shield: "Max Shield",
                                shield_value: 213,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1864,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 938,
                                max_shield: "Max Shield",
                                shield_value: 221,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 973,
                                max_shield: "Max Shield",
                                shield_value: 229,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 2033,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1009,
                                max_shield: "Max Shield",
                                shield_value: 238,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 2120,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Assault Turret",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/38891f4ba741b9a0f98cffd0158e3cf2",
                        skill_description: "Summons an Assault Turret. The Assault Turret remains on the battlefield to attack enemies.\nWhen hit by a Unique Weapon, it creates a Damage Zone dealing continuous damage to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Medical Turret",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/023ca99b5d0c19f5916b10a02b4da57b",
                        skill_description: "Summons a Medical Turret. The Medical Turret recovers the HP of allies within the Recovery Zone.\nWhen hit by a Unique Weapon, it creates a Taunt Zone, taunting enemies within the area."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Multi-purpose Gun",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/21130adc8f21b739c67d57ba63de70b3",
                        skill_description: "Equip a Unique Weapon. Hitting a turret with Unique Weapon creates a Turret Zone. Additional hits to the turret within this zone recover the turret's HP and increase its duration.\nWhen hitting enemies, inflicts damage.\nThe cooldown is adjusted based on the number of bullets fired."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Reactivate",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2b2c9f10da3760e4f04db8ed76d08ddc",
                        skill_description: "Detonates a summoned turret, granting Overhaul. The self-destruction releases multiple fragments around, dealing Explosion DMG.\nWhile holding Overhaul, summon turrets within the Turret Zone."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Turret Sync",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8b6e3ef794e27448fcf9925cb4d26b1c",
                        skill_description: "When an Assault Turret and a Medical Turret are both summoned, gains Turret Sync."
                      },
                ]
        }
    },
    {
        id: "101000006",
        descendant_name: "Bunny",
        slug: "bunny",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/eaffb014c98c36d8b30d90d7778bb840",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 72,
                                max_shield: "Max Shield",
                                shield_value: 48,
                                max_mp: "Max MP",
                                mp_value: 160,
                                def: "DEF",
                                def_value: 111,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 74,
                                max_shield: "Max Shield",
                                shield_value: 49,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 118,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 76,
                                max_shield: "Max Shield",
                                shield_value: 50,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 124,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 79,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 164,
                                def: "DEF",
                                def_value: 132,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 83,
                                max_shield: "Max Shield",
                                shield_value: 55,
                                max_mp: "Max MP",
                                mp_value: 166,
                                def: "DEF",
                                def_value: 140,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 88,
                                max_shield: "Max Shield",
                                shield_value: 58,
                                max_mp: "Max MP",
                                mp_value: 167,
                                def: "DEF",
                                def_value: 150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 94,
                                max_shield: "Max Shield",
                                shield_value: 61,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 105,
                                max_shield: "Max Shield",
                                shield_value: 65,
                                max_mp: "Max MP",
                                mp_value: 170,
                                def: "DEF",
                                def_value: 173,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 115,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 172,
                                def: "DEF",
                                def_value: 185,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 124,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 197,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 133,
                                max_shield: "Max Shield",
                                shield_value: 78,
                                max_mp: "Max MP",
                                mp_value: 175,
                                def: "DEF",
                                def_value: 222,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 142,
                                max_shield: "Max Shield",
                                shield_value: 84,
                                max_mp: "Max MP",
                                mp_value: 177,
                                def: "DEF",
                                def_value: 248,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 154,
                                max_shield: "Max Shield",
                                shield_value: 90,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 275,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 168,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 304,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 179,
                                max_shield: "Max Shield",
                                shield_value: 105,
                                max_mp: "Max MP",
                                mp_value: 186,
                                def: "DEF",
                                def_value: 333,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 113,
                                max_mp: "Max MP",
                                mp_value: 189,
                                def: "DEF",
                                def_value: 364,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 206,
                                max_shield: "Max Shield",
                                shield_value: 121,
                                max_mp: "Max MP",
                                mp_value: 192,
                                def: "DEF",
                                def_value: 397,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220,
                                max_shield: "Max Shield",
                                shield_value: 129,
                                max_mp: "Max MP",
                                mp_value: 195,
                                def: "DEF",
                                def_value: 430,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 236,
                                max_shield: "Max Shield",
                                shield_value: 138,
                                max_mp: "Max MP",
                                mp_value: 198,
                                def: "DEF",
                                def_value: 465,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 147,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 501,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 266,
                                max_shield: "Max Shield",
                                shield_value: 156,
                                max_mp: "Max MP",
                                mp_value: 204,
                                def: "DEF",
                                def_value: 539,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 282,
                                max_shield: "Max Shield",
                                shield_value: 165,
                                max_mp: "Max MP",
                                mp_value: 208,
                                def: "DEF",
                                def_value: 577,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 298,
                                max_shield: "Max Shield",
                                shield_value: 175,
                                max_mp: "Max MP",
                                mp_value: 212,
                                def: "DEF",
                                def_value: 617,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 319,
                                max_shield: "Max Shield",
                                shield_value: 187,
                                max_mp: "Max MP",
                                mp_value: 217,
                                def: "DEF",
                                def_value: 659,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 335,
                                max_shield: "Max Shield",
                                shield_value: 196,
                                max_mp: "Max MP",
                                mp_value: 221,
                                def: "DEF",
                                def_value: 701,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 353,
                                max_shield: "Max Shield",
                                shield_value: 207,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 744,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 371,
                                max_shield: "Max Shield",
                                shield_value: 218,
                                max_mp: "Max MP",
                                mp_value: 230,
                                def: "DEF",
                                def_value: 789,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 392,
                                max_shield: "Max Shield",
                                shield_value: 230,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 836,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 410,
                                max_shield: "Max Shield",
                                shield_value: 240,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 883,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 428,
                                max_shield: "Max Shield",
                                shield_value: 251,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 932,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 451,
                                max_shield: "Max Shield",
                                shield_value: 265,
                                max_mp: "Max MP",
                                mp_value: 247,
                                def: "DEF",
                                def_value: 982,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 470,
                                max_shield: "Max Shield",
                                shield_value: 275,
                                max_mp: "Max MP",
                                mp_value: 253,
                                def: "DEF",
                                def_value: 1033,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 492,
                                max_shield: "Max Shield",
                                shield_value: 289,
                                max_mp: "Max MP",
                                mp_value: 259,
                                def: "DEF",
                                def_value: 1085,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 513,
                                max_shield: "Max Shield",
                                shield_value: 301,
                                max_mp: "Max MP",
                                mp_value: 265,
                                def: "DEF",
                                def_value: 1139,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 536,
                                max_shield: "Max Shield",
                                shield_value: 314,
                                max_mp: "Max MP",
                                mp_value: 271,
                                def: "DEF",
                                def_value: 1194,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 556,
                                max_shield: "Max Shield",
                                shield_value: 326,
                                max_mp: "Max MP",
                                mp_value: 276,
                                def: "DEF",
                                def_value: 1250,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 579,
                                max_shield: "Max Shield",
                                shield_value: 340,
                                max_mp: "Max MP",
                                mp_value: 282,
                                def: "DEF",
                                def_value: 1308,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 602,
                                max_shield: "Max Shield",
                                shield_value: 353,
                                max_mp: "Max MP",
                                mp_value: 288,
                                def: "DEF",
                                def_value: 1366,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 625,
                                max_shield: "Max Shield",
                                shield_value: 367,
                                max_mp: "Max MP",
                                mp_value: 294,
                                def: "DEF",
                                def_value: 1427,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 648,
                                max_shield: "Max Shield",
                                shield_value: 380,
                                max_mp: "Max MP",
                                mp_value: 300,
                                def: "DEF",
                                def_value: 1488,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Thrill Bomb",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/cdac45aafb7e833720dae97248346781",
                        skill_description: "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity.\nInflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Speed of Light",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f4e715174c1c4583d39e04f0fb26965b",
                        skill_description: "Always moves by Sprinting, and increases Sprint Speed.\nGains Speed of Light. Speed of Light additionally gains Electricity while moving."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Lightning Emission",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/07178abf6a0820297077cfdbd54bb8e7",
                        skill_description: "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity. Inflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Maximum Power",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a202f90bfd757abe17348e19df57ce23",
                        skill_description: "Discharges electricity forward. Deals damage on enemies that come into contact with the electricity, with the damage increasing gradually based on the discharge time. Ends when Electricity runs out."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Rabbit Foot",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9825a73c0c55080110aaeac4afd204ea",
                        skill_description: "Deals damage to nearby enemies upon landing after a Double Jump.\nGains Electricity proportional to the travel distance.\nIf there is no movement for a certain period, Electricity is gradually consumed."
                      },
                ]
        }
    },
    {
        id: "101000007",
        descendant_name: "Ultimate Ajax",
        slug: "ultimate-ajax",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/118d86964484b25593b9a4dfe62e96c1",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 238,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 308,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 240,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 366,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 244,
                                max_shield: "Max Shield",
                                shield_value: 66,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 429,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 496,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 565,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 638,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 283,
                                max_shield: "Max Shield",
                                shield_value: 82,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 716,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 300,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 801,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 319,
                                max_shield: "Max Shield",
                                shield_value: 93,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 893,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 334,
                                max_shield: "Max Shield",
                                shield_value: 99,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 993,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 359,
                                max_shield: "Max Shield",
                                shield_value: 106,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 1107,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 384,
                                max_shield: "Max Shield",
                                shield_value: 113,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 1238,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 415,
                                max_shield: "Max Shield",
                                shield_value: 122,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 1375,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 452,
                                max_shield: "Max Shield",
                                shield_value: 133,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 1517,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 483,
                                max_shield: "Max Shield",
                                shield_value: 142,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 1666,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 520,
                                max_shield: "Max Shield",
                                shield_value: 153,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 1821,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 557,
                                max_shield: "Max Shield",
                                shield_value: 164,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 1983,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 594,
                                max_shield: "Max Shield",
                                shield_value: 175,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 2151,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 637,
                                max_shield: "Max Shield",
                                shield_value: 188,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 2325,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 674,
                                max_shield: "Max Shield",
                                shield_value: 199,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 2506,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 717,
                                max_shield: "Max Shield",
                                shield_value: 212,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 2693,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 761,
                                max_shield: "Max Shield",
                                shield_value: 224,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 2885,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 804,
                                max_shield: "Max Shield",
                                shield_value: 237,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 3084,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 859,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 3291,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 903,
                                max_shield: "Max Shield",
                                shield_value: 266,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 3502,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 952,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 3719,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1002,
                                max_shield: "Max Shield",
                                shield_value: 295,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 3945,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1057,
                                max_shield: "Max Shield",
                                shield_value: 312,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 4175,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1107,
                                max_shield: "Max Shield",
                                shield_value: 326,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 4412,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1156,
                                max_shield: "Max Shield",
                                shield_value: 341,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 4656,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1218,
                                max_shield: "Max Shield",
                                shield_value: 359,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 4906,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1267,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 5162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1329,
                                max_shield: "Max Shield",
                                shield_value: 392,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 5424,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1385,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 5692,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1447,
                                max_shield: "Max Shield",
                                shield_value: 427,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 5967,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1502,
                                max_shield: "Max Shield",
                                shield_value: 443,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 6247,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1564,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 6535,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1626,
                                max_shield: "Max Shield",
                                shield_value: 479,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 6828,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1688,
                                max_shield: "Max Shield",
                                shield_value: 498,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 7128,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1749,
                                max_shield: "Max Shield",
                                shield_value: 516,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 7435,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Orbit Barrier",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c2ee02252148416211c20c3f36928a50",
                        skill_description: "Create a Barrier in front that blocks damage.\nWhen the Barrier is hit, inflicts Reflection Damage on the enemy.\nWhen using an Enhanced Skill, enhances Reflection Damage. Max Reflection Damage Rate is based on DEF, followed by Skill Power."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Void Walk",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f54d444839fab8d0b6f205b06563f840",
                        skill_description: "Jumps forward and deals damage upon landing, inflicting Stun.\nWhen using an Enhanced Skill grants the Leap Enhancement effect."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Expulsion",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/ce942874a0ff9d82ced707adc3dd7009",
                        skill_description: "Deals damage to nearby enemies and inflicts Knockback. When using an Enhanced Skill increases base damage and range."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Hyper Cube",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/692e40f1618752d062dc5db10ecf4c93",
                        skill_description: "Create a dome-shaped Barrier that blocks damage.\nWhen using an Enhanced Skill grants the Barrier Enhancement effect to allies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Event Horizon",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/44f47b9eeff9cae15a1899809f96a15a",
                        skill_description: "When the skill ends, gains Void Energy.\nThe amount of Void Energy determines Singularity effect.\nWhen Void Energy is at maximum, use an Enhanced Skill. When using an Enhanced Skill grants additional effects to the existing skill.\nCannot gain Void Energy while using an Enhanced Skill, and Void Energy is consumed if Out of Combat."
                      },
                ]
        }
    },
    {
        id: "101000008",
        descendant_name: "Freyna",
        slug: "freyna",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/6737a4c79a8a2fe617cb458031e11358",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 105,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 191,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 107,
                                max_shield: "Max Shield",
                                shield_value: 58,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 193,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 110,
                                max_shield: "Max Shield",
                                shield_value: 60,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 197,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 114,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 203,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 119,
                                max_shield: "Max Shield",
                                shield_value: 67,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 209,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 125,
                                max_shield: "Max Shield",
                                shield_value: 71,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 132,
                                max_shield: "Max Shield",
                                shield_value: 76,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 227,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 140,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 241,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 150,
                                max_shield: "Max Shield",
                                shield_value: 86,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 161,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 286,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 173,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 316,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 185,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 347,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 199,
                                max_shield: "Max Shield",
                                shield_value: 113,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 385,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 217,
                                max_shield: "Max Shield",
                                shield_value: 123,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 425,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 232,
                                max_shield: "Max Shield",
                                shield_value: 131,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 467,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 141,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 510,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 151,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 556,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 286,
                                max_shield: "Max Shield",
                                shield_value: 161,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 603,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 306,
                                max_shield: "Max Shield",
                                shield_value: 173,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 651,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 324,
                                max_shield: "Max Shield",
                                shield_value: 183,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 702,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 345,
                                max_shield: "Max Shield",
                                shield_value: 195,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 754,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 366,
                                max_shield: "Max Shield",
                                shield_value: 207,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 808,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387,
                                max_shield: "Max Shield",
                                shield_value: 219,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 864,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 413,
                                max_shield: "Max Shield",
                                shield_value: 234,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 922,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 434,
                                max_shield: "Max Shield",
                                shield_value: 245,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 981,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 458,
                                max_shield: "Max Shield",
                                shield_value: 259,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 1042,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 482,
                                max_shield: "Max Shield",
                                shield_value: 272,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 1105,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 508,
                                max_shield: "Max Shield",
                                shield_value: 287,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1170,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 532,
                                max_shield: "Max Shield",
                                shield_value: 300,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 556,
                                max_shield: "Max Shield",
                                shield_value: 314,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1305,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 586,
                                max_shield: "Max Shield",
                                shield_value: 331,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1374,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 609,
                                max_shield: "Max Shield",
                                shield_value: 344,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1446,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 639,
                                max_shield: "Max Shield",
                                shield_value: 361,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1520,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 666,
                                max_shield: "Max Shield",
                                shield_value: 376,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1595,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 695,
                                max_shield: "Max Shield",
                                shield_value: 393,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1672,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 722,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1750,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 752,
                                max_shield: "Max Shield",
                                shield_value: 425,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1831,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 782,
                                max_shield: "Max Shield",
                                shield_value: 441,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1913,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 811,
                                max_shield: "Max Shield",
                                shield_value: 458,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 1997,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 841,
                                max_shield: "Max Shield",
                                shield_value: 475,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 2083,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Venom Trauma",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/334e101ed0854c677eed2ea84da3838d",
                        skill_description: "Fires a Toxic Bullet, dealing damage to hit enemies.\nThe Toxic Bullet explodes, creating a Toxic Puddle and inflicting Room 0 Trauma on those it hits.\nRoom 0 Trauma inflicts continuous damage and inflicts Poison to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Defense Mechanism",
                        element_type: "Toxic",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/7c7ce7d84e999b1fe4b320aa640d1607",
                        skill_description: "Gains Plague Bodyarmor. Inflicts Room 0 Trauma on the attacking enemy.\nRoom 0 Trauma inflicts continuous damage and applies Poison to nearby enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Putrid Venom",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/180551122e3d66847c60ca735993ba7d",
                        skill_description: "Throw poison to create a Toxic Swamp.\nEnemies that touch the Toxic Swamp take continuous damage and are inflicted with Poison and Venom-Soaked.\nEnemies with Venom-Soaked leave Toxic Footprints as they move.\nEnemies who touch the Toxic Footprints are inflicted with Poison."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Venom Baptism",
                        element_type: "Toxic",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fa5560f7606c13ba81059be963858671",
                        skill_description: "Equip a Unique Weapon. Unequipped after all bullets are consumed or after a certain period of time has passed.\nEnemies hit by the Unique Weapon bullets are inflicted with Room 0 Trauma.\nRoom 0 Trauma deals continuous damage and inflicts Poison on nearby enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Contagion Links",
                        element_type: "Toxic",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a85d0fb171b15bf9c52f278e9abe09c3",
                        skill_description: "Increases Toxic Skill Power by the number of nearby enemies inflicted with Poison."
                      },
                ]
        }
    },
    {
        id: "101000009",
        descendant_name: "Gley",
        slug: "gley",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/d72fa90551e23916f18a81dbd4030d8f",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 216,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 207,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 218,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 213,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 222,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 221,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 227,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 230,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 234,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 240,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 244,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 256,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 259,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 270,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 282,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 290,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 306,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 315,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 336,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 339,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 361,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 387,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 391,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 430,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 426,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 475,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 455,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 521,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 490,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 570,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 525,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 620,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 560,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 673,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 601,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 727,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 636,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 784,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 677,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 842,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 718,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 902,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 758,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 965,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 811,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1029,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 852,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1095,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 898,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1163,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 945,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1234,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 998,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1306,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1044,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1380,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1091,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1456,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1149,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1534,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1196,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1614,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1696,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1307,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1780,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1365,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1866,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1417,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1954,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1476,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2044,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1534,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2135,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1592,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1651,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2325,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frenzied",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1c05e1f9e996556f0c168e1d4a763bd6",
                        skill_description: "In Frenzied state. In Frenzied state, increases Firearm ATK and Penetration, but reduces HP Recovery."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Life Siphon",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/81752069cc9354977b288b76e3d31b25",
                        skill_description: "Deals damage to targets within range and recovers HP.\nHP Recovery amount increases based on the number of enemies hit.\nIn Frenzied state, deals increased DMG proportionally to HP.\nIn Non-Frenzied state, gains Vigor. Vigor stacks proportionally to the number of enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Increased Sensory",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e3f866d6365ea9f247dbdec5cbfa048e",
                        skill_description: "When in Frenzied state, applies Maximize Lethality during which bullets are not consumed.\nWhen in Non-Frenzied state, applies Maximize Recovery during which Life Sphere generation is increased."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Massacre",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/73db251cc8d82311f137b149f55bb817",
                        skill_description: "Equip a Unique Weapon. The number of bullets loaded is affected by the amount of Power of Life owned.\nWhen hitting an enemy with the Unique Weapon, deals damage and inflicts additional effects.\nIn Frenzied state, increases additional DMG proportionally to HP. \nIn Non-Frenzied state, inflicts Stun on enemies that are hit."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Thirst",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/4a51831b6ae10ddd0ae4d5374aeddfa2",
                        skill_description: "Cannot have Shield or MP.\nIn Non-Frenzied state, reduces Incoming DMG.\nDefeated enemies have a chance to drop Life Spheres which, upon contact, grant Power of Life.\nUpon acquiring Power of Life, recovers HP."
                      },
                ]
        }
    },
    {
        id: "101000010",
        descendant_name: "Ultimate Viessa",
        slug: "ultimate-viessa",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/665a53a9b478437b13f7d6ae5f5322db",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 107,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 157,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 110,
                                max_shield: "Max Shield",
                                shield_value: 67,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 159,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 114,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 164,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 118,
                                max_shield: "Max Shield",
                                shield_value: 72,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 170,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 125,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 178,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 133,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 189,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 140,
                                max_shield: "Max Shield",
                                shield_value: 86,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 200,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 147,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 215,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 157,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 230,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 179,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 246,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 111,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 266,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 205,
                                max_shield: "Max Shield",
                                shield_value: 118,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 310,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 222,
                                max_shield: "Max Shield",
                                shield_value: 127,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 344,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 241,
                                max_shield: "Max Shield",
                                shield_value: 139,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 380,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 148,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 417,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 278,
                                max_shield: "Max Shield",
                                shield_value: 160,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 456,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 297,
                                max_shield: "Max Shield",
                                shield_value: 171,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 496,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 317,
                                max_shield: "Max Shield",
                                shield_value: 182,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 538,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 340,
                                max_shield: "Max Shield",
                                shield_value: 195,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 582,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 360,
                                max_shield: "Max Shield",
                                shield_value: 207,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 627,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 383,
                                max_shield: "Max Shield",
                                shield_value: 220,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 674,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 406,
                                max_shield: "Max Shield",
                                shield_value: 233,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 722,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 429,
                                max_shield: "Max Shield",
                                shield_value: 247,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 772,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 459,
                                max_shield: "Max Shield",
                                shield_value: 264,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 482,
                                max_shield: "Max Shield",
                                shield_value: 277,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 876,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 509,
                                max_shield: "Max Shield",
                                shield_value: 292,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 930,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 535,
                                max_shield: "Max Shield",
                                shield_value: 307,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 987,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 565,
                                max_shield: "Max Shield",
                                shield_value: 324,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1044,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 591,
                                max_shield: "Max Shield",
                                shield_value: 340,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1104,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 618,
                                max_shield: "Max Shield",
                                shield_value: 355,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1165,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 651,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1227,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 677,
                                max_shield: "Max Shield",
                                shield_value: 389,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1291,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 710,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1357,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 740,
                                max_shield: "Max Shield",
                                shield_value: 425,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1424,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 773,
                                max_shield: "Max Shield",
                                shield_value: 444,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1493,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 802,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1563,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 835,
                                max_shield: "Max Shield",
                                shield_value: 480,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1635,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 868,
                                max_shield: "Max Shield",
                                shield_value: 499,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1708,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 901,
                                max_shield: "Max Shield",
                                shield_value: 518,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 1783,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 934,
                                max_shield: "Max Shield",
                                shield_value: 537,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1860,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frost Shards",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/58b38aaffa179e12f57725dfbf1db9e8",
                        skill_description: "Fires Frost Shards to deal damage to hit enemies and Burst damage to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Frost Road",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/ced304c51d10f92b4a9d4ddc06fb0c38",
                        skill_description: "Activates the Frost Road state. \nWhile in the Frost Road state, creates Ice Sheets on the ground touched. Enemies that touch the Ice Sheets are inflicted with Ice Shackle."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cold Snap",
                        element_type: "Chill",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/37d7c4a211a07d253dc727bda08ea33e",
                        skill_description: "Launches Chill toward the front. Inflicts damage and Ice Shackle on enemies that come into contact with Chill."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blizzard",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9ff3a5b613e57b44fba1903d27973606",
                        skill_description: "Creates a Blizzard at a designated location. Enemies within the Blizzard take continuous damage. When the Blizzard ends, it explodes and deals Burst DMG to nearby enemies. Inflicts Ice Shackle on hit enemies."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Ice Sphere",
                        element_type: "Chill",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0824c7efd00accc5c2bf1b0d64d293cb",
                        skill_description: "Upon using a skill to put an enemy into an Ice Shackle stage, creates an Ice Sphere that flies around nearby.\nThe Ice Sphere that is created flies at a nearby enemy, dealing damage to the hit enemy and Burst damage to nearby enemies.\nThe hit enemy is inflicted with Ice Shackle.\nIce Shackle decreases the Speed, and increases in stage when the effect stacks."
                      },
                ]
        }
    },
    {
        id: "101000011",
        descendant_name: "Sharen",
        slug: "sharen",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/f14fdb3a55fc96e409a10b5dfa2b31b0",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 98,
                                max_shield: "Max Shield",
                                shield_value: 56,
                                max_mp: "Max MP",
                                mp_value: 90,
                                def: "DEF",
                                def_value: 192,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 100,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 91,
                                def: "DEF",
                                def_value: 194,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 103,
                                max_shield: "Max Shield",
                                shield_value: 59,
                                max_mp: "Max MP",
                                mp_value: 92,
                                def: "DEF",
                                def_value: 198,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 107,
                                max_shield: "Max Shield",
                                shield_value: 62,
                                max_mp: "Max MP",
                                mp_value: 92,
                                def: "DEF",
                                def_value: 204,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 112,
                                max_shield: "Max Shield",
                                shield_value: 65,
                                max_mp: "Max MP",
                                mp_value: 93,
                                def: "DEF",
                                def_value: 210,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 118,
                                max_shield: "Max Shield",
                                shield_value: 70,
                                max_mp: "Max MP",
                                mp_value: 94,
                                def: "DEF",
                                def_value: 218,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 126,
                                max_shield: "Max Shield",
                                shield_value: 75,
                                max_mp: "Max MP",
                                mp_value: 95,
                                def: "DEF",
                                def_value: 228,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 135,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 96,
                                def: "DEF",
                                def_value: 243,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 145,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 97,
                                def: "DEF",
                                def_value: 263,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 155,
                                max_shield: "Max Shield",
                                shield_value: 94,
                                max_mp: "Max MP",
                                mp_value: 97,
                                def: "DEF",
                                def_value: 288,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 166,
                                max_shield: "Max Shield",
                                shield_value: 101,
                                max_mp: "Max MP",
                                mp_value: 98,
                                def: "DEF",
                                def_value: 318,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 178,
                                max_shield: "Max Shield",
                                shield_value: 108,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 353,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 117,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 392,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 209,
                                max_shield: "Max Shield",
                                shield_value: 127,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 433,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 224,
                                max_shield: "Max Shield",
                                shield_value: 136,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 475,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 241,
                                max_shield: "Max Shield",
                                shield_value: 146,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 519,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 157,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 565,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 275,
                                max_shield: "Max Shield",
                                shield_value: 167,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 613,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 295,
                                max_shield: "Max Shield",
                                shield_value: 179,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 663,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 312,
                                max_shield: "Max Shield",
                                shield_value: 189,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 715,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332,
                                max_shield: "Max Shield",
                                shield_value: 202,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 768,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 352,
                                max_shield: "Max Shield",
                                shield_value: 214,
                                max_mp: "Max MP",
                                mp_value: 117,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 372,
                                max_shield: "Max Shield",
                                shield_value: 226,
                                max_mp: "Max MP",
                                mp_value: 119,
                                def: "DEF",
                                def_value: 880,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 398,
                                max_shield: "Max Shield",
                                shield_value: 242,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 938,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 418,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 999,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 441,
                                max_shield: "Max Shield",
                                shield_value: 268,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 1061,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 464,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 129,
                                def: "DEF",
                                def_value: 1125,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 490,
                                max_shield: "Max Shield",
                                shield_value: 297,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 1191,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 513,
                                max_shield: "Max Shield",
                                shield_value: 311,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 1258,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 536,
                                max_shield: "Max Shield",
                                shield_value: 325,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 1328,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 564,
                                max_shield: "Max Shield",
                                shield_value: 342,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 1399,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 587,
                                max_shield: "Max Shield",
                                shield_value: 356,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 1472,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 616,
                                max_shield: "Max Shield",
                                shield_value: 373,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 641,
                                max_shield: "Max Shield",
                                shield_value: 389,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1623,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 670,
                                max_shield: "Max Shield",
                                shield_value: 407,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1702,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 696,
                                max_shield: "Max Shield",
                                shield_value: 422,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1782,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724,
                                max_shield: "Max Shield",
                                shield_value: 439,
                                max_mp: "Max MP",
                                mp_value: 159,
                                def: "DEF",
                                def_value: 1864,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 753,
                                max_shield: "Max Shield",
                                shield_value: 457,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 782,
                                max_shield: "Max Shield",
                                shield_value: 474,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 2033,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 810,
                                max_shield: "Max Shield",
                                shield_value: 491,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 2120,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Cutoff Beam",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/50f88d96a487ccfa4113a21fb9b521db",
                        skill_description: "Inflicts damage and Electrocution on enemies in front of Cutoff Beam."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Active Camouflage",
                        element_type: "Electric",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/25baa8e537b88778fb30ef449354b00d",
                        skill_description: "Activates Active Camouflage, which hides self from enemy sight. Attacking an enemy while in this state immediately ends Active Camouflage, and activates Ambush."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Shock Nuts",
                        element_type: "Electric",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9f35896f2dcbc8d2b4ad13dbb7dddb93",
                        skill_description: "Fires built-in Impact Rounds from the arm forward, inflicting Stun."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Flash Shortsword",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/20a30de41fd0a6d629d99842e54b22f3",
                        skill_description: "Generates multiple Shortswords and fires them at a designated target. Hit enemies take Burst damage and are inflicted with Electrocution. Fire using the attack button and cancel using the aim button.\nCanceling does not trigger a cooldown."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Assassinator",
                        element_type: "Electric",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/aeb90bf9a872f28840ad0052c8918a3b",
                        skill_description: "When in Ambush state, killing an enemy by using a skill resets the Active Camouflage cooldown. This effect gains cooldown. When attacking, increases DMG against enemies who are not targeting the caster."
                      },
                ]
        }
    },
    {
        id: "101000012",
        descendant_name: "Blair",
        slug: "blair",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/1a5ae4f83650ec541226f55c06deef64",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 185,
                                max_shield: "Max Shield",
                                shield_value: 61,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 193,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187,
                                max_shield: "Max Shield",
                                shield_value: 65,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 195,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 191,
                                max_shield: "Max Shield",
                                shield_value: 67,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 199,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 195,
                                max_shield: "Max Shield",
                                shield_value: 70,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 205,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 201,
                                max_shield: "Max Shield",
                                shield_value: 75,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 211,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 209,
                                max_shield: "Max Shield",
                                shield_value: 79,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 216,
                                max_shield: "Max Shield",
                                shield_value: 84,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 226,
                                max_shield: "Max Shield",
                                shield_value: 89,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 244,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 241,
                                max_shield: "Max Shield",
                                shield_value: 95,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 264,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 255,
                                max_shield: "Max Shield",
                                shield_value: 101,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 289,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 274,
                                max_shield: "Max Shield",
                                shield_value: 108,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 319,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 293,
                                max_shield: "Max Shield",
                                shield_value: 116,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 356,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 316,
                                max_shield: "Max Shield",
                                shield_value: 125,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 396,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 345,
                                max_shield: "Max Shield",
                                shield_value: 136,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 437,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 368,
                                max_shield: "Max Shield",
                                shield_value: 145,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 479,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 396,
                                max_shield: "Max Shield",
                                shield_value: 157,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 524,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 425,
                                max_shield: "Max Shield",
                                shield_value: 168,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 570,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 453,
                                max_shield: "Max Shield",
                                shield_value: 179,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 619,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 486,
                                max_shield: "Max Shield",
                                shield_value: 192,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 669,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 514,
                                max_shield: "Max Shield",
                                shield_value: 203,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 721,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 547,
                                max_shield: "Max Shield",
                                shield_value: 216,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 775,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 580,
                                max_shield: "Max Shield",
                                shield_value: 229,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 830,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 613,
                                max_shield: "Max Shield",
                                shield_value: 242,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 887,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 656,
                                max_shield: "Max Shield",
                                shield_value: 259,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689,
                                max_shield: "Max Shield",
                                shield_value: 272,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 1007,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 726,
                                max_shield: "Max Shield",
                                shield_value: 287,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 1070,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 764,
                                max_shield: "Max Shield",
                                shield_value: 301,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 1135,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 806,
                                max_shield: "Max Shield",
                                shield_value: 318,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1201,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 844,
                                max_shield: "Max Shield",
                                shield_value: 333,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1269,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 882,
                                max_shield: "Max Shield",
                                shield_value: 348,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 929,
                                max_shield: "Max Shield",
                                shield_value: 367,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1411,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 967,
                                max_shield: "Max Shield",
                                shield_value: 381,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1485,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1014,
                                max_shield: "Max Shield",
                                shield_value: 400,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1560,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1056,
                                max_shield: "Max Shield",
                                shield_value: 417,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1638,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1103,
                                max_shield: "Max Shield",
                                shield_value: 436,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1717,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1146,
                                max_shield: "Max Shield",
                                shield_value: 452,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1797,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1193,
                                max_shield: "Max Shield",
                                shield_value: 471,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1880,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1240,
                                max_shield: "Max Shield",
                                shield_value: 489,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1964,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1287,
                                max_shield: "Max Shield",
                                shield_value: 508,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1334,
                                max_shield: "Max Shield",
                                shield_value: 526,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 2139,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Blaze Up",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/d15f8d29541f41a1eebb216ee0a34451",
                        skill_description: "Spews fire and creates a Flame Zone on the ground. Enemies standing in the Flame Zone receive continuous damage and are inflicted with Burn."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Extinguish",
                        element_type: "Fire",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/bcc737a37947c231a2363b3327dba208",
                        skill_description: "Retrieves the Flame Zones created on the battlefield and recovers MP in proportion to the amount retrieved. On retrieval, gains Taste of Aggression.\nFlame Zones summoned earlier are retrieved first."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Burn Taste",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/5f88adcb0b93d31ab7196720d717bec9",
                        skill_description: "Fires a flame forward . Enemies hit by the flame take continuous damage and are inflicted with Burn."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Deadly Cuisine",
                        element_type: "Fire",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/d990fc8e2c2fef4540f44a7a0b6f802c",
                        skill_description: "Fires a Giant Fireball forward. On explosion, the Giant Fireball deals Burst damage to nearby enemies and divides into multiple Small Fireballs, which create additional explosions. \nSmall Fireballs deal Burst damage and inflict Burn on nearby enemies, and create Flame Zones."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Pitmaster",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/a2e61305f53754a2eececfc5dcf4a366",
                        skill_description: "When attacking enemies inflicted with Burn, increases Skill Critical Hit Damage.\nIncreases Skill Critical Hit Rate based on the number of Flame Zones created on the battlefield."
                      },
                ]
        }
    },
    {
        id: "101000013",
        descendant_name: "Valby",
        slug: "valby",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/f1236f2af539bd14c431b5befdd120f4",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 186,
                                max_shield: "Max Shield",
                                shield_value: 62,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 192,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 188,
                                max_shield: "Max Shield",
                                shield_value: 66,
                                max_mp: "Max MP",
                                mp_value: 131,
                                def: "DEF",
                                def_value: 194,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 68,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 198,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 196,
                                max_shield: "Max Shield",
                                shield_value: 71,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 203,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 76,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 209,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 210,
                                max_shield: "Max Shield",
                                shield_value: 80,
                                max_mp: "Max MP",
                                mp_value: 136,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 217,
                                max_shield: "Max Shield",
                                shield_value: 85,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 227,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 227,
                                max_shield: "Max Shield",
                                shield_value: 90,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 242,
                                max_shield: "Max Shield",
                                shield_value: 96,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 257,
                                max_shield: "Max Shield",
                                shield_value: 102,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 286,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 276,
                                max_shield: "Max Shield",
                                shield_value: 109,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 316,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 296,
                                max_shield: "Max Shield",
                                shield_value: 117,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 329,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 319,
                                max_shield: "Max Shield",
                                shield_value: 126,
                                max_mp: "Max MP",
                                mp_value: 147,
                                def: "DEF",
                                def_value: 366,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 348,
                                max_shield: "Max Shield",
                                shield_value: 137,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 403,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 372,
                                max_shield: "Max Shield",
                                shield_value: 147,
                                max_mp: "Max MP",
                                mp_value: 151,
                                def: "DEF",
                                def_value: 443,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 400,
                                max_shield: "Max Shield",
                                shield_value: 158,
                                max_mp: "Max MP",
                                mp_value: 154,
                                def: "DEF",
                                def_value: 484,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 429,
                                max_shield: "Max Shield",
                                shield_value: 169,
                                max_mp: "Max MP",
                                mp_value: 156,
                                def: "DEF",
                                def_value: 527,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 457,
                                max_shield: "Max Shield",
                                shield_value: 181,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 572,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 491,
                                max_shield: "Max Shield",
                                shield_value: 194,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 618,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 519,
                                max_shield: "Max Shield",
                                shield_value: 205,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 666,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 552,
                                max_shield: "Max Shield",
                                shield_value: 218,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 716,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 586,
                                max_shield: "Max Shield",
                                shield_value: 231,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 767,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 619,
                                max_shield: "Max Shield",
                                shield_value: 245,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 820,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 662,
                                max_shield: "Max Shield",
                                shield_value: 262,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 875,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 695,
                                max_shield: "Max Shield",
                                shield_value: 274,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 931,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 733,
                                max_shield: "Max Shield",
                                shield_value: 289,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 989,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 771,
                                max_shield: "Max Shield",
                                shield_value: 304,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1048,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 814,
                                max_shield: "Max Shield",
                                shield_value: 321,
                                max_mp: "Max MP",
                                mp_value: 190,
                                def: "DEF",
                                def_value: 1110,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 852,
                                max_shield: "Max Shield",
                                shield_value: 336,
                                max_mp: "Max MP",
                                mp_value: 194,
                                def: "DEF",
                                def_value: 1173,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 890,
                                max_shield: "Max Shield",
                                shield_value: 351,
                                max_mp: "Max MP",
                                mp_value: 197,
                                def: "DEF",
                                def_value: 1238,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 938,
                                max_shield: "Max Shield",
                                shield_value: 370,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 1304,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976,
                                max_shield: "Max Shield",
                                shield_value: 385,
                                max_mp: "Max MP",
                                mp_value: 206,
                                def: "DEF",
                                def_value: 1372,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1024,
                                max_shield: "Max Shield",
                                shield_value: 404,
                                max_mp: "Max MP",
                                mp_value: 210,
                                def: "DEF",
                                def_value: 1442,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1066,
                                max_shield: "Max Shield",
                                shield_value: 421,
                                max_mp: "Max MP",
                                mp_value: 215,
                                def: "DEF",
                                def_value: 1513,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1114,
                                max_shield: "Max Shield",
                                shield_value: 440,
                                max_mp: "Max MP",
                                mp_value: 220,
                                def: "DEF",
                                def_value: 1586,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1157,
                                max_shield: "Max Shield",
                                shield_value: 456,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 1660,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204,
                                max_shield: "Max Shield",
                                shield_value: 475,
                                max_mp: "Max MP",
                                mp_value: 229,
                                def: "DEF",
                                def_value: 1737,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1252,
                                max_shield: "Max Shield",
                                shield_value: 494,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 1815,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1300,
                                max_shield: "Max Shield",
                                shield_value: 513,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 1895,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1347,
                                max_shield: "Max Shield",
                                shield_value: 531,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 1976,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Bubble Bullet",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6ff1c0dbd44f95627835afffd5c3a593",
                        skill_description: "Fires a bouncing Bubble Bullet. Where the Bubble Bullet impacts, it creates a Small Puddle at the point of collision.\nEnemies who touch the Small Puddle take continuous damage and are inflicted with Laundry.\nThe Bubble Bullet explodes upon hitting an enemy or after bouncing a maximum number of times, dealing Burst Damage on nearby enemies.\nBurst Damage increases with the number of times Bubble Bullet bounces."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Plop Plop",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e1e8dd61d230596c53f7d0dedef2d345",
                        skill_description: "Forms a Big Puddle at a designated location.\nEmerges from the Big Puddle and inflicts Knockdown on nearby enemies.\nEnemies standing in the Big Puddle receive continuous DMG and are inflicted with Laundry. The skill's cooldown decreases proportionally to the number of enemies inflicted with Knockdown."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Clean Up",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/330ed09dce1880e52983ae23cca87f63",
                        skill_description: "Activates Liquefied state. While Liquefied, does not collide with enemies and creates a Waterway on the ground.\nEnemies standing in the Waterway take continuous damage and are inflicted with Laundry.\nIn the Liquefied state, cannot jump or use skills."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Laundry Bomb",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2b6217ed55b151676a64473681f07fd8",
                        skill_description: "Equip a Unique Weapon. It will be unequipped when the duration ends or all bullets have been used. The projectile impact of the Unique Weapon creates a Laundry Bomb, dealing continuous damage and inflicting Towed on nearby enemies with Laundry.\nContinuous damage increases based on the number of enemies with Laundry."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Water Intake",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/bc2e6988a64706ff5c47205c266e336d",
                        skill_description: "When using skills while on water, MP cost decreases.\nPuddles created by skills are also considered to be water."
                      },
                ]
        }
    },
    {
        id: "101000014",
        descendant_name: "Kyle",
        slug: "kyle",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/2ae6db799a211e64aa6a0cd1494c1b0d",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 184,
                                max_shield: "Max Shield",
                                shield_value: 138,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.35,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.29
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 186,
                                max_shield: "Max Shield",
                                shield_value: 140,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.36,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.3
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 190,
                                max_shield: "Max Shield",
                                shield_value: 143,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 223,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.31
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 194,
                                max_shield: "Max Shield",
                                shield_value: 146,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.33
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 200,
                                max_shield: "Max Shield",
                                shield_value: 150,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.42,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.35
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 207,
                                max_shield: "Max Shield",
                                shield_value: 155,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 246,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 214,
                                max_shield: "Max Shield",
                                shield_value: 162,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 224,
                                max_shield: "Max Shield",
                                shield_value: 171,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 284,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 239,
                                max_shield: "Max Shield",
                                shield_value: 181,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 309,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 193,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 339,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 269,
                                max_shield: "Max Shield",
                                shield_value: 206,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 364,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.55
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 287,
                                max_shield: "Max Shield",
                                shield_value: 221,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 406,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.59
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 310,
                                max_shield: "Max Shield",
                                shield_value: 238,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 452,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.77,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.64
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 338,
                                max_shield: "Max Shield",
                                shield_value: 260,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 498,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 361,
                                max_shield: "Max Shield",
                                shield_value: 277,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.89,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.74
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 389,
                                max_shield: "Max Shield",
                                shield_value: 299,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 598,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.79
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417,
                                max_shield: "Max Shield",
                                shield_value: 320,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 651,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.01,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 444,
                                max_shield: "Max Shield",
                                shield_value: 342,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 706,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.09,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.91
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 477,
                                max_shield: "Max Shield",
                                shield_value: 366,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 763,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 504,
                                max_shield: "Max Shield",
                                shield_value: 388,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.03
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 537,
                                max_shield: "Max Shield",
                                shield_value: 413,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 884,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.32,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.1
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 569,
                                max_shield: "Max Shield",
                                shield_value: 437,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.17
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 602,
                                max_shield: "Max Shield",
                                shield_value: 463,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1013,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.23
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 643,
                                max_shield: "Max Shield",
                                shield_value: 495,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1080,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.31
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 676,
                                max_shield: "Max Shield",
                                shield_value: 519,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.39
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 712,
                                max_shield: "Max Shield",
                                shield_value: 547,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.45
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 749,
                                max_shield: "Max Shield",
                                shield_value: 576,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1295,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.85,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.54
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 791,
                                max_shield: "Max Shield",
                                shield_value: 608,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1371,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.93,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.61
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 828,
                                max_shield: "Max Shield",
                                shield_value: 636,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1448,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.69
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 865,
                                max_shield: "Max Shield",
                                shield_value: 664,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1529,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.12,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 911,
                                max_shield: "Max Shield",
                                shield_value: 701,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1611,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.86
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 948,
                                max_shield: "Max Shield",
                                shield_value: 729,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1695,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.33,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.94
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 995,
                                max_shield: "Max Shield",
                                shield_value: 764,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1781,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.03
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1036,
                                max_shield: "Max Shield",
                                shield_value: 796,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1869,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.12
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1082,
                                max_shield: "Max Shield",
                                shield_value: 832,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1959,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.21
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1124,
                                max_shield: "Max Shield",
                                shield_value: 863,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1170,
                                max_shield: "Max Shield",
                                shield_value: 899,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2146,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.39
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1216,
                                max_shield: "Max Shield",
                                shield_value: 935,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.49
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1263,
                                max_shield: "Max Shield",
                                shield_value: 971,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1309,
                                max_shield: "Max Shield",
                                shield_value: 1006,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2441,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.22,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.68
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Repulsion Dash",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/c4f4c305bdc858d4cd3f895acde9faf6",
                        skill_description: "Charges forward to deal damage and inflict Knockback on colliding enemies.\nDealing damage to enemies recovers Magnetic Force proportionally to Max Shield. When the skill ends, grants DEF + to self."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Magnetic Bulwark",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9009df12bc86c372d45d13737dcd499c",
                        skill_description: "Extends both hands to create a Barrier in front that blocks enemy ranged attacks.\nEvery time the Barrier blocks an attack, recovers Magnetic Force proportional to the damage blocked."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Magnetism Spurt",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/71f43d556958655c6cec50912d683724",
                        skill_description: "When hit by enemies in the Magnetism Spurt state, Magnetic Force is consumed instead of Shield and HP.\nWhen all Magnetic Force is consumed or by interacting with the skill button again, discharges Magnetic Force to deal damage.\nWhen the skill ends, restores Shields to nearby allies proportional to Max Shield."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Superconductivity Thrusters",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e50c0ad1a58e014e5f41316e94ae6a89",
                        skill_description: "Uses Superconductivity Thrusters to soar into the air. Descends, colliding with enemies and dealing damage upon impact. Damage increases proportionally to the amount of Magnetic Force consumed. \nWhen the skill ends, Magnetic Force is fully consumed."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Experienced Technician",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/72ba557258698824584a2ab24439b305",
                        skill_description: "Max amount of Magnetic Force increases proportionally to Max Shield. When the Shield is fully consumed, gains Magnetic Care. This effect has a cooldown.\nMagnetic Force gradually decreases while Out of Combat."
                      },
                ]
        }
    },
    {
        id: "101000015",
        descendant_name: "Esiemo",
        slug: "esiemo",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/4f2cbea689b4118dc58895e5e0771270",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 186,
                                max_shield: "Max Shield",
                                shield_value: 49,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 188,
                                max_shield: "Max Shield",
                                shield_value: 50,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 223,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 196,
                                max_shield: "Max Shield",
                                shield_value: 54,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 57,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 210,
                                max_shield: "Max Shield",
                                shield_value: 60,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 246,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 218,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 228,
                                max_shield: "Max Shield",
                                shield_value: 68,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 284,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 243,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 309,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 262,
                                max_shield: "Max Shield",
                                shield_value: 79,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 339,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 282,
                                max_shield: "Max Shield",
                                shield_value: 85,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 364,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 301,
                                max_shield: "Max Shield",
                                shield_value: 91,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 406,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 326,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 452,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 355,
                                max_shield: "Max Shield",
                                shield_value: 107,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 498,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 379,
                                max_shield: "Max Shield",
                                shield_value: 114,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 408,
                                max_shield: "Max Shield",
                                shield_value: 123,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 598,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 437,
                                max_shield: "Max Shield",
                                shield_value: 132,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 651,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 466,
                                max_shield: "Max Shield",
                                shield_value: 140,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 706,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 500,
                                max_shield: "Max Shield",
                                shield_value: 150,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 763,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 529,
                                max_shield: "Max Shield",
                                shield_value: 159,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 563,
                                max_shield: "Max Shield",
                                shield_value: 170,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 884,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 597,
                                max_shield: "Max Shield",
                                shield_value: 180,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 631,
                                max_shield: "Max Shield",
                                shield_value: 190,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 1013,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 675,
                                max_shield: "Max Shield",
                                shield_value: 203,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 1080,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 709,
                                max_shield: "Max Shield",
                                shield_value: 213,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 1150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 748,
                                max_shield: "Max Shield",
                                shield_value: 225,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 786,
                                max_shield: "Max Shield",
                                shield_value: 236,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 1295,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 830,
                                max_shield: "Max Shield",
                                shield_value: 250,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 1371,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 869,
                                max_shield: "Max Shield",
                                shield_value: 261,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 1448,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 908,
                                max_shield: "Max Shield",
                                shield_value: 273,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1529,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 956,
                                max_shield: "Max Shield",
                                shield_value: 288,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1611,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 995,
                                max_shield: "Max Shield",
                                shield_value: 299,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1695,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1043,
                                max_shield: "Max Shield",
                                shield_value: 314,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1781,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1087,
                                max_shield: "Max Shield",
                                shield_value: 327,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1869,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1136,
                                max_shield: "Max Shield",
                                shield_value: 342,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1959,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1179,
                                max_shield: "Max Shield",
                                shield_value: 354,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1228,
                                max_shield: "Max Shield",
                                shield_value: 369,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 2146,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1276,
                                max_shield: "Max Shield",
                                shield_value: 384,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 2242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1325,
                                max_shield: "Max Shield",
                                shield_value: 398,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 2340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1373,
                                max_shield: "Max Shield",
                                shield_value: 413,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 2441,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Time Bomb",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/135b551175abab393282fc3417b69374",
                        skill_description: "Fires a Sticky Bomb forward. The Sticky Bomb attaches to an enemy or terrain on contact."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Blast",
                        element_type: "Fire",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/647808975634e4236c9009c28798c564",
                        skill_description: "Detonate the attached bombs.\nDamage dealt increases with the number of attached bombs."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Guided Landmine",
                        element_type: "Fire",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/589126c6551ed0a2472310f3bd06a181",
                        skill_description: "Places a Guided Landmine.\nOnce placed, the Guided Landmine flies to an enemy within its detection range and attaches to it.\nIf there are obstacles in its path, it attaches to the terrain."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Arche Explosion",
                        element_type: "Fire",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1cbd90958a43399c0b2a71b04deda53f",
                        skill_description: "Dashes forward to deal damage and inflict Knockback on colliding targets during movement.\nInteracting with the skill button again or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs.\nWhen the skill ends, grants self Madness."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Adventitious Habit",
                        element_type: "Fire",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/62ce7b1e9c492160310de8d98117510e",
                        skill_description: "Drops a bomb on the ground when the shield is completely depleted."
                      },
                ]
        }
    },
    {
        id: "101000016",
        descendant_name: "Enzo",
        slug: "enzo",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/dd903ca869faef90ddbe9a64127c8ca1",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 105,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 100,
                                def: "DEF",
                                def_value: 126,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 107,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 101,
                                def: "DEF",
                                def_value: 128,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 110,
                                max_shield: "Max Shield",
                                shield_value: 66,
                                max_mp: "Max MP",
                                mp_value: 102,
                                def: "DEF",
                                def_value: 132,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 114,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 103,
                                def: "DEF",
                                def_value: 136,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 119,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 104,
                                def: "DEF",
                                def_value: 142,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 125,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 105,
                                def: "DEF",
                                def_value: 150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 132,
                                max_shield: "Max Shield",
                                shield_value: 82,
                                max_mp: "Max MP",
                                mp_value: 106,
                                def: "DEF",
                                def_value: 160,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 140,
                                max_shield: "Max Shield",
                                shield_value: 87,
                                max_mp: "Max MP",
                                mp_value: 107,
                                def: "DEF",
                                def_value: 175,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 150,
                                max_shield: "Max Shield",
                                shield_value: 93,
                                max_mp: "Max MP",
                                mp_value: 108,
                                def: "DEF",
                                def_value: 195,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 161,
                                max_shield: "Max Shield",
                                shield_value: 99,
                                max_mp: "Max MP",
                                mp_value: 109,
                                def: "DEF",
                                def_value: 220,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 173,
                                max_shield: "Max Shield",
                                shield_value: 106,
                                max_mp: "Max MP",
                                mp_value: 110,
                                def: "DEF",
                                def_value: 249,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 185,
                                max_shield: "Max Shield",
                                shield_value: 113,
                                max_mp: "Max MP",
                                mp_value: 111,
                                def: "DEF",
                                def_value: 279,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 199,
                                max_shield: "Max Shield",
                                shield_value: 122,
                                max_mp: "Max MP",
                                mp_value: 113,
                                def: "DEF",
                                def_value: 310,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 217,
                                max_shield: "Max Shield",
                                shield_value: 133,
                                max_mp: "Max MP",
                                mp_value: 115,
                                def: "DEF",
                                def_value: 342,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 232,
                                max_shield: "Max Shield",
                                shield_value: 142,
                                max_mp: "Max MP",
                                mp_value: 116,
                                def: "DEF",
                                def_value: 375,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 250,
                                max_shield: "Max Shield",
                                shield_value: 153,
                                max_mp: "Max MP",
                                mp_value: 118,
                                def: "DEF",
                                def_value: 410,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 164,
                                max_mp: "Max MP",
                                mp_value: 120,
                                def: "DEF",
                                def_value: 446,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 286,
                                max_shield: "Max Shield",
                                shield_value: 175,
                                max_mp: "Max MP",
                                mp_value: 122,
                                def: "DEF",
                                def_value: 484,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 306,
                                max_shield: "Max Shield",
                                shield_value: 188,
                                max_mp: "Max MP",
                                mp_value: 124,
                                def: "DEF",
                                def_value: 523,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 324,
                                max_shield: "Max Shield",
                                shield_value: 199,
                                max_mp: "Max MP",
                                mp_value: 125,
                                def: "DEF",
                                def_value: 564,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 345,
                                max_shield: "Max Shield",
                                shield_value: 212,
                                max_mp: "Max MP",
                                mp_value: 127,
                                def: "DEF",
                                def_value: 606,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 366,
                                max_shield: "Max Shield",
                                shield_value: 224,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 649,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387,
                                max_shield: "Max Shield",
                                shield_value: 237,
                                max_mp: "Max MP",
                                mp_value: 133,
                                def: "DEF",
                                def_value: 694,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 413,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 741,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 434,
                                max_shield: "Max Shield",
                                shield_value: 266,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 788,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 458,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 837,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 482,
                                max_shield: "Max Shield",
                                shield_value: 295,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 888,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 508,
                                max_shield: "Max Shield",
                                shield_value: 312,
                                max_mp: "Max MP",
                                mp_value: 146,
                                def: "DEF",
                                def_value: 940,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 532,
                                max_shield: "Max Shield",
                                shield_value: 326,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 993,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 556,
                                max_shield: "Max Shield",
                                shield_value: 341,
                                max_mp: "Max MP",
                                mp_value: 152,
                                def: "DEF",
                                def_value: 1048,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 586,
                                max_shield: "Max Shield",
                                shield_value: 359,
                                max_mp: "Max MP",
                                mp_value: 155,
                                def: "DEF",
                                def_value: 1104,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 609,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 1162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 639,
                                max_shield: "Max Shield",
                                shield_value: 392,
                                max_mp: "Max MP",
                                mp_value: 162,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 666,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 1282,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 695,
                                max_shield: "Max Shield",
                                shield_value: 427,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 1344,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 722,
                                max_shield: "Max Shield",
                                shield_value: 443,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 1407,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 752,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 1471,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 782,
                                max_shield: "Max Shield",
                                shield_value: 479,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 1537,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 811,
                                max_shield: "Max Shield",
                                shield_value: 498,
                                max_mp: "Max MP",
                                mp_value: 184,
                                def: "DEF",
                                def_value: 1605,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 841,
                                max_shield: "Max Shield",
                                shield_value: 516,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1674,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Start Supply",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/b31623806505fabda7a97a0f7ae3d18f",
                        skill_description: "Summons a Bullet Supplying Device at the designated location. Supplies bullets to allies that approach the Device. The Bullet Supplying Device can be used once by each ally, and disappears when everyone has used it or its duration ends."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Explosive Drone",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fec68f8de0eb16491474dc45d5f093ae",
                        skill_description: "Launches an Explosive Drone forward.\nThe Explosive Drone explodes on contact with an enemy or a terrain object, dealing Burst damage."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Enhance Combat Suit",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/70de38574c7fb9d0ab706a26da11d01c",
                        skill_description: "Summons Shield Recovery Comms.\nWhen the Shield Recovery Comms is first summoned, it recovers the Shield and grants Enhance Combat Suit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Perfect Support",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9a5321d22913bdeaa27b76fd0a4163b5",
                        skill_description: "Summons a Small Supply Ship to himself and his allies. The Small Supply Ship provides Supply Bullets and grants Perfect Support to allies. The Small Supply Ship attacks enemies in front, and when the skill ends, it fires a missile forward that causes a big explosion."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Fire Supporter",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/f74c8a674af689a3413786c7b6d0842b",
                        skill_description: "Grants Fire Support to allies within an area around self.\nFire Support effect enhances when same Descendant is present within the Party or Squad.\nEfficiency increases when Enzo disarms the security of the Encrypted Vault, and rewards increase when this happens."
                      },
                ]
        }
    },
    {
        id: "101000017",
        descendant_name: "Yujin",
        slug: "yujin",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/2bb766e96b8aa777faf6ef1b5afcbc3f",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 126,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 189,
                                max_shield: "Max Shield",
                                shield_value: 67,
                                max_mp: "Max MP",
                                mp_value: 131,
                                def: "DEF",
                                def_value: 128,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 132,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.49,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 198,
                                max_shield: "Max Shield",
                                shield_value: 72,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 136,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 204,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 142,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.58,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 212,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 136,
                                def: "DEF",
                                def_value: 150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220,
                                max_shield: "Max Shield",
                                shield_value: 86,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 160,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.69,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 231,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 175,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.75,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 246,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 195,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 220,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.89,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 288,
                                max_shield: "Max Shield",
                                shield_value: 111,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 249,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.98,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 308,
                                max_shield: "Max Shield",
                                shield_value: 118,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 279,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.07,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332,
                                max_shield: "Max Shield",
                                shield_value: 127,
                                max_mp: "Max MP",
                                mp_value: 147,
                                def: "DEF",
                                def_value: 310,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.17,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362,
                                max_shield: "Max Shield",
                                shield_value: 139,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 342,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.28,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387,
                                max_shield: "Max Shield",
                                shield_value: 148,
                                max_mp: "Max MP",
                                mp_value: 151,
                                def: "DEF",
                                def_value: 375,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417,
                                max_shield: "Max Shield",
                                shield_value: 160,
                                max_mp: "Max MP",
                                mp_value: 154,
                                def: "DEF",
                                def_value: 410,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 446,
                                max_shield: "Max Shield",
                                shield_value: 171,
                                max_mp: "Max MP",
                                mp_value: 156,
                                def: "DEF",
                                def_value: 446,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 476,
                                max_shield: "Max Shield",
                                shield_value: 182,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 484,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.75,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 511,
                                max_shield: "Max Shield",
                                shield_value: 195,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 523,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.89,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540,
                                max_shield: "Max Shield",
                                shield_value: 207,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 564,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.02,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 575,
                                max_shield: "Max Shield",
                                shield_value: 220,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 606,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610,
                                max_shield: "Max Shield",
                                shield_value: 233,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 649,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 644,
                                max_shield: "Max Shield",
                                shield_value: 247,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 694,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689,
                                max_shield: "Max Shield",
                                shield_value: 264,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 741,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724,
                                max_shield: "Max Shield",
                                shield_value: 277,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 788,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 763,
                                max_shield: "Max Shield",
                                shield_value: 292,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 837,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.02,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803,
                                max_shield: "Max Shield",
                                shield_value: 307,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 888,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847,
                                max_shield: "Max Shield",
                                shield_value: 324,
                                max_mp: "Max MP",
                                mp_value: 190,
                                def: "DEF",
                                def_value: 940,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 887,
                                max_shield: "Max Shield",
                                shield_value: 340,
                                max_mp: "Max MP",
                                mp_value: 194,
                                def: "DEF",
                                def_value: 993,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 927,
                                max_shield: "Max Shield",
                                shield_value: 355,
                                max_mp: "Max MP",
                                mp_value: 197,
                                def: "DEF",
                                def_value: 1048,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.79,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 1104,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.02,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1016,
                                max_shield: "Max Shield",
                                shield_value: 389,
                                max_mp: "Max MP",
                                mp_value: 206,
                                def: "DEF",
                                def_value: 1162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1065,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 210,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1110,
                                max_shield: "Max Shield",
                                shield_value: 425,
                                max_mp: "Max MP",
                                mp_value: 215,
                                def: "DEF",
                                def_value: 1282,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.69,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1159,
                                max_shield: "Max Shield",
                                shield_value: 444,
                                max_mp: "Max MP",
                                mp_value: 220,
                                def: "DEF",
                                def_value: 1344,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.93,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 1407,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 5.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254,
                                max_shield: "Max Shield",
                                shield_value: 480,
                                max_mp: "Max MP",
                                mp_value: 229,
                                def: "DEF",
                                def_value: 1471,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 5.42,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1303,
                                max_shield: "Max Shield",
                                shield_value: 499,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 1537,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 5.68,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1353,
                                max_shield: "Max Shield",
                                shield_value: 518,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 1605,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 5.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1402,
                                max_shield: "Max Shield",
                                shield_value: 537,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 1674,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 6.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Solidarity Healing",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/856558715bc1d53e7666ea67afe55aa2",
                        skill_description: "Attaches a Healing Drone to an ally.\nThe Drone is dismissed if it gets too far from the target or when its duration expires.\nThe Drone grants Sustained Recovery. Upon dismissal, grants Stimulant to both the ally and self."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Restructure Serum",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/73a489100f524cd6b45c4438d8c98764",
                        skill_description: "Fires Restructure Serum forward.\nEnemies hit by Restructure Serum are inflicted with Allergy.\nAttacking enemies with Allergy heals nearby allies.\nDefeating an enemy with Allergy further heals the Descendant."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Stimulant Spray",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0a289c19f03b13384761b3adda866400",
                        skill_description: "Grants Stimulation to nearby allies.\nAllies receive healing proportional to the number of times they were hit when Stimulation  ends."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Hyperreactive Healing Ground",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/6d480f229ecf2173317bf63d6d2de17b",
                        skill_description: "Enters skill standby mode upon use. The skill can be used with the attack button and canceled it with the aim button.\nHeals allies and self within a circular range, grants Purification, and provides Immunity to debuffs.\nThe amount healed increases based on the number of allies and enemies within range.\nWhen the skill ends, grants self Hyper Activity."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Stop Overreacting",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/97b1314b41e2fd52c899fd6ea562d5ff",
                        skill_description: "Significantly reduces the time it takes to rescue allies.\nRescued allies gain Additional Prescription."
                      },
                ]
        }
    },
    {
        id: "101000018",
        descendant_name: "Luna",
        slug: "luna",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/c07d494b9cb1d8285fee1f1752ff41c0",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 172,
                                max_shield: "Max Shield",
                                shield_value: 71,
                                max_mp: "Max MP",
                                mp_value: 160,
                                def: "DEF",
                                def_value: 193,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 174,
                                max_shield: "Max Shield",
                                shield_value: 72,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 195,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 178,
                                max_shield: "Max Shield",
                                shield_value: 74,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 199,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 182,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 164,
                                def: "DEF",
                                def_value: 205,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 188,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 166,
                                def: "DEF",
                                def_value: 211,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 194,
                                max_shield: "Max Shield",
                                shield_value: 86,
                                max_mp: "Max MP",
                                mp_value: 167,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 210,
                                max_shield: "Max Shield",
                                shield_value: 99,
                                max_mp: "Max MP",
                                mp_value: 170,
                                def: "DEF",
                                def_value: 244,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 223,
                                max_shield: "Max Shield",
                                shield_value: 107,
                                max_mp: "Max MP",
                                mp_value: 172,
                                def: "DEF",
                                def_value: 264,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 238,
                                max_shield: "Max Shield",
                                shield_value: 115,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 289,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 255,
                                max_shield: "Max Shield",
                                shield_value: 125,
                                max_mp: "Max MP",
                                mp_value: 175,
                                def: "DEF",
                                def_value: 319,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 273,
                                max_shield: "Max Shield",
                                shield_value: 136,
                                max_mp: "Max MP",
                                mp_value: 177,
                                def: "DEF",
                                def_value: 356,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 295,
                                max_shield: "Max Shield",
                                shield_value: 147,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 396,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 321,
                                max_shield: "Max Shield",
                                shield_value: 160,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 437,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 343,
                                max_shield: "Max Shield",
                                shield_value: 171,
                                max_mp: "Max MP",
                                mp_value: 186,
                                def: "DEF",
                                def_value: 479,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 369,
                                max_shield: "Max Shield",
                                shield_value: 184,
                                max_mp: "Max MP",
                                mp_value: 189,
                                def: "DEF",
                                def_value: 524,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 396,
                                max_shield: "Max Shield",
                                shield_value: 197,
                                max_mp: "Max MP",
                                mp_value: 192,
                                def: "DEF",
                                def_value: 570,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 422,
                                max_shield: "Max Shield",
                                shield_value: 210,
                                max_mp: "Max MP",
                                mp_value: 195,
                                def: "DEF",
                                def_value: 619,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 453,
                                max_shield: "Max Shield",
                                shield_value: 225,
                                max_mp: "Max MP",
                                mp_value: 198,
                                def: "DEF",
                                def_value: 669,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 479,
                                max_shield: "Max Shield",
                                shield_value: 239,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 721,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 510,
                                max_shield: "Max Shield",
                                shield_value: 254,
                                max_mp: "Max MP",
                                mp_value: 204,
                                def: "DEF",
                                def_value: 775,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540,
                                max_shield: "Max Shield",
                                shield_value: 269,
                                max_mp: "Max MP",
                                mp_value: 208,
                                def: "DEF",
                                def_value: 830,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 571,
                                max_shield: "Max Shield",
                                shield_value: 285,
                                max_mp: "Max MP",
                                mp_value: 212,
                                def: "DEF",
                                def_value: 887,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 611,
                                max_shield: "Max Shield",
                                shield_value: 305,
                                max_mp: "Max MP",
                                mp_value: 217,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 641,
                                max_shield: "Max Shield",
                                shield_value: 320,
                                max_mp: "Max MP",
                                mp_value: 221,
                                def: "DEF",
                                def_value: 1007,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 676,
                                max_shield: "Max Shield",
                                shield_value: 337,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 1070,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 712,
                                max_shield: "Max Shield",
                                shield_value: 354,
                                max_mp: "Max MP",
                                mp_value: 230,
                                def: "DEF",
                                def_value: 1135,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 751,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 1201,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 786,
                                max_shield: "Max Shield",
                                shield_value: 392,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 1269,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 821,
                                max_shield: "Max Shield",
                                shield_value: 409,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 1340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 865,
                                max_shield: "Max Shield",
                                shield_value: 431,
                                max_mp: "Max MP",
                                mp_value: 247,
                                def: "DEF",
                                def_value: 1411,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 900,
                                max_shield: "Max Shield",
                                shield_value: 449,
                                max_mp: "Max MP",
                                mp_value: 253,
                                def: "DEF",
                                def_value: 1485,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 944,
                                max_shield: "Max Shield",
                                shield_value: 470,
                                max_mp: "Max MP",
                                mp_value: 259,
                                def: "DEF",
                                def_value: 1560,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 984,
                                max_shield: "Max Shield",
                                shield_value: 490,
                                max_mp: "Max MP",
                                mp_value: 265,
                                def: "DEF",
                                def_value: 1638,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1028,
                                max_shield: "Max Shield",
                                shield_value: 512,
                                max_mp: "Max MP",
                                mp_value: 271,
                                def: "DEF",
                                def_value: 1717,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1067,
                                max_shield: "Max Shield",
                                shield_value: 531,
                                max_mp: "Max MP",
                                mp_value: 276,
                                def: "DEF",
                                def_value: 1797,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1111,
                                max_shield: "Max Shield",
                                shield_value: 554,
                                max_mp: "Max MP",
                                mp_value: 282,
                                def: "DEF",
                                def_value: 1880,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1155,
                                max_shield: "Max Shield",
                                shield_value: 575,
                                max_mp: "Max MP",
                                mp_value: 288,
                                def: "DEF",
                                def_value: 1964,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1199,
                                max_shield: "Max Shield",
                                shield_value: 597,
                                max_mp: "Max MP",
                                mp_value: 294,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1243,
                                max_shield: "Max Shield",
                                shield_value: 619,
                                max_mp: "Max MP",
                                mp_value: 300,
                                def: "DEF",
                                def_value: 2139,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Stage Presence",
                        element_type: "Non-Attribute",
                        arche_type: "Tech",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9a059ccb808cf6ead53c7a6953fc38a5",
                        skill_description: "Equips a Unique Weapon. It will be unequipped when MP is fully depleted or all bullets have been fired.\nWhen the Unique Weapon is equipped, Notes activates, allowing the use of skills.\nNotes can be hit through shooting and skill use. If the skill button is not pressed at the right time, the skill will fail to activate.\nFailing to hit Notes through shooting significantly decreases MP.\nSuccessfully hitting Notes grants Perfect Pitch."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Exciting Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/54f998e70f2eac16673c711196b7495b",
                        skill_description: "Changes Notes.\nGrants Exciting Performance to self. Grants Exciting Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Relaxing Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/02545c61acc8adce6bd67297f2a0bfcc",
                        skill_description: "Changes Notes.\nGrants Relaxing Performance to self. Relaxing Performance recovers MP when hitting enemies while hitting Notes.\nGrants Relaxing Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cheerful Act",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/defefd81167f4fcc340de0e532af600c",
                        skill_description: "Changes Notes.\nGrants Cheerful Performance to self.\nCheerful Performance acquires Inspiration Gauge when hitting enemies while hitting Notes.\nGrants Cheerful Sound to allies within range.\nWhen using an Enhanced Skill, increases the effects further."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Improvisation",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/989b1ddb0f57aceb38c485d7b4e74f36",
                        skill_description: "When using a skill to hit the Note, Inspiration Gauge goes up. When the Inspiration Gauge maxes out, an Enhanced Skill can be used.\nUsing an Enhanced Skill, completely depletes Inspiration Gauge. However, when failing to hit the Note, Inspiration Gauge goes down and the skill fails to activate.\nWhile Out of Combat for a certain period of time, Inspiration Gauge is completely depleted."
                      },
                ]
        }
    },
    {
        id: "101000019",
        descendant_name: "Ultimate Bunny",
        slug: "ultimate-bunny",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/d4e6462f87513fe6652633620b7f8d19",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 98,
                                max_shield: "Max Shield",
                                shield_value: 51,
                                max_mp: "Max MP",
                                mp_value: 160,
                                def: "DEF",
                                def_value: 156,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 100,
                                max_shield: "Max Shield",
                                shield_value: 52,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 158,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 103,
                                max_shield: "Max Shield",
                                shield_value: 53,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 162,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 107,
                                max_shield: "Max Shield",
                                shield_value: 55,
                                max_mp: "Max MP",
                                mp_value: 164,
                                def: "DEF",
                                def_value: 168,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 112,
                                max_shield: "Max Shield",
                                shield_value: 58,
                                max_mp: "Max MP",
                                mp_value: 166,
                                def: "DEF",
                                def_value: 176,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 118,
                                max_shield: "Max Shield",
                                shield_value: 61,
                                max_mp: "Max MP",
                                mp_value: 167,
                                def: "DEF",
                                def_value: 186,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 126,
                                max_shield: "Max Shield",
                                shield_value: 64,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 198,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 135,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 170,
                                def: "DEF",
                                def_value: 211,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 145,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 172,
                                def: "DEF",
                                def_value: 226,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 155,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 166,
                                max_shield: "Max Shield",
                                shield_value: 82,
                                max_mp: "Max MP",
                                mp_value: 175,
                                def: "DEF",
                                def_value: 262,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 178,
                                max_shield: "Max Shield",
                                shield_value: 89,
                                max_mp: "Max MP",
                                mp_value: 177,
                                def: "DEF",
                                def_value: 295,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 95,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 327,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 209,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 361,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 224,
                                max_shield: "Max Shield",
                                shield_value: 111,
                                max_mp: "Max MP",
                                mp_value: 186,
                                def: "DEF",
                                def_value: 395,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 241,
                                max_shield: "Max Shield",
                                shield_value: 120,
                                max_mp: "Max MP",
                                mp_value: 189,
                                def: "DEF",
                                def_value: 432,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 128,
                                max_mp: "Max MP",
                                mp_value: 192,
                                def: "DEF",
                                def_value: 471,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 275,
                                max_shield: "Max Shield",
                                shield_value: 137,
                                max_mp: "Max MP",
                                mp_value: 195,
                                def: "DEF",
                                def_value: 511,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 295,
                                max_shield: "Max Shield",
                                shield_value: 146,
                                max_mp: "Max MP",
                                mp_value: 198,
                                def: "DEF",
                                def_value: 552,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 312,
                                max_shield: "Max Shield",
                                shield_value: 156,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 595,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332,
                                max_shield: "Max Shield",
                                shield_value: 165,
                                max_mp: "Max MP",
                                mp_value: 204,
                                def: "DEF",
                                def_value: 640,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 352,
                                max_shield: "Max Shield",
                                shield_value: 175,
                                max_mp: "Max MP",
                                mp_value: 208,
                                def: "DEF",
                                def_value: 685,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 372,
                                max_shield: "Max Shield",
                                shield_value: 186,
                                max_mp: "Max MP",
                                mp_value: 212,
                                def: "DEF",
                                def_value: 733,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 398,
                                max_shield: "Max Shield",
                                shield_value: 198,
                                max_mp: "Max MP",
                                mp_value: 217,
                                def: "DEF",
                                def_value: 783,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 418,
                                max_shield: "Max Shield",
                                shield_value: 208,
                                max_mp: "Max MP",
                                mp_value: 221,
                                def: "DEF",
                                def_value: 832,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 441,
                                max_shield: "Max Shield",
                                shield_value: 220,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 884,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 464,
                                max_shield: "Max Shield",
                                shield_value: 231,
                                max_mp: "Max MP",
                                mp_value: 230,
                                def: "DEF",
                                def_value: 937,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 490,
                                max_shield: "Max Shield",
                                shield_value: 244,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 993,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 513,
                                max_shield: "Max Shield",
                                shield_value: 255,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 1049,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 536,
                                max_shield: "Max Shield",
                                shield_value: 266,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 1107,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 564,
                                max_shield: "Max Shield",
                                shield_value: 281,
                                max_mp: "Max MP",
                                mp_value: 247,
                                def: "DEF",
                                def_value: 1166,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 587,
                                max_shield: "Max Shield",
                                shield_value: 292,
                                max_mp: "Max MP",
                                mp_value: 253,
                                def: "DEF",
                                def_value: 1227,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 616,
                                max_shield: "Max Shield",
                                shield_value: 307,
                                max_mp: "Max MP",
                                mp_value: 259,
                                def: "DEF",
                                def_value: 1288,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 641,
                                max_shield: "Max Shield",
                                shield_value: 320,
                                max_mp: "Max MP",
                                mp_value: 265,
                                def: "DEF",
                                def_value: 1353,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 670,
                                max_shield: "Max Shield",
                                shield_value: 333,
                                max_mp: "Max MP",
                                mp_value: 271,
                                def: "DEF",
                                def_value: 1418,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 696,
                                max_shield: "Max Shield",
                                shield_value: 346,
                                max_mp: "Max MP",
                                mp_value: 276,
                                def: "DEF",
                                def_value: 1484,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724,
                                max_shield: "Max Shield",
                                shield_value: 361,
                                max_mp: "Max MP",
                                mp_value: 282,
                                def: "DEF",
                                def_value: 1553,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 753,
                                max_shield: "Max Shield",
                                shield_value: 375,
                                max_mp: "Max MP",
                                mp_value: 288,
                                def: "DEF",
                                def_value: 1622,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 782,
                                max_shield: "Max Shield",
                                shield_value: 390,
                                max_mp: "Max MP",
                                mp_value: 294,
                                def: "DEF",
                                def_value: 1695,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 810,
                                max_shield: "Max Shield",
                                shield_value: 404,
                                max_mp: "Max MP",
                                mp_value: 300,
                                def: "DEF",
                                def_value: 1767,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Thrill Bomb",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1369c6b30f09730fb51a7412cd1e3b89",
                        skill_description: "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity.\nInflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Speed of Light",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/2ca6c74399943b2f66ad34e3e3954064",
                        skill_description: "Always moves by Sprinting, and increases Sprint Speed.\nGains Speed of Light. Speed of Light additionally gains Electricity while moving."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Lightning Emission",
                        element_type: "Electric",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1e243471ab2d7742a4165bb1ccf77bd6",
                        skill_description: "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity. Inflicts Electrocution on enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Maximum Power",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/9d80c8428e68872368be8bbe8c20c973",
                        skill_description: "Discharges electricity forward. Deals damage on enemies that come into contact with the electricity, with the damage increasing gradually based on the discharge time. Ends when Electricity runs out."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Rabbit Foot",
                        element_type: "Electric",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/aee94bd99cb91c6f6c8e2b57f4188a06",
                        skill_description: "Deals damage to nearby enemies upon landing after a Double Jump.\nGains Electricity proportional to the travel distance.\nIf there is no movement for a certain period, Electricity is gradually consumed."
                      },
                ]
        }
    },
    {
        id: "101000020",
        descendant_name: "Ultimate Gley",
        slug: "ultimate-gley",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/c4c10b88e178305521d044f5a969583d",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 202,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 232,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 207,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 250,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 213,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 280,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 221,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 313,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 230,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 349,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 240,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 385,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 256,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 424,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 270,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 464,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 290,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 508,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 315,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 556,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 339,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 608,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 697,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 391,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 774,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 426,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 854,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 455,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 938,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 490,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1025,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 525,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1116,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 560,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1211,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 601,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1309,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 636,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1410,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 677,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1516,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 718,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1624,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 758,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1736,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 811,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1852,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 852,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 1971,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 898,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2093,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 945,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2220,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 998,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2350,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1044,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2483,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1091,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2621,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1149,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2761,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1196,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 2905,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3053,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1307,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3204,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1365,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3359,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1417,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3516,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1476,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3678,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1534,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 3843,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1592,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 4012,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1651,
                                max_shield: "Max Shield",
                                shield_value: 0,
                                max_mp: "Max MP",
                                mp_value: 0,
                                def: "DEF",
                                def_value: 4185,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Frenzied",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/0b4964e22f573db0ea27ae3144db8392",
                        skill_description: "In Frenzied state. In Frenzied state, increases Firearm ATK and Penetration, but reduces HP Recovery."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Life Siphon",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/8294d74d2be622dee4efcbf7d3c610ba",
                        skill_description: "Deals damage to targets within range and recovers HP.\nHP Recovery amount increases based on the number of enemies hit.\nIn Frenzied state, deals increased DMG proportionally to HP.\nIn Non-Frenzied state, gains Vigor. Vigor stacks proportionally to the number of enemies hit."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Increased Sensory",
                        element_type: "Non-Attribute",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/929b096dd83d597a08012ba654115f3c",
                        skill_description: "When in Frenzied state, applies Maximize Lethality during which bullets are not consumed.\nWhen in Non-Frenzied state, applies Maximize Recovery during which Life Sphere generation is increased."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Massacre",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/964ec69b96e48abf197218908285b31e",
                        skill_description: "Equip a Unique Weapon. The number of bullets loaded is affected by the amount of Power of Life owned.\nWhen hitting an enemy with the Unique Weapon, deals damage and inflicts additional effects.\nIn Frenzied state, increases additional DMG proportionally to HP. \nIn Non-Frenzied state, inflicts Stun on enemies that are hit."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Thirst",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/482612f9a8d939224d805b5829221f79",
                        skill_description: "Cannot have Shield or MP.\nIn Non-Frenzied state, reduces Incoming DMG.\nDefeated enemies have a chance to drop Life Spheres which, upon contact, grant Power of Life.\nUpon acquiring Power of Life, recovers HP."
                      },
                ]
        }
    },
    {
        id: "101000021",
        descendant_name: "Hailey",
        slug: "hailey",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/3c82dcb5ee799c149a7034365a1bd698",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 108,
                                max_shield: "Max Shield",
                                shield_value: 63,
                                max_mp: "Max MP",
                                mp_value: 160,
                                def: "DEF",
                                def_value: 217,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 110,
                                max_shield: "Max Shield",
                                shield_value: 67,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 219,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.47
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 113,
                                max_shield: "Max Shield",
                                shield_value: 69,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 223,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.57,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.48
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 117,
                                max_shield: "Max Shield",
                                shield_value: 72,
                                max_mp: "Max MP",
                                mp_value: 164,
                                def: "DEF",
                                def_value: 229,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.59,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 124,
                                max_shield: "Max Shield",
                                shield_value: 77,
                                max_mp: "Max MP",
                                mp_value: 166,
                                def: "DEF",
                                def_value: 236,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.62,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.53
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 132,
                                max_shield: "Max Shield",
                                shield_value: 81,
                                max_mp: "Max MP",
                                mp_value: 167,
                                def: "DEF",
                                def_value: 246,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.66,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.56
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 141,
                                max_shield: "Max Shield",
                                shield_value: 86,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 261,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 151,
                                max_shield: "Max Shield",
                                shield_value: 92,
                                max_mp: "Max MP",
                                mp_value: 170,
                                def: "DEF",
                                def_value: 284,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.66
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 163,
                                max_shield: "Max Shield",
                                shield_value: 98,
                                max_mp: "Max MP",
                                mp_value: 172,
                                def: "DEF",
                                def_value: 309,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.84,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.71
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 179,
                                max_shield: "Max Shield",
                                shield_value: 104,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 339,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.92,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 192,
                                max_shield: "Max Shield",
                                shield_value: 111,
                                max_mp: "Max MP",
                                mp_value: 175,
                                def: "DEF",
                                def_value: 364,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.84
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 205,
                                max_shield: "Max Shield",
                                shield_value: 118,
                                max_mp: "Max MP",
                                mp_value: 177,
                                def: "DEF",
                                def_value: 406,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.06,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.89
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 222,
                                max_shield: "Max Shield",
                                shield_value: 127,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 452,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.15,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.97
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 242,
                                max_shield: "Max Shield",
                                shield_value: 139,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 498,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.05
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 258,
                                max_shield: "Max Shield",
                                shield_value: 148,
                                max_mp: "Max MP",
                                mp_value: 186,
                                def: "DEF",
                                def_value: 547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.13
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 278,
                                max_shield: "Max Shield",
                                shield_value: 160,
                                max_mp: "Max MP",
                                mp_value: 189,
                                def: "DEF",
                                def_value: 598,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.21
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 298,
                                max_shield: "Max Shield",
                                shield_value: 171,
                                max_mp: "Max MP",
                                mp_value: 192,
                                def: "DEF",
                                def_value: 651,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.3
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 318,
                                max_shield: "Max Shield",
                                shield_value: 182,
                                max_mp: "Max MP",
                                mp_value: 195,
                                def: "DEF",
                                def_value: 706,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.38
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 341,
                                max_shield: "Max Shield",
                                shield_value: 195,
                                max_mp: "Max MP",
                                mp_value: 198,
                                def: "DEF",
                                def_value: 763,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.78,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.49
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 361,
                                max_shield: "Max Shield",
                                shield_value: 207,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.87,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.57
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 384,
                                max_shield: "Max Shield",
                                shield_value: 220,
                                max_mp: "Max MP",
                                mp_value: 204,
                                def: "DEF",
                                def_value: 884,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.99,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.67
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 407,
                                max_shield: "Max Shield",
                                shield_value: 233,
                                max_mp: "Max MP",
                                mp_value: 208,
                                def: "DEF",
                                def_value: 947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.11,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.77
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 430,
                                max_shield: "Max Shield",
                                shield_value: 247,
                                max_mp: "Max MP",
                                mp_value: 212,
                                def: "DEF",
                                def_value: 1013,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.24,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 460,
                                max_shield: "Max Shield",
                                shield_value: 264,
                                max_mp: "Max MP",
                                mp_value: 217,
                                def: "DEF",
                                def_value: 1080,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.01
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 483,
                                max_shield: "Max Shield",
                                shield_value: 277,
                                max_mp: "Max MP",
                                mp_value: 221,
                                def: "DEF",
                                def_value: 1150,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.52,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.11
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 509,
                                max_shield: "Max Shield",
                                shield_value: 292,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 1221,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.22
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 536,
                                max_shield: "Max Shield",
                                shield_value: 307,
                                max_mp: "Max MP",
                                mp_value: 230,
                                def: "DEF",
                                def_value: 1295,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.8,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.34
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 565,
                                max_shield: "Max Shield",
                                shield_value: 324,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 1371,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.95,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.47
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 592,
                                max_shield: "Max Shield",
                                shield_value: 340,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 1448,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.58
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 618,
                                max_shield: "Max Shield",
                                shield_value: 355,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 1529,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.23,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.7
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 651,
                                max_shield: "Max Shield",
                                shield_value: 374,
                                max_mp: "Max MP",
                                mp_value: 247,
                                def: "DEF",
                                def_value: 1611,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 678,
                                max_shield: "Max Shield",
                                shield_value: 389,
                                max_mp: "Max MP",
                                mp_value: 253,
                                def: "DEF",
                                def_value: 1695,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.96
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 711,
                                max_shield: "Max Shield",
                                shield_value: 408,
                                max_mp: "Max MP",
                                mp_value: 259,
                                def: "DEF",
                                def_value: 1781,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.71,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.1
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 740,
                                max_shield: "Max Shield",
                                shield_value: 425,
                                max_mp: "Max MP",
                                mp_value: 265,
                                def: "DEF",
                                def_value: 1869,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.23
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 773,
                                max_shield: "Max Shield",
                                shield_value: 444,
                                max_mp: "Max MP",
                                mp_value: 271,
                                def: "DEF",
                                def_value: 1959,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.38
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803,
                                max_shield: "Max Shield",
                                shield_value: 461,
                                max_mp: "Max MP",
                                mp_value: 276,
                                def: "DEF",
                                def_value: 2051,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.2,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.51
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 836,
                                max_shield: "Max Shield",
                                shield_value: 480,
                                max_mp: "Max MP",
                                mp_value: 282,
                                def: "DEF",
                                def_value: 2146,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.37,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.65
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 869,
                                max_shield: "Max Shield",
                                shield_value: 499,
                                max_mp: "Max MP",
                                mp_value: 288,
                                def: "DEF",
                                def_value: 2242,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.79
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 902,
                                max_shield: "Max Shield",
                                shield_value: 518,
                                max_mp: "Max MP",
                                mp_value: 294,
                                def: "DEF",
                                def_value: 2340,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.72,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.94
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 935,
                                max_shield: "Max Shield",
                                shield_value: 537,
                                max_mp: "Max MP",
                                mp_value: 300,
                                def: "DEF",
                                def_value: 2441,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 4.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 4.08
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Cryo Round",
                        element_type: "Chill",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/ff90d184329138b74c4dad22f7cab5f2",
                        skill_description: "Fires a Cryo Round at enemies in front to deal damage and inflict Cryo.\nTargets with Cryo stacks receive additional damage and lose 1 stack when hit by Hailey's firearm attack."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Storm Snare",
                        element_type: "Chill",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/396819308b1405672804f97476e8c829",
                        skill_description: "Unleashes a Chill Vortex around her, knocking back hit targets and firing a massive Freezing Beam in the direction of the crosshairs. Inflicts Cryo on targets hit based on Enemy AoE."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Cold Fury",
                        element_type: "Chill",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/907f384615c02d48e3fc209aa6f3b347",
                        skill_description: "Grants Hailey Cold Fury every second. The Cold Fury effect gradually decreases her Movement Speed, but greatly increases her Firearm and Skill Critical Hit Rates and Firearm Penetration.\nWhen Cold Fury reaches maximum stacks, Hailey becomes immune to Knockdown and gains an increase to her Firearm and Skill Critical Hit Damage. However, when using Roll or Grappling Hook, the stacks decrease."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Zenith",
                        element_type: "Chill",
                        arche_type: "Singular",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/33977320c085a4833221d99cf87a1324",
                        skill_description: "Equips her Unique Weapon\n. When hitting an enemy with the Unique Weapon, greatly increases Penetration and Firearm ATK and deals additional Chill skill damage.\nRecovers a portion of MP upon successfully attacking Weak Points.\nPartially decreases the Cooldown of the Unique Weapon skill when the skill ends depending on the number of fired bullets."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Safe Strategic Retreat",
                        element_type: "Chill",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/887fe7e474e6f978ffafbc8834e79c99",
                        skill_description: "Proportional to the distance between the target and Hailey, the Weak Point Damage decreases the closer it is to the target and increases the further it is."
                      },
                ]
        }
    },
    {
        id: "101000022",
        descendant_name: "Ultimate Valby",
        slug: "ultimate-valby",
        descendant_img: "https://open.api.nexon.com/static/tfd/img/8ae81e3d05a981d5da24c26c09106330",
        levels: {
            create: [
                {
                    level: 1,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 187,
                                max_shield: "Max Shield",
                                shield_value: 72,
                                max_mp: "Max MP",
                                mp_value: 130,
                                def: "DEF",
                                def_value: 193,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38,
                            }
                        ]
                    }
                },
                {
                    level: 2,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 189,
                                max_shield: "Max Shield",
                                shield_value: 73,
                                max_mp: "Max MP",
                                mp_value: 131,
                                def: "DEF",
                                def_value: 194,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38,
                            }
                        ]
                    }
                },
                {
                    level: 3,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 193,
                                max_shield: "Max Shield",
                                shield_value: 76,
                                max_mp: "Max MP",
                                mp_value: 132,
                                def: "DEF",
                                def_value: 198,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.46,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.38,
                            }
                        ]
                    }
                },
                {
                    level: 4,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 198,
                                max_shield: "Max Shield",
                                shield_value: 79,
                                max_mp: "Max MP",
                                mp_value: 134,
                                def: "DEF",
                                def_value: 203,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.48,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.4,
                            }
                        ]
                    }
                },
                {
                    level: 5,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 204,
                                max_shield: "Max Shield",
                                shield_value: 83,
                                max_mp: "Max MP",
                                mp_value: 135,
                                def: "DEF",
                                def_value: 210,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.44
                            }
                        ]
                    }
                },
                {
                    level: 6,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 212,
                                max_shield: "Max Shield",
                                shield_value: 88,
                                max_mp: "Max MP",
                                mp_value: 136,
                                def: "DEF",
                                def_value: 218,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.55,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.46
                            }
                        ]
                    }
                },
                {
                    level: 7,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 220,
                                max_shield: "Max Shield",
                                shield_value: 94,
                                max_mp: "Max MP",
                                mp_value: 137,
                                def: "DEF",
                                def_value: 228,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.6,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.5
                            }
                        ]
                    }
                },
                {
                    level: 8,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 231,
                                max_shield: "Max Shield",
                                shield_value: 101,
                                max_mp: "Max MP",
                                mp_value: 138,
                                def: "DEF",
                                def_value: 243,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.65,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.54
                            }
                        ]
                    }
                },
                {
                    level: 9,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 246,
                                max_shield: "Max Shield",
                                shield_value: 109,
                                max_mp: "Max MP",
                                mp_value: 139,
                                def: "DEF",
                                def_value: 263,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.7,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.58
                            }
                        ]
                    }
                },
                {
                    level: 10,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 268,
                                max_shield: "Max Shield",
                                shield_value: 117,
                                max_mp: "Max MP",
                                mp_value: 141,
                                def: "DEF",
                                def_value: 288,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.74,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.62
                            }
                        ]
                    }
                },
                {
                    level: 11,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 288,
                                max_shield: "Max Shield",
                                shield_value: 128,
                                max_mp: "Max MP",
                                mp_value: 142,
                                def: "DEF",
                                def_value: 318,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.68
                            }
                        ]
                    }
                },
                {
                    level: 12,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 308,
                                max_shield: "Max Shield",
                                shield_value: 147,
                                max_mp: "Max MP",
                                mp_value: 144,
                                def: "DEF",
                                def_value: 353,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.86,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.72
                            }
                        ]
                    }
                },
                {
                    level: 13,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 332,
                                max_shield: "Max Shield",
                                shield_value: 159,
                                max_mp: "Max MP",
                                mp_value: 147,
                                def: "DEF",
                                def_value: 392,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 0.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.78
                            }
                        ]
                    }
                },
                {
                    level: 14,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 362,
                                max_shield: "Max Shield",
                                shield_value: 173,
                                max_mp: "Max MP",
                                mp_value: 149,
                                def: "DEF",
                                def_value: 433,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.03,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.86
                            }
                        ]
                    }
                },
                {
                    level: 15,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 387,
                                max_shield: "Max Shield",
                                shield_value: 185,
                                max_mp: "Max MP",
                                mp_value: 151,
                                def: "DEF",
                                def_value: 475,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.08,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.9
                            }
                        ]
                    }
                },
                {
                    level: 16,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 417,
                                max_shield: "Max Shield",
                                shield_value: 199,
                                max_mp: "Max MP",
                                mp_value: 154,
                                def: "DEF",
                                def_value: 519,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.18,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 0.98
                            }
                        ]
                    }
                },
                {
                    level: 17,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 446,
                                max_shield: "Max Shield",
                                shield_value: 214,
                                max_mp: "Max MP",
                                mp_value: 156,
                                def: "DEF",
                                def_value: 565,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.25,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.04
                            }
                        ]
                    }
                },
                {
                    level: 18,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 476,
                                max_shield: "Max Shield",
                                shield_value: 228,
                                max_mp: "Max MP",
                                mp_value: 158,
                                def: "DEF",
                                def_value: 613,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.34,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.12
                            }
                        ]
                    }
                },
                {
                    level: 19,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 511,
                                max_shield: "Max Shield",
                                shield_value: 244,
                                max_mp: "Max MP",
                                mp_value: 161,
                                def: "DEF",
                                def_value: 663,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.44,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.2
                            }
                        ]
                    }
                },
                {
                    level: 20,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 540,
                                max_shield: "Max Shield",
                                shield_value: 259,
                                max_mp: "Max MP",
                                mp_value: 163,
                                def: "DEF",
                                def_value: 715,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.54,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.28
                            }
                        ]
                    }
                },
                {
                    level: 21,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 575,
                                max_shield: "Max Shield",
                                shield_value: 275,
                                max_mp: "Max MP",
                                mp_value: 165,
                                def: "DEF",
                                def_value: 768,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.63,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.36
                            }
                        ]
                    }
                },
                {
                    level: 22,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 610,
                                max_shield: "Max Shield",
                                shield_value: 292,
                                max_mp: "Max MP",
                                mp_value: 169,
                                def: "DEF",
                                def_value: 823,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.73,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.44
                            }
                        ]
                    }
                },
                {
                    level: 23,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 644,
                                max_shield: "Max Shield",
                                shield_value: 309,
                                max_mp: "Max MP",
                                mp_value: 173,
                                def: "DEF",
                                def_value: 880,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.52
                            }
                        ]
                    }
                },
                {
                    level: 24,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 689,
                                max_shield: "Max Shield",
                                shield_value: 330,
                                max_mp: "Max MP",
                                mp_value: 176,
                                def: "DEF",
                                def_value: 938,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 1.94,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.62
                            }
                        ]
                    }
                },
                {
                    level: 25,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 724,
                                max_shield: "Max Shield",
                                shield_value: 346,
                                max_mp: "Max MP",
                                mp_value: 180,
                                def: "DEF",
                                def_value: 999,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.04,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.7
                            }
                        ]
                    }
                },
                {
                    level: 26,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 763,
                                max_shield: "Max Shield",
                                shield_value: 365,
                                max_mp: "Max MP",
                                mp_value: 183,
                                def: "DEF",
                                def_value: 1061,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.16,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.8
                            }
                        ]
                    }
                },
                {
                    level: 27,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 803,
                                max_shield: "Max Shield",
                                shield_value: 384,
                                max_mp: "Max MP",
                                mp_value: 187,
                                def: "DEF",
                                def_value: 1125,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 1.88
                            }
                        ]
                    }
                },
                {
                    level: 28,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 847,
                                max_shield: "Max Shield",
                                shield_value: 405,
                                max_mp: "Max MP",
                                mp_value: 190,
                                def: "DEF",
                                def_value: 1191,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.4,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2
                            }
                        ]
                    }
                },
                {
                    level: 29,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 887,
                                max_shield: "Max Shield",
                                shield_value: 424,
                                max_mp: "Max MP",
                                mp_value: 194,
                                def: "DEF",
                                def_value: 1258,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.5,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.08
                            }
                        ]
                    }
                },
                {
                    level: 30,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 927,
                                max_shield: "Max Shield",
                                shield_value: 443,
                                max_mp: "Max MP",
                                mp_value: 197,
                                def: "DEF",
                                def_value: 1328,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.64,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.2
                            }
                        ]
                    }
                },
                {
                    level: 31,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 976,
                                max_shield: "Max Shield",
                                shield_value: 467,
                                max_mp: "Max MP",
                                mp_value: 201,
                                def: "DEF",
                                def_value: 1399,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.76,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.3
                            }
                        ]
                    }
                },
                {
                    level: 32,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1016,
                                max_shield: "Max Shield",
                                shield_value: 486,
                                max_mp: "Max MP",
                                mp_value: 206,
                                def: "DEF",
                                def_value: 1472,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 2.88,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.4
                            }
                        ]
                    }
                },
                {
                    level: 33,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1065,
                                max_shield: "Max Shield",
                                shield_value: 509,
                                max_mp: "Max MP",
                                mp_value: 210,
                                def: "DEF",
                                def_value: 1547,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.5
                            }
                        ]
                    }
                },
                {
                    level: 34,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1110,
                                max_shield: "Max Shield",
                                shield_value: 531,
                                max_mp: "Max MP",
                                mp_value: 215,
                                def: "DEF",
                                def_value: 1623,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.14,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.62
                            }
                        ]
                    }
                },
                {
                    level: 35,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1159,
                                max_shield: "Max Shield",
                                shield_value: 555,
                                max_mp: "Max MP",
                                mp_value: 220,
                                def: "DEF",
                                def_value: 1702,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.26,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.72
                            }
                        ]
                    }
                },
                {
                    level: 36,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1204,
                                max_shield: "Max Shield",
                                shield_value: 576,
                                max_mp: "Max MP",
                                mp_value: 225,
                                def: "DEF",
                                def_value: 1782,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.41,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.84
                            }
                        ]
                    }
                },
                {
                    level: 37,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1254,
                                max_shield: "Max Shield",
                                shield_value: 600,
                                max_mp: "Max MP",
                                mp_value: 229,
                                def: "DEF",
                                def_value: 1864,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.53,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 2.94
                            }
                        ]
                    }
                },
                {
                    level: 38,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1303,
                                max_shield: "Max Shield",
                                shield_value: 623,
                                max_mp: "Max MP",
                                mp_value: 234,
                                def: "DEF",
                                def_value: 1947,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.67,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.06
                            }
                        ]
                    }
                },
                {
                    level: 39,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1353,
                                max_shield: "Max Shield",
                                shield_value: 647,
                                max_mp: "Max MP",
                                mp_value: 239,
                                def: "DEF",
                                def_value: 2033,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.82,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.18
                            }
                        ]
                    }
                },
                {
                    level: 40,
                    stats: {
                        create: [
                            {
                                max_hp: "Max HP",
                                hp_value: 1402,
                                max_shield: "Max Shield",
                                shield_value: 671,
                                max_mp: "Max MP",
                                mp_value: 243,
                                def: "DEF",
                                def_value: 2120,
                                shield_recovery_out_of_combat: "Shield Recovery Out of Combat",
                                out_of_combat_value: 3.96,
                                shield_recovery_in_combat: "Shield Recovery In Combat",
                                in_combat_value: 3.3
                            }
                        ]
                    }
                },
            ]
        },
        skills: {
                create: [
                    {
                        skill_type: "Active Skill",
                        skill_name: "Bubble Bullet",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/596c004a6a05fed50bd9b3f16f14130e",
                        skill_description: "Fires a bouncing Bubble Bullet. Where the Bubble Bullet impacts, it creates a Small Puddle at the point of collision.\nEnemies who touch the Small Puddle take continuous damage and are inflicted with Laundry.\nThe Bubble Bullet explodes upon hitting an enemy or after bouncing a maximum number of times, dealing Burst Damage on nearby enemies.\nBurst Damage increases with the number of times Bubble Bullet bounces."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Plop Plop",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/e319ee39cc0df095293754a0d71bd9ad",
                        skill_description: "Forms a Big Puddle at a designated location.\nEmerges from the Big Puddle and inflicts Knockdown on nearby enemies.\nEnemies standing in the Big Puddle receive continuous DMG and are inflicted with Laundry. The skill's cooldown decreases proportionally to the number of enemies inflicted with Knockdown."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Clean Up",
                        element_type: "Non-Attribute",
                        arche_type: "Dimension",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/fd05e8439ed1c7f7ed0c5c08ec71cc7c",
                        skill_description: "Activates Liquefied state. While Liquefied, does not collide with enemies and creates a Waterway on the ground.\nEnemies standing in the Waterway take continuous damage and are inflicted with Laundry.\nIn the Liquefied state, cannot jump or use skills."
                      },
                      {
                        skill_type: "Active Skill",
                        skill_name: "Laundry Bomb",
                        element_type: "Non-Attribute",
                        arche_type: "Fusion",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/1bc291ff04ace2dbcaeddbcd838e6906",
                        skill_description: "Equip a Unique Weapon. It will be unequipped when the duration ends or all bullets have been used. The projectile impact of the Unique Weapon creates a Laundry Bomb, dealing continuous damage and inflicting Towed on nearby enemies with Laundry.\nContinuous damage increases based on the number of enemies with Laundry."
                      },
                      {
                        skill_type: "Passive Skill",
                        skill_name: "Water Intake",
                        element_type: "Non-Attribute",
                        arche_type: "null",
                        skill_image: "https://open.api.nexon.com/static/tfd/img/afbf18ccbece2adedfa02161d0480d07",
                        skill_description: "When using skills while on water, MP cost decreases.\nPuddles created by skills are also considered to be water."
                      },
                ]
        }
    }
]

async function main() {
    console.log(`Start seeding...`);

    for (const descendants of descendantList) {
        const newDescendants = await prisma.descendants.create({
            data: descendants,
        });
        console.log(`Created descendants with id: ${newDescendants.id}`);
    }
    console.log(`Seeding finished.`);
}


main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    })
