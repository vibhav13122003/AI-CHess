export interface EcoTrieNode {
  $?: { id: number; eco: string; name: string };
  [uciMove: string]:
    | EcoTrieNode
    | { id: number; eco: string; name: string }
    | undefined;
}

export const ecoOpeningTrie = {
  b2b4: {
    $: { id: 1, eco: "A00", name: "Polish" },
    g8h6: { $: { id: 2, eco: "A00", name: "Polish: Tuebingen variation" } },
    c7c6: { $: { id: 3, eco: "A00", name: "Polish: Outflank variation" } },
  },
  g2g3: {
    $: { id: 4, eco: "A00", name: "Benko's opening" },
    h7h5: {
      $: { id: 5, eco: "A00", name: "Benko's opening: Lasker simul special" },
    },
    e7e5: {
      g1f3: {
        $: { id: 6, eco: "A00", name: "Benko's opening: reversed Alekhine" },
      },
    },
  },
  g2g4: {
    $: { id: 7, eco: "A00", name: "Grob" },
    d7d5: {
      f1g2: {
        c7c6: {
          g4g5: { $: { id: 8, eco: "A00", name: "Grob: spike attack" } },
        },
        c8g4: {
          c2c4: {
            $: { id: 9, eco: "A00", name: "Grob: Fritz gambit" },
            d5d4: {
              $: { id: 10, eco: "A00", name: "Grob: Romford counter-gambit" },
            },
          },
        },
      },
    },
  },
  h2h3: {
    $: { id: 11, eco: "A00", name: "Clemenz" },
    e7e5: { a2a3: { $: { id: 12, eco: "A00", name: "Clemenz: Global" } } },
  },
  g1h3: {
    $: { id: 13, eco: "A00", name: "Amar" },
    d7d5: {
      g2g3: {
        e7e5: {
          f2f4: {
            c8h3: {
              f1h3: {
                e5f4: { $: { id: 14, eco: "A00", name: "Amar: Amar gambit" } },
              },
            },
          },
        },
      },
    },
  },
  b1c3: {
    $: { id: 15, eco: "A00", name: "Dunst" },
    e7e5: {
      $: { id: 16, eco: "A00", name: "Dunst: 1...e5" },
      a2a3: { $: { id: 17, eco: "A00", name: "Dunst: Battambang" } },
    },
    c7c5: {
      d2d4: {
        c5d4: {
          d1d4: {
            b8c6: {
              d4h4: { $: { id: 18, eco: "A00", name: "Dunst: Novosibirsk" } },
            },
          },
        },
      },
    },
  },
  a2a3: { $: { id: 19, eco: "A00", name: "Anderssen" } },
  a2a4: {
    $: { id: 20, eco: "A00", name: "Ware" },
    e7e5: { h2h4: { $: { id: 21, eco: "A00", name: "Ware: Crab" } } },
  },
  c2c3: { $: { id: 22, eco: "A00", name: "Saragossa" } },
  d2d3: {
    $: { id: 23, eco: "A00", name: "Mieses" },
    e7e5: {
      $: { id: 24, eco: "A00", name: "Mieses: 1... e5" },
      b1d2: { $: { id: 25, eco: "A00", name: "Mieses: Valencia" } },
    },
    c7c5: {
      b1c3: {
        b8c6: {
          g2g3: { $: { id: 26, eco: "A00", name: "Mieses: Venezolana" } },
        },
      },
    },
  },
  e2e3: {
    $: { id: 27, eco: "A00", name: "Van't Kruijs" },
    e7e5: {
      c2c4: {
        d7d6: {
          b1c3: {
            b8c6: {
              b2b3: {
                g8f6: {
                  $: {
                    id: 28,
                    eco: "A00",
                    name: "Van't Kruijs: Amsterdam attack",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  f2f3: {
    $: { id: 29, eco: "A00", name: "Barnes" },
    e7e5: {
      e1f2: {
        $: {
          id: 30,
          eco: "A00",
          name: "Barnes: Hammerschlag (Fried fox/Pork chop opening)",
        },
      },
    },
  },
  h2h4: { $: { id: 31, eco: "A00", name: "Desprez" } },
  b1a3: { $: { id: 32, eco: "A00", name: "Durkin" } },
  b2b3: {
    $: { id: 33, eco: "A01", name: "Larsen" },
    e7e5: { $: { id: 34, eco: "A01", name: "Larsen: modern variation" } },
    g8f6: { $: { id: 35, eco: "A01", name: "Larsen: Indian variation" } },
    d7d5: { $: { id: 36, eco: "A01", name: "Larsen: classical variation" } },
    c7c5: { $: { id: 37, eco: "A01", name: "Larsen: English variation" } },
    f7f5: { $: { id: 38, eco: "A01", name: "Larsen: Dutch variation" } },
    b7b5: { $: { id: 39, eco: "A01", name: "Larsen: Polish variation" } },
    b7b6: { $: { id: 40, eco: "A01", name: "Larsen: symmetrical variation" } },
  },
  f2f4: {
    $: { id: 41, eco: "A02", name: "Bird" },
    e7e5: {
      $: { id: 42, eco: "A02", name: "Bird: From gambit" },
      f4e5: {
        d7d6: {
          e5d6: {
            f8d6: {
              g1f3: {
                g7g5: {
                  $: {
                    id: 43,
                    eco: "A02",
                    name: "Bird: From gambit, Lasker variation",
                  },
                },
                g8h6: {
                  d2d4: {
                    $: {
                      id: 44,
                      eco: "A02",
                      name: "Bird: From gambit, Lipke variation",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    f7f5: {
      e2e4: {
        f5e4: {
          b1c3: {
            g8f6: {
              g2g4: { $: { id: 45, eco: "A02", name: "Bird: Swiss gambit" } },
            },
          },
        },
      },
    },
    g7g5: { $: { id: 46, eco: "A02", name: "Bird: Hobbs gambit" } },
    d7d5: {
      $: { id: 47, eco: "A03", name: "Bird" },
      c2c4: { $: { id: 48, eco: "A03", name: "Bird: Mujannah" } },
      e2e4: { $: { id: 49, eco: "A03", name: "Bird: Williams gambit" } },
      g1f3: {
        g8f6: {
          e2e3: {
            c7c5: { $: { id: 50, eco: "A03", name: "Bird: Lasker variation" } },
          },
        },
      },
    },
  },
  g1f3: {
    $: { id: 51, eco: "A04", name: "Zukertort" },
    f7f5: {
      $: { id: 52, eco: "A04", name: "Zukertort: Tartakower" },
      e2e4: {
        $: { id: 53, eco: "A04", name: "Zukertort: Pirc-Lisitsin gambit" },
      },
      d2d3: {
        g8f6: {
          e2e4: {
            $: {
              id: 54,
              eco: "A04",
              name: "Zukertort: Lisitsin gambit deferred",
            },
          },
        },
      },
    },
    d7d6: {
      $: { id: 55, eco: "A04", name: "Zukertort: Spielmann" },
      e2e4: {
        c8g4: { $: { id: 56, eco: "A04", name: "Zukertort: Wade defence" } },
      },
    },
    g7g5: { $: { id: 57, eco: "A04", name: "Zukertort: Herrstroem gambit" } },
    g8f6: {
      $: { id: 58, eco: "A05", name: "Zukertort: Burn" },
      g2g3: {
        b7b5: {
          $: {
            id: 59,
            eco: "A05",
            name: "Zukertort: King's Indian attack, Spassky's variation",
          },
        },
        g7g6: {
          $: { id: 60, eco: "A05", name: "Zukertort: King's Indian attack" },
          b2b4: {
            $: {
              id: 61,
              eco: "A05",
              name: "Zukertort: King's Indian attack, Reti-Smyslov variation",
            },
          },
        },
      },
    },
    d7d5: {
      $: { id: 62, eco: "A06", name: "Zukertort: Winawer" },
      d2d3: { $: { id: 63, eco: "A06", name: "Zukertort: old Indian attack" } },
      b2b4: {
        $: { id: 64, eco: "A06", name: "Zukertort: Santasiere's folly" },
      },
      e2e4: {
        $: {
          id: 65,
          eco: "A06",
          name: "Zukertort: Tennison (Lemberg, Zukertort) gambit",
        },
      },
      b2b3: {
        $: { id: 66, eco: "A06", name: "Zukertort: Nimzovich-Larsen attack" },
      },
      g2g3: {
        $: {
          id: 67,
          eco: "A07",
          name: "Zukertort: King's Indian attack (Barcza system)",
        },
        g8f6: {
          f1g2: {
            c7c6: {
              e1g1: {
                c8g4: {
                  $: {
                    id: 68,
                    eco: "A07",
                    name: "Zukertort: King's Indian attack, Yugoslav variation",
                  },
                },
              },
            },
          },
        },
        c8g4: {
          f1g2: {
            b8d7: {
              $: {
                id: 69,
                eco: "A07",
                name: "Zukertort: King's Indian attack, Keres variation",
              },
            },
          },
        },
        g7g6: {
          $: { id: 70, eco: "A07", name: "Zukertort: King's Indian attack" },
          f1g2: {
            f8g7: {
              e1g1: {
                e7e5: {
                  d2d3: {
                    g8e7: {
                      $: {
                        id: 71,
                        eco: "A07",
                        name: "Zukertort: King's Indian attack, Pachman system",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        c7c5: {
          $: {
            id: 72,
            eco: "A07",
            name: "Zukertort: King's Indian attack (with ...c5)",
          },
          f1g2: {
            $: { id: 73, eco: "A08", name: "Zukertort: King's Indian attack" },
            b8c6: {
              e1g1: {
                e7e6: {
                  d2d3: {
                    g8f6: {
                      b1d2: {
                        f8e7: {
                          e2e4: {
                            e8g8: {
                              f1e1: {
                                $: {
                                  id: 74,
                                  eco: "A08",
                                  name: "Zukertort: King's Indian attack, French",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      c2c4: {
        $: { id: 75, eco: "A09", name: "Reti" },
        d5d4: { $: { id: 76, eco: "A09", name: "Reti: advance" } },
        d5c4: {
          $: { id: 77, eco: "A09", name: "Reti: Reti accepted" },
          e2e3: {
            c8e6: { $: { id: 78, eco: "A09", name: "Reti: Keres variation" } },
          },
        },
      },
    },
  },
  c2c4: {
    $: { id: 79, eco: "A10", name: "English" },
    g7g6: {
      $: { id: 80, eco: "A10", name: "English: Great Snake" },
      e2e4: {
        e7e5: { $: { id: 81, eco: "A10", name: "English: Adorjan defence" } },
      },
    },
    b7b5: { $: { id: 82, eco: "A10", name: "English: Jaenisch gambit" } },
    f7f5: { $: { id: 83, eco: "A10", name: "English: Anglo-Dutch defense" } },
    c7c6: {
      $: { id: 84, eco: "A11", name: "English: Caro-Kann defensive system" },
      g1f3: {
        d7d5: {
          b2b3: {
            $: {
              id: 85,
              eco: "A12",
              name: "English: Caro-Kann defensive system",
            },
            g8f6: {
              g2g3: {
                c8g4: {
                  $: {
                    id: 86,
                    eco: "A12",
                    name: "English: Torre defensive system",
                  },
                },
                c8f5: {
                  $: {
                    id: 87,
                    eco: "A12",
                    name: "English: London defensive system",
                  },
                },
              },
              c1b2: {
                $: {
                  id: 88,
                  eco: "A12",
                  name: "English: Caro-Kann defensive system",
                },
                g7g6: {
                  $: { id: 89, eco: "A12", name: "English: Bled variation" },
                },
                c8f5: {
                  $: {
                    id: 90,
                    eco: "A12",
                    name: "English: New York (London) defensive system",
                  },
                },
                c8g4: {
                  $: {
                    id: 91,
                    eco: "A12",
                    name: "English: Capablanca's variation",
                  },
                },
              },
            },
            c8g4: {
              $: {
                id: 92,
                eco: "A12",
                name: "English: Caro-Kann defensive system, Bogolyubov variation",
              },
            },
          },
        },
      },
    },
    e7e6: {
      $: { id: 93, eco: "A13", name: "English" },
      g1f3: {
        g8f6: {
          g2g3: {
            a7a6: {
              f1g2: {
                b7b5: {
                  $: { id: 94, eco: "A13", name: "English: Romanishin gambit" },
                },
              },
            },
          },
        },
        d7d5: {
          $: { id: 95, eco: "A13", name: "English: Agincourt variation" },
          b2b3: {
            g8f6: {
              c1b2: {
                c7c5: {
                  e2e3: {
                    $: { id: 96, eco: "A13", name: "English: Wimpey system" },
                  },
                },
              },
            },
          },
          g2g3: {
            $: { id: 97, eco: "A13", name: "English: Agincourt variation" },
            c7c6: {
              $: { id: 98, eco: "A13", name: "English: Kurajica defence" },
            },
            g8f6: {
              $: { id: 99, eco: "A13", name: "English: Neo-Catalan" },
              f1g2: {
                d5c4: {
                  $: {
                    id: 100,
                    eco: "A13",
                    name: "English: Neo-Catalan accepted",
                  },
                },
                f8e7: {
                  e1g1: {
                    $: {
                      id: 101,
                      eco: "A14",
                      name: "English: Neo-Catalan declined",
                    },
                    c7c5: {
                      c4d5: {
                        f6d5: {
                          b1c3: {
                            b8c6: {
                              $: {
                                id: 102,
                                eco: "A14",
                                name: "English: Symmetrical, Keres defence",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    g8f6: {
      $: { id: 103, eco: "A15", name: "English: Anglo-Indian" },
      b2b4: { $: { id: 104, eco: "A15", name: "English: Sokolsky" } },
      g1f3: { $: { id: 105, eco: "A15", name: "English" } },
      b1c3: {
        $: { id: 106, eco: "A16", name: "English" },
        d7d5: {
          $: { id: 107, eco: "A16", name: "English: Anglo-Gruenfeld defense" },
          c4d5: {
            f6d5: {
              g2g3: {
                g7g6: {
                  f1g2: {
                    d5c3: {
                      $: {
                        id: 108,
                        eco: "A16",
                        name: "English: Anglo-Gruenfeld, Smyslov defense",
                      },
                    },
                    d5b6: {
                      $: {
                        id: 109,
                        eco: "A16",
                        name: "English: Anglo-Gruenfeld, Czech defense",
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 110,
                  eco: "A16",
                  name: "English: Anglo-Gruenfeld defense",
                },
                g7g6: {
                  g2g3: {
                    f8g7: {
                      f1g2: {
                        e7e5: {
                          $: {
                            id: 111,
                            eco: "A16",
                            name: "English: Anglo-Gruenfeld defense, Korchnoi variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        e7e6: {
          $: { id: 112, eco: "A17", name: "English" },
          g1f3: {
            b7b6: {
              $: {
                id: 113,
                eco: "A17",
                name: "English: Queens Indian formation",
              },
              e2e4: {
                c8b7: {
                  f1d3: {
                    $: {
                      id: 114,
                      eco: "A17",
                      name: "English: Queens Indian, Romanishin variation",
                    },
                  },
                },
              },
            },
            f8b4: {
              $: {
                id: 115,
                eco: "A17",
                name: "English: Nimzo-English opening",
              },
            },
          },
          e2e4: {
            $: {
              id: 116,
              eco: "A18",
              name: "English: Mikenas-Carls variation",
            },
            d7d5: {
              e4e5: {
                $: {
                  id: 117,
                  eco: "A18",
                  name: "English: Mikenas-Carls, Flohr variation",
                },
              },
            },
            b8c6: {
              $: {
                id: 118,
                eco: "A18",
                name: "English: Mikenas-Carls, Kevitz variation",
              },
            },
            c7c5: {
              $: {
                id: 119,
                eco: "A19",
                name: "English: Mikenas-Carls, Sicilian variation",
              },
            },
          },
        },
      },
    },
    e7e5: {
      $: { id: 120, eco: "A20", name: "English" },
      g1f3: {
        $: { id: 121, eco: "A20", name: "English: Nimzovich" },
        e5e4: { $: { id: 122, eco: "A20", name: "English: Nimzovich, Flohr" } },
      },
      b1c3: {
        $: { id: 123, eco: "A21", name: "English" },
        d7d6: {
          g2g3: {
            c8e6: {
              f1g2: {
                b8c6: { $: { id: 124, eco: "A21", name: "English: Troeger" } },
              },
            },
            c7c6: {
              $: { id: 125, eco: "A21", name: "English: Keres variation" },
            },
          },
          g1f3: {
            $: { id: 126, eco: "A21", name: "English" },
            c8g4: { $: { id: 127, eco: "A21", name: "English: Smyslov" } },
          },
        },
        f8b4: {
          $: {
            id: 128,
            eco: "A21",
            name: "English: Kramnik-Shirov counterattack",
          },
        },
        g8f6: {
          $: { id: 129, eco: "A22", name: "English" },
          g1f3: {
            e5e4: {
              f3g5: {
                b7b5: {
                  $: { id: 130, eco: "A22", name: "English: Bellon gambit" },
                },
              },
            },
          },
          g2g3: {
            $: { id: 131, eco: "A22", name: "English: Carls' Bremen system" },
            d7d5: {
              $: {
                id: 132,
                eco: "A22",
                name: "English: Bremen, reverse dragon",
              },
            },
            f8b4: {
              $: {
                id: 133,
                eco: "A22",
                name: "English: Bremen, Smyslov system",
              },
            },
            c7c6: {
              $: {
                id: 134,
                eco: "A23",
                name: "English: Bremen system, Keres variation",
              },
            },
            g7g6: {
              $: {
                id: 135,
                eco: "A24",
                name: "English: Bremen system with ...g6",
              },
            },
          },
        },
        b8c6: {
          $: { id: 136, eco: "A25", name: "English: Sicilian reversed" },
          g2g3: {
            g7g6: {
              f1g2: {
                f8g7: {
                  $: { id: 137, eco: "A25", name: "English: closed system" },
                  e2e3: {
                    d7d6: {
                      g1e2: {
                        g8h6: {
                          $: {
                            id: 138,
                            eco: "A25",
                            name: "English: closed, Taimanov variation",
                          },
                        },
                        c8e6: {
                          $: {
                            id: 139,
                            eco: "A25",
                            name: "English: closed, Hort variation",
                          },
                        },
                      },
                    },
                  },
                  a1b1: {
                    $: { id: 140, eco: "A25", name: "English: closed, 5.Rb1" },
                    g8h6: {
                      $: {
                        id: 141,
                        eco: "A25",
                        name: "English: closed, 5.Rb1 Taimanov variation",
                      },
                    },
                  },
                  d2d3: {
                    $: {
                      id: 142,
                      eco: "A25",
                      name: "English: closed system (without ...d6)",
                    },
                    d7d6: {
                      $: {
                        id: 143,
                        eco: "A26",
                        name: "English: closed system",
                      },
                      e2e4: {
                        $: {
                          id: 144,
                          eco: "A26",
                          name: "English: Botvinnik system",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          g1f3: {
            $: { id: 145, eco: "A27", name: "English: three knights system" },
            g8f6: {
              $: { id: 146, eco: "A28", name: "English: four knights system" },
              d2d4: {
                e5d4: {
                  f3d4: {
                    f8b4: {
                      c1g5: {
                        h7h6: {
                          g5h4: {
                            b4c3: {
                              b2c3: {
                                c6e5: {
                                  $: {
                                    id: 147,
                                    eco: "A28",
                                    name: "English: Nenarokov variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                e5e4: {
                  $: {
                    id: 148,
                    eco: "A28",
                    name: "English: Bradley Beach variation",
                  },
                },
              },
              e2e4: {
                $: {
                  id: 149,
                  eco: "A28",
                  name: "English: four knights, Nimzovich variation",
                },
              },
              a2a3: {
                $: {
                  id: 150,
                  eco: "A28",
                  name: "English: four knights, Marini variation",
                },
              },
              d2d3: {
                $: {
                  id: 151,
                  eco: "A28",
                  name: "English: four knights, Capablanca variation",
                },
              },
              e2e3: {
                $: { id: 152, eco: "A28", name: "English: four knights, 4.e3" },
                f8b4: {
                  d1c2: {
                    e8g8: {
                      c3d5: {
                        f8e8: {
                          c2f5: {
                            $: {
                              id: 153,
                              eco: "A28",
                              name: "English: four knights, Stean variation",
                            },
                          },
                        },
                      },
                    },
                    b4c3: {
                      $: {
                        id: 154,
                        eco: "A28",
                        name: "English: four knights, Romanishin variation",
                      },
                    },
                  },
                },
              },
              g2g3: {
                $: {
                  id: 155,
                  eco: "A29",
                  name: "English: four knights, kingside fianchetto",
                },
              },
            },
          },
        },
      },
    },
    c7c5: {
      $: { id: 156, eco: "A30", name: "English: symmetrical variation" },
      g1f3: {
        g8f6: {
          g2g3: {
            b7b6: {
              f1g2: {
                c8b7: {
                  e1g1: {
                    e7e6: {
                      b1c3: {
                        f8e7: {
                          $: {
                            id: 157,
                            eco: "A30",
                            name: "English: symmetrical, hedgehog system",
                          },
                          d2d4: {
                            c5d4: {
                              d1d4: {
                                d7d6: {
                                  f1d1: {
                                    a7a6: {
                                      b2b3: {
                                        b8d7: {
                                          $: {
                                            id: 158,
                                            eco: "A30",
                                            name: "English: symmetrical, hedgehog, flexible formation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            $: {
              id: 159,
              eco: "A31",
              name: "English: symmetrical, Benoni formation",
            },
            c5d4: {
              f3d4: {
                e7e6: {
                  $: {
                    id: 160,
                    eco: "A32",
                    name: "English: symmetrical variation",
                  },
                  b1c3: {
                    b8c6: {
                      $: {
                        id: 161,
                        eco: "A33",
                        name: "English: symmetrical variation",
                      },
                      g2g3: {
                        d8b6: {
                          $: {
                            id: 162,
                            eco: "A33",
                            name: "English: symmetrical, Geller variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      b1c3: {
        $: { id: 163, eco: "A34", name: "English: symmetrical variation" },
        g8f6: {
          g1f3: {
            d7d5: {
              c4d5: {
                f6d5: {
                  $: {
                    id: 164,
                    eco: "A34",
                    name: "English: symmetrical, three knights system",
                  },
                },
              },
            },
          },
          g2g3: {
            $: { id: 165, eco: "A34", name: "English: symmetrical variation" },
            d7d5: {
              c4d5: {
                f6d5: {
                  f1g2: {
                    d5c7: {
                      $: {
                        id: 166,
                        eco: "A34",
                        name: "English: symmetrical, Rubinstein system",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        b8c6: {
          $: { id: 167, eco: "A35", name: "English: symmetrical variation" },
          g1f3: {
            g8f6: {
              $: {
                id: 168,
                eco: "A35",
                name: "English: symmetrical, four knights system",
              },
            },
          },
          g2g3: {
            $: { id: 169, eco: "A36", name: "English: symmetrical variation" },
            g7g6: {
              f1g2: {
                f8g7: {
                  $: {
                    id: 170,
                    eco: "A36",
                    name: "English: ultra-symmetrical variation",
                  },
                  e2e3: {
                    e7e5: {
                      $: {
                        id: 171,
                        eco: "A36",
                        name: "English: symmetrical, Botvinnik system reversed",
                      },
                    },
                  },
                  e2e4: {
                    $: {
                      id: 172,
                      eco: "A36",
                      name: "English: symmetrical, Botvinnik system",
                    },
                  },
                  g1f3: {
                    $: {
                      id: 173,
                      eco: "A37",
                      name: "English: symmetrical variation",
                    },
                    e7e5: {
                      $: {
                        id: 174,
                        eco: "A37",
                        name: "English: symmetrical, Botvinnik system reversed",
                      },
                    },
                    g8f6: {
                      $: {
                        id: 175,
                        eco: "A38",
                        name: "English: symmetrical variation",
                      },
                      e1g1: {
                        e8g8: {
                          d2d3: {
                            $: {
                              id: 176,
                              eco: "A38",
                              name: "English: symmetrical, main line with d3",
                            },
                          },
                          b2b3: {
                            $: {
                              id: 177,
                              eco: "A38",
                              name: "English: symmetrical, main line with b3",
                            },
                          },
                          d2d4: {
                            $: {
                              id: 178,
                              eco: "A39",
                              name: "English: symmetrical, main line with d4",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  d2d4: {
    $: { id: 179, eco: "A40", name: "Queen's pawn game" },
    b8c6: {
      $: {
        id: 180,
        eco: "A40",
        name: "Queen's pawn game: Lundin (Kevitz-Mikenas) defence",
      },
    },
    e7e5: {
      $: {
        id: 181,
        eco: "A40",
        name: "Queen's pawn game: Charlick (Englund) gambit",
      },
      d4e5: {
        b8c6: {
          g1f3: {
            d8e7: {
              d1d5: {
                f7f6: {
                  e5f6: {
                    g8f6: {
                      $: {
                        id: 182,
                        eco: "A40",
                        name: "Queen's pawn game: Englund gambit",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    b7b6: {
      $: { id: 183, eco: "A40", name: "Queen's pawn game: English defence" },
    },
    b7b5: {
      $: { id: 184, eco: "A40", name: "Queen's pawn game: Polish defence" },
    },
    e7e6: {
      $: { id: 185, eco: "A40", name: "Queen's pawn game" },
      c2c4: {
        b7b6: {
          $: { id: 186, eco: "A40", name: "Queen's pawn game: Keres defence" },
        },
        f8b4: {
          $: {
            id: 187,
            eco: "A40",
            name: "Queen's pawn game: Franco-Indian (Keres) defence",
          },
        },
      },
    },
    g7g6: {
      $: { id: 188, eco: "A40", name: "Queen's pawn game: Modern" },
      c2c4: {
        f8g7: {
          b1c3: {
            c7c5: {
              d4d5: {
                g7c3: {
                  b2c3: {
                    f7f5: {
                      $: {
                        id: 189,
                        eco: "A40",
                        name: "Queen's pawn game: Beefeater",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    d7d6: {
      $: { id: 190, eco: "A41", name: "Queen's Pawn" },
      g1f3: {
        c8g4: { $: { id: 191, eco: "A41", name: "Queen's pawn game: Wade" } },
      },
      c2c4: {
        $: { id: 192, eco: "A41", name: "Queen's pawn game" },
        g7g6: {
          b1c3: {
            f8g7: {
              $: { id: 193, eco: "A41", name: "Queen's pawn game: Modern" },
              e2e4: {
                $: {
                  id: 194,
                  eco: "A42",
                  name: "Averbakh: Cochrane-Bonnerjee",
                },
                c7c5: {
                  g1f3: {
                    d8a5: {
                      $: { id: 195, eco: "A42", name: "Averbakh: Pterodactyl" },
                    },
                  },
                },
                f7f5: {
                  $: { id: 196, eco: "A42", name: "Averbakh: Randspringer" },
                },
                b8c6: { $: { id: 197, eco: "A42", name: "Averbakh: Kotov" } },
              },
            },
          },
        },
      },
    },
    c7c5: {
      $: { id: 198, eco: "A43", name: "Old Benoni" },
      d4d5: {
        e7e6: {
          e2e4: {
            $: {
              id: 199,
              eco: "A43",
              name: "Old Benoni: Franco-Benoni defence",
            },
          },
        },
        f7f5: {
          $: { id: 200, eco: "A43", name: "Old Benoni: Mujannah formation" },
        },
        g8f6: {
          $: { id: 201, eco: "A43", name: "Old Benoni" },
          b1c3: {
            d8a5: {
              $: { id: 202, eco: "A43", name: "Old Benoni: Woozle defence" },
            },
          },
          g1f3: {
            $: { id: 203, eco: "A43", name: "Old Benoni" },
            c5c4: {
              $: {
                id: 204,
                eco: "A43",
                name: "Old Benoni: Hawk (Habichd) defence",
              },
            },
          },
        },
        d7d6: {
          $: { id: 205, eco: "A43", name: "Old Benoni" },
          b1c3: {
            g7g6: {
              $: { id: 206, eco: "A43", name: "Old Benoni: Schmid's system" },
            },
          },
        },
        e7e5: {
          $: { id: 207, eco: "A44", name: "Old Benoni" },
          e2e4: {
            d7d6: {
              $: {
                id: 208,
                eco: "A44",
                name: "Old Benoni: Semi-Benoni (`blockade variation')",
              },
            },
          },
        },
      },
    },
    g8f6: {
      $: { id: 209, eco: "A45", name: "Queen's pawn game" },
      g2g4: {
        $: { id: 210, eco: "A45", name: "Queen's pawn game: Bronstein gambit" },
      },
      f2f4: { $: { id: 211, eco: "A45", name: "Canard opening" } },
      f2f3: {
        $: { id: 212, eco: "A45", name: "Paleface attack" },
        d7d5: { g2g4: { $: { id: 213, eco: "A45", name: "Gedult attack" } } },
      },
      c1g5: {
        $: { id: 214, eco: "A45", name: "Levenfish/Trompowsky/Ruth" },
        f6e4: {
          $: {
            id: 215,
            eco: "A45",
            name: "Levenfish/Trompowsky/Ruth: Boleslavsky",
          },
        },
        b7b6: {
          $: {
            id: 216,
            eco: "A45",
            name: "Levenfish/Trompowsky/Ruth: Rabinovich",
          },
        },
      },
      g1f3: {
        $: { id: 217, eco: "A46", name: "Queen's pawn game" },
        e7e6: {
          c1g5: {
            $: { id: 218, eco: "A46", name: "Queen's pawn game: Torre attack" },
            c7c5: {
              e2e4: {
                $: {
                  id: 219,
                  eco: "A46",
                  name: "Queen's pawn game: Torre attack, Wagner gambit",
                },
              },
            },
          },
          e2e3: {
            $: {
              id: 220,
              eco: "A46",
              name: "Queen's pawn game: Yusupov-Rubinstein system",
            },
          },
        },
        f6e4: {
          $: { id: 221, eco: "A46", name: "Queen's pawn game: Doery defence" },
        },
        b7b6: {
          $: { id: 222, eco: "A47", name: "Queen's Indian" },
          g2g3: {
            c8b7: {
              f1g2: {
                c7c5: {
                  $: {
                    id: 223,
                    eco: "A47",
                    name: "Queen's Indian: Marienbad system",
                  },
                  c2c4: {
                    c5d4: {
                      d1d4: {
                        $: {
                          id: 224,
                          eco: "A47",
                          name: "Queen's Indian: Marienbad system, Berg variation",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        g7g6: {
          $: {
            id: 225,
            eco: "A48",
            name: "King's Indian: East Indian defence",
          },
          c1g5: {
            $: { id: 226, eco: "A48", name: "King's Indian: Torre attack" },
          },
          c1f4: {
            $: { id: 227, eco: "A48", name: "King's Indian: London system" },
          },
          g2g3: {
            $: {
              id: 228,
              eco: "A49",
              name: "King's Indian: fianchetto without c4",
            },
          },
        },
      },
      c2c4: {
        $: { id: 229, eco: "A50", name: "Queen's pawn game" },
        b8c6: {
          $: {
            id: 230,
            eco: "A50",
            name: "Queen's pawn game: Kevitz-Trajkovich defence",
          },
        },
        b7b6: {
          $: {
            id: 231,
            eco: "A50",
            name: "Queen's pawn game: Queen's Indian accelerated",
          },
        },
        e7e5: {
          $: { id: 232, eco: "A51", name: "Budapest gambit" },
          d4e5: {
            f6e4: {
              $: {
                id: 233,
                eco: "A51",
                name: "Budapest gambit: Fajarowicz variation",
              },
              d1c2: {
                $: {
                  id: 234,
                  eco: "A51",
                  name: "Budapest gambit: Fajarowicz, Steiner variation",
                },
              },
            },
            f6g4: {
              $: { id: 235, eco: "A52", name: "Budapest gambit" },
              g1f3: {
                $: {
                  id: 236,
                  eco: "A52",
                  name: "Budapest gambit: Adler variation",
                },
              },
              c1f4: {
                $: {
                  id: 237,
                  eco: "A52",
                  name: "Budapest gambit: Rubinstein variation",
                },
              },
              e2e4: {
                $: {
                  id: 238,
                  eco: "A52",
                  name: "Budapest gambit: Alekhine variation",
                },
                g4e5: {
                  f2f4: {
                    e5c6: {
                      $: {
                        id: 239,
                        eco: "A52",
                        name: "Budapest gambit: Alekhine, Abonyi variation",
                      },
                    },
                  },
                },
                d7d6: {
                  $: {
                    id: 240,
                    eco: "A52",
                    name: "Budapest gambit: Alekhine variation, Balogh gambit",
                  },
                },
              },
            },
          },
        },
        d7d6: {
          $: { id: 241, eco: "A53", name: "Old Indian" },
          b1c3: {
            c8f5: {
              $: {
                id: 242,
                eco: "A53",
                name: "Old Indian: Janowski variation",
              },
            },
            e7e5: {
              $: {
                id: 243,
                eco: "A54",
                name: "Old Indian: Ukrainian variation",
              },
              e2e3: {
                b8d7: {
                  f1d3: {
                    $: {
                      id: 244,
                      eco: "A54",
                      name: "Old Indian: Dus-Khotimirsky variation",
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 245,
                  eco: "A54",
                  name: "Old Indian: Ukrainian variation, 4.Nf3",
                },
                b8d7: {
                  e2e4: {
                    $: { id: 246, eco: "A55", name: "Old Indian: main line" },
                  },
                },
              },
            },
          },
        },
        c7c5: {
          $: { id: 247, eco: "A56", name: "Benoni" },
          d4d5: {
            d7d6: {
              $: { id: 248, eco: "A56", name: "Benoni: Hromodka system" },
            },
            g7g6: {
              $: { id: 249, eco: "A56", name: "Benoni: Blackburne/Hromadka" },
            },
            f6e4: { $: { id: 250, eco: "A56", name: "Benoni: Vulture" } },
            e7e5: {
              $: { id: 251, eco: "A56", name: "Czech Benoni" },
              b1c3: {
                d7d6: {
                  e2e4: {
                    g7g6: {
                      $: {
                        id: 252,
                        eco: "A56",
                        name: "Czech Benoni: King's Indian system",
                      },
                    },
                  },
                },
              },
            },
            b7b5: {
              $: { id: 253, eco: "A57", name: "Benko gambit" },
              c4b5: {
                a7a6: {
                  $: {
                    id: 254,
                    eco: "A57",
                    name: "Benko gambit: Gambit half accepted",
                  },
                  b1c3: {
                    $: {
                      id: 255,
                      eco: "A57",
                      name: "Benko gambit: Zaitsev system",
                    },
                    a6b5: {
                      e2e4: {
                        b5b4: {
                          c3b5: {
                            d7d6: {
                              f1c4: {
                                $: {
                                  id: 256,
                                  eco: "A57",
                                  name: "Benko gambit: Nescafe Frappe attack",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b5a6: {
                    $: { id: 257, eco: "A58", name: "Benko gambit: accepted" },
                    c8a6: {
                      b1c3: {
                        d7d6: {
                          g1f3: {
                            g7g6: {
                              f3d2: {
                                $: {
                                  id: 258,
                                  eco: "A58",
                                  name: "Benko gambit: Nd2 variation",
                                },
                              },
                              g2g3: {
                                $: {
                                  id: 259,
                                  eco: "A58",
                                  name: "Benko gambit: fianchetto variation",
                                },
                              },
                            },
                          },
                          e2e4: {
                            $: {
                              id: 260,
                              eco: "A59",
                              name: "Benko gambit: 7.e4",
                            },
                            a6f1: {
                              e1f1: {
                                g7g6: {
                                  g1e2: {
                                    $: {
                                      id: 261,
                                      eco: "A59",
                                      name: "Benko gambit: Ne2 variation",
                                    },
                                  },
                                  g2g3: {
                                    $: {
                                      id: 262,
                                      eco: "A59",
                                      name: "Benko gambit",
                                    },
                                    f8g7: {
                                      f1g2: {
                                        e8g8: {
                                          g1f3: {
                                            $: {
                                              id: 263,
                                              eco: "A59",
                                              name: "Benko gambit: main line",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            e7e6: {
              $: { id: 264, eco: "A60", name: "Benoni" },
              b1c3: {
                e6d5: {
                  c4d5: {
                    d7d6: {
                      g1f3: {
                        g7g6: {
                          $: { id: 265, eco: "A61", name: "Benoni: Marshall" },
                          c1g5: {
                            $: {
                              id: 266,
                              eco: "A61",
                              name: "Benoni: Uhlmann variation",
                            },
                          },
                          f3d2: {
                            $: {
                              id: 267,
                              eco: "A61",
                              name: "Benoni: Nimzovich (knight's tour) variation",
                            },
                          },
                          g2g3: {
                            $: {
                              id: 268,
                              eco: "A61",
                              name: "Benoni: fianchetto variation",
                            },
                            f8g7: {
                              f1g2: {
                                e8g8: {
                                  $: {
                                    id: 269,
                                    eco: "A62",
                                    name: "Benoni: fianchetto variation",
                                  },
                                  e1g1: {
                                    b8d7: {
                                      $: {
                                        id: 270,
                                        eco: "A63",
                                        name: "Benoni: fianchetto, 9...Nbd7",
                                      },
                                      f3d2: {
                                        a7a6: {
                                          a2a4: {
                                            f8e8: {
                                              $: {
                                                id: 271,
                                                eco: "A64",
                                                name: "Benoni: fianchetto, 11...Re8",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      e2e4: {
                        $: { id: 272, eco: "A65", name: "Benoni: 6.e4" },
                        g7g6: {
                          f2f4: {
                            $: {
                              id: 273,
                              eco: "A66",
                              name: "Benoni: pawn storm variation",
                            },
                            f8g7: {
                              e4e5: {
                                $: {
                                  id: 274,
                                  eco: "A66",
                                  name: "Benoni: Mikenas variation",
                                },
                              },
                              f1b5: {
                                $: {
                                  id: 275,
                                  eco: "A67",
                                  name: "Benoni: Taimanov variation",
                                },
                              },
                              g1f3: {
                                e8g8: {
                                  $: {
                                    id: 276,
                                    eco: "A68",
                                    name: "Benoni: four pawns attack",
                                  },
                                  f1e2: {
                                    f8e8: {
                                      $: {
                                        id: 277,
                                        eco: "A69",
                                        name: "Benoni: four pawns attack, main line",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          g1f3: {
                            $: {
                              id: 278,
                              eco: "A70",
                              name: "Benoni: classical with e4 and Nf3",
                            },
                            f8g7: {
                              f1e2: {
                                $: {
                                  id: 279,
                                  eco: "A70",
                                  name: "Benoni: classical without 9.O-O",
                                },
                                e8g8: {
                                  $: {
                                    id: 281,
                                    eco: "A72",
                                    name: "Benoni: classical without 9.O-O",
                                  },
                                  e1g1: {
                                    $: {
                                      id: 282,
                                      eco: "A73",
                                      name: "Benoni: classical, 9.O-O",
                                    },
                                    a7a6: {
                                      a2a4: {
                                        $: {
                                          id: 283,
                                          eco: "A74",
                                          name: "Benoni: classical, 9...a6, 10.a4",
                                        },
                                        c8g4: {
                                          $: {
                                            id: 284,
                                            eco: "A75",
                                            name: "Benoni: classical with ...a6 and 10...Bg4",
                                          },
                                        },
                                      },
                                    },
                                    f8e8: {
                                      $: {
                                        id: 285,
                                        eco: "A76",
                                        name: "Benoni: classical, 9...Re8",
                                      },
                                      f3d2: {
                                        $: {
                                          id: 286,
                                          eco: "A77",
                                          name: "Benoni: classical, 9...Re8, 10.Nd2",
                                        },
                                        b8a6: {
                                          $: {
                                            id: 287,
                                            eco: "A78",
                                            name: "Benoni: classical with ...Re8 and ...Na6",
                                          },
                                          f2f3: {
                                            $: {
                                              id: 288,
                                              eco: "A79",
                                              name: "Benoni: classical, 11.f3",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              c1g5: {
                                $: {
                                  id: 280,
                                  eco: "A71",
                                  name: "Benoni: classical, 8.Bg5",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        g7g6: {
          f2f3: {
            d7d5: {
              $: { id: 1759, eco: "D70", name: "Neo-Gruenfeld: Bogoljubow" },
            },
          },
          g2g3: {
            d7d5: {
              $: { id: 1760, eco: "D70", name: "Neo-Gruenfeld: Kemeri" },
              f1g2: {
                f8g7: {
                  c4d5: {
                    f6d5: {
                      $: { id: 1761, eco: "D71", name: "Neo-Gruenfeld: 5.cd" },
                      e2e4: {
                        d5b6: {
                          g1e2: {
                            $: {
                              id: 1762,
                              eco: "D72",
                              name: "Neo-Gruenfeld: 5.cd, main line",
                            },
                          },
                        },
                      },
                    },
                  },
                  g1f3: {
                    $: { id: 1763, eco: "D73", name: "Neo-Gruenfeld: 5.Nf3" },
                    e8g8: {
                      c4d5: {
                        f6d5: {
                          e1g1: {
                            $: {
                              id: 1764,
                              eco: "D74",
                              name: "Neo-Gruenfeld: 6.cd Nxd5, 7.O-O",
                            },
                            c7c5: {
                              b1c3: {
                                $: {
                                  id: 1765,
                                  eco: "D75",
                                  name: "Neo-Gruenfeld: 6.cd Nxd5, 7.O-O c5, 8.Nc3",
                                },
                              },
                              d4c5: {
                                $: {
                                  id: 1766,
                                  eco: "D75",
                                  name: "Neo-Gruenfeld: 6.cd Nxd5, 7.O-O c5, 8.dc",
                                },
                              },
                            },
                            d5b6: {
                              $: {
                                id: 1767,
                                eco: "D76",
                                name: "Neo-Gruenfeld: 6.cd Nxd5, 7.O-O Nb6",
                              },
                            },
                          },
                        },
                      },
                      e1g1: {
                        $: {
                          id: 1768,
                          eco: "D77",
                          name: "Neo-Gruenfeld: 6.O-O",
                        },
                        c7c6: {
                          $: {
                            id: 1769,
                            eco: "D78",
                            name: "Neo-Gruenfeld: 6.O-O c6",
                          },
                          c4d5: {
                            c6d5: {
                              $: {
                                id: 1770,
                                eco: "D79",
                                name: "Neo-Gruenfeld: 6.O-O, main line",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            $: { id: 1944, eco: "E60", name: "King's Indian Defence: 3.g3" },
            f8g7: {
              f1g2: {
                d7d5: {
                  $: {
                    id: 1945,
                    eco: "E60",
                    name: "King's Indian Defence: 3.g3, counterthrust variation",
                  },
                },
              },
            },
          },
          b1c3: {
            d7d5: {
              $: { id: 1771, eco: "D80", name: "Gruenfeld" },
              g2g4: {
                $: { id: 1772, eco: "D80", name: "Gruenfeld: Spike gambit" },
              },
              c1g5: {
                $: {
                  id: 1773,
                  eco: "D80",
                  name: "Gruenfeld: Stockholm variation",
                },
                f6e4: {
                  c3e4: {
                    d5e4: {
                      d1d2: {
                        c7c5: {
                          $: {
                            id: 1774,
                            eco: "D80",
                            name: "Gruenfeld: Lundin variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
              d1b3: {
                $: {
                  id: 1775,
                  eco: "D81",
                  name: "Gruenfeld: Russian variation",
                },
              },
              c1f4: {
                $: { id: 1776, eco: "D82", name: "Gruenfeld: 4.Bf4" },
                f8g7: {
                  e2e3: {
                    e8g8: {
                      $: {
                        id: 1777,
                        eco: "D83",
                        name: "Gruenfeld: Gruenfeld gambit",
                      },
                      a1c1: {
                        $: {
                          id: 1778,
                          eco: "D83",
                          name: "Gruenfeld: Gruenfeld gambit, Capablanca variation",
                        },
                        c7c5: {
                          d4c5: {
                            c8e6: {
                              $: {
                                id: 1779,
                                eco: "D83",
                                name: "Gruenfeld: Gruenfeld gambit, Botvinnik variation",
                              },
                            },
                          },
                        },
                      },
                      c4d5: {
                        f6d5: {
                          c3d5: {
                            d8d5: {
                              f4c7: {
                                $: {
                                  id: 1780,
                                  eco: "D84",
                                  name: "Gruenfeld: Gruenfeld gambit accepted",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c4d5: {
                f6d5: {
                  $: {
                    id: 1781,
                    eco: "D85",
                    name: "Gruenfeld: exchange variation",
                  },
                  e2e4: {
                    d5c3: {
                      b2c3: {
                        f8g7: {
                          g1f3: {
                            $: {
                              id: 1782,
                              eco: "D85",
                              name: "Gruenfeld: modern exchange variation",
                            },
                          },
                          f1c4: {
                            $: {
                              id: 1783,
                              eco: "D86",
                              name: "Gruenfeld: exchange, classical variation",
                            },
                            e8g8: {
                              g1e2: {
                                d8d7: {
                                  e1g1: {
                                    b7b6: {
                                      $: {
                                        id: 1784,
                                        eco: "D86",
                                        name: "Gruenfeld: exchange, Larsen variation",
                                      },
                                    },
                                  },
                                },
                                b7b6: {
                                  $: {
                                    id: 1785,
                                    eco: "D86",
                                    name: "Gruenfeld: exchange, Simagin's lesser variation",
                                  },
                                },
                                b8c6: {
                                  $: {
                                    id: 1786,
                                    eco: "D86",
                                    name: "Gruenfeld: exchange, Simagin's improved variation",
                                  },
                                },
                                c7c5: {
                                  $: {
                                    id: 1787,
                                    eco: "D87",
                                    name: "Gruenfeld: exchange, Spassky variation",
                                  },
                                  e1g1: {
                                    b8c6: {
                                      c1e3: {
                                        c8g4: {
                                          f2f3: {
                                            c6a5: {
                                              c4f7: {
                                                $: {
                                                  id: 1788,
                                                  eco: "D87",
                                                  name: "Gruenfeld: exchange, Seville variation",
                                                },
                                              },
                                            },
                                          },
                                        },
                                        c5d4: {
                                          c3d4: {
                                            $: {
                                              id: 1789,
                                              eco: "D88",
                                              name: "Gruenfeld: Spassky variation, main line, 10...cd, 11.cd",
                                            },
                                            c8g4: {
                                              f2f3: {
                                                c6a5: {
                                                  c4d3: {
                                                    g4e6: {
                                                      $: {
                                                        id: 1790,
                                                        eco: "D89",
                                                        name: "Gruenfeld: Spassky variation, main line, 13.Bd3",
                                                      },
                                                      d4d5: {
                                                        $: {
                                                          id: 1791,
                                                          eco: "D89",
                                                          name: "Gruenfeld: exchange, Sokolsky variation",
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 1792,
                  eco: "D90",
                  name: "Gruenfeld: Three knights variation",
                },
                c7c6: {
                  $: {
                    id: 1793,
                    eco: "D90",
                    name: "Gruenfeld: Schlechter variation",
                  },
                },
                f8g7: {
                  $: {
                    id: 1794,
                    eco: "D90",
                    name: "Gruenfeld: Three knights variation",
                  },
                  d1a4: {
                    $: {
                      id: 1795,
                      eco: "D90",
                      name: "Gruenfeld: Flohr variation",
                    },
                  },
                  c1g5: {
                    $: { id: 1796, eco: "D91", name: "Gruenfeld: 5.Bg5" },
                  },
                  c1f4: {
                    $: { id: 1797, eco: "D92", name: "Gruenfeld: Capablanca" },
                    e8g8: {
                      $: { id: 1798, eco: "D92", name: "Gruenfeld: Botvinnik" },
                      e2e3: {
                        $: {
                          id: 1799,
                          eco: "D93",
                          name: "Gruenfeld: Capablanca",
                        },
                      },
                    },
                  },
                  e2e3: {
                    $: { id: 1800, eco: "D94", name: "Gruenfeld: Rubinstein" },
                    e8g8: {
                      b2b4: {
                        $: {
                          id: 1801,
                          eco: "D94",
                          name: "Gruenfeld: Makogonov variation",
                        },
                      },
                      c1d2: {
                        $: {
                          id: 1802,
                          eco: "D94",
                          name: "Gruenfeld: Opovcensky variation",
                        },
                      },
                      f1d3: {
                        $: { id: 1803, eco: "D94", name: "Gruenfeld: Flohr" },
                        c7c6: {
                          e1g1: {
                            c8g4: {
                              $: {
                                id: 1804,
                                eco: "D94",
                                name: "Gruenfeld: Smyslov defence",
                              },
                            },
                            c8f5: {
                              $: {
                                id: 1805,
                                eco: "D94",
                                name: "Gruenfeld: Flohr defence",
                              },
                            },
                          },
                        },
                      },
                      d1b3: {
                        $: {
                          id: 1806,
                          eco: "D95",
                          name: "Gruenfeld: Gruenfeld",
                        },
                        e7e6: {
                          $: {
                            id: 1807,
                            eco: "D95",
                            name: "Gruenfeld: Botvinnik",
                          },
                        },
                        d5c4: {
                          f1c4: {
                            b8d7: {
                              f3g5: {
                                $: {
                                  id: 1808,
                                  eco: "D95",
                                  name: "Gruenfeld: Pachman",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  d1b3: {
                    $: {
                      id: 1809,
                      eco: "D96",
                      name: "Gruenfeld: Russian variation",
                    },
                    d5c4: {
                      b3c4: {
                        e8g8: {
                          e2e4: {
                            $: {
                              id: 1810,
                              eco: "D97",
                              name: "Gruenfeld: Russian variation with e4",
                            },
                            a7a6: {
                              $: {
                                id: 1811,
                                eco: "D97",
                                name: "Gruenfeld: Russian, Alekhine (Hungarian) variation",
                              },
                            },
                            c7c6: {
                              $: {
                                id: 1812,
                                eco: "D97",
                                name: "Gruenfeld: Russian, Szabo (Boleslavsky) variation",
                              },
                            },
                            b7b6: {
                              $: {
                                id: 1813,
                                eco: "D97",
                                name: "Gruenfeld: Russian, Levenfish variation",
                              },
                            },
                            b8c6: {
                              $: {
                                id: 1814,
                                eco: "D97",
                                name: "Gruenfeld: Russian, Byrne (Simagin) variation",
                              },
                            },
                            b8a6: {
                              $: {
                                id: 1815,
                                eco: "D97",
                                name: "Gruenfeld: Russian, Prins variation",
                              },
                            },
                            c8g4: {
                              $: {
                                id: 1816,
                                eco: "D98",
                                name: "Gruenfeld: Russian, Smyslov variation",
                              },
                              c1e3: {
                                f6d7: {
                                  f1e2: {
                                    d7b6: {
                                      c4d3: {
                                        b8c6: {
                                          e1c1: {
                                            $: {
                                              id: 1817,
                                              eco: "D98",
                                              name: "Gruenfeld: Russian, Keres variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  c4b3: {
                                    $: {
                                      id: 1818,
                                      eco: "D99",
                                      name: "Gruenfeld: Smyslov, main line",
                                    },
                                    c7c5: {
                                      $: {
                                        id: 1819,
                                        eco: "D99",
                                        name: "Gruenfeld: Smyslov, Yugoslav variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            $: { id: 1946, eco: "E61", name: "King's Indian Defence: 3.Nc3" },
            f8g7: {
              g1f3: {
                d7d6: {
                  c1g5: {
                    $: {
                      id: 1947,
                      eco: "E61",
                      name: "King's Indian Defence: Smyslov system",
                    },
                  },
                  g2g3: {
                    $: {
                      id: 1948,
                      eco: "E62",
                      name: "King's Indian Defence: fianchetto variation",
                    },
                    e8g8: {
                      f1g2: {
                        c7c6: {
                          e1g1: {
                            c8f5: {
                              $: {
                                id: 1949,
                                eco: "E62",
                                name: "King's Indian Defence: fianchetto, Larsen system",
                              },
                            },
                            d8a5: {
                              $: {
                                id: 1950,
                                eco: "E62",
                                name: "King's Indian Defence: fianchetto, Kavalek (Bronstein) variation",
                              },
                            },
                          },
                        },
                        b8c6: {
                          $: {
                            id: 1951,
                            eco: "E62",
                            name: "King's Indian Defence: fianchetto with ...Nc6",
                          },
                          e1g1: {
                            e7e5: {
                              $: {
                                id: 1952,
                                eco: "E62",
                                name: "King's Indian Defence: fianchetto, Uhlmann (Szabo) variation",
                              },
                            },
                            c8f5: {
                              $: {
                                id: 1953,
                                eco: "E62",
                                name: "King's Indian Defence: fianchetto, lesser Simagin (Spassky) variation",
                              },
                            },
                            c8g4: {
                              $: {
                                id: 1954,
                                eco: "E62",
                                name: "King's Indian Defence: fianchetto, Simagin variation",
                              },
                            },
                            a7a6: {
                              $: {
                                id: 1955,
                                eco: "E63",
                                name: "King's Indian Defence: fianchetto, Panno variation",
                              },
                            },
                          },
                        },
                        c7c5: {
                          $: {
                            id: 1956,
                            eco: "E64",
                            name: "King's Indian Defence: fianchetto, Yugoslav system",
                          },
                          e1g1: {
                            $: {
                              id: 1957,
                              eco: "E65",
                              name: "King's Indian Defence: fianchetto, Yugoslav, 7.O-O",
                            },
                            b8c6: {
                              d4d5: {
                                $: {
                                  id: 1958,
                                  eco: "E66",
                                  name: "King's Indian Defence: fianchetto, Yugoslav Panno",
                                },
                              },
                            },
                          },
                        },
                        b8d7: {
                          $: {
                            id: 1959,
                            eco: "E67",
                            name: "King's Indian Defence: fianchetto with ...Nd7",
                          },
                          e1g1: {
                            e7e5: {
                              $: {
                                id: 1960,
                                eco: "E67",
                                name: "King's Indian Defence: fianchetto, classical variation",
                              },
                              e2e4: {
                                $: {
                                  id: 1961,
                                  eco: "E68",
                                  name: "King's Indian Defence: fianchetto, classical variation, 8.e4",
                                },
                                c7c6: {
                                  h2h3: {
                                    $: {
                                      id: 1962,
                                      eco: "E69",
                                      name: "King's Indian Defence: fianchetto, classical main line",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              e2e4: {
                $: {
                  id: 1963,
                  eco: "E70",
                  name: "King's Indian Defence: 4.e4",
                },
                d7d6: {
                  g1e2: {
                    $: {
                      id: 1964,
                      eco: "E70",
                      name: "King's Indian Defence: Kramer system",
                    },
                  },
                  c1g5: {
                    $: {
                      id: 1965,
                      eco: "E70",
                      name: "King's Indian Defence: accelerated Averbakh system",
                    },
                  },
                  h2h3: {
                    $: {
                      id: 1966,
                      eco: "E71",
                      name: "King's Indian Defence: Makagonov system (5.h3)",
                    },
                  },
                  g2g3: {
                    $: {
                      id: 1967,
                      eco: "E72",
                      name: "King's Indian Defence: Levenfish",
                    },
                    e8g8: {
                      f1g2: {
                        e7e5: {
                          g1e2: {
                            $: {
                              id: 1968,
                              eco: "E72",
                              name: "King's Indian Defence: Pomar system",
                            },
                          },
                        },
                      },
                    },
                  },
                  f1e2: {
                    $: {
                      id: 1969,
                      eco: "E73",
                      name: "King's Indian Defence: 5.Be2",
                    },
                    e8g8: {
                      c1e3: {
                        $: {
                          id: 1970,
                          eco: "E73",
                          name: "King's Indian Defence: Semi-Averbakh system",
                        },
                      },
                      c1g5: {
                        $: {
                          id: 1971,
                          eco: "E73",
                          name: "King's Indian Defence: Averbakh system",
                        },
                        c7c5: {
                          $: {
                            id: 1972,
                            eco: "E74",
                            name: "King's Indian Defence: Averbakh, 6...c5",
                          },
                          d4d5: {
                            e7e6: {
                              $: {
                                id: 1973,
                                eco: "E75",
                                name: "King's Indian Defence: Averbakh, main line",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f2f4: {
                    $: {
                      id: 1974,
                      eco: "E76",
                      name: "King's Indian Defence: Four pawns attack",
                    },
                    e8g8: {
                      g1f3: {
                        c7c5: {
                          d4d5: {
                            $: {
                              id: 1975,
                              eco: "E76",
                              name: "King's Indian Defence: Four pawns attack, dynamic line",
                            },
                          },
                        },
                      },
                      f1e2: {
                        $: {
                          id: 1976,
                          eco: "E77",
                          name: "King's Indian Defence: Four pawns attack, 6.Be2",
                        },
                        c7c5: {
                          d4d5: {
                            e7e6: {
                              d5e6: {
                                f7e6: {
                                  g2g4: {
                                    b8c6: {
                                      h2h4: {
                                        $: {
                                          id: 1977,
                                          eco: "E77",
                                          name: "King's Indian Defence: Six pawns attack",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              g1f3: {
                                $: {
                                  id: 1978,
                                  eco: "E77",
                                  name: "King's Indian Defence: Four pawns attack",
                                },
                                e6d5: {
                                  e4e5: {
                                    $: {
                                      id: 1979,
                                      eco: "E77",
                                      name: "King's Indian Defence: Four pawns attack, Florentine gambit",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          g1f3: {
                            $: {
                              id: 1980,
                              eco: "E78",
                              name: "King's Indian Defence: Four pawns attack, with Be2 and Nf3",
                            },
                            c5d4: {
                              f3d4: {
                                b8c6: {
                                  c1e3: {
                                    $: {
                                      id: 1981,
                                      eco: "E79",
                                      name: "King's Indian Defence: Four pawns attack, main line",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f2f3: {
                    $: {
                      id: 1982,
                      eco: "E80",
                      name: "King's Indian Defence: Saemisch variation",
                    },
                    e8g8: {
                      $: {
                        id: 1983,
                        eco: "E81",
                        name: "King's Indian Defence: Saemisch, 5...O-O",
                      },
                      c1e3: {
                        c7c6: {
                          f1d3: {
                            a7a6: {
                              $: {
                                id: 1984,
                                eco: "E81",
                                name: "King's Indian Defence: Saemisch, Byrne variation",
                              },
                            },
                          },
                        },
                        b7b6: {
                          $: {
                            id: 1985,
                            eco: "E82",
                            name: "King's Indian Defence: Saemisch, double fianchetto variation",
                          },
                        },
                        b8c6: {
                          $: {
                            id: 1986,
                            eco: "E83",
                            name: "King's Indian Defence: Saemisch, 6...Nc6",
                          },
                          g1e2: {
                            a8b8: {
                              $: {
                                id: 1987,
                                eco: "E83",
                                name: "King's Indian Defence: Saemisch, Ruban variation",
                              },
                            },
                            a7a6: {
                              $: {
                                id: 1988,
                                eco: "E83",
                                name: "King's Indian Defence: Saemisch, Panno formation",
                              },
                              d1d2: {
                                a8b8: {
                                  $: {
                                    id: 1989,
                                    eco: "E84",
                                    name: "King's Indian Defence: Saemisch, Panno main line",
                                  },
                                },
                              },
                            },
                          },
                        },
                        e7e5: {
                          $: {
                            id: 1990,
                            eco: "E85",
                            name: "King's Indian Defence: Saemisch, orthodox variation",
                          },
                          g1e2: {
                            c7c6: {
                              $: {
                                id: 1991,
                                eco: "E86",
                                name: "King's Indian Defence: Saemisch, orthodox, 7.Nge2 c6",
                              },
                            },
                          },
                          d4d5: {
                            $: {
                              id: 1992,
                              eco: "E87",
                              name: "King's Indian Defence: Saemisch, orthodox, 7.d5",
                            },
                            f6h5: {
                              d1d2: {
                                d8h4: {
                                  g2g3: {
                                    h5g3: {
                                      d2f2: {
                                        g3f1: {
                                          f2h4: {
                                            f1e3: {
                                              e1e2: {
                                                e3c4: {
                                                  $: {
                                                    id: 1993,
                                                    eco: "E87",
                                                    name: "King's Indian Defence: Saemisch, orthodox, Bronstein variation",
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            c7c6: {
                              $: {
                                id: 1994,
                                eco: "E88",
                                name: "King's Indian Defence: Saemisch, orthodox, 7.d5 c6",
                              },
                              g1e2: {
                                c6d5: {
                                  $: {
                                    id: 1995,
                                    eco: "E89",
                                    name: "King's Indian Defence: Saemisch, orthodox main line",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  g1f3: {
                    $: {
                      id: 1996,
                      eco: "E90",
                      name: "King's Indian Defence: 5.Nf3",
                    },
                    e8g8: {
                      c1e3: {
                        $: {
                          id: 1997,
                          eco: "E90",
                          name: "King's Indian Defence: Larsen variation",
                        },
                      },
                      c1g5: {
                        $: {
                          id: 1998,
                          eco: "E90",
                          name: "King's Indian Defence: Zinnowitz variation",
                        },
                      },
                      f1e2: {
                        $: {
                          id: 1999,
                          eco: "E91",
                          name: "King's Indian Defence: 6.Be2",
                        },
                        b8a6: {
                          $: {
                            id: 2000,
                            eco: "E91",
                            name: "King's Indian Defence: Kazakh variation",
                          },
                        },
                        e7e5: {
                          $: {
                            id: 2001,
                            eco: "E92",
                            name: "King's Indian Defence: classical variation",
                          },
                          d4e5: {
                            $: {
                              id: 2002,
                              eco: "E92",
                              name: "King's Indian Defence: Andersson variation",
                            },
                          },
                          c1e3: {
                            $: {
                              id: 2003,
                              eco: "E92",
                              name: "King's Indian Defence: Gligoric-Taimanov system",
                            },
                          },
                          d4d5: {
                            $: {
                              id: 2004,
                              eco: "E92",
                              name: "King's Indian Defence: Petrosian system",
                            },
                            a7a5: {
                              $: {
                                id: 2005,
                                eco: "E92",
                                name: "King's Indian Defence: Petrosian system, Stein variation",
                              },
                            },
                            b8d7: {
                              $: {
                                id: 2006,
                                eco: "E93",
                                name: "King's Indian Defence: Petrosian system, main line",
                              },
                              c1g5: {
                                h7h6: {
                                  g5h4: {
                                    g6g5: {
                                      h4g3: {
                                        f6h5: {
                                          h2h4: {
                                            $: {
                                              id: 2007,
                                              eco: "E93",
                                              name: "King's Indian Defence: Petrosian system, Keres variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          e1g1: {
                            $: {
                              id: 2008,
                              eco: "E94",
                              name: "King's Indian Defence: orthodox variation",
                            },
                            c7c6: {
                              $: {
                                id: 2009,
                                eco: "E94",
                                name: "King's Indian Defence: orthodox, Donner variation",
                              },
                            },
                            b8d7: {
                              $: {
                                id: 2010,
                                eco: "E94",
                                name: "King's Indian Defence: orthodox, 7...Nbd7",
                              },
                              f1e1: {
                                $: {
                                  id: 2011,
                                  eco: "E95",
                                  name: "King's Indian Defence: orthodox, 7...Nbd7, 8.Re1",
                                },
                                c7c6: {
                                  e2f1: {
                                    a7a5: {
                                      $: {
                                        id: 2012,
                                        eco: "E96",
                                        name: "King's Indian Defence: orthodox, 7...Nbd7, main line",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            b8c6: {
                              $: {
                                id: 2013,
                                eco: "E97",
                                name: "King's Indian Defence: orthodox, Aronin-Taimanov variation (Yugoslav attack / Mar del Plata variation)",
                              },
                              d4d5: {
                                c6e7: {
                                  b2b4: {
                                    $: {
                                      id: 2014,
                                      eco: "E97",
                                      name: "King's Indian Defence: orthodox, Aronin-Taimanov, bayonet attack",
                                    },
                                  },
                                  f3e1: {
                                    $: {
                                      id: 2015,
                                      eco: "E98",
                                      name: "King's Indian Defence: orthodox, Aronin-Taimanov, 9.Ne1",
                                    },
                                    f6d7: {
                                      f2f3: {
                                        f7f5: {
                                          $: {
                                            id: 2016,
                                            eco: "E99",
                                            name: "King's Indian Defence: orthodox, Aronin-Taimanov, main line",
                                          },
                                          g2g4: {
                                            $: {
                                              id: 2017,
                                              eco: "E99",
                                              name: "King's Indian Defence: orthodox, Aronin-Taimanov, Benko attack",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          $: { id: 1939, eco: "E60", name: "King's Indian Defence" },
          g1f3: {
            $: { id: 1940, eco: "E60", name: "King's Indian Defence: 3.Nf3" },
          },
          d1c2: {
            $: {
              id: 1941,
              eco: "E60",
              name: "Queen's pawn game: Mengarini attack",
            },
          },
          d4d5: {
            $: {
              id: 1942,
              eco: "E60",
              name: "King's Indian Defence: Anti-Gruenfeld",
            },
            b7b5: {
              $: {
                id: 1943,
                eco: "E60",
                name: "King's Indian Defence: Danube gambit",
              },
            },
          },
        },
        e7e6: {
          $: { id: 1820, eco: "E00", name: "Queen's pawn game" },
          c1g5: {
            $: { id: 1821, eco: "E00", name: "Neo-Indian (Seirawan) attack" },
          },
          g2g3: {
            $: { id: 1822, eco: "E00", name: "Catalan opening" },
            d7d5: {
              f1g2: {
                $: { id: 1823, eco: "E01", name: "Catalan: closed" },
                d5c4: {
                  d1a4: {
                    $: { id: 1824, eco: "E02", name: "Catalan: open, 5.Qa4" },
                    b8d7: {
                      a4c4: {
                        a7a6: {
                          c4c2: {
                            $: {
                              id: 1825,
                              eco: "E03",
                              name: "Catalan: open, Alekhine variation",
                            },
                          },
                        },
                        $: {
                          id: 1826,
                          eco: "E03",
                          name: "Catalan: open, 5.Qa4 Nbd7, 6.Qxc4",
                        },
                      },
                    },
                  },
                  g1f3: {
                    $: { id: 1827, eco: "E04", name: "Catalan: open, 5.Nf3" },
                    f8e7: {
                      $: {
                        id: 1828,
                        eco: "E05",
                        name: "Catalan: open, classical line",
                      },
                    },
                  },
                },
                f8e7: {
                  g1f3: {
                    $: { id: 1829, eco: "E06", name: "Catalan: closed, 5.Nf3" },
                    e8g8: {
                      e1g1: {
                        b8d7: {
                          $: {
                            id: 1830,
                            eco: "E07",
                            name: "Catalan: closed, 6...Nbd7",
                          },
                          b1c3: {
                            c7c6: {
                              d1d3: {
                                $: {
                                  id: 1831,
                                  eco: "E07",
                                  name: "Catalan: closed, Botvinnik variation",
                                },
                              },
                            },
                          },
                          d1c2: {
                            $: {
                              id: 1832,
                              eco: "E08",
                              name: "Catalan: closed, 7.Qc2",
                            },
                            c7c6: {
                              f1d1: {
                                b7b6: {
                                  a2a4: {
                                    $: {
                                      id: 1833,
                                      eco: "E08",
                                      name: "Catalan: closed, Zagoryansky variation",
                                    },
                                  },
                                },
                              },
                              b2b3: {
                                $: {
                                  id: 1834,
                                  eco: "E08",
                                  name: "Catalan: closed, Qc2 & b3",
                                },
                                b7b6: {
                                  f1d1: {
                                    c8b7: {
                                      b1c3: {
                                        b6b5: {
                                          $: {
                                            id: 1835,
                                            eco: "E08",
                                            name: "Catalan: closed, Spassky gambit",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              b1d2: {
                                $: {
                                  id: 1836,
                                  eco: "E09",
                                  name: "Catalan: closed, main line",
                                },
                                b7b6: {
                                  b2b3: {
                                    a7a5: {
                                      c1b2: {
                                        c8a6: {
                                          $: {
                                            id: 1837,
                                            eco: "E09",
                                            name: "Catalan: closed, Sokolsky variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          g1f3: {
            $: { id: 1838, eco: "E10", name: "Queen's pawn game" },
            c7c5: {
              d4d5: {
                b7b5: {
                  $: {
                    id: 1839,
                    eco: "E10",
                    name: "Queen's pawn game: Blumenfeld counter-gambit",
                  },
                  d5e6: {
                    f7e6: {
                      c4b5: {
                        d7d5: {
                          $: {
                            id: 1840,
                            eco: "E10",
                            name: "Queen's pawn game: Blumenfeld counter-gambit accepted",
                          },
                        },
                      },
                    },
                  },
                  c1g5: {
                    $: {
                      id: 1841,
                      eco: "E10",
                      name: "Queen's pawn game: Blumenfeld counter-gambit, Dus-Chotimursky",
                    },
                    e6d5: {
                      c4d5: {
                        h7h6: {
                          $: {
                            id: 1842,
                            eco: "E10",
                            name: "Queen's pawn game: Blumenfeld counter-gambit, Spielmann",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            a7a6: {
              $: {
                id: 1843,
                eco: "E10",
                name: "Queen's pawn game: Dzindzikhashvili",
              },
            },
            f6e4: {
              $: { id: 1844, eco: "E10", name: "Queen's pawn game: Doery" },
            },
            f8b4: {
              $: { id: 1845, eco: "E11", name: "Bogo-Indian Defence" },
              b1d2: {
                $: {
                  id: 1846,
                  eco: "E11",
                  name: "Bogo-Indian Defence: Gruenfeld",
                },
              },
              c1d2: {
                d8e7: {
                  $: {
                    id: 1847,
                    eco: "E11",
                    name: "Bogo-Indian Defence: Nimzovich",
                  },
                },
                b4d2: {
                  d1d2: {
                    b7b6: {
                      g2g3: {
                        c8b7: {
                          f1g2: {
                            e8g8: {
                              b1c3: {
                                f6e4: {
                                  d2c2: {
                                    e4c3: {
                                      f3g5: {
                                        $: {
                                          id: 1848,
                                          eco: "E11",
                                          name: "Bogo-Indian Defence: Monticelli trap",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            b7b6: {
              $: { id: 1849, eco: "E12", name: "Queen's Indian Defence" },
              c1f4: {
                $: {
                  id: 1850,
                  eco: "E12",
                  name: "Queen's Indian Defence: Miles variation",
                },
              },
              a2a3: {
                $: {
                  id: 1851,
                  eco: "E12",
                  name: "Queen's Indian Defence: Petrosian system",
                },
              },
              b1c3: {
                $: {
                  id: 1852,
                  eco: "E12",
                  name: "Queen's Indian Defence: 4.Nc3",
                },
                c8b7: {
                  c1g5: {
                    h7h6: {
                      g5h4: {
                        g7g5: {
                          h4g3: {
                            f6h5: {
                              $: {
                                id: 1853,
                                eco: "E12",
                                name: "Queen's Indian Defence: 4.Nc3, Botvinnik variation",
                              },
                            },
                          },
                        },
                        f8b4: {
                          $: {
                            id: 1854,
                            eco: "E13",
                            name: "Queen's Indian Defence: 4.Nc3, main line",
                          },
                        },
                      },
                    },
                  },
                },
              },
              e2e3: {
                $: {
                  id: 1855,
                  eco: "E14",
                  name: "Queen's Indian Defence: 4.e3",
                },
                c8b7: {
                  f1d3: {
                    c7c5: {
                      e1g1: {
                        f8e7: {
                          b2b3: {
                            e8g8: {
                              c1b2: {
                                c5d4: {
                                  f3d4: {
                                    $: {
                                      id: 1856,
                                      eco: "E14",
                                      name: "Queen's Indian Defence: Averbakh variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g2g3: {
                $: {
                  id: 1857,
                  eco: "E15",
                  name: "Queen's Indian Defence: 4.g3",
                },
                c8a6: {
                  $: {
                    id: 1858,
                    eco: "E15",
                    name: "Queen's Indian Defence: Nimzovich variation (exaggerated fianchetto)",
                  },
                },
                c8b7: {
                  $: {
                    id: 1859,
                    eco: "E15",
                    name: "Queen's Indian Defence: 4.g3 Bb7",
                  },
                  f1g2: {
                    c7c5: {
                      d4d5: {
                        e6d5: {
                          f3h4: {
                            $: {
                              id: 1860,
                              eco: "E15",
                              name: "Queen's Indian Defence: Rubinstein variation",
                            },
                          },
                          f3g5: {
                            $: {
                              id: 1861,
                              eco: "E15",
                              name: "Queen's Indian Defence: Buerger variation",
                            },
                          },
                        },
                      },
                    },
                    f8b4: {
                      $: {
                        id: 1862,
                        eco: "E16",
                        name: "Queen's Indian Defence: Capablanca variation",
                      },
                      c1d2: {
                        a7a5: {
                          $: {
                            id: 1863,
                            eco: "E16",
                            name: "Queen's Indian Defence: Yates variation",
                          },
                        },
                        b4e7: {
                          $: {
                            id: 1864,
                            eco: "E16",
                            name: "Queen's Indian Defence: Riumin variation",
                          },
                        },
                      },
                    },
                    f8e7: {
                      $: {
                        id: 1865,
                        eco: "E17",
                        name: "Queen's Indian Defence: 5.Bg2 Be7",
                      },
                      b1c3: {
                        $: {
                          id: 1866,
                          eco: "E17",
                          name: "Queen's Indian Defence: anti-Queen's Indian system",
                        },
                        f6e4: {
                          c1d2: {
                            $: {
                              id: 1867,
                              eco: "E17",
                              name: "Queen's Indian Defence: Opovcensky variation",
                            },
                          },
                        },
                      },
                      e1g1: {
                        $: {
                          id: 1868,
                          eco: "E17",
                          name: "Queen's Indian Defence: old main line, 6.O-O",
                        },
                        e8g8: {
                          b2b3: {
                            $: {
                              id: 1869,
                              eco: "E17",
                              name: "Queen's Indian Defence: Euwe variation",
                            },
                          },
                          b1c3: {
                            $: {
                              id: 1870,
                              eco: "E18",
                              name: "Queen's Indian Defence: old main line, 7.Nc3",
                            },
                            f6e4: {
                              d1c2: {
                                e4c3: {
                                  c2c3: {
                                    $: {
                                      id: 1871,
                                      eco: "E19",
                                      name: "Queen's Indian Defence: old main line, 9.Qxc3",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            f8b4: {
              $: { id: 1872, eco: "E20", name: "Nimzo-Indian" },
              f2f3: {
                $: {
                  id: 1873,
                  eco: "E20",
                  name: "Nimzo-Indian: Kmoch variation",
                },
              },
              d1d3: {
                $: {
                  id: 1874,
                  eco: "E20",
                  name: "Nimzo-Indian: Mikenas attack",
                },
              },
              g2g3: {
                $: {
                  id: 1875,
                  eco: "E20",
                  name: "Nimzo-Indian: Romanishin-Kasparov (Steiner) system",
                },
              },
              g1f3: {
                $: {
                  id: 1876,
                  eco: "E21",
                  name: "Nimzo-Indian: three knights variation",
                },
                c7c5: {
                  d4d5: {
                    $: {
                      id: 1877,
                      eco: "E21",
                      name: "Nimzo-Indian: three knights, Korchnoi variation",
                    },
                    f6e4: {
                      $: {
                        id: 1878,
                        eco: "E21",
                        name: "Nimzo-Indian: three knights, Euwe variation",
                      },
                    },
                  },
                },
              },
              d1b3: {
                $: {
                  id: 1879,
                  eco: "E22",
                  name: "Nimzo-Indian: Spielmann variation",
                },
                c7c5: {
                  d4c5: {
                    b8c6: {
                      $: {
                        id: 1880,
                        eco: "E23",
                        name: "Nimzo-Indian: Spielmann, 4...c5, 5.dc Nc6",
                      },
                      g1f3: {
                        f6e4: {
                          c1d2: {
                            e4d2: {
                              $: {
                                id: 1881,
                                eco: "E23",
                                name: "Nimzo-Indian: Spielmann, Karlsbad variation",
                              },
                            },
                            e4c5: {
                              $: {
                                id: 1882,
                                eco: "E23",
                                name: "Nimzo-Indian: Spielmann, San Remo variation",
                              },
                              b3c2: {
                                f7f5: {
                                  g2g3: {
                                    $: {
                                      id: 1883,
                                      eco: "E23",
                                      name: "Nimzo-Indian: Spielmann, Staahlberg variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              a2a3: {
                b4c3: {
                  b2c3: {
                    $: {
                      id: 1884,
                      eco: "E24",
                      name: "Nimzo-Indian: Saemisch variation",
                    },
                    c7c5: {
                      f2f3: {
                        d7d5: {
                          e2e3: {
                            e8g8: {
                              c4d5: {
                                f6d5: {
                                  $: {
                                    id: 1885,
                                    eco: "E24",
                                    name: "Nimzo-Indian: Saemisch, Botvinnik variation",
                                  },
                                },
                              },
                            },
                          },
                          c4d5: {
                            $: {
                              id: 1886,
                              eco: "E25",
                              name: "Nimzo-Indian: Saemisch variation",
                            },
                            f6d5: {
                              d4c5: {
                                $: {
                                  id: 1887,
                                  eco: "E25",
                                  name: "Nimzo-Indian: Saemisch, Keres variation",
                                },
                                f7f5: {
                                  $: {
                                    id: 1888,
                                    eco: "E25",
                                    name: "Nimzo-Indian: Saemisch, Romanovsky variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      e2e3: {
                        $: {
                          id: 1889,
                          eco: "E26",
                          name: "Nimzo-Indian: Saemisch variation",
                        },
                        b7b6: {
                          $: {
                            id: 1890,
                            eco: "E26",
                            name: "Nimzo-Indian: Saemisch, O'Kelly variation",
                          },
                        },
                      },
                    },
                    e8g8: {
                      $: {
                        id: 1891,
                        eco: "E27",
                        name: "Nimzo-Indian: Saemisch variation",
                      },
                      e2e3: {
                        $: {
                          id: 1892,
                          eco: "E28",
                          name: "Nimzo-Indian: Saemisch variation",
                        },
                        c7c5: {
                          f1d3: {
                            b8c6: {
                              $: {
                                id: 1893,
                                eco: "E29",
                                name: "Nimzo-Indian: Saemisch, main line",
                              },
                              g1e2: {
                                b7b6: {
                                  e3e4: {
                                    f6e8: {
                                      $: {
                                        id: 1894,
                                        eco: "E29",
                                        name: "Nimzo-Indian: Saemisch, Capablanca variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c1g5: {
                $: {
                  id: 1895,
                  eco: "E30",
                  name: "Nimzo-Indian: Leningrad variation",
                },
                h7h6: {
                  g5h4: {
                    c7c5: {
                      d4d5: {
                        b7b5: {
                          $: {
                            id: 1896,
                            eco: "E30",
                            name: "Nimzo-Indian: Leningrad, ...b5 gambit",
                          },
                        },
                        d7d6: {
                          $: {
                            id: 1897,
                            eco: "E31",
                            name: "Nimzo-Indian: Leningrad, main line",
                          },
                        },
                      },
                    },
                  },
                },
              },
              d1c2: {
                $: {
                  id: 1898,
                  eco: "E32",
                  name: "Nimzo-Indian: classical variation",
                },
                e8g8: {
                  a2a3: {
                    b4c3: {
                      c2c3: {
                        b7b5: {
                          $: {
                            id: 1899,
                            eco: "E32",
                            name: "Nimzo-Indian: classical, Adorjan gambit",
                          },
                        },
                      },
                    },
                  },
                },
                b8c6: {
                  $: {
                    id: 1900,
                    eco: "E33",
                    name: "Nimzo-Indian: classical, 4...Nc6",
                  },
                  g1f3: {
                    d7d6: {
                      $: {
                        id: 1901,
                        eco: "E33",
                        name: "Nimzo-Indian: classical, Milner-Barry (Zurich) variation",
                      },
                    },
                  },
                },
                d7d5: {
                  $: {
                    id: 1902,
                    eco: "E34",
                    name: "Nimzo-Indian: classical, Noa variation",
                  },
                  c4d5: {
                    e6d5: {
                      $: {
                        id: 1903,
                        eco: "E35",
                        name: "Nimzo-Indian: classical, Noa variation, 5.cd ed",
                      },
                    },
                  },
                  a2a3: {
                    $: {
                      id: 1904,
                      eco: "E36",
                      name: "Nimzo-Indian: classical, Noa variation, 5.a3",
                    },
                    b4c3: {
                      c2c3: {
                        b8c6: {
                          $: {
                            id: 1905,
                            eco: "E36",
                            name: "Nimzo-Indian: classical, Botvinnik variation",
                          },
                        },
                        f6e4: {
                          $: {
                            id: 1906,
                            eco: "E36",
                            name: "Nimzo-Indian: classical, Noa variation, main line",
                          },
                          c3c2: {
                            $: {
                              id: 1907,
                              eco: "E37",
                              name: "Nimzo-Indian: classical, Noa variation, main line, 7.Qc2",
                            },
                            b8c6: {
                              e2e3: {
                                e6e5: {
                                  $: {
                                    id: 1908,
                                    eco: "E37",
                                    name: "Nimzo-Indian: classical, San Remo variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                c7c5: {
                  $: {
                    id: 1909,
                    eco: "E38",
                    name: "Nimzo-Indian: classical, 4...c5",
                  },
                  d4c5: {
                    e8g8: {
                      $: {
                        id: 1910,
                        eco: "E39",
                        name: "Nimzo-Indian: classical, Pirc variation",
                      },
                    },
                  },
                },
              },
              e2e3: {
                $: { id: 1911, eco: "E40", name: "Nimzo-Indian: 4.e3" },
                b8c6: {
                  $: {
                    id: 1912,
                    eco: "E40",
                    name: "Nimzo-Indian: 4.e3, Taimanov variation",
                  },
                },
                c7c5: {
                  $: { id: 1913, eco: "E41", name: "Nimzo-Indian: 4.e3 c5" },
                  f1d3: {
                    b8c6: {
                      g1f3: {
                        b4c3: {
                          b2c3: {
                            d7d6: {
                              $: {
                                id: 1914,
                                eco: "E41",
                                name: "Nimzo-Indian: e3, Huebner variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  g1e2: {
                    $: {
                      id: 1915,
                      eco: "E42",
                      name: "Nimzo-Indian: 4.e3 c5, 5.Ne2 (Rubinstein)",
                    },
                  },
                },
                b7b6: {
                  $: {
                    id: 1916,
                    eco: "E43",
                    name: "Nimzo-Indian: Fischer variation",
                  },
                  g1e2: {
                    $: {
                      id: 1917,
                      eco: "E44",
                      name: "Nimzo-Indian: Fischer variation, 5.Ne2",
                    },
                    c8a6: {
                      $: {
                        id: 1918,
                        eco: "E45",
                        name: "Nimzo-Indian: 4.e3, Bronstein (Byrne) variation",
                      },
                    },
                  },
                },
                e8g8: {
                  $: { id: 1919, eco: "E46", name: "Nimzo-Indian: 4.e3 O-O" },
                  g1e2: {
                    $: {
                      id: 1920,
                      eco: "E46",
                      name: "Nimzo-Indian: Reshevsky variation",
                    },
                    d7d5: {
                      a2a3: {
                        b4d6: {
                          $: {
                            id: 1921,
                            eco: "E46",
                            name: "Nimzo-Indian: Simagin variation",
                          },
                        },
                      },
                    },
                  },
                  f1d3: {
                    $: {
                      id: 1922,
                      eco: "E47",
                      name: "Nimzo-Indian: 4.e3 O-O, 5.Bd3",
                    },
                    d7d5: {
                      $: {
                        id: 1923,
                        eco: "E48",
                        name: "Nimzo-Indian: 4.e3 O-O, 5.Bd3 d5",
                      },
                      a2a3: {
                        b4c3: {
                          b2c3: {
                            $: {
                              id: 1924,
                              eco: "E49",
                              name: "Nimzo-Indian: 4.e3, Botvinnik system",
                            },
                          },
                        },
                      },
                    },
                  },
                  g1f3: {
                    $: {
                      id: 1925,
                      eco: "E50",
                      name: "Nimzo-Indian: 4.e3 e8g8, 5.Nf3, without ...d5",
                    },
                    d7d5: {
                      $: {
                        id: 1926,
                        eco: "E51",
                        name: "Nimzo-Indian: 4.e3 e8g8, 5.Nf3 d7d5",
                      },
                      f1d3: {
                        b8c6: {
                          e1g1: {
                            d5c4: {
                              $: {
                                id: 1927,
                                eco: "E51",
                                name: "Nimzo-Indian: 4.e3, Ragozin variation",
                              },
                            },
                          },
                        },
                        b7b6: {
                          $: {
                            id: 1928,
                            eco: "E52",
                            name: "Nimzo-Indian: 4.e3, main line with ...b6",
                          },
                        },
                        c7c5: {
                          $: {
                            id: 1929,
                            eco: "E53",
                            name: "Nimzo-Indian: 4.e3, main line with ...c5",
                          },
                          e1g1: {
                            b7b6: {
                              $: {
                                id: 1930,
                                eco: "E53",
                                name: "Nimzo-Indian: 4.e3, Keres variation",
                              },
                            },
                            b8d7: {
                              $: {
                                id: 1931,
                                eco: "E53",
                                name: "Nimzo-Indian: 4.e3, Gligoric system with 7...Nbd7",
                              },
                            },
                            d5c4: {
                              d3c4: {
                                $: {
                                  id: 1932,
                                  eco: "E54",
                                  name: "Nimzo-Indian: 4.e3, Gligoric system with 7...dc",
                                },
                                d8e7: {
                                  $: {
                                    id: 1933,
                                    eco: "E54",
                                    name: "Nimzo-Indian: 4.e3, Gligoric system, Smyslov variation",
                                  },
                                },
                                b8d7: {
                                  $: {
                                    id: 1934,
                                    eco: "E55",
                                    name: "Nimzo-Indian: 4.e3, Gligoric system, Bronstein variation",
                                  },
                                },
                              },
                            },
                            b8c6: {
                              $: {
                                id: 1935,
                                eco: "E56",
                                name: "Nimzo-Indian: 4.e3, main line with 7...Nc6",
                              },
                              a2a3: {
                                d5c4: {
                                  d3c4: {
                                    c5d4: {
                                      $: {
                                        id: 1936,
                                        eco: "E57",
                                        name: "Nimzo-Indian: 4.e3, main line with 8...dc and 9...cd",
                                      },
                                    },
                                  },
                                },
                                b4c3: {
                                  b2c3: {
                                    $: {
                                      id: 1937,
                                      eco: "E58",
                                      name: "Nimzo-Indian: 4.e3, main line with 8...Bxc3",
                                    },
                                    d5c4: {
                                      d3c4: {
                                        $: {
                                          id: 1938,
                                          eco: "E59",
                                          name: "Nimzo-Indian: 4.e3, main line",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    f7f5: {
      $: { id: 289, eco: "A80", name: "Dutch" },
      b1c3: {
        g8f6: {
          g2g4: { $: { id: 290, eco: "A80", name: "Dutch: Spielmann gambit" } },
        },
      },
      d1d3: {
        $: { id: 291, eco: "A80", name: "Dutch: Manhattan (Alapin, Ulvestad)" },
        e7e6: {
          g2g4: {
            $: { id: 292, eco: "A80", name: "Dutch: Von Pretzel gambit" },
          },
        },
      },
      h2h3: { $: { id: 293, eco: "A80", name: "Dutch: Korchnoi attack" } },
      g2g4: { $: { id: 294, eco: "A80", name: "Dutch: Krejcik gambit" } },
      c1g5: { $: { id: 295, eco: "A80", name: "Dutch: 2.Bg5" } },
      g2g3: {
        $: { id: 296, eco: "A81", name: "Dutch" },
        g8f6: {
          f1g2: {
            e7e6: {
              g1h3: { $: { id: 297, eco: "A81", name: "Dutch: Blackburne" } },
            },
            g7g6: { $: { id: 298, eco: "A81", name: "Dutch" } },
          },
        },
        g7g6: {
          f1g2: {
            f8g7: {
              g1f3: {
                c7c6: {
                  e1g1: {
                    g8h6: {
                      $: {
                        id: 299,
                        eco: "A81",
                        name: "Dutch: Leningrad, Basman system",
                      },
                    },
                  },
                },
              },
              g1h3: {
                $: {
                  id: 300,
                  eco: "A81",
                  name: "Dutch: Leningrad, Karlsbad variation",
                },
              },
            },
          },
        },
      },
      e2e4: {
        $: { id: 301, eco: "A82", name: "Dutch: Staunton gambit" },
        d7d6: { $: { id: 302, eco: "A82", name: "Dutch: Balogh defence" } },
        f5e4: {
          $: { id: 303, eco: "A82", name: "Dutch: Staunton gambit" },
          b1c3: {
            g8f6: {
              g2g4: {
                $: {
                  id: 304,
                  eco: "A82",
                  name: "Dutch: Staunton gambit, Tartakower variation",
                },
              },
              c1g5: {
                $: {
                  id: 305,
                  eco: "A83",
                  name: "Dutch: Staunton gambit, Staunton's line",
                },
                g7g6: {
                  h2h4: {
                    $: {
                      id: 306,
                      eco: "A83",
                      name: "Dutch: Staunton gambit, Alekhine variation",
                    },
                  },
                  f2f3: {
                    $: {
                      id: 307,
                      eco: "A83",
                      name: "Dutch: Staunton gambit, Lasker variation",
                    },
                  },
                },
                c7c6: {
                  $: {
                    id: 308,
                    eco: "A83",
                    name: "Dutch: Staunton gambit, Chigorin variation",
                  },
                },
                b7b6: {
                  $: {
                    id: 309,
                    eco: "A83",
                    name: "Dutch: Staunton gambit, Nimzovich variation",
                  },
                },
              },
            },
          },
        },
      },
      c2c4: {
        $: { id: 310, eco: "A84", name: "Dutch" },
        g7g6: {
          b1c3: {
            g8h6: {
              $: { id: 311, eco: "A84", name: "Dutch: Bladel variation" },
            },
          },
        },
        e7e6: {
          $: { id: 312, eco: "A84", name: "Dutch" },
          b1c3: { $: { id: 313, eco: "A84", name: "Dutch: Rubinstein" } },
          e2e4: {
            $: { id: 314, eco: "A84", name: "Dutch: Staunton gambit deferred" },
          },
        },
        g8f6: {
          $: { id: 315, eco: "A84", name: "Dutch" },
          b1c3: { $: { id: 316, eco: "A85", name: "Dutch with c4 & Nc3" } },
          g2g3: {
            $: { id: 317, eco: "A86", name: "Dutch: 2. c4 Nf6 3. g3" },
            d7d6: {
              f1g2: {
                c7c6: {
                  b1c3: {
                    d8c7: {
                      $: {
                        id: 318,
                        eco: "A86",
                        name: "Dutch: Hort-Antoshin system",
                      },
                    },
                  },
                },
              },
            },
            g7g6: {
              $: { id: 319, eco: "A86", name: "Dutch: Leningrad variation" },
              f1g2: {
                f8g7: {
                  g1f3: {
                    $: {
                      id: 320,
                      eco: "A87",
                      name: "Dutch: Leningrad, main variation",
                    },
                    e8g8: {
                      e1g1: {
                        d7d6: {
                          b1c3: {
                            c7c6: {
                              $: {
                                id: 321,
                                eco: "A88",
                                name: "Dutch: Leningrad, main variation with c6",
                              },
                            },
                            b8c6: {
                              $: {
                                id: 322,
                                eco: "A89",
                                name: "Dutch: Leningrad, main variation with Nc6",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            e7e6: {
              f1g2: {
                $: { id: 323, eco: "A90", name: "Dutch: Alekhine" },
                f8b4: {
                  $: { id: 324, eco: "A90", name: "Dutch: Tartakower" },
                  c1d2: {
                    b4e7: {
                      $: { id: 325, eco: "A90", name: "Dutch: Spielmann" },
                    },
                  },
                },
                f8e7: {
                  $: { id: 326, eco: "A91", name: "Dutch: Botvinnik" },
                  g1f3: {
                    e8g8: {
                      $: { id: 327, eco: "A92", name: "Dutch: Alekhine" },
                      e1g1: {
                        f6e4: {
                          $: { id: 328, eco: "A92", name: "Dutch: Alekhine" },
                        },
                        d7d5: {
                          $: {
                            id: 329,
                            eco: "A92",
                            name: "Dutch: stonewall variation",
                          },
                          b1c3: {
                            $: {
                              id: 330,
                              eco: "A92",
                              name: "Dutch: stonewall with Nc3",
                            },
                            c7c6: {
                              $: {
                                id: 333,
                                eco: "A95",
                                name: "Dutch: stonewall with Nc3",
                              },
                              d1c2: {
                                d8e8: {
                                  c1g5: {
                                    $: {
                                      id: 334,
                                      eco: "A95",
                                      name: "Dutch: stonewall: Chekhover variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          b2b3: {
                            $: {
                              id: 331,
                              eco: "A93",
                              name: "Dutch: stonewall, Botwinnik variation",
                            },
                            c7c6: {
                              c1a3: {
                                $: {
                                  id: 332,
                                  eco: "A94",
                                  name: "Dutch: stonewall with Ba3",
                                },
                              },
                            },
                          },
                        },
                        d7d6: {
                          $: {
                            id: 335,
                            eco: "A96",
                            name: "Dutch: classical variation",
                          },
                          b1c3: {
                            d8e8: {
                              $: {
                                id: 336,
                                eco: "A97",
                                name: "Dutch: Ilyin-Genevsky variation",
                              },
                              f1e1: {
                                $: {
                                  id: 337,
                                  eco: "A97",
                                  name: "Dutch: Ilyin-Genevsky, Winter variation",
                                },
                              },
                              d1c2: {
                                $: {
                                  id: 338,
                                  eco: "A98",
                                  name: "Dutch: Ilyin-Genevsky variation with Qc2",
                                },
                              },
                              b2b3: {
                                $: {
                                  id: 339,
                                  eco: "A99",
                                  name: "Dutch: Ilyin-Genevsky variation with b3",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    d7d5: {
      $: { id: 1495, eco: "D00", name: "Queen's pawn game" },
      c1f4: {
        $: { id: 1496, eco: "D00", name: "Queen's pawn game: Blackburne" },
        c7c5: {
          $: { id: 1497, eco: "D00", name: "Queen's pawn game: Steinitz" },
        },
      },
      c1g5: { $: { id: 1498, eco: "D00", name: "Queen's pawn game: Kan" } },
      e2e4: { $: { id: 1499, eco: "D00", name: "Blackmar gambit" } },
      e2e3: {
        g8f6: {
          f1d3: {
            $: {
              id: 1500,
              eco: "D00",
              name: "Queen's pawn game: stonewall attack",
            },
          },
        },
      },
      b1c3: {
        $: {
          id: 1501,
          eco: "D00",
          name: "Queen's pawn game: Chigorin variation",
        },
        c8g4: {
          $: { id: 1502, eco: "D00", name: "Queen's pawn game: Anti-Veresov" },
        },
        g8f6: {
          e2e4: {
            $: { id: 1503, eco: "D00", name: "Blackmar-Diemer Gambit" },
            d5e4: {
              f2f3: {
                e4f3: {
                  g1f3: {
                    e7e6: {
                      $: {
                        id: 1504,
                        eco: "D00",
                        name: "Blackmar-Diemer Gambit: Euwe defence",
                      },
                    },
                  },
                },
              },
            },
            e7e5: {
              $: {
                id: 1505,
                eco: "D00",
                name: "Blackmar-Diemer Gambit: Lemberg counter-gambit",
              },
            },
          },
          c1g5: {
            $: {
              id: 1506,
              eco: "D01",
              name: "Richter-Veresov attack: Von Popiel/Tartakower/Richter/Veresov",
            },
            c8f5: {
              g5f6: {
                $: {
                  id: 1507,
                  eco: "D01",
                  name: "Richter-Veresov attack: Von Popiel/Tartakower/Richter/Veresov",
                },
              },
              f2f3: {
                $: {
                  id: 1508,
                  eco: "D01",
                  name: "Richter-Veresov attack: Von Popiel/Richter/Veresov",
                },
              },
            },
          },
        },
      },
      g1f3: {
        $: { id: 1509, eco: "D02", name: "Queen's pawn game" },
        b8c6: {
          $: {
            id: 1510,
            eco: "D02",
            name: "Queen's pawn game, Chigorin variation",
          },
        },
        c7c5: {
          $: {
            id: 1511,
            eco: "D02",
            name: "Queen's pawn game, Krause variation",
          },
        },
        g8f6: {
          $: { id: 1512, eco: "D02", name: "Queen's pawn game" },
          c1f4: { $: { id: 1513, eco: "D02", name: "Queen's bishop game" } },
          c1g5: {
            $: {
              id: 1514,
              eco: "D03",
              name: "Torre attack (Tartakower variation)",
            },
          },
          e2e3: {
            $: { id: 1515, eco: "D04", name: "Queen's pawn game" },
            e7e6: {
              $: {
                id: 1516,
                eco: "D05",
                name: "Queen's pawn game: Mason-Zukertort",
              },
              b1d2: {
                c7c5: {
                  b2b3: {
                    $: {
                      id: 1517,
                      eco: "D05",
                      name: "Queen's pawn game: Marshall-Duras",
                    },
                  },
                },
              },
              f1d3: {
                $: {
                  id: 1518,
                  eco: "D05",
                  name: "Queen's pawn game: Zukertort",
                },
                c7c5: {
                  b2b3: {
                    $: {
                      id: 1519,
                      eco: "D05",
                      name: "Queen's pawn game: Zukertort",
                    },
                  },
                  c2c3: { $: { id: 1520, eco: "D05", name: "Colle system" } },
                },
              },
            },
          },
        },
      },
      c2c4: {
        $: { id: 1521, eco: "D06", name: "Queen's Gambit" },
        c8f5: {
          $: {
            id: 1522,
            eco: "D06",
            name: "Queen's Gambit Declined: Grau (Sahovic) defence",
          },
        },
        g8f6: {
          $: {
            id: 1523,
            eco: "D06",
            name: "Queen's Gambit Declined: Marshall defence",
          },
        },
        c7c5: {
          $: {
            id: 1524,
            eco: "D06",
            name: "Queen's Gambit Declined: symmetrical (Austrian) defence",
          },
        },
        b8c6: {
          $: {
            id: 1525,
            eco: "D07",
            name: "Queen's Gambit Declined: Chigorin defence",
          },
          b1c3: {
            d5c4: {
              g1f3: {
                $: {
                  id: 1526,
                  eco: "D07",
                  name: "Queen's Gambit Declined: Chigorin defence, Janowski variation",
                },
              },
            },
          },
        },
        e7e5: {
          $: {
            id: 1527,
            eco: "D08",
            name: "Queen's Gambit Declined: Albin counter-gambit",
          },
          d4e5: {
            d5d4: {
              e2e3: {
                f8b4: {
                  c1d2: {
                    d4e3: {
                      $: {
                        id: 1528,
                        eco: "D08",
                        name: "Queen's Gambit Declined: Albin counter-gambit, Lasker trap",
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 1529,
                  eco: "D08",
                  name: "Queen's Gambit Declined: Albin counter-gambit",
                },
                b8c6: {
                  b1d2: {
                    $: {
                      id: 1530,
                      eco: "D08",
                      name: "Queen's Gambit Declined: Albin counter-gambit, Alapin variation",
                    },
                    c8g4: {
                      h2h3: {
                        g4f3: {
                          d2f3: {
                            f8b4: {
                              c1d2: {
                                d8e7: {
                                  $: {
                                    id: 1531,
                                    eco: "D08",
                                    name: "Queen's Gambit Declined: Albin counter-gambit, Krenosz variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    f7f6: {
                      $: {
                        id: 1532,
                        eco: "D08",
                        name: "Queen's Gambit Declined: Albin counter-gambit, Janowski variation",
                      },
                    },
                    d8e7: {
                      $: {
                        id: 1533,
                        eco: "D08",
                        name: "Queen's Gambit Declined: Albin counter-gambit, Balogh variation",
                      },
                    },
                  },
                  g2g3: {
                    $: {
                      id: 1534,
                      eco: "D09",
                      name: "Queen's Gambit Declined: Albin counter-gambit, 5.g3",
                    },
                  },
                },
              },
            },
          },
        },
        c7c6: {
          $: { id: 1535, eco: "D10", name: "QGD Slav" },
          b1c3: {
            d5c4: {
              e2e4: { $: { id: 1536, eco: "D10", name: "QGD Slav: Alekhine" } },
            },
            e7e5: {
              $: {
                id: 1537,
                eco: "D10",
                name: "QGD Slav: Winawer counter-gambit",
              },
            },
          },
          c4d5: { $: { id: 1538, eco: "D10", name: "QGD Slav: Exchange" } },
          g1f3: {
            $: { id: 1539, eco: "D11", name: "QGD Slav: 3.Nf3" },
            g8f6: {
              b1d2: {
                $: { id: 1540, eco: "D11", name: "QGD Slav: Breyer variation" },
              },
              e2e3: {
                $: { id: 1541, eco: "D11", name: "QGD Slav: 4.e3" },
                c8f5: {
                  $: { id: 1542, eco: "D12", name: "QGD Slav: 4.e3 Bf5" },
                  c4d5: {
                    c6d5: {
                      d1b3: {
                        d8c8: {
                          c1d2: {
                            e7e6: {
                              b1a3: {
                                $: {
                                  id: 1543,
                                  eco: "D12",
                                  name: "QGD Slav: Landau variation",
                                },
                              },
                            },
                          },
                        },
                      },
                      b1c3: {
                        $: {
                          id: 1544,
                          eco: "D12",
                          name: "QGD Slav: exchange variation",
                        },
                        e7e6: {
                          f3e5: {
                            f6d7: {
                              $: {
                                id: 1545,
                                eco: "D12",
                                name: "QGD Slav: Amsterdam variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c4d5: {
                c6d5: {
                  $: {
                    id: 1546,
                    eco: "D13",
                    name: "QGD Slav: exchange variation",
                  },
                  b1c3: {
                    b8c6: {
                      c1f4: {
                        c8f5: {
                          $: {
                            id: 1547,
                            eco: "D14",
                            name: "QGD Slav: exchange variation, 6.Bf4 Bf5",
                          },
                          e2e3: {
                            e7e6: {
                              d1b3: {
                                f8b4: {
                                  $: {
                                    id: 1548,
                                    eco: "D14",
                                    name: "QGD Slav: exchange, Trifunovic variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              b1c3: {
                $: { id: 1549, eco: "D15", name: "QGD Slav: 4.Nc3" },
                d8b6: {
                  $: {
                    id: 1550,
                    eco: "D15",
                    name: "QGD Slav: Suechting variation",
                  },
                },
                g7g6: {
                  $: {
                    id: 1551,
                    eco: "D15",
                    name: "QGD Slav: Schlechter variation",
                  },
                },
                d5c4: {
                  $: { id: 1552, eco: "D15", name: "QGD Slav accepted" },
                  e2e3: {
                    $: {
                      id: 1553,
                      eco: "D15",
                      name: "QGD Slav: 5.e3 (Alekhine variation)",
                    },
                  },
                  e2e4: {
                    $: { id: 1554, eco: "D15", name: "QGD Slav: Slav gambit" },
                    b7b5: {
                      e4e5: {
                        $: {
                          id: 1555,
                          eco: "D15",
                          name: "QGD Slav: Tolush-Geller gambit",
                        },
                      },
                    },
                  },
                  a2a4: {
                    $: {
                      id: 1556,
                      eco: "D16",
                      name: "QGD Slav accepted: Alapin variation",
                    },
                    b8a6: {
                      e2e4: {
                        c8g4: {
                          $: {
                            id: 1557,
                            eco: "D16",
                            name: "QGD Slav: Smyslov variation",
                          },
                        },
                      },
                    },
                    e7e6: {
                      $: {
                        id: 1558,
                        eco: "D16",
                        name: "QGD Slav: Soultanbeieff variation",
                      },
                    },
                    c8g4: {
                      $: {
                        id: 1559,
                        eco: "D16",
                        name: "QGD Slav: Steiner variation",
                      },
                    },
                    c8f5: {
                      $: {
                        id: 1560,
                        eco: "D17",
                        name: "QGD Slav: Czech defence",
                      },
                      f3e5: {
                        $: {
                          id: 1561,
                          eco: "D17",
                          name: "QGD Slav: Krause attack",
                        },
                        b8d7: {
                          e5c4: {
                            d8c7: {
                              g2g3: {
                                e7e5: {
                                  $: {
                                    id: 1562,
                                    eco: "D17",
                                    name: "QGD Slav: Carlsbad variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                        e7e6: {
                          $: {
                            id: 1563,
                            eco: "D17",
                            name: "QGD Slav: Wiesbaden variation",
                          },
                        },
                      },
                      e2e3: {
                        $: {
                          id: 1564,
                          eco: "D18",
                          name: "QGD Slav: Dutch variation",
                        },
                        b8a6: {
                          $: {
                            id: 1565,
                            eco: "D18",
                            name: "QGD Slav: Dutch, Lasker variation",
                          },
                        },
                        e7e6: {
                          f1c4: {
                            f8b4: {
                              e1g1: {
                                $: {
                                  id: 1566,
                                  eco: "D19",
                                  name: "QGD Slav: Dutch variation",
                                },
                                e8g8: {
                                  d1e2: {
                                    $: {
                                      id: 1567,
                                      eco: "D19",
                                      name: "QGD Slav: Dutch variation, main line",
                                    },
                                    f6e4: {
                                      g2g4: {
                                        $: {
                                          id: 1568,
                                          eco: "D19",
                                          name: "QGD Slav: Dutch, Saemisch variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        d5c4: {
          $: { id: 1569, eco: "D20", name: "QGA" },
          e2e4: {
            $: { id: 1570, eco: "D20", name: "QGA: 3.e4" },
            c7c5: {
              d4d5: {
                g8f6: {
                  b1c3: {
                    b7b5: {
                      $: {
                        id: 1571,
                        eco: "D20",
                        name: "QGA: Linares variation",
                      },
                    },
                  },
                },
              },
            },
            f7f5: {
              $: { id: 1572, eco: "D20", name: "QGA: Schwartz defence" },
            },
          },
          g1f3: {
            $: { id: 1573, eco: "D21", name: "QGA: 3.Nf3" },
            b7b5: {
              $: { id: 1574, eco: "D21", name: "QGA: Ericson variation" },
            },
            a7a6: {
              e2e4: {
                $: {
                  id: 1575,
                  eco: "D21",
                  name: "QGA: Alekhine defense, Borisenko-Furman variation",
                },
              },
              $: { id: 1576, eco: "D22", name: "QGA: Alekhine defence" },
              e2e3: {
                c8g4: {
                  f1c4: {
                    e7e6: {
                      d4d5: {
                        $: {
                          id: 1577,
                          eco: "D22",
                          name: "QGA: Alekhine defence, Alatortsev variation",
                        },
                      },
                    },
                  },
                },
                b7b5: {
                  $: { id: 1578, eco: "D22", name: "QGA: Haberditz variation" },
                },
              },
            },
            g8f6: {
              $: { id: 1579, eco: "D23", name: "QGA: 3. Nf3 Nf6" },
              d1a4: {
                $: { id: 1580, eco: "D23", name: "QGA: Mannheim variation" },
              },
              b1c3: {
                $: { id: 1581, eco: "D24", name: "QGA: 4.Nc3" },
                a7a6: {
                  e2e4: {
                    $: { id: 1582, eco: "D24", name: "QGA: Bogolyubov" },
                  },
                },
              },
              e2e3: {
                $: { id: 1583, eco: "D25", name: "QGA: 4.e3" },
                g7g6: { $: { id: 1584, eco: "D25", name: "QGA: Smyslov" } },
                c8g4: {
                  $: { id: 1585, eco: "D25", name: "QGA: Janowsky-Larsen" },
                },
                c8e6: { $: { id: 1586, eco: "D25", name: "QGA: Flohr" } },
                e7e6: {
                  $: { id: 1587, eco: "D26", name: "QGA: 4...e6" },
                  f1c4: {
                    c7c5: {
                      $: {
                        id: 1588,
                        eco: "D26",
                        name: "QGA: classical variation",
                      },
                      d1e2: {
                        a7a6: {
                          d4c5: {
                            f8c5: {
                              e1g1: {
                                b8c6: {
                                  e3e4: {
                                    b7b5: {
                                      e4e5: {
                                        $: {
                                          id: 1589,
                                          eco: "D26",
                                          name: "QGA: classical, Furman variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      e1g1: {
                        $: {
                          id: 1590,
                          eco: "D26",
                          name: "QGA: classical variation, 6.O-O",
                        },
                        c5d4: {
                          $: {
                            id: 1591,
                            eco: "D26",
                            name: "QGA: classical, Steinitz variation",
                          },
                        },
                        a7a6: {
                          $: {
                            id: 1592,
                            eco: "D27",
                            name: "QGA: classical, 6...a6",
                          },
                          a2a4: {
                            $: {
                              id: 1593,
                              eco: "D27",
                              name: "QGA: classical, Rubinstein variation",
                            },
                          },
                          e3e4: {
                            $: {
                              id: 1594,
                              eco: "D27",
                              name: "QGA: classical, Geller variation",
                            },
                          },
                          d1e2: {
                            $: {
                              id: 1595,
                              eco: "D28",
                              name: "QGA: classical, 7.Qe2",
                            },
                            b7b5: {
                              $: {
                                id: 1596,
                                eco: "D28",
                                name: "QGA: classical, 7...b5",
                              },
                              c4b3: {
                                b8c6: {
                                  f1d1: {
                                    c5c4: {
                                      b3c2: {
                                        c6b4: {
                                          b1c3: {
                                            b4c2: {
                                              e2c2: {
                                                c8b7: {
                                                  d4d5: {
                                                    d8c7: {
                                                      $: {
                                                        id: 1597,
                                                        eco: "D28",
                                                        name: "QGA: classical, Flohr variation",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                c8b7: {
                                  $: {
                                    id: 1598,
                                    eco: "D29",
                                    name: "QGA: classical, 8...Bb7",
                                  },
                                  f1d1: {
                                    b8d7: {
                                      b1c3: {
                                        f8d6: {
                                          $: {
                                            id: 1599,
                                            eco: "D29",
                                            name: "QGA: classical, Smyslov variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        e7e6: {
          $: { id: 1600, eco: "D30", name: "Queen's Gambit Declined" },
          g1f3: {
            g8f6: {
              e2e3: {
                c7c6: {
                  b1d2: {
                    $: {
                      id: 1601,
                      eco: "D30",
                      name: "Queen's Gambit Declined: 3. Nf3 Nf6 4. e3 c6 5. Nbd2",
                    },
                    f6e4: {
                      f1d3: {
                        f7f5: {
                          $: {
                            id: 1602,
                            eco: "D30",
                            name: "Queen's Gambit Declined: Stonewall variation",
                          },
                        },
                      },
                    },
                    b8d7: {
                      $: {
                        id: 1603,
                        eco: "D30",
                        name: "Queen's Gambit Declined: 3. Nf3 Nf6 4. e3 c6 5. Nbd2 Nbd7",
                      },
                      f1d3: {
                        c6c5: {
                          $: {
                            id: 1604,
                            eco: "D30",
                            name: "Queen's Gambit Declined: Semmering variation",
                          },
                        },
                      },
                    },
                    g7g6: {
                      $: {
                        id: 1605,
                        eco: "D30",
                        name: "Queen's Gambit Declined: Spielmann variation",
                      },
                    },
                  },
                },
              },
              c1g5: {
                $: {
                  id: 1606,
                  eco: "D30",
                  name: "Queen's Gambit Declined: 3. Nf3 Nf6 4. Bg5",
                },
                b8d7: {
                  e2e3: {
                    c7c6: {
                      b1d2: {
                        $: {
                          id: 1607,
                          eco: "D30",
                          name: "Queen's Gambit Declined: Capablanca variation",
                        },
                      },
                    },
                  },
                },
                f8b4: {
                  $: {
                    id: 1608,
                    eco: "D30",
                    name: "Queen's Gambit Declined: Vienna variation",
                  },
                },
                h7h6: {
                  $: {
                    id: 1609,
                    eco: "D30",
                    name: "Queen's Gambit Declined: Capablanca-Duras variation",
                  },
                  g5f6: {
                    d8f6: {
                      b1c3: {
                        c7c6: {
                          d1b3: {
                            $: {
                              id: 1610,
                              eco: "D30",
                              name: "Queen's Gambit Declined: Hastings variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            $: { id: 1611, eco: "D31", name: "Queen's Gambit Declined: 3.Nc3" },
            a7a6: {
              $: {
                id: 1612,
                eco: "D31",
                name: "Queen's Gambit Declined: Janowski variation",
              },
            },
            b7b6: {
              $: {
                id: 1613,
                eco: "D31",
                name: "Queen's Gambit Declined: Alapin variation",
              },
            },
            f8e7: {
              $: {
                id: 1614,
                eco: "D31",
                name: "Queen's Gambit Declined: Charousek (Petrosian) variation",
              },
            },
            c7c6: {
              $: {
                id: 1615,
                eco: "D31",
                name: "Queen's Gambit Declined: semi-Slav",
              },
              g1f3: {
                d5c4: {
                  $: {
                    id: 1616,
                    eco: "D31",
                    name: "Queen's Gambit Declined: semi-Slav, Noteboom variation",
                  },
                  a2a4: {
                    f8b4: {
                      e2e3: {
                        b7b5: {
                          c1d2: {
                            d8e7: {
                              $: {
                                id: 1617,
                                eco: "D31",
                                name: "Queen's Gambit Declined: semi-Slav, Koomen variation",
                              },
                            },
                            d8b6: {
                              $: {
                                id: 1618,
                                eco: "D31",
                                name: "Queen's Gambit Declined: semi-Slav, Junge variation",
                              },
                            },
                            a7a5: {
                              $: {
                                id: 1619,
                                eco: "D31",
                                name: "Queen's Gambit Declined: semi-Slav, Abrahams variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              e2e4: {
                $: {
                  id: 1620,
                  eco: "D31",
                  name: "Queen's Gambit Declined: semi-Slav, Marshall gambit",
                },
              },
            },
            c7c5: {
              $: {
                id: 1621,
                eco: "D32",
                name: "Queen's Gambit Declined: Tarrasch defence",
              },
              c4d5: {
                c5d4: {
                  $: {
                    id: 1622,
                    eco: "D32",
                    name: "Queen's Gambit Declined: Tarrasch, von Hennig-Schara gambit",
                  },
                },
                e6d5: {
                  $: {
                    id: 1623,
                    eco: "D32",
                    name: "Queen's Gambit Declined: Tarrasch defence, 4.cd ed",
                  },
                  d4c5: {
                    d5d4: {
                      c3a4: {
                        b7b5: {
                          $: {
                            id: 1624,
                            eco: "D32",
                            name: "Queen's Gambit Declined: Tarrasch defence, Tarrasch gambit",
                          },
                        },
                      },
                    },
                  },
                  e2e4: {
                    $: {
                      id: 1625,
                      eco: "D32",
                      name: "Queen's Gambit Declined: Tarrasch defence, Marshall gambit",
                    },
                  },
                  g1f3: {
                    $: {
                      id: 1626,
                      eco: "D32",
                      name: "Queen's Gambit Declined: Tarrasch defence",
                    },
                    b8c6: {
                      g2g3: {
                        $: {
                          id: 1627,
                          eco: "D33",
                          name: "Queen's Gambit Declined: Tarrasch, Schlechter-Rubinstein system",
                        },
                        c5c4: {
                          $: {
                            id: 1628,
                            eco: "D33",
                            name: "Queen's Gambit Declined: Tarrasch, Folkestone (Swedish) variation",
                          },
                          e2e4: {
                            $: {
                              id: 1629,
                              eco: "D33",
                              name: "Queen's Gambit Declined: Tarrasch, Schlechter-Rubinstein system, Rey Ardid variation",
                            },
                          },
                        },
                        g8f6: {
                          $: {
                            id: 1630,
                            eco: "D33",
                            name: "Queen's Gambit Declined: Tarrasch, Prague variation",
                          },
                          f1g2: {
                            c8g4: {
                              $: {
                                id: 1631,
                                eco: "D33",
                                name: "Queen's Gambit Declined: Tarrasch, Wagner variation",
                              },
                            },
                            f8e7: {
                              $: {
                                id: 1632,
                                eco: "D34",
                                name: "Queen's Gambit Declined: Tarrasch, Prague variation, 7...Be7",
                              },
                              e1g1: {
                                e8g8: {
                                  $: {
                                    id: 1633,
                                    eco: "D34",
                                    name: "Queen's Gambit Declined: Tarrasch, Prague variation, Normal position",
                                  },
                                  d4c5: {
                                    e7c5: {
                                      c3a4: {
                                        $: {
                                          id: 1634,
                                          eco: "D34",
                                          name: "Queen's Gambit Declined: Tarrasch, Reti variation",
                                        },
                                      },
                                    },
                                  },
                                  c1g5: {
                                    $: {
                                      id: 1635,
                                      eco: "D34",
                                      name: "Queen's Gambit Declined: Tarrasch, Prague variation, 9.Bg5",
                                    },
                                    c8e6: {
                                      a1c1: {
                                        c5c4: {
                                          $: {
                                            id: 1636,
                                            eco: "D34",
                                            name: "Queen's Gambit Declined: Tarrasch, Bogolyubov variation",
                                          },
                                        },
                                        b7b6: {
                                          $: {
                                            id: 1637,
                                            eco: "D34",
                                            name: "Queen's Gambit Declined: Tarrasch, Stoltz variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 1638,
                eco: "D35",
                name: "Queen's Gambit Declined: 3...Nf6",
              },
              c1f4: {
                $: {
                  id: 1639,
                  eco: "D35",
                  name: "Queen's Gambit Declined: Harrwitz attack",
                },
              },
              c4d5: {
                $: {
                  id: 1640,
                  eco: "D35",
                  name: "Queen's Gambit Declined: exchange variation",
                },
                e6d5: {
                  g1f3: {
                    b8d7: {
                      c1f4: {
                        $: {
                          id: 1641,
                          eco: "D35",
                          name: "Queen's Gambit Declined: exchange, Saemisch variation",
                        },
                      },
                    },
                  },
                  c1g5: {
                    $: {
                      id: 1642,
                      eco: "D35",
                      name: "Queen's Gambit Declined: exchange, positional line",
                    },
                    f8e7: {
                      e2e3: {
                        e8g8: {
                          f1d3: {
                            b8d7: {
                              d1c2: {
                                f8e8: {
                                  g1e2: {
                                    d7f8: {
                                      e1c1: {
                                        $: {
                                          id: 1643,
                                          eco: "D35",
                                          name: "Queen's Gambit Declined: exchange, chameleon variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    c7c6: {
                      $: {
                        id: 1644,
                        eco: "D35",
                        name: "Queen's Gambit Declined: exchange, positional line, 5...c6",
                      },
                      d1c2: {
                        $: {
                          id: 1645,
                          eco: "D36",
                          name: "Queen's Gambit Declined: exchange, positional line, 6.Qc2",
                        },
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 1646,
                  eco: "D37",
                  name: "Queen's Gambit Declined: 4.Nf3",
                },
                f8e7: {
                  c1f4: {
                    $: {
                      id: 1647,
                      eco: "D37",
                      name: "Queen's Gambit Declined: classical variation (5.Bf4)",
                    },
                  },
                },
                f8b4: {
                  $: {
                    id: 1648,
                    eco: "D38",
                    name: "Queen's Gambit Declined: Ragozin variation",
                  },
                  c1g5: {
                    d5c4: {
                      $: {
                        id: 1649,
                        eco: "D39",
                        name: "Queen's Gambit Declined: Ragozin, Vienna variation",
                      },
                    },
                  },
                },
                c7c5: {
                  $: {
                    id: 1650,
                    eco: "D40",
                    name: "Queen's Gambit Declined: Semi-Tarrasch defence",
                  },
                  e2e3: {
                    b8c6: {
                      f1d3: {
                        f8d6: {
                          e1g1: {
                            e8g8: {
                              $: {
                                id: 1651,
                                eco: "D40",
                                name: "Queen's Gambit Declined: Semi-Tarrasch, symmetrical variation",
                              },
                              d1e2: {
                                d8e7: {
                                  d4c5: {
                                    d6c5: {
                                      e3e4: {
                                        $: {
                                          id: 1652,
                                          eco: "D40",
                                          name: "Queen's Gambit Declined: Semi-Tarrasch, Levenfish variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  c1g5: {
                    $: {
                      id: 1653,
                      eco: "D40",
                      name: "Queen's Gambit Declined: Semi-Tarrasch defence, Pillsbury variation",
                    },
                  },
                  c4d5: {
                    $: {
                      id: 1654,
                      eco: "D41",
                      name: "Queen's Gambit Declined: Semi-Tarrasch, 5.cd",
                    },
                    f6d5: {
                      e2e4: {
                        d5c3: {
                          b2c3: {
                            c5d4: {
                              c3d4: {
                                f8b4: {
                                  c1d2: {
                                    b4d2: {
                                      d1d2: {
                                        e8g8: {
                                          f1b5: {
                                            $: {
                                              id: 1655,
                                              eco: "D41",
                                              name: "Queen's Gambit Declined: Semi-Tarrasch, Kmoch variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                    d8a5: {
                                      $: {
                                        id: 1656,
                                        eco: "D41",
                                        name: "Queen's Gambit Declined: Semi-Tarrasch, San Sebastian variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      e2e3: {
                        $: {
                          id: 1657,
                          eco: "D41",
                          name: "Queen's Gambit Declined: Semi-Tarrasch with e3",
                        },
                        b8c6: {
                          f1d3: {
                            $: {
                              id: 1658,
                              eco: "D42",
                              name: "Queen's Gambit Declined: Semi-Tarrasch, 7.Bd3",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                c7c6: {
                  $: { id: 1659, eco: "D43", name: "QGD semi-Slav" },
                  c1g5: {
                    h7h6: {
                      g5f6: {
                        d8f6: {
                          d1b3: {
                            $: {
                              id: 1660,
                              eco: "D43",
                              name: "QGD semi-Slav: Hastings variation",
                            },
                          },
                        },
                      },
                    },
                    d5c4: {
                      $: {
                        id: 1661,
                        eco: "D44",
                        name: "QGD semi-Slav: 5.Bg5 dc",
                      },
                      e2e4: {
                        $: {
                          id: 1662,
                          eco: "D44",
                          name: "QGD semi-Slav: Botvinnik system (anti-Meran)",
                        },
                        b7b5: {
                          e4e5: {
                            h7h6: {
                              g5h4: {
                                g7g5: {
                                  e5f6: {
                                    g5h4: {
                                      f3e5: {
                                        $: {
                                          id: 1663,
                                          eco: "D44",
                                          name: "QGD semi-Slav: Ekstrom variation",
                                        },
                                      },
                                    },
                                  },
                                  f3g5: {
                                    $: {
                                      id: 1664,
                                      eco: "D44",
                                      name: "QGD semi-Slav: anti-Meran gambit",
                                    },
                                    h6g5: {
                                      h4g5: {
                                        b8d7: {
                                          g2g3: {
                                            $: {
                                              id: 1665,
                                              eco: "D44",
                                              name: "QGD semi-Slav: anti-Meran, Lilienthal variation",
                                            },
                                          },
                                          d1f3: {
                                            $: {
                                              id: 1666,
                                              eco: "D44",
                                              name: "QGD semi-Slav: anti-Meran, Szabo variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                    f6d5: {
                                      $: {
                                        id: 1667,
                                        eco: "D44",
                                        name: "QGD semi-Slav: anti-Meran, Alatortsev system",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  e2e3: {
                    $: { id: 1668, eco: "D45", name: "QGD semi-Slav: 5.e3" },
                    f6e4: {
                      f1d3: {
                        f7f5: {
                          $: {
                            id: 1669,
                            eco: "D45",
                            name: "QGD semi-Slav: stonewall defence",
                          },
                        },
                      },
                    },
                    a7a6: {
                      $: {
                        id: 1670,
                        eco: "D45",
                        name: "QGD semi-Slav: accelerated Meran (Alekhine variation)",
                      },
                    },
                    b8d7: {
                      $: {
                        id: 1671,
                        eco: "D45",
                        name: "QGD semi-Slav: 5...Nd7",
                      },
                      d1c2: {
                        $: {
                          id: 1672,
                          eco: "D45",
                          name: "QGD semi-Slav: Stoltz variation",
                        },
                      },
                      f3e5: {
                        $: {
                          id: 1673,
                          eco: "D45",
                          name: "QGD semi-Slav: Rubinstein (anti-Meran) system",
                        },
                      },
                      f1d3: {
                        $: {
                          id: 1674,
                          eco: "D46",
                          name: "QGD semi-Slav: 6.Bd3",
                        },
                        f8e7: {
                          $: {
                            id: 1675,
                            eco: "D46",
                            name: "QGD semi-Slav: Bogolyubov variation",
                          },
                        },
                        f8b4: {
                          $: {
                            id: 1676,
                            eco: "D46",
                            name: "QGD semi-Slav: Romih variation",
                          },
                        },
                        f8d6: {
                          $: {
                            id: 1677,
                            eco: "D46",
                            name: "QGD semi-Slav: Chigorin defence",
                          },
                        },
                        d5c4: {
                          d3c4: {
                            $: {
                              id: 1678,
                              eco: "D47",
                              name: "QGD semi-Slav: 7.Bc4",
                            },
                            b7b5: {
                              $: {
                                id: 1679,
                                eco: "D47",
                                name: "QGD semi-Slav: Meran variation",
                              },
                              c4d3: {
                                b5b4: {
                                  $: {
                                    id: 1680,
                                    eco: "D47",
                                    name: "QGD semi-Slav: neo-Meran (Lundin variation)",
                                  },
                                },
                                c8b7: {
                                  $: {
                                    id: 1681,
                                    eco: "D47",
                                    name: "QGD semi-Slav: Meran, Wade variation",
                                  },
                                },
                                a7a6: {
                                  $: {
                                    id: 1682,
                                    eco: "D48",
                                    name: "QGD semi-Slav: Meran, 8...a6",
                                  },
                                  e3e4: {
                                    b5b4: {
                                      $: {
                                        id: 1683,
                                        eco: "D48",
                                        name: "QGD semi-Slav: Meran, Pirc variation",
                                      },
                                    },
                                    c6c5: {
                                      $: {
                                        id: 1684,
                                        eco: "D48",
                                        name: "QGD semi-Slav: Meran",
                                      },
                                      d4d5: {
                                        $: {
                                          id: 1685,
                                          eco: "D48",
                                          name: "QGD semi-Slav: Meran, Reynolds' variation",
                                        },
                                      },
                                      e4e5: {
                                        $: {
                                          id: 1686,
                                          eco: "D48",
                                          name: "QGD semi-Slav: Meran, old main line",
                                        },
                                        c5d4: {
                                          c3b5: {
                                            $: {
                                              id: 1687,
                                              eco: "D49",
                                              name: "QGD semi-Slav: Meran, Blumenfeld variation",
                                            },
                                            f6g4: {
                                              $: {
                                                id: 1688,
                                                eco: "D49",
                                                name: "QGD semi-Slav: Meran, Rabinovich variation",
                                              },
                                            },
                                            d7e5: {
                                              $: {
                                                id: 1689,
                                                eco: "D49",
                                                name: "QGD semi-Slav: Meran, Sozin variation",
                                              },
                                              f3e5: {
                                                a6b5: {
                                                  d1f3: {
                                                    $: {
                                                      id: 1690,
                                                      eco: "D49",
                                                      name: "QGD semi-Slav: Meran, Stahlberg variation",
                                                    },
                                                  },
                                                  e1g1: {
                                                    $: {
                                                      id: 1691,
                                                      eco: "D49",
                                                      name: "QGD semi-Slav: Meran, Sozin variation",
                                                    },
                                                    d8d5: {
                                                      d1e2: {
                                                        c8a6: {
                                                          c1g5: {
                                                            $: {
                                                              id: 1692,
                                                              eco: "D49",
                                                              name: "QGD semi-Slav: Meran, Rellstab attack",
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c1g5: {
                $: {
                  id: 1693,
                  eco: "D50",
                  name: "Queen's Gambit Declined: 4.Bg5",
                },
                c7c5: {
                  $: {
                    id: 1694,
                    eco: "D50",
                    name: "Queen's Gambit Declined: Been-Koomen variation",
                  },
                  g1f3: {
                    c5d4: {
                      f3d4: {
                        e6e5: {
                          d4b5: {
                            a7a6: {
                              d1a4: {
                                $: {
                                  id: 1695,
                                  eco: "D50",
                                  name: "Queen's Gambit Declined: Semi-Tarrasch, Krause variation",
                                },
                              },
                            },
                          },
                        },
                      },
                      d1d4: {
                        $: {
                          id: 1696,
                          eco: "D50",
                          name: "Queen's Gambit Declined: Semi-Tarrasch, Primitive Pillsbury variation",
                        },
                      },
                    },
                  },
                  c4d5: {
                    $: {
                      id: 1697,
                      eco: "D50",
                      name: "Queen's Gambit Declined: Semi-Tarrasch",
                    },
                    d8b6: {
                      $: {
                        id: 1698,
                        eco: "D50",
                        name: "Queen's Gambit Declined: Canal (Venice) variation",
                      },
                    },
                  },
                },
                b8d7: {
                  $: {
                    id: 1699,
                    eco: "D51",
                    name: "Queen's Gambit Declined: 4.Bg5 Nbd7",
                  },
                  g1f3: {
                    c7c6: {
                      a1c1: {
                        d8a5: {
                          g5d2: {
                            $: {
                              id: 1700,
                              eco: "D51",
                              name: "Queen's Gambit Declined: Rochlin variation",
                            },
                          },
                        },
                      },
                      e2e4: {
                        $: {
                          id: 1701,
                          eco: "D51",
                          name: "Queen's Gambit Declined: Alekhine variation",
                        },
                      },
                    },
                  },
                  e2e3: {
                    $: {
                      id: 1702,
                      eco: "D51",
                      name: "Queen's Gambit Declined: Janowski-Marco",
                    },
                    f8b4: {
                      $: {
                        id: 1703,
                        eco: "D51",
                        name: "Queen's Gambit Declined: Manhattan variation",
                      },
                    },
                    c7c6: {
                      $: {
                        id: 1704,
                        eco: "D51",
                        name: "Queen's Gambit Declined: 5...c6",
                      },
                      a2a3: {
                        $: {
                          id: 1705,
                          eco: "D51",
                          name: "Queen's Gambit Declined: Capablanca anti-Cambridge Springs variation",
                        },
                      },
                      g1f3: {
                        $: {
                          id: 1706,
                          eco: "D52",
                          name: "Queen's Gambit Declined: Hodges-Lasker",
                        },
                        d8a5: {
                          $: {
                            id: 1707,
                            eco: "D52",
                            name: "Queen's Gambit Declined: Cambridge Springs defence",
                          },
                          f3d2: {
                            f8b4: {
                              d1c2: {
                                $: {
                                  id: 1708,
                                  eco: "D52",
                                  name: "Queen's Gambit Declined: Cambridge Springs defence, Bogoljubow variation",
                                },
                                e8g8: {
                                  g5h4: {
                                    $: {
                                      id: 1709,
                                      eco: "D52",
                                      name: "Queen's Gambit Declined: Cambridge Springs defence, Argentine variation",
                                    },
                                  },
                                },
                              },
                            },
                            d5c4: {
                              $: {
                                id: 1710,
                                eco: "D52",
                                name: "Queen's Gambit Declined: Cambridge Springs defence, Rubinstein variation",
                              },
                            },
                          },
                          g5f6: {
                            $: {
                              id: 1711,
                              eco: "D52",
                              name: "Queen's Gambit Declined: Cambridge Springs defence, Capablanca variation",
                            },
                          },
                          c4d5: {
                            $: {
                              id: 1712,
                              eco: "D52",
                              name: "Queen's Gambit Declined: Cambridge Springs defence, 7.cd",
                            },
                            f6d5: {
                              $: {
                                id: 1713,
                                eco: "D52",
                                name: "Queen's Gambit Declined: Cambridge Springs defence, Yugoslav variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                f8e7: {
                  $: {
                    id: 1714,
                    eco: "D53",
                    name: "Queen's Gambit Declined: 4.Bg5 Be7",
                  },
                  e2e3: {
                    f6e4: {
                      $: {
                        id: 1715,
                        eco: "D53",
                        name: "Queen's Gambit Declined: Lasker variation",
                      },
                    },
                    e8g8: {
                      $: {
                        id: 1716,
                        eco: "D53",
                        name: "Queen's Gambit Declined: 4.Bg5 Be7, 5.e3 O-O",
                      },
                      a1c1: {
                        $: {
                          id: 1717,
                          eco: "D54",
                          name: "Queen's Gambit Declined: Anti-neo-orthodox variation",
                        },
                      },
                      g1f3: {
                        $: {
                          id: 1718,
                          eco: "D55",
                          name: "Queen's Gambit Declined: 6.Nf3",
                        },
                        b7b6: {
                          f1d3: {
                            c8b7: {
                              c4d5: {
                                e6d5: {
                                  f3e5: {
                                    $: {
                                      id: 1719,
                                      eco: "D55",
                                      name: "Queen's Gambit Declined: Pillsbury attack",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        h7h6: {
                          $: {
                            id: 1720,
                            eco: "D55",
                            name: "Queen's Gambit Declined: Neo-orthodox variation",
                          },
                          g5f6: {
                            $: {
                              id: 1721,
                              eco: "D55",
                              name: "Queen's Gambit Declined: Neo-orthodox variation, 7.Bxf6",
                            },
                            e7f6: {
                              a1c1: {
                                c7c6: {
                                  f1d3: {
                                    b8d7: {
                                      e1g1: {
                                        d5c4: {
                                          d3c4: {
                                            $: {
                                              id: 1722,
                                              eco: "D55",
                                              name: "Queen's Gambit Declined: Petrosian variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          g5h4: {
                            $: {
                              id: 1723,
                              eco: "D55",
                              name: "Queen's Gambit Declined: Neo-orthodox variation, 7.Bh4",
                            },
                            f6e4: {
                              $: {
                                id: 1724,
                                eco: "D56",
                                name: "Queen's Gambit Declined: Lasker defence",
                              },
                              h4e7: {
                                d8e7: {
                                  d1c2: {
                                    $: {
                                      id: 1725,
                                      eco: "D56",
                                      name: "Queen's Gambit Declined: Lasker defence, Teichmann variation",
                                    },
                                    e4f6: {
                                      f1d3: {
                                        d5c4: {
                                          d3c4: {
                                            c7c5: {
                                              e1g1: {
                                                b8c6: {
                                                  f1d1: {
                                                    c8d7: {
                                                      $: {
                                                        id: 1726,
                                                        eco: "D56",
                                                        name: "Queen's Gambit Declined: Lasker defence, Russian variation",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  c4d5: {
                                    e4c3: {
                                      b2c3: {
                                        $: {
                                          id: 1727,
                                          eco: "D57",
                                          name: "Queen's Gambit Declined: Lasker defence, main line",
                                        },
                                        e6d5: {
                                          d1b3: {
                                            e7d6: {
                                              $: {
                                                id: 1728,
                                                eco: "D57",
                                                name: "Queen's Gambit Declined: Lasker defence, Bernstein variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            b7b6: {
                              $: {
                                id: 1729,
                                eco: "D58",
                                name: "Queen's Gambit Declined: Tartakower (Makagonov-Bondarevsky) system",
                              },
                              c4d5: {
                                f6d5: {
                                  $: {
                                    id: 1730,
                                    eco: "D59",
                                    name: "Queen's Gambit Declined: Tartakower (Makagonov-Bondarevsky) system, 8.cd Nxd5",
                                  },
                                  h4e7: {
                                    d8e7: {
                                      c3d5: {
                                        e6d5: {
                                          a1c1: {
                                            c8e6: {
                                              $: {
                                                id: 1731,
                                                eco: "D59",
                                                name: "Queen's Gambit Declined: Tartakower variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        b8d7: {
                          $: {
                            id: 1732,
                            eco: "D60",
                            name: "Queen's Gambit Declined: Orthodox defence",
                          },
                          f1d3: {
                            $: {
                              id: 1733,
                              eco: "D60",
                              name: "Queen's Gambit Declined: Orthodox defence, Botvinnik variation",
                            },
                          },
                          d1b3: {
                            $: {
                              id: 1734,
                              eco: "D60",
                              name: "Queen's Gambit Declined: Orthodox defence, Rauzer variation",
                            },
                          },
                          d1c2: {
                            $: {
                              id: 1735,
                              eco: "D61",
                              name: "Queen's Gambit Declined: Orthodox defence, Rubinstein variation",
                            },
                            c7c5: {
                              c4d5: {
                                $: {
                                  id: 1736,
                                  eco: "D62",
                                  name: "Queen's Gambit Declined: Orthodox defence, 7.Qc2 c5, 8.cd (Rubinstein)",
                                },
                              },
                            },
                          },
                          a1c1: {
                            $: {
                              id: 1737,
                              eco: "D63",
                              name: "Queen's Gambit Declined: Orthodox defence, 7.Rc1",
                            },
                            b7b6: {
                              c4d5: {
                                e6d5: {
                                  f1d3: {
                                    $: {
                                      id: 1738,
                                      eco: "D63",
                                      name: "Queen's Gambit Declined: Orthodox defence, Pillsbury attack",
                                    },
                                  },
                                  f1b5: {
                                    $: {
                                      id: 1739,
                                      eco: "D63",
                                      name: "Queen's Gambit Declined: Orthodox defence, Capablanca variation",
                                    },
                                  },
                                },
                              },
                            },
                            a7a6: {
                              $: {
                                id: 1740,
                                eco: "D63",
                                name: "Queen's Gambit Declined: Orthodox defence, Swiss (Henneberger) variation",
                              },
                              c4d5: {
                                $: {
                                  id: 1741,
                                  eco: "D63",
                                  name: "Queen's Gambit Declined: Orthodox defence, Swiss, Karlsbad variation",
                                },
                              },
                            },
                            c7c6: {
                              $: {
                                id: 1742,
                                eco: "D63",
                                name: "Queen's Gambit Declined: Orthodox defence",
                              },
                              d1c2: {
                                $: {
                                  id: 1743,
                                  eco: "D64",
                                  name: "Queen's Gambit Declined: Orthodox defence, Rubinstein attack (with Rc1)",
                                },
                                f6e4: {
                                  $: {
                                    id: 1744,
                                    eco: "D64",
                                    name: "Queen's Gambit Declined: Orthodox defence, Rubinstein attack, Wolf variation",
                                  },
                                },
                                a7a6: {
                                  $: {
                                    id: 1745,
                                    eco: "D64",
                                    name: "Queen's Gambit Declined: Orthodox defence, Rubinstein attack, Karlsbad variation",
                                  },
                                  a2a3: {
                                    $: {
                                      id: 1746,
                                      eco: "D64",
                                      name: "Queen's Gambit Declined: Orthodox defence, Rubinstein attack, Gruenfeld variation",
                                    },
                                  },
                                  c4d5: {
                                    $: {
                                      id: 1747,
                                      eco: "D65",
                                      name: "Queen's Gambit Declined: Orthodox defence, Rubinstein attack, main line",
                                    },
                                  },
                                },
                              },
                              f1d3: {
                                $: {
                                  id: 1748,
                                  eco: "D66",
                                  name: "Queen's Gambit Declined: Orthodox defence, Bd3 line",
                                },
                                d5c4: {
                                  d3c4: {
                                    b7b5: {
                                      $: {
                                        id: 1749,
                                        eco: "D66",
                                        name: "Queen's Gambit Declined: Orthodox defence, Bd3 line, fianchetto variation",
                                      },
                                    },
                                    f6d5: {
                                      $: {
                                        id: 1750,
                                        eco: "D67",
                                        name: "Queen's Gambit Declined: Orthodox defence, Bd3 line, Capablanca freeing manoevre",
                                      },
                                      h2h4: {
                                        $: {
                                          id: 1751,
                                          eco: "D67",
                                          name: "Queen's Gambit Declined: Orthodox defence, Bd3 line, Janowski variation",
                                        },
                                      },
                                      g5e7: {
                                        d8e7: {
                                          $: {
                                            id: 1752,
                                            eco: "D67",
                                            name: "Queen's Gambit Declined: Orthodox defence, Bd3 line",
                                          },
                                          c3e4: {
                                            $: {
                                              id: 1753,
                                              eco: "D67",
                                              name: "Queen's Gambit Declined: Orthodox defence, Bd3 line, Alekhine variation",
                                            },
                                          },
                                          e1g1: {
                                            $: {
                                              id: 1754,
                                              eco: "D67",
                                              name: "Queen's Gambit Declined: Orthodox defence, Bd3 line, 11.O-O",
                                            },
                                            d5c3: {
                                              c1c3: {
                                                e6e5: {
                                                  $: {
                                                    id: 1755,
                                                    eco: "D68",
                                                    name: "Queen's Gambit Declined: Orthodox defence, classical variation",
                                                  },
                                                  d1b1: {
                                                    $: {
                                                      id: 1756,
                                                      eco: "D68",
                                                      name: "Queen's Gambit Declined: Orthodox defence, classical, 13.d1b1 (Maroczy)",
                                                    },
                                                  },
                                                  d1c2: {
                                                    $: {
                                                      id: 1757,
                                                      eco: "D68",
                                                      name: "Queen's Gambit Declined: Orthodox defence, classical, 13.d1c2 (Vidmar)",
                                                    },
                                                  },
                                                  d4e5: {
                                                    d7e5: {
                                                      f3e5: {
                                                        e7e5: {
                                                          $: {
                                                            id: 1758,
                                                            eco: "D69",
                                                            name: "Queen's Gambit Declined: Orthodox defence, classical, 13.de",
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  e2e4: {
    $: { id: 340, eco: "B00", name: "King's pawn game" },
    g8h6: {
      d2d4: {
        g7g6: {
          c2c4: { f7f6: { $: { id: 341, eco: "B00", name: "Hippopotamus" } } },
        },
      },
    },
    a7a5: { $: { id: 342, eco: "B00", name: "Corn stalk defence" } },
    b8a6: { $: { id: 343, eco: "B00", name: "Lemming defence" } },
    f7f5: { $: { id: 344, eco: "B00", name: "Duras Gambit" } },
    f7f6: {
      $: { id: 345, eco: "B00", name: "Barnes defence" },
      d2d4: { e8f7: { $: { id: 346, eco: "B00", name: "Fried fox defence" } } },
    },
    h7h6: { $: { id: 347, eco: "B00", name: "Carr's defence" } },
    g7g5: { $: { id: 348, eco: "B00", name: "Basman defence" } },
    a7a6: { $: { id: 349, eco: "B00", name: "St. George defence" } },
    b7b6: {
      $: { id: 350, eco: "B00", name: "Owen defence" },
      d2d4: { c8a6: { $: { id: 351, eco: "B00", name: "Guatemala defence" } } },
    },
    b8c6: {
      $: { id: 352, eco: "B00", name: "Nimzovich" },
      b2b4: {
        c6b4: {
          c2c3: {
            b4c6: {
              d2d4: {
                $: { id: 353, eco: "B00", name: "Nimzovich: Wheeler gambit" },
              },
            },
          },
        },
      },
      g1f3: {
        $: { id: 354, eco: "B00", name: "Nimzovich: 2. Nf3" },
        f7f5: {
          $: { id: 355, eco: "B00", name: "Nimzovich: Colorado counter" },
        },
      },
      d2d4: {
        $: { id: 356, eco: "B00", name: "Nimzovich: 2. d4" },
        d7d5: {
          e4d5: {
            d8d5: {
              b1c3: {
                $: { id: 357, eco: "B00", name: "Nimzovich: Marshall gambit" },
              },
            },
          },
          b1c3: {
            $: { id: 358, eco: "B00", name: "Nimzovich: Bogolyubov variation" },
          },
        },
        f7f6: { $: { id: 359, eco: "B00", name: "Nimzovich: Neo-Mongoloid" } },
      },
    },
    d7d5: {
      $: { id: 360, eco: "B01", name: "Scandinavian" },
      e4d5: {
        d8d5: {
          b1c3: {
            d5a5: {
              d2d4: {
                g8f6: {
                  g1f3: {
                    c8g4: {
                      h2h3: {
                        $: {
                          id: 361,
                          eco: "B01",
                          name: "Scandinavian: Lasker",
                        },
                      },
                    },
                    c8f5: {
                      $: {
                        id: 362,
                        eco: "B01",
                        name: "Scandinavian: 5. Nf3 Bf5",
                      },
                      f3e5: {
                        c7c6: {
                          g2g4: {
                            $: {
                              id: 363,
                              eco: "B01",
                              name: "Scandinavian: Gruenfeld",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                e7e5: {
                  $: {
                    id: 364,
                    eco: "B01",
                    name: "Scandinavian: Anderssen counter-attack",
                  },
                  d4e5: {
                    f8b4: {
                      c1d2: {
                        b8c6: {
                          g1f3: {
                            $: {
                              id: 365,
                              eco: "B01",
                              name: "Scandinavian: Anderssen counter-attack orthodox attack",
                            },
                          },
                        },
                      },
                    },
                  },
                  g1f3: {
                    $: {
                      id: 366,
                      eco: "B01",
                      name: "Scandinavian: Anderssen counter-attack, Goteborg system",
                    },
                    c8g4: {
                      $: {
                        id: 367,
                        eco: "B01",
                        name: "Scandinavian: Anderssen counter-attack, Collijn variation",
                      },
                    },
                  },
                },
              },
              b2b4: {
                $: {
                  id: 368,
                  eco: "B01",
                  name: "Scandinavian: Mieses-Kotrvc gambit",
                },
              },
            },
            d5d6: {
              $: { id: 369, eco: "B01", name: "Scandinavian: Pytel-Wade" },
            },
          },
        },
        g8f6: {
          $: { id: 370, eco: "B01", name: "Scandinavian" },
          c2c4: {
            e7e6: {
              $: {
                id: 371,
                eco: "B01",
                name: "Scandinavian: Icelandic gambit",
              },
            },
            c7c6: { $: { id: 372, eco: "B01", name: "Scandinavian: Gambit" } },
          },
          d2d4: {
            $: { id: 373, eco: "B01", name: "Scandinavian" },
            f6d5: {
              $: {
                id: 374,
                eco: "B01",
                name: "Scandinavian: Marshall variation",
              },
              c2c4: {
                d5b4: {
                  $: {
                    id: 375,
                    eco: "B01",
                    name: "Scandinavian: Kiel variation",
                  },
                },
              },
            },
            g7g6: {
              $: {
                id: 376,
                eco: "B01",
                name: "Scandinavian: Richter variation",
              },
            },
          },
        },
      },
    },
    g8f6: {
      $: { id: 377, eco: "B02", name: "Alekhine's defence" },
      b1c3: {
        d7d5: {
          $: {
            id: 378,
            eco: "B02",
            name: "Alekhine's defence: Scandinavian variation",
          },
          e4e5: {
            f6d7: {
              e5e6: {
                $: {
                  id: 379,
                  eco: "B02",
                  name: "Alekhine's defence: Spielmann variation",
                },
              },
            },
          },
        },
      },
      d2d3: {
        $: {
          id: 380,
          eco: "B02",
          name: "Alekhine's defence: Maroczy variation",
        },
      },
      f1c4: {
        $: {
          id: 381,
          eco: "B02",
          name: "Alekhine's defence: Krejcik variation",
        },
      },
      e4e5: {
        f6e4: {
          $: {
            id: 382,
            eco: "B02",
            name: "Alekhine's defence: Mokele Mbembe (Buecker) variation",
          },
        },
        f6g8: {
          $: {
            id: 383,
            eco: "B02",
            name: "Alekhine's defence: Brooklyn defence",
          },
        },
        f6d5: {
          $: { id: 384, eco: "B02", name: "Alekhine's defence" },
          f1c4: {
            d5b6: {
              c4b3: {
                c7c5: {
                  d2d3: {
                    $: {
                      id: 385,
                      eco: "B02",
                      name: "Alekhine's defence: Kmoch variation",
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            $: {
              id: 386,
              eco: "B02",
              name: "Alekhine's defence: Saemisch attack",
            },
          },
          b2b3: {
            $: {
              id: 387,
              eco: "B02",
              name: "Alekhine's defence: Welling variation",
            },
          },
          c2c4: {
            $: { id: 388, eco: "B02", name: "Alekhine's defence" },
            d5b6: {
              b2b3: {
                $: {
                  id: 389,
                  eco: "B02",
                  name: "Alekhine's defence: Steiner variation",
                },
              },
              c4c5: {
                $: {
                  id: 390,
                  eco: "B02",
                  name: "Alekhine's defence: two pawns' (Lasker's) attack",
                },
                b6d5: {
                  f1c4: {
                    e7e6: {
                      b1c3: {
                        d7d6: {
                          $: {
                            id: 391,
                            eco: "B02",
                            name: "Alekhine's defence: two pawns' attack, Mikenas variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            $: { id: 392, eco: "B03", name: "Alekhine's defence" },
            b7b5: {
              $: {
                id: 393,
                eco: "B03",
                name: "Alekhine's defence: O'Sullivan gambit",
              },
            },
            d7d6: {
              $: { id: 394, eco: "B03", name: "Alekhine's defence" },
              f1c4: {
                $: {
                  id: 395,
                  eco: "B03",
                  name: "Alekhine's defence: Balogh variation",
                },
              },
              c2c4: {
                $: { id: 396, eco: "B03", name: "Alekhine's defence" },
                d5b6: {
                  e5d6: {
                    $: {
                      id: 397,
                      eco: "B03",
                      name: "Alekhine's defence: exchange variation",
                    },
                    c7d6: {
                      g1f3: {
                        g7g6: {
                          f1e2: {
                            f8g7: {
                              e1g1: {
                                e8g8: {
                                  h2h3: {
                                    b8c6: {
                                      b1c3: {
                                        c8f5: {
                                          c1f4: {
                                            $: {
                                              id: 398,
                                              eco: "B03",
                                              name: "Alekhine's defence: exchange, Karpov variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f2f4: {
                    $: {
                      id: 399,
                      eco: "B03",
                      name: "Alekhine's defence: four pawns attack",
                    },
                    d6e5: {
                      f4e5: {
                        c8f5: {
                          b1c3: {
                            e7e6: {
                              g1f3: {
                                f8e7: {
                                  f1e2: {
                                    e8g8: {
                                      e1g1: {
                                        f7f6: {
                                          $: {
                                            id: 400,
                                            eco: "B03",
                                            name: "Alekhine's defence: four pawns attack, Korchnoi variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        b8c6: {
                          $: {
                            id: 401,
                            eco: "B03",
                            name: "Alekhine's defence: four pawns attack, 6...Nc6",
                          },
                          g1f3: {
                            c8g4: {
                              e5e6: {
                                f7e6: {
                                  c4c5: {
                                    $: {
                                      id: 402,
                                      eco: "B03",
                                      name: "Alekhine's defence: four pawns attack, Ilyin-Genevsky var.",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          c1e3: {
                            $: {
                              id: 403,
                              eco: "B03",
                              name: "Alekhine's defence: four pawns attack, 7.Be3",
                            },
                            c8f5: {
                              b1c3: {
                                e7e6: {
                                  g1f3: {
                                    d8d7: {
                                      f1e2: {
                                        e8c8: {
                                          e1g1: {
                                            f8e7: {
                                              $: {
                                                id: 404,
                                                eco: "B03",
                                                name: "Alekhine's defence: four pawns attack, Tartakower variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    g7g5: {
                      $: {
                        id: 405,
                        eco: "B03",
                        name: "Alekhine's defence: four pawns attack, Planinc variation",
                      },
                    },
                    g7g6: {
                      $: {
                        id: 406,
                        eco: "B03",
                        name: "Alekhine's defence: four pawns attack, fianchetto variation",
                      },
                    },
                    c8f5: {
                      $: {
                        id: 407,
                        eco: "B03",
                        name: "Alekhine's defence: four pawns attack, Trifunovic variation",
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 408,
                  eco: "B04",
                  name: "Alekhine's defence: modern variation",
                },
                d6e5: {
                  $: {
                    id: 409,
                    eco: "B04",
                    name: "Alekhine's defence: modern, Larsen variation",
                  },
                },
                d5b6: {
                  $: {
                    id: 410,
                    eco: "B04",
                    name: "Alekhine's defence: modern, Schmid variation",
                  },
                },
                g7g6: {
                  $: {
                    id: 411,
                    eco: "B04",
                    name: "Alekhine's defence: modern, fianchetto variation",
                  },
                  f1c4: {
                    d5b6: {
                      c4b3: {
                        f8g7: {
                          a2a4: {
                            $: {
                              id: 412,
                              eco: "B04",
                              name: "Alekhine's defence: modern, Keres variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                c8g4: {
                  $: {
                    id: 413,
                    eco: "B05",
                    name: "Alekhine's defence: modern variation, 4...Bg4",
                  },
                  f1e2: {
                    c7c6: {
                      $: {
                        id: 414,
                        eco: "B05",
                        name: "Alekhine's defence: modern, Flohr variation",
                      },
                    },
                  },
                  h2h3: {
                    $: {
                      id: 415,
                      eco: "B05",
                      name: "Alekhine's defence: modern, Panov variation",
                    },
                  },
                  c2c4: {
                    $: {
                      id: 416,
                      eco: "B05",
                      name: "Alekhine's defence: modern, Alekhine variation",
                    },
                    d5b6: {
                      d4d5: {
                        $: {
                          id: 417,
                          eco: "B05",
                          name: "Alekhine's defence: modern, Vitolins attack",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    g7g6: {
      $: { id: 418, eco: "B06", name: "Robatsch" },
      d2d4: {
        g8f6: {
          e4e5: {
            f6h5: {
              g2g4: {
                h5g7: {
                  $: {
                    id: 419,
                    eco: "B06",
                    name: "Robatsch: Norwegian defence",
                  },
                },
              },
            },
          },
        },
        f8g7: {
          $: { id: 420, eco: "B06", name: "Robatsch" },
          f2f4: {
            $: { id: 421, eco: "B06", name: "Robatsch: three pawns attack" },
          },
          b1c3: {
            $: { id: 422, eco: "B06", name: "Robatsch" },
            c7c6: {
              f2f4: {
                d7d5: {
                  e4e5: {
                    h7h5: {
                      $: {
                        id: 423,
                        eco: "B06",
                        name: "Robatsch: Gurgenidze variation",
                      },
                    },
                  },
                },
              },
            },
            d7d6: {
              $: { id: 424, eco: "B06", name: "Robatsch" },
              g1f3: {
                $: {
                  id: 425,
                  eco: "B06",
                  name: "Robatsch: two knights variation",
                },
                c7c6: {
                  $: {
                    id: 426,
                    eco: "B06",
                    name: "Robatsch: two knights, Suttles variation",
                  },
                },
              },
              f2f4: {
                $: {
                  id: 427,
                  eco: "B06",
                  name: "Robatsch: Pseudo-Austrian attack",
                },
              },
            },
          },
          g1f3: {
            d7d6: {
              c2c4: {
                c8g4: {
                  $: {
                    id: 428,
                    eco: "B06",
                    name: "Robatsch: Rossolimo variation",
                  },
                },
              },
              c2c3: {
                $: { id: 429, eco: "B06", name: "Robatsch: Geller's system" },
              },
            },
          },
        },
      },
    },
    d7d6: {
      d2d4: {
        g8f6: {
          b1c3: {
            $: { id: 430, eco: "B07", name: "Pirc" },
            c7c6: {
              $: {
                id: 431,
                eco: "B07",
                name: "Pirc: Ufimtsev-Pytel variation",
              },
            },
            g7g6: {
              $: { id: 432, eco: "B07", name: "Pirc" },
              c1e3: {
                c7c6: {
                  d1d2: {
                    $: { id: 433, eco: "B07", name: "Pirc: 150 attack" },
                  },
                },
              },
              g2g3: {
                $: { id: 434, eco: "B07", name: "Pirc: Sveshnikov system" },
              },
              f1c4: { $: { id: 435, eco: "B07", name: "Pirc: Holmov system" } },
              c1g5: {
                $: { id: 436, eco: "B07", name: "Pirc: Byrne variation" },
              },
              f1e2: {
                $: { id: 437, eco: "B07", name: "Pirc" },
                f8g7: {
                  g2g4: {
                    $: { id: 438, eco: "B07", name: "Pirc: Chinese variation" },
                  },
                  h2h4: {
                    $: {
                      id: 439,
                      eco: "B07",
                      name: "Pirc: bayonet (Mariotti) attack",
                    },
                  },
                },
              },
              g1f3: {
                $: {
                  id: 440,
                  eco: "B08",
                  name: "Pirc: classical (two knights) system",
                },
                f8g7: {
                  $: {
                    id: 441,
                    eco: "B08",
                    name: "Pirc: classical (two knights) system",
                  },
                  h2h3: {
                    $: {
                      id: 442,
                      eco: "B08",
                      name: "Pirc: classical, h3 system",
                    },
                  },
                  f1e2: {
                    $: {
                      id: 443,
                      eco: "B08",
                      name: "Pirc: classical system, 5.Be2",
                    },
                  },
                },
              },
              f2f4: {
                $: { id: 444, eco: "B09", name: "Pirc: Austrian attack" },
                f8g7: {
                  g1f3: {
                    e8g8: {
                      $: { id: 445, eco: "B09", name: "Pirc: Austrian attack" },
                      e4e5: {
                        $: {
                          id: 446,
                          eco: "B09",
                          name: "Pirc: Austrian attack, 6.e5",
                        },
                      },
                      c1e3: {
                        $: {
                          id: 447,
                          eco: "B09",
                          name: "Pirc: Austrian attack, 6.Be3",
                        },
                      },
                      f1d3: {
                        $: {
                          id: 448,
                          eco: "B09",
                          name: "Pirc: Austrian attack, 6.Bd3",
                        },
                      },
                    },
                    c7c5: {
                      $: {
                        id: 449,
                        eco: "B09",
                        name: "Pirc: Austrian attack, dragon formation",
                      },
                    },
                  },
                  f1c4: {
                    $: {
                      id: 450,
                      eco: "B09",
                      name: "Pirc: Austrian attack, Ljubojevic variation",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    c7c6: {
      $: { id: 451, eco: "B10", name: "Caro-Kann" },
      f1c4: { $: { id: 452, eco: "B10", name: "Caro-Kann: Hillbilly attack" } },
      c2c4: {
        $: { id: 453, eco: "B10", name: "Caro-Kann: anti-Caro-Kann defence" },
        d7d5: {
          $: {
            id: 454,
            eco: "B10",
            name: "Caro-Kann: anti-anti-Caro-Kann defence",
          },
        },
      },
      d2d3: {
        $: {
          id: 455,
          eco: "B10",
          name: "Caro-Kann: closed (Breyer) variation",
        },
      },
      b1c3: {
        $: { id: 456, eco: "B10", name: "Caro-Kann" },
        d7d5: {
          d1f3: {
            $: {
              id: 457,
              eco: "B10",
              name: "Caro-Kann: Goldman (Spielmann) variation",
            },
          },
          g1f3: {
            $: {
              id: 458,
              eco: "B10",
              name: "Caro-Kann: two knights variation",
            },
            c8g4: {
              $: {
                id: 459,
                eco: "B11",
                name: "Caro-Kann: two knights, 3...Bg4",
              },
            },
          },
        },
      },
      d2d4: {
        $: { id: 460, eco: "B12", name: "Caro-Kann" },
        b8a6: {
          b1c3: {
            a6c7: {
              $: { id: 461, eco: "B12", name: "Caro-Kann: de Bruycker" },
            },
          },
        },
        g8f6: { $: { id: 462, eco: "B12", name: "Caro-Kann: Caro-Masi" } },
        d7d5: {
          $: { id: 463, eco: "B12", name: "Caro-Kann" },
          f2f3: {
            $: {
              id: 464,
              eco: "B12",
              name: "Caro-Kann: Tartakower (fantasy) variation",
            },
          },
          b1d2: {
            $: { id: 465, eco: "B12", name: "Caro-Kann: 3.Nd2" },
            d8b6: {
              $: {
                id: 466,
                eco: "B12",
                name: "Caro-Kann: Edinburgh variation",
              },
            },
          },
          e4e5: {
            $: { id: 467, eco: "B12", name: "Caro-Kann: advance variation" },
            c8f5: {
              c2c3: {
                e7e6: {
                  f1e2: {
                    $: {
                      id: 468,
                      eco: "B12",
                      name: "Caro-Kann: advance, Short variation",
                    },
                  },
                },
              },
            },
          },
          e4d5: {
            $: { id: 469, eco: "B13", name: "Caro-Kann: exchange variation" },
            c6d5: {
              f1d3: {
                b8c6: {
                  c2c3: {
                    g8f6: {
                      c1f4: {
                        $: {
                          id: 470,
                          eco: "B13",
                          name: "Caro-Kann: exchange, Rubinstein variation",
                        },
                      },
                    },
                  },
                },
              },
              c2c4: {
                $: {
                  id: 471,
                  eco: "B13",
                  name: "Caro-Kann: Panov-Botvinnik attack",
                },
                g8f6: {
                  c4c5: {
                    $: {
                      id: 472,
                      eco: "B13",
                      name: "Caro-Kann: Panov-Botvinnik, Gunderam attack",
                    },
                  },
                  b1c3: {
                    $: {
                      id: 473,
                      eco: "B13",
                      name: "Caro-Kann: Panov-Botvinnik attack",
                    },
                    b8c6: {
                      c1g5: {
                        d5c4: {
                          d4d5: {
                            c6a5: {
                              $: {
                                id: 474,
                                eco: "B13",
                                name: "Caro-Kann: Panov-Botvinnik, Herzog defence",
                              },
                            },
                          },
                        },
                        e7e6: {
                          $: {
                            id: 475,
                            eco: "B13",
                            name: "Caro-Kann: Panov-Botvinnik, normal variation",
                          },
                        },
                        d8a5: {
                          $: {
                            id: 476,
                            eco: "B13",
                            name: "Caro-Kann: Panov-Botvinnik, Czerniak variation",
                          },
                        },
                        d8b6: {
                          $: {
                            id: 477,
                            eco: "B13",
                            name: "Caro-Kann: Panov-Botvinnik, Reifir (Spielmann) variation",
                          },
                        },
                      },
                    },
                    e7e6: {
                      $: {
                        id: 478,
                        eco: "B14",
                        name: "Caro-Kann: Panov-Botvinnik attack, 5...e6",
                      },
                    },
                    g7g6: {
                      $: {
                        id: 479,
                        eco: "B14",
                        name: "Caro-Kann: Panov-Botvinnik attack, 5...g6",
                      },
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            $: { id: 480, eco: "B15", name: "Caro-Kann" },
            b7b5: {
              $: {
                id: 481,
                eco: "B15",
                name: "Caro-Kann: Gurgenidze counter-attack",
              },
            },
            g7g6: {
              $: { id: 482, eco: "B15", name: "Caro-Kann: Gurgenidze system" },
            },
            d5e4: {
              f2f3: {
                $: {
                  id: 483,
                  eco: "B15",
                  name: "Caro-Kann: Rasa-Studier gambit",
                },
              },
              c3e4: {
                $: { id: 484, eco: "B15", name: "Caro-Kann" },
                g8f6: {
                  f1d3: {
                    $: {
                      id: 485,
                      eco: "B15",
                      name: "Caro-Kann: Alekhine gambit",
                    },
                  },
                  e4f6: {
                    e7f6: {
                      $: {
                        id: 486,
                        eco: "B15",
                        name: "Caro-Kann: Tartakower (Nimzovich) variation",
                      },
                      f1c4: {
                        $: {
                          id: 487,
                          eco: "B15",
                          name: "Caro-Kann: Forgacs variation",
                        },
                      },
                    },
                    g7f6: {
                      $: {
                        id: 488,
                        eco: "B16",
                        name: "Caro-Kann: Bronstein-Larsen variation",
                      },
                    },
                  },
                },
                b8d7: {
                  $: {
                    id: 489,
                    eco: "B17",
                    name: "Caro-Kann: Steinitz variation",
                  },
                },
                c8f5: {
                  $: {
                    id: 490,
                    eco: "B18",
                    name: "Caro-Kann: classical variation",
                  },
                  e4g3: {
                    f5g6: {
                      g1h3: {
                        $: {
                          id: 491,
                          eco: "B18",
                          name: "Caro-Kann: classical, Flohr variation",
                        },
                      },
                      f2f4: {
                        $: {
                          id: 492,
                          eco: "B18",
                          name: "Caro-Kann: classical, Maroczy attack",
                        },
                      },
                      h2h4: {
                        $: {
                          id: 493,
                          eco: "B18",
                          name: "Caro-Kann: classical, 6.h4",
                        },
                        h7h6: {
                          g1f3: {
                            b8d7: {
                              $: {
                                id: 494,
                                eco: "B19",
                                name: "Caro-Kann: classical, 7...Nd7",
                              },
                              h4h5: {
                                $: {
                                  id: 495,
                                  eco: "B19",
                                  name: "Caro-Kann: classical, Spassky variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    c7c5: {
      $: { id: 496, eco: "B20", name: "Sicilian" },
      c2c4: {
        d7d6: {
          b1c3: {
            b8c6: {
              g2g3: {
                h7h5: {
                  $: {
                    id: 497,
                    eco: "B20",
                    name: "Sicilian: Gloria variation",
                  },
                },
              },
            },
          },
        },
      },
      g2g3: {
        $: { id: 498, eco: "B20", name: "Sicilian: Steinitz variation" },
      },
      b2b4: {
        $: { id: 499, eco: "B20", name: "Sicilian: wing gambit" },
        c5b4: {
          c2c4: {
            $: {
              id: 500,
              eco: "B20",
              name: "Sicilian: wing gambit, Santasiere variation",
            },
          },
          a2a3: {
            $: {
              id: 501,
              eco: "B20",
              name: "Sicilian: wing gambit, Marshall variation",
            },
            d7d5: {
              e4d5: {
                d8d5: {
                  c1b2: {
                    $: {
                      id: 502,
                      eco: "B20",
                      name: "Sicilian: wing gambit, Marienbad variation",
                    },
                  },
                },
              },
            },
            b4a3: {
              $: {
                id: 503,
                eco: "B20",
                name: "Sicilian: wing gambit, Carlsbad variation",
              },
            },
          },
        },
      },
      g1e2: {
        $: { id: 504, eco: "B20", name: "Sicilian: Keres variation (2.Ne2)" },
      },
      f2f4: { $: { id: 505, eco: "B21", name: "Sicilian: Grand Prix attack" } },
      d2d4: {
        $: { id: 506, eco: "B21", name: "Sicilian: Smith-Morra gambit" },
        c5d4: {
          g1f3: {
            e7e5: {
              c2c3: {
                $: {
                  id: 507,
                  eco: "B21",
                  name: "Sicilian: Andreaschek gambit",
                },
              },
            },
          },
          c2c3: {
            $: { id: 508, eco: "B21", name: "Sicilian: Smith-Morra gambit" },
            d4c3: {
              b1c3: {
                b8c6: {
                  g1f3: {
                    d7d6: {
                      f1c4: {
                        e7e6: {
                          e1g1: {
                            a7a6: {
                              d1e2: {
                                b7b5: {
                                  c4b3: {
                                    a8a7: {
                                      $: {
                                        id: 509,
                                        eco: "B21",
                                        name: "Sicilian: Smith-Morra gambit, Chicago defence",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      c2c3: {
        $: { id: 510, eco: "B22", name: "Sicilian: Alapin's variation (2.c3)" },
        g8f6: {
          e4e5: {
            f6d5: {
              g1f3: {
                b8c6: {
                  b1a3: {
                    $: {
                      id: 511,
                      eco: "B22",
                      name: "Sicilian: 2.c3, Heidenfeld variation",
                    },
                  },
                },
              },
            },
          },
        },
      },
      b1c3: {
        $: { id: 512, eco: "B23", name: "Sicilian: closed" },
        e7e6: {
          g2g3: {
            d7d5: {
              $: {
                id: 513,
                eco: "B23",
                name: "Sicilian: closed, Korchnoi variation",
              },
            },
          },
        },
        b8c6: {
          $: { id: 514, eco: "B23", name: "Sicilian: closed, 2...Nc6" },
          g1e2: {
            $: { id: 515, eco: "B23", name: "Sicilian: chameleon variation" },
          },
          f2f4: {
            $: { id: 516, eco: "B23", name: "Sicilian: Grand Prix attack" },
            g7g6: {
              g1f3: {
                f8g7: {
                  f1c4: {
                    e7e6: {
                      f4f5: {
                        $: {
                          id: 517,
                          eco: "B23",
                          name: "Sicilian: Grand Prix attack, Schofman variation",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          g2g3: {
            $: { id: 518, eco: "B24", name: "Sicilian: closed" },
            g7g6: {
              f1g2: {
                f8g7: {
                  d2d3: {
                    e7e6: {
                      c1e3: {
                        c6d4: {
                          c3e2: {
                            $: {
                              id: 519,
                              eco: "B24",
                              name: "Sicilian: closed, Smyslov variation",
                            },
                          },
                        },
                      },
                    },
                    d7d6: {
                      $: { id: 520, eco: "B25", name: "Sicilian: closed" },
                      g1e2: {
                        e7e5: {
                          $: {
                            id: 521,
                            eco: "B25",
                            name: "Sicilian: closed, 6.Ne2 e5 (Botvinnik)",
                          },
                        },
                      },
                      f2f4: {
                        $: {
                          id: 522,
                          eco: "B25",
                          name: "Sicilian: closed, 6.f4",
                        },
                        e7e5: {
                          $: {
                            id: 523,
                            eco: "B25",
                            name: "Sicilian: closed, 6.f4 e5 (Botvinnik)",
                          },
                        },
                      },
                      c1e3: {
                        $: {
                          id: 524,
                          eco: "B26",
                          name: "Sicilian: closed, 6.Be3",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      g1f3: {
        $: { id: 525, eco: "B27", name: "Sicilian" },
        d8a5: {
          $: {
            id: 526,
            eco: "B27",
            name: "Sicilian: Stiletto (Althouse) variation",
          },
        },
        d8c7: {
          $: { id: 527, eco: "B27", name: "Sicilian: Quinteros variation" },
        },
        b7b6: {
          $: { id: 528, eco: "B27", name: "Sicilian: Katalimov variation" },
        },
        g7g6: {
          $: { id: 529, eco: "B27", name: "Sicilian: Hungarian variation" },
          c2c4: {
            f8h6: {
              $: { id: 530, eco: "B27", name: "Sicilian: Acton extension" },
            },
          },
        },
        a7a6: {
          $: { id: 531, eco: "B28", name: "Sicilian: O'Kelly variation" },
        },
        g8f6: {
          $: {
            id: 532,
            eco: "B29",
            name: "Sicilian: Nimzovich-Rubinstein variation",
          },
          e4e5: {
            f6d5: {
              b1c3: {
                e7e6: {
                  c3d5: {
                    e6d5: {
                      d2d4: {
                        b8c6: {
                          $: {
                            id: 533,
                            eco: "B29",
                            name: "Sicilian: Nimzovich-Rubinstein; Rubinstein counter-gambit",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        b8c6: {
          $: { id: 534, eco: "B30", name: "Sicilian" },
          f1b5: {
            $: {
              id: 535,
              eco: "B30",
              name: "Sicilian: Nimzovich-Rossolimo attack (without ...d6)",
            },
            g7g6: {
              $: {
                id: 536,
                eco: "B31",
                name: "Sicilian: Nimzovich-Rossolimo attack (with ...g6, without ...d6)",
              },
              e1g1: {
                f8g7: {
                  f1e1: {
                    e7e5: {
                      b2b4: {
                        $: {
                          id: 537,
                          eco: "B31",
                          name: "Sicilian: Nimzovich-Rossolimo attack, Gurgenidze variation",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            $: { id: 538, eco: "B32", name: "Sicilian" },
            c5d4: {
              f3d4: {
                d8c7: {
                  $: { id: 539, eco: "B32", name: "Sicilian: Flohr variation" },
                },
                d7d5: {
                  $: {
                    id: 540,
                    eco: "B32",
                    name: "Sicilian: Nimzovich variation",
                  },
                },
                e7e5: {
                  $: {
                    id: 541,
                    eco: "B32",
                    name: "Sicilian: Labourdonnais-Loewenthal variation",
                  },
                  d4b5: {
                    d7d6: {
                      $: {
                        id: 542,
                        eco: "B32",
                        name: "Sicilian: Labourdonnais-Loewenthal (Kalashnikov) variation",
                      },
                    },
                  },
                },
                g8f6: {
                  $: {
                    id: 543,
                    eco: "B33",
                    name: "Sicilian: Stanley-MacKenzie",
                  },
                  b1c3: {
                    e7e5: {
                      $: {
                        id: 544,
                        eco: "B33",
                        name: "Sicilian: Pelikan (Lasker/Sveshnikov) variation",
                      },
                      d4b5: {
                        d7d6: {
                          c1g5: {
                            a7a6: {
                              b5a3: {
                                c8e6: {
                                  $: {
                                    id: 545,
                                    eco: "B33",
                                    name: "Sicilian: Pelikan, Bird variation",
                                  },
                                },
                                b7b5: {
                                  $: {
                                    id: 546,
                                    eco: "B33",
                                    name: "Sicilian: Pelikan, Chelyabinsk variation",
                                  },
                                  g5f6: {
                                    g7f6: {
                                      c3d5: {
                                        f6f5: {
                                          $: {
                                            id: 547,
                                            eco: "B33",
                                            name: "Sicilian: Sveshnikov variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    d7d6: {
                      f1e2: {
                        $: { id: 600, eco: "B58", name: "Sicilian: classical" },
                        e7e5: {
                          $: {
                            id: 601,
                            eco: "B58",
                            name: "Sicilian: Boleslavsky variation",
                          },
                          d4c6: {
                            $: {
                              id: 602,
                              eco: "B58",
                              name: "Sicilian: Boleslavsky, Louma variation",
                            },
                          },
                          d4b3: {
                            $: {
                              id: 603,
                              eco: "B59",
                              name: "Sicilian: Boleslavsky variation, 7.Nb3",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                g7g6: {
                  d4c6: {
                    $: {
                      id: 548,
                      eco: "B34",
                      name: "Sicilian: accelerated fianchetto, exchange variation",
                    },
                  },
                  b1c3: {
                    $: {
                      id: 549,
                      eco: "B34",
                      name: "Sicilian: accelerated fianchetto, modern variation",
                    },
                    f8g7: {
                      c1e3: {
                        g8f6: {
                          f1c4: {
                            $: {
                              id: 550,
                              eco: "B35",
                              name: "Sicilian: accelerated fianchetto, modern variation with Bc4",
                            },
                          },
                        },
                      },
                    },
                  },
                  c2c4: {
                    $: {
                      id: 551,
                      eco: "B36",
                      name: "Sicilian: accelerated fianchetto, Maroczy bind",
                    },
                    g8f6: {
                      b1c3: {
                        c6d4: {
                          d1d4: {
                            d7d6: {
                              $: {
                                id: 552,
                                eco: "B36",
                                name: "Sicilian: accelerated fianchetto, Gurgenidze variation",
                              },
                            },
                          },
                        },
                      },
                    },
                    f8g7: {
                      $: {
                        id: 553,
                        eco: "B37",
                        name: "Sicilian: accelerated fianchetto, Maroczy bind, 5...Bg7",
                      },
                      d4c2: {
                        d7d6: {
                          f1e2: {
                            g8h6: {
                              $: {
                                id: 554,
                                eco: "B37",
                                name: "Sicilian: accelerated fianchetto, Simagin variation",
                              },
                            },
                          },
                        },
                      },
                      c1e3: {
                        $: {
                          id: 555,
                          eco: "B38",
                          name: "Sicilian: accelerated fianchetto, Maroczy bind, 6.Be3",
                        },
                        g8f6: {
                          b1c3: {
                            f6g4: {
                              $: {
                                id: 556,
                                eco: "B39",
                                name: "Sicilian: accelerated fianchetto, Breyer variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        e7e6: {
          $: { id: 557, eco: "B40", name: "Sicilian" },
          d2d4: {
            d7d5: {
              $: { id: 558, eco: "B40", name: "Sicilian: Marshall variation" },
            },
            c5d4: {
              $: { id: 559, eco: "B40", name: "Sicilian" },
              f3d4: {
                g8f6: {
                  $: {
                    id: 560,
                    eco: "B40",
                    name: "Sicilian: Anderssen variation",
                  },
                  b1c3: {
                    f8b4: {
                      $: {
                        id: 561,
                        eco: "B40",
                        name: "Sicilian: Pin variation (Sicilian counter-attack)",
                      },
                      f1d3: {
                        e6e5: {
                          $: {
                            id: 562,
                            eco: "B40",
                            name: "Sicilian: Pin, Jaffe variation",
                          },
                        },
                      },
                      e4e5: {
                        $: {
                          id: 563,
                          eco: "B40",
                          name: "Sicilian: Pin, Koch variation",
                        },
                      },
                    },
                  },
                },
                a7a6: {
                  $: { id: 564, eco: "B41", name: "Sicilian: Kan variation" },
                  c2c4: {
                    $: {
                      id: 565,
                      eco: "B41",
                      name: "Sicilian: Kan, Maroczy bind (Reti variation)",
                    },
                    g8f6: {
                      b1c3: {
                        f8b4: {
                          f1d3: {
                            b8c6: {
                              d3c2: {
                                $: {
                                  id: 566,
                                  eco: "B41",
                                  name: "Sicilian: Kan, Maroczy bind - Bronstein variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f1d3: {
                    $: { id: 567, eco: "B42", name: "Sicilian: Kan, 5.Bd3" },
                    g8f6: {
                      e1g1: {
                        d7d6: {
                          c2c4: {
                            g7g6: {
                              $: {
                                id: 568,
                                eco: "B42",
                                name: "Sicilian: Kan, Gipslis variation",
                              },
                            },
                          },
                        },
                      },
                    },
                    f8c5: {
                      $: {
                        id: 569,
                        eco: "B42",
                        name: "Sicilian: Kan, Polugaievsky variation",
                      },
                    },
                    g7g6: {
                      $: {
                        id: 570,
                        eco: "B42",
                        name: "Sicilian: Kan, Swiss cheese variation",
                      },
                    },
                  },
                  b1c3: {
                    $: { id: 571, eco: "B43", name: "Sicilian: Kan, 5.Nc3" },
                  },
                },
                b8c6: {
                  $: { id: 572, eco: "B44", name: "Sicilian: Taimanov" },
                  d4b5: {
                    $: { id: 573, eco: "B44", name: "Sicilian: Szen" },
                    d7d6: {
                      c2c4: {
                        $: {
                          id: 574,
                          eco: "B44",
                          name: "Sicilian: Capablanca",
                        },
                        g8f6: {
                          b1c3: {
                            a7a6: {
                              b5a3: {
                                f8e7: {
                                  f1e2: {
                                    e8g8: {
                                      e1g1: {
                                        b7b6: {
                                          $: {
                                            id: 575,
                                            eco: "B44",
                                            name: "Sicilian: Hedgehog variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                d6d5: {
                                  $: {
                                    id: 576,
                                    eco: "B44",
                                    name: "Sicilian: Kasparov gambit",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b1c3: {
                    $: { id: 577, eco: "B45", name: "Sicilian: Bird" },
                    g8f6: {
                      d4b5: {
                        f8b4: {
                          b5d6: {
                            $: {
                              id: 578,
                              eco: "B45",
                              name: "Sicilian: Anderssen",
                            },
                          },
                        },
                      },
                    },
                    a7a6: {
                      $: { id: 579, eco: "B46", name: "Sicilian: Wyvill" },
                    },
                    d8c7: {
                      $: {
                        id: 580,
                        eco: "B47",
                        name: "Sicilian: Taimanov (Bastrikov) variation",
                      },
                      c1e3: {
                        $: {
                          id: 581,
                          eco: "B48",
                          name: "Sicilian: Taimanov variation",
                        },
                        a7a6: {
                          f1e2: {
                            $: {
                              id: 582,
                              eco: "B49",
                              name: "Sicilian: Taimanov variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        d7d6: {
          $: { id: 583, eco: "B50", name: "Sicilian" },
          b2b4: {
            $: { id: 584, eco: "B50", name: "Sicilian: wing gambit deferred" },
          },
          f1b5: {
            $: {
              id: 585,
              eco: "B51",
              name: "Sicilian: Canal-Sokolsky (Nimzovich-Rossolimo, Moscow) attack",
            },
            c8d7: {
              $: {
                id: 586,
                eco: "B52",
                name: "Sicilian: Canal-Sokolsky attack, 3...Bd7",
              },
              b5d7: {
                d8d7: {
                  e1g1: {
                    b8c6: {
                      c2c3: {
                        g8f6: {
                          d2d4: {
                            $: {
                              id: 587,
                              eco: "B52",
                              name: "Sicilian: Canal-Sokolsky attack, Bronstein gambit",
                            },
                          },
                        },
                      },
                    },
                  },
                  c2c4: {
                    $: {
                      id: 588,
                      eco: "B52",
                      name: "Sicilian: Canal-Sokolsky attack, Sokolsky variation",
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            c5d4: {
              d1d4: {
                $: {
                  id: 589,
                  eco: "B53",
                  name: "Sicilian: Uulberg/Quigley/Chekhover",
                },
                b8c6: {
                  f1b5: {
                    d8d7: {
                      $: {
                        id: 590,
                        eco: "B53",
                        name: "Sicilian: Chekhover, Zaitsev variation",
                      },
                    },
                  },
                },
              },
              f3d4: {
                $: { id: 591, eco: "B54", name: "Sicilian" },
                g8f6: {
                  f2f3: {
                    $: {
                      id: 592,
                      eco: "B54",
                      name: "Sicilian: Prins (Moscow) variation",
                    },
                    e7e5: {
                      f1b5: {
                        $: {
                          id: 593,
                          eco: "B55",
                          name: "Sicilian: Prins variation, Venice attack",
                        },
                      },
                    },
                  },
                  b1c3: {
                    $: { id: 594, eco: "B56", name: "Sicilian" },
                    e7e5: {
                      f1b5: {
                        $: {
                          id: 595,
                          eco: "B56",
                          name: "Sicilian: Venice attack",
                        },
                      },
                    },
                    b8c6: {
                      $: { id: 596, eco: "B56", name: "Sicilian" },
                      f1c4: {
                        $: {
                          id: 597,
                          eco: "B57",
                          name: "Sicilian: Sozin, not Scheveningen",
                        },
                        g7g6: {
                          d4c6: {
                            b7c6: {
                              e4e5: {
                                $: {
                                  id: 598,
                                  eco: "B57",
                                  name: "Sicilian: Magnus Smith trap",
                                },
                              },
                            },
                          },
                        },
                        d8b6: {
                          $: {
                            id: 599,
                            eco: "B57",
                            name: "Sicilian: Sozin, Benko variation",
                          },
                        },
                      },
                      c1g5: {
                        $: {
                          id: 604,
                          eco: "B60",
                          name: "Sicilian: Richter-Rauzer",
                        },
                        g7g6: {
                          $: {
                            id: 605,
                            eco: "B60",
                            name: "Sicilian: Richter-Rauzer, Bondarevsky variation",
                          },
                        },
                        c8d7: {
                          $: {
                            id: 606,
                            eco: "B60",
                            name: "Sicilian: Richter-Rauzer, Larsen variation",
                          },
                          d1d2: {
                            $: {
                              id: 607,
                              eco: "B61",
                              name: "Sicilian: Richter-Rauzer, Larsen variation, 7.Qd2",
                            },
                          },
                        },
                        e7e6: {
                          $: {
                            id: 608,
                            eco: "B62",
                            name: "Sicilian: Richter-Rauzer, 6...e6",
                          },
                          d4b3: {
                            $: {
                              id: 609,
                              eco: "B62",
                              name: "Sicilian: Richter-Rauzer, Podvebrady variation",
                            },
                          },
                          f1b5: {
                            $: {
                              id: 610,
                              eco: "B62",
                              name: "Sicilian: Richter-Rauzer, Margate (Alekhine) variation",
                            },
                          },
                          d4c6: {
                            $: {
                              id: 611,
                              eco: "B62",
                              name: "Sicilian: Richter-Rauzer, Richter attack",
                            },
                          },
                          d1d3: {
                            $: {
                              id: 612,
                              eco: "B62",
                              name: "Sicilian: Richter-Rauzer, Keres variation",
                            },
                          },
                          d1d2: {
                            $: {
                              id: 613,
                              eco: "B63",
                              name: "Sicilian: Richter-Rauzer, Rauzer attack",
                            },
                            f8e7: {
                              $: {
                                id: 614,
                                eco: "B63",
                                name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...Be7",
                              },
                              e1c1: {
                                e8g8: {
                                  f2f4: {
                                    $: {
                                      id: 615,
                                      eco: "B64",
                                      name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...Be7 defence, 9.f4",
                                    },
                                    e6e5: {
                                      $: {
                                        id: 616,
                                        eco: "B64",
                                        name: "Sicilian: Richter-Rauzer, Rauzer attack, Geller variation",
                                      },
                                    },
                                    c6d4: {
                                      $: {
                                        id: 617,
                                        eco: "B65",
                                        name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...Be7 defence, 9...Nxd4",
                                      },
                                      d2d4: {
                                        $: {
                                          id: 618,
                                          eco: "B65",
                                          name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...Be7 defence, 9...Nxd4",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            a7a6: {
                              $: {
                                id: 619,
                                eco: "B66",
                                name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...a6",
                              },
                              e1c1: {
                                c8d7: {
                                  $: {
                                    id: 620,
                                    eco: "B67",
                                    name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...a6 defence, 8...Bd7",
                                  },
                                  f2f4: {
                                    f8e7: {
                                      $: {
                                        id: 621,
                                        eco: "B68",
                                        name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...a6 defence, 9...Be7",
                                      },
                                      d4f3: {
                                        b7b5: {
                                          g5f6: {
                                            $: {
                                              id: 622,
                                              eco: "B69",
                                              name: "Sicilian: Richter-Rauzer, Rauzer attack, 7...a6 defence, 11.Bxf6",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    g7g6: {
                      $: {
                        id: 623,
                        eco: "B70",
                        name: "Sicilian: dragon variation",
                      },
                      f2f4: {
                        $: {
                          id: 624,
                          eco: "B71",
                          name: "Sicilian: dragon, Levenfish variation",
                        },
                        b8d7: {
                          $: {
                            id: 625,
                            eco: "B71",
                            name: "Sicilian: dragon, Levenfish; Flohr variation",
                          },
                        },
                      },
                      c1e3: {
                        $: {
                          id: 626,
                          eco: "B72",
                          name: "Sicilian: dragon, 6.Be3",
                        },
                        f8g7: {
                          f1e2: {
                            $: {
                              id: 627,
                              eco: "B72",
                              name: "Sicilian: dragon, classical attack",
                            },
                            b8c6: {
                              d1d2: {
                                $: {
                                  id: 628,
                                  eco: "B72",
                                  name: "Sicilian: dragon, classical, Amsterdam variation",
                                },
                                e8g8: {
                                  e1c1: {
                                    $: {
                                      id: 629,
                                      eco: "B72",
                                      name: "Sicilian: dragon, classical, Grigoriev variation",
                                    },
                                  },
                                },
                              },
                              d4b3: {
                                $: {
                                  id: 630,
                                  eco: "B72",
                                  name: "Sicilian: dragon, classical, Nottingham variation",
                                },
                              },
                              e1g1: {
                                $: {
                                  id: 631,
                                  eco: "B73",
                                  name: "Sicilian: dragon, classical, 8.O-O",
                                },
                                e8g8: {
                                  f2f4: {
                                    d8b6: {
                                      e4e5: {
                                        $: {
                                          id: 632,
                                          eco: "B73",
                                          name: "Sicilian: dragon, classical, Zollner gambit",
                                        },
                                      },
                                    },
                                  },
                                  d1d2: {
                                    $: {
                                      id: 633,
                                      eco: "B73",
                                      name: "Sicilian: dragon, classical, Richter variation",
                                    },
                                  },
                                  d4b3: {
                                    $: {
                                      id: 634,
                                      eco: "B74",
                                      name: "Sicilian: dragon, classical, 9.Nb3",
                                    },
                                    c8e6: {
                                      f2f4: {
                                        c6a5: {
                                          f4f5: {
                                            e6c4: {
                                              b3a5: {
                                                c4e2: {
                                                  d1e2: {
                                                    d8a5: {
                                                      g2g4: {
                                                        $: {
                                                          id: 635,
                                                          eco: "B74",
                                                          name: "Sicilian: dragon, classical, Stockholm attack",
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              e2d3: {
                                                $: {
                                                  id: 636,
                                                  eco: "B74",
                                                  name: "Sicilian: dragon, classical, Spielmann variation",
                                                },
                                                c4d3: {
                                                  c2d3: {
                                                    d6d5: {
                                                      $: {
                                                        id: 637,
                                                        eco: "B74",
                                                        name: "Sicilian: dragon, classical, Bernard defence",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        d8c8: {
                                          $: {
                                            id: 638,
                                            eco: "B74",
                                            name: "Sicilian: dragon, classical, Reti-Tartakower variation",
                                          },
                                        },
                                      },
                                    },
                                    a7a5: {
                                      $: {
                                        id: 639,
                                        eco: "B74",
                                        name: "Sicilian: dragon, classical, Alekhine variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          f2f3: {
                            $: {
                              id: 640,
                              eco: "B75",
                              name: "Sicilian: dragon, Yugoslav attack",
                            },
                            e8g8: {
                              $: {
                                id: 641,
                                eco: "B76",
                                name: "Sicilian: dragon, Yugoslav attack, 7...O-O",
                              },
                              d1d2: {
                                b8c6: {
                                  e1c1: {
                                    $: {
                                      id: 642,
                                      eco: "B76",
                                      name: "Sicilian: dragon, Yugoslav attack, Rauser variation",
                                    },
                                  },
                                  f1c4: {
                                    $: {
                                      id: 643,
                                      eco: "B77",
                                      name: "Sicilian: dragon, Yugoslav attack, 9.Bc4",
                                    },
                                    a7a5: {
                                      $: {
                                        id: 644,
                                        eco: "B77",
                                        name: "Sicilian: dragon, Yugoslav attack, Byrne variation",
                                      },
                                    },
                                    c8d7: {
                                      $: {
                                        id: 645,
                                        eco: "B77",
                                        name: "Sicilian: dragon, Yugoslav attack, 9...Bd7",
                                      },
                                      e1c1: {
                                        $: {
                                          id: 646,
                                          eco: "B78",
                                          name: "Sicilian: dragon, Yugoslav attack, 10.O-O-O",
                                        },
                                        d8a5: {
                                          c4b3: {
                                            f8c8: {
                                              h2h4: {
                                                $: {
                                                  id: 647,
                                                  eco: "B79",
                                                  name: "Sicilian: dragon, Yugoslav attack, 12.h4",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    e7e6: {
                      $: {
                        id: 648,
                        eco: "B80",
                        name: "Sicilian: Scheveningen variation",
                      },
                      c1e3: {
                        a7a6: {
                          d1d2: {
                            $: {
                              id: 649,
                              eco: "B80",
                              name: "Sicilian: Scheveningen, English variation",
                            },
                          },
                        },
                      },
                      f1b5: {
                        $: {
                          id: 650,
                          eco: "B80",
                          name: "Sicilian: Scheveningen, Vitolins variation",
                        },
                      },
                      g2g3: {
                        $: {
                          id: 651,
                          eco: "B80",
                          name: "Sicilian: Scheveningen, fianchetto variation",
                        },
                      },
                      g2g4: {
                        $: {
                          id: 652,
                          eco: "B81",
                          name: "Sicilian: Scheveningen, Keres attack",
                        },
                      },
                      f2f4: {
                        $: {
                          id: 653,
                          eco: "B82",
                          name: "Sicilian: Scheveningen, 6.f4",
                        },
                        b8c6: {
                          c1e3: {
                            f8e7: {
                              d1f3: {
                                $: {
                                  id: 654,
                                  eco: "B82",
                                  name: "Sicilian: Scheveningen, Tal variation",
                                },
                              },
                            },
                          },
                        },
                      },
                      f1e2: {
                        $: {
                          id: 655,
                          eco: "B83",
                          name: "Sicilian: Scheveningen, 6.Be2",
                        },
                        b8c6: {
                          $: {
                            id: 656,
                            eco: "B83",
                            name: "Sicilian: modern Scheveningen",
                          },
                          e1g1: {
                            f8e7: {
                              c1e3: {
                                e8g8: {
                                  f2f4: {
                                    $: {
                                      id: 657,
                                      eco: "B83",
                                      name: "Sicilian: modern Scheveningen, main line",
                                    },
                                    c8d7: {
                                      d4b3: {
                                        $: {
                                          id: 658,
                                          eco: "B83",
                                          name: "Sicilian: modern Scheveningen, main line with Nb3",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        a7a6: {
                          $: {
                            id: 659,
                            eco: "B84",
                            name: "Sicilian: Scheveningen (Paulsen), classical variation",
                          },
                          e1g1: {
                            b8d7: {
                              $: {
                                id: 660,
                                eco: "B84",
                                name: "Sicilian: Scheveningen, classical, Nd7 system",
                              },
                            },
                            d8c7: {
                              $: {
                                id: 661,
                                eco: "B84",
                                name: "Sicilian: Scheveningen (Paulsen), classical variation",
                              },
                              f2f4: {
                                b8c6: {
                                  $: {
                                    id: 662,
                                    eco: "B85",
                                    name: "Sicilian: Scheveningen, classical variation with ...Qc7 and ...Nc6",
                                  },
                                  g1h1: {
                                    f8e7: {
                                      a2a4: {
                                        $: {
                                          id: 663,
                                          eco: "B85",
                                          name: "Sicilian: Scheveningen, classical, Maroczy system",
                                        },
                                      },
                                    },
                                  },
                                  c1e3: {
                                    $: {
                                      id: 664,
                                      eco: "B85",
                                      name: "Sicilian: Scheveningen, classical",
                                    },
                                    f8e7: {
                                      d1e1: {
                                        e8g8: {
                                          $: {
                                            id: 665,
                                            eco: "B85",
                                            name: "Sicilian: Scheveningen, classical main line",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      f1c4: {
                        $: {
                          id: 666,
                          eco: "B86",
                          name: "Sicilian: Sozin attack",
                        },
                        a7a6: {
                          c4b3: {
                            b7b5: {
                              $: {
                                id: 667,
                                eco: "B87",
                                name: "Sicilian: Sozin with ...a6 and ...b5",
                              },
                            },
                          },
                        },
                        b8c6: {
                          $: {
                            id: 668,
                            eco: "B88",
                            name: "Sicilian: Sozin, Leonhardt variation",
                          },
                          c4b3: {
                            f8e7: {
                              c1e3: {
                                e8g8: {
                                  f2f4: {
                                    $: {
                                      id: 669,
                                      eco: "B88",
                                      name: "Sicilian: Sozin, Fischer variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          c1e3: {
                            $: {
                              id: 670,
                              eco: "B89",
                              name: "Sicilian: Sozin, 7.Be3",
                            },
                            f8e7: {
                              d1e2: {
                                $: {
                                  id: 671,
                                  eco: "B89",
                                  name: "Sicilian: Velimirovic attack",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    a7a6: {
                      $: { id: 672, eco: "B90", name: "Sicilian: Najdorf" },
                      h2h3: {
                        $: {
                          id: 673,
                          eco: "B90",
                          name: "Sicilian: Najdorf, Adams attack",
                        },
                      },
                      f1c4: {
                        $: {
                          id: 674,
                          eco: "B90",
                          name: "Sicilian: Najdorf, Lipnitzky attack",
                        },
                      },
                      c1e3: {
                        $: {
                          id: 675,
                          eco: "B90",
                          name: "Sicilian: Najdorf, Byrne (English) attack",
                        },
                      },
                      g2g3: {
                        $: {
                          id: 676,
                          eco: "B91",
                          name: "Sicilian: Najdorf, Zagreb (fianchetto) variation",
                        },
                      },
                      f1e2: {
                        $: {
                          id: 677,
                          eco: "B92",
                          name: "Sicilian: Najdorf, Opovcensky variation",
                        },
                      },
                      f2f4: {
                        $: {
                          id: 678,
                          eco: "B93",
                          name: "Sicilian: Najdorf, 6.f4",
                        },
                      },
                      c1g5: {
                        $: {
                          id: 679,
                          eco: "B94",
                          name: "Sicilian: Najdorf, 6.Bg5",
                        },
                        b8d7: {
                          f1c4: {
                            d8a5: {
                              d1d2: {
                                e7e6: {
                                  e1c1: {
                                    b7b5: {
                                      c4b3: {
                                        c8b7: {
                                          h1e1: {
                                            d7c5: {
                                              e4e5: {
                                                $: {
                                                  id: 680,
                                                  eco: "B94",
                                                  name: "Sicilian: Najdorf, Ivkov variation",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        e7e6: {
                          $: {
                            id: 681,
                            eco: "B95",
                            name: "Sicilian: Najdorf, 6...e6",
                          },
                          f2f4: {
                            $: {
                              id: 682,
                              eco: "B96",
                              name: "Sicilian: Najdorf, 7.f4",
                            },
                            b7b5: {
                              $: {
                                id: 683,
                                eco: "B96",
                                name: "Sicilian: Najdorf, Polugayevsky variation",
                              },
                              e4e5: {
                                d6e5: {
                                  f4e5: {
                                    d8c7: {
                                      d1e2: {
                                        $: {
                                          id: 684,
                                          eco: "B96",
                                          name: "Sicilian: Najdorf, Polugayevsky, Simagin variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            d8b6: {
                              $: {
                                id: 685,
                                eco: "B97",
                                name: "Sicilian: Najdorf, 7...Qb6",
                              },
                              d1d2: {
                                b6b2: {
                                  a1b1: {
                                    b2a3: {
                                      $: {
                                        id: 686,
                                        eco: "B97",
                                        name: "Sicilian: Najdorf, Poisoned pawn variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            f8e7: {
                              $: {
                                id: 687,
                                eco: "B98",
                                name: "Sicilian: Najdorf, 7...Be7",
                              },
                              d1f3: {
                                h7h6: {
                                  g5h4: {
                                    d8c7: {
                                      $: {
                                        id: 688,
                                        eco: "B98",
                                        name: "Sicilian: Najdorf, Browne variation",
                                      },
                                    },
                                    g7g5: {
                                      $: {
                                        id: 689,
                                        eco: "B98",
                                        name: "Sicilian: Najdorf, Goteborg (Argentine) variation",
                                      },
                                    },
                                  },
                                },
                                d8c7: {
                                  $: {
                                    id: 690,
                                    eco: "B98",
                                    name: "Sicilian: Najdorf variation",
                                  },
                                  e1c1: {
                                    b8d7: {
                                      $: {
                                        id: 691,
                                        eco: "B99",
                                        name: "Sicilian: Najdorf, 7...Be7 main line",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    e7e6: {
      $: { id: 692, eco: "C00", name: "French" },
      c2c4: { $: { id: 693, eco: "C00", name: "French: Steiner" } },
      b2b3: {
        $: { id: 694, eco: "C00", name: "French: Reti (Spielmann) variation" },
      },
      e4e5: { $: { id: 695, eco: "C00", name: "French: Steinitz attack" } },
      f2f4: {
        $: { id: 696, eco: "C00", name: "French: Labourdonnais variation" },
      },
      g1f3: {
        $: { id: 697, eco: "C00", name: "French" },
        d7d5: {
          e4e5: {
            c7c5: {
              b2b4: { $: { id: 698, eco: "C00", name: "French: Wing gambit" } },
            },
          },
        },
      },
      b1c3: {
        $: { id: 699, eco: "C00", name: "French" },
        d7d5: {
          f2f4: {
            $: { id: 700, eco: "C00", name: "French: Pelikan variation" },
          },
          g1f3: {
            $: { id: 701, eco: "C00", name: "French: Two knights variation" },
          },
        },
      },
      d1e2: { $: { id: 702, eco: "C00", name: "French: Chigorin variation" } },
      d2d3: {
        $: { id: 703, eco: "C00", name: "French: King's Indian attack" },
        d7d5: {
          b1d2: {
            g8f6: {
              g1f3: {
                b8c6: {
                  f1e2: {
                    $: {
                      id: 704,
                      eco: "C00",
                      name: "French: Reversed Philidor formation",
                    },
                  },
                },
              },
            },
          },
        },
      },
      d2d4: {
        $: { id: 705, eco: "C00", name: "French" },
        d7d6: { $: { id: 706, eco: "C00", name: "Lengfellner system" } },
        a7a6: {
          $: { id: 707, eco: "C00", name: "French: St. George defence" },
        },
        d7d5: {
          $: { id: 708, eco: "C00", name: "French" },
          f1d3: {
            $: { id: 709, eco: "C00", name: "French: Schlechter variation" },
          },
          c1e3: {
            $: { id: 710, eco: "C00", name: "French: Alapin variation" },
          },
          e4d5: {
            $: { id: 711, eco: "C01", name: "French: exchange variation" },
            e6d5: {
              b1c3: {
                g8f6: {
                  c1g5: {
                    $: {
                      id: 712,
                      eco: "C01",
                      name: "French: exchange, Svenonius variation",
                    },
                    b8c6: {
                      $: {
                        id: 713,
                        eco: "C01",
                        name: "French: exchange, Bogolyubov variation",
                      },
                    },
                  },
                },
              },
            },
          },
          e4e5: {
            $: { id: 714, eco: "C02", name: "French: advance variation" },
            c7c5: {
              d4c5: {
                $: {
                  id: 715,
                  eco: "C02",
                  name: "French: advance, Steinitz variation",
                },
              },
              d1g4: {
                $: {
                  id: 716,
                  eco: "C02",
                  name: "French: advance, Nimzovich variation",
                },
              },
              g1f3: {
                $: {
                  id: 717,
                  eco: "C02",
                  name: "French: advance, Nimzovich system",
                },
              },
              c2c3: {
                $: { id: 718, eco: "C02", name: "French: advance variation" },
                d8b6: {
                  g1f3: {
                    c8d7: {
                      $: {
                        id: 719,
                        eco: "C02",
                        name: "French: advance, Wade variation",
                      },
                    },
                  },
                },
                b8c6: {
                  $: { id: 720, eco: "C02", name: "French: advance variation" },
                  g1f3: {
                    $: {
                      id: 721,
                      eco: "C02",
                      name: "French: advance, Paulsen attack",
                    },
                    d8b6: {
                      f1d3: {
                        $: {
                          id: 722,
                          eco: "C02",
                          name: "French: advance, Milner-Barry gambit",
                        },
                      },
                    },
                    c8d7: {
                      $: {
                        id: 723,
                        eco: "C02",
                        name: "French: advance, Euwe variation",
                      },
                    },
                  },
                },
              },
            },
          },
          b1d2: {
            $: { id: 724, eco: "C03", name: "French: Tarrasch" },
            f7f5: {
              $: {
                id: 725,
                eco: "C03",
                name: "French: Tarrasch, Haberditz variation",
              },
            },
            b8c6: {
              $: {
                id: 726,
                eco: "C03",
                name: "French: Tarrasch, Guimard variation",
              },
              g1f3: {
                g8f6: {
                  $: {
                    id: 727,
                    eco: "C04",
                    name: "French: Tarrasch, Guimard main line",
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 728,
                eco: "C05",
                name: "French: Tarrasch, closed variation",
              },
              e4e5: {
                f6d7: {
                  f1d3: {
                    c7c5: {
                      c2c3: {
                        b7b6: {
                          $: {
                            id: 729,
                            eco: "C05",
                            name: "French: Tarrasch, Botvinnik variation",
                          },
                        },
                        b8c6: {
                          $: {
                            id: 730,
                            eco: "C05",
                            name: "French: Tarrasch, closed variation",
                          },
                          g1e2: {
                            c5d4: {
                              c3d4: {
                                $: {
                                  id: 731,
                                  eco: "C06",
                                  name: "French: Tarrasch, closed variation, main line",
                                },
                                d7b6: {
                                  $: {
                                    id: 732,
                                    eco: "C06",
                                    name: "French: Tarrasch, Leningrad variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            c7c5: {
              $: {
                id: 733,
                eco: "C07",
                name: "French: Tarrasch, open variation",
              },
              e4d5: {
                d8d5: {
                  g1f3: {
                    c5d4: {
                      f1c4: {
                        d5d8: {
                          $: {
                            id: 734,
                            eco: "C07",
                            name: "French: Tarrasch, Eliskases variation",
                          },
                        },
                      },
                    },
                  },
                },
                e6d5: {
                  $: {
                    id: 735,
                    eco: "C08",
                    name: "French: Tarrasch, open, 4.ed ed",
                  },
                  g1f3: {
                    b8c6: {
                      $: {
                        id: 736,
                        eco: "C09",
                        name: "French: Tarrasch, open variation, main line",
                      },
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            $: { id: 737, eco: "C10", name: "French: Paulsen variation" },
            c7c5: {
              $: { id: 738, eco: "C10", name: "French: Marshall variation" },
            },
            d5e4: {
              $: { id: 739, eco: "C10", name: "French: Rubinstein variation" },
              c3e4: {
                c8d7: {
                  g1f3: {
                    d7c6: {
                      $: {
                        id: 740,
                        eco: "C10",
                        name: "French: Fort Knox variation",
                      },
                    },
                  },
                },
                b8d7: {
                  $: {
                    id: 741,
                    eco: "C10",
                    name: "French: Rubinstein variation",
                  },
                  g1f3: {
                    g8f6: {
                      e4f6: {
                        d7f6: {
                          f3e5: {
                            $: {
                              id: 742,
                              eco: "C10",
                              name: "French: Rubinstein, Capablanca line",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                d8d5: {
                  $: {
                    id: 743,
                    eco: "C10",
                    name: "French: Frere (Becker) variation",
                  },
                },
              },
            },
            g8f6: {
              $: { id: 744, eco: "C11", name: "French" },
              f1d3: {
                $: { id: 745, eco: "C11", name: "French: Swiss variation" },
              },
              c1e3: {
                $: {
                  id: 746,
                  eco: "C11",
                  name: "French: Henneberger variation",
                },
              },
              e4e5: {
                $: { id: 747, eco: "C11", name: "French: Steinitz variation" },
                f6d7: {
                  f2f4: {
                    c7c5: {
                      d4c5: {
                        f8c5: {
                          d1g4: {
                            $: {
                              id: 748,
                              eco: "C11",
                              name: "French: Steinitz, Bradford attack",
                            },
                          },
                        },
                        b8c6: {
                          $: {
                            id: 749,
                            eco: "C11",
                            name: "French: Steinitz variation",
                          },
                          a2a3: {
                            f8c5: {
                              d1g4: {
                                e8g8: {
                                  g1f3: {
                                    f7f6: {
                                      $: {
                                        id: 750,
                                        eco: "C11",
                                        name: "French: Steinitz, Brodsky-Jones variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      g1f3: {
                        $: {
                          id: 751,
                          eco: "C11",
                          name: "French: Steinitz variation",
                        },
                        b8c6: {
                          c1e3: {
                            $: {
                              id: 752,
                              eco: "C11",
                              name: "French: Steinitz, Boleslavsky variation",
                            },
                          },
                        },
                      },
                    },
                  },
                  d1g4: {
                    $: {
                      id: 753,
                      eco: "C11",
                      name: "French: Steinitz, Gledhill attack",
                    },
                  },
                },
              },
              c1g5: {
                d5e4: {
                  $: { id: 754, eco: "C11", name: "French: Burn variation" },
                },
                f8b4: {
                  $: {
                    id: 755,
                    eco: "C12",
                    name: "French: MacCutcheon variation",
                  },
                  e4d5: {
                    d8d5: {
                      g5f6: {
                        g7f6: {
                          d1d2: {
                            d5a5: {
                              $: {
                                id: 756,
                                eco: "C12",
                                name: "French: MacCutcheon, Bogolyubov variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  e4e5: {
                    $: {
                      id: 757,
                      eco: "C12",
                      name: "French: MacCutcheon, advance variation",
                    },
                    h7h6: {
                      e5f6: {
                        $: {
                          id: 758,
                          eco: "C12",
                          name: "French: MacCutcheon, Chigorin variation",
                        },
                        h6g5: {
                          f6g7: {
                            h8g8: {
                              h2h4: {
                                g5h4: {
                                  d1g4: {
                                    $: {
                                      id: 759,
                                      eco: "C12",
                                      name: "French: MacCutcheon, Grigoriev variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      g5h4: {
                        $: {
                          id: 760,
                          eco: "C12",
                          name: "French: MacCutcheon, Bernstein variation",
                        },
                      },
                      g5e3: {
                        $: {
                          id: 761,
                          eco: "C12",
                          name: "French: MacCutcheon, Janowski variation",
                        },
                      },
                      g5c1: {
                        $: {
                          id: 762,
                          eco: "C12",
                          name: "French: MacCutcheon, Dr. Olland (Dutch) variation",
                        },
                      },
                      g5d2: {
                        f6d7: {
                          $: {
                            id: 763,
                            eco: "C12",
                            name: "French: MacCutcheon, Tartakower variation",
                          },
                        },
                        b4c3: {
                          $: {
                            id: 764,
                            eco: "C12",
                            name: "French: MacCutcheon, Lasker variation",
                          },
                          b2c3: {
                            f6e4: {
                              d1g4: {
                                e8f8: {
                                  d2c1: {
                                    $: {
                                      id: 765,
                                      eco: "C12",
                                      name: "French: MacCutcheon, Duras variation",
                                    },
                                  },
                                },
                                g7g6: {
                                  $: {
                                    id: 766,
                                    eco: "C12",
                                    name: "French: MacCutcheon, Lasker variation, 8...g6",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                f8e7: {
                  $: { id: 767, eco: "C13", name: "French: classical" },
                  g5f6: {
                    $: {
                      id: 768,
                      eco: "C13",
                      name: "French: classical, Anderssen variation",
                    },
                    e7f6: {
                      e4e5: {
                        f6e7: {
                          d1g4: {
                            $: {
                              id: 769,
                              eco: "C13",
                              name: "French: classical, Anderssen-Richter variation",
                            },
                          },
                        },
                      },
                    },
                  },
                  e4e5: {
                    f6g8: {
                      $: {
                        id: 770,
                        eco: "C13",
                        name: "French: classical, Vistaneckis (Nimzovich) variation",
                      },
                      g5e3: {
                        b7b6: {
                          $: {
                            id: 771,
                            eco: "C13",
                            name: "French: classical, Frankfurt variation",
                          },
                        },
                      },
                    },
                    f6e4: {
                      $: {
                        id: 772,
                        eco: "C13",
                        name: "French: classical, Tartakower variation",
                      },
                    },
                    f6d7: {
                      h2h4: {
                        $: {
                          id: 773,
                          eco: "C13",
                          name: "French: Albin-Alekhine-Chatard attack",
                        },
                        a7a6: {
                          $: {
                            id: 774,
                            eco: "C13",
                            name: "French: Albin-Alekhine-Chatard attack, Maroczy variation",
                          },
                        },
                        c7c5: {
                          $: {
                            id: 775,
                            eco: "C13",
                            name: "French: Albin-Alekhine-Chatard attack, Breyer variation",
                          },
                        },
                        f7f6: {
                          $: {
                            id: 776,
                            eco: "C13",
                            name: "French: Albin-Alekhine-Chatard attack, Teichmann variation",
                          },
                        },
                        e8g8: {
                          $: {
                            id: 777,
                            eco: "C13",
                            name: "French: Albin-Alekhine-Chatard attack, Spielmann variation",
                          },
                        },
                      },
                      g5e7: {
                        d8e7: {
                          $: {
                            id: 778,
                            eco: "C14",
                            name: "French: classical variation",
                          },
                          f1d3: {
                            $: {
                              id: 779,
                              eco: "C14",
                              name: "French: classical, Tarrasch variation",
                            },
                          },
                          d1d2: {
                            $: {
                              id: 780,
                              eco: "C14",
                              name: "French: classical, Rubinstein variation",
                            },
                          },
                          c3b5: {
                            $: {
                              id: 781,
                              eco: "C14",
                              name: "French: classical, Alapin variation",
                            },
                          },
                          d1g4: {
                            $: {
                              id: 782,
                              eco: "C14",
                              name: "French: classical, Pollock variation",
                            },
                          },
                          f2f4: {
                            $: {
                              id: 783,
                              eco: "C14",
                              name: "French: classical, Steinitz variation",
                            },
                            e8g8: {
                              g1f3: {
                                c7c5: {
                                  d1d2: {
                                    b8c6: {
                                      e1c1: {
                                        c5c4: {
                                          $: {
                                            id: 784,
                                            eco: "C14",
                                            name: "French: classical, Stahlberg variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            f8b4: {
              $: {
                id: 785,
                eco: "C15",
                name: "French: Winawer (Nimzovich) variation",
              },
              f1d3: {
                c7c5: {
                  e4d5: {
                    d8d5: {
                      c1d2: {
                        $: {
                          id: 786,
                          eco: "C15",
                          name: "French: Winawer, Kondratiyev variation",
                        },
                      },
                    },
                  },
                },
              },
              c1d2: {
                $: {
                  id: 787,
                  eco: "C15",
                  name: "French: Winawer, fingerslip variation",
                },
              },
              g1e2: {
                $: {
                  id: 788,
                  eco: "C15",
                  name: "French: Winawer, Alekhine (Maroczy) gambit",
                },
                d5e4: {
                  a2a3: {
                    b4e7: {
                      c3e4: {
                        g8f6: {
                          e2g3: {
                            e8g8: {
                              f1e2: {
                                b8c6: {
                                  $: {
                                    id: 789,
                                    eco: "C15",
                                    name: "French: Winawer, Alekhine gambit, Alatortsev variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    b4c3: {
                      $: {
                        id: 790,
                        eco: "C15",
                        name: "French: Winawer, Alekhine gambit",
                      },
                      e2c3: {
                        b8c6: {
                          $: {
                            id: 791,
                            eco: "C15",
                            name: "French: Winawer, Alekhine gambit, Kan variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
              e4e5: {
                $: {
                  id: 792,
                  eco: "C16",
                  name: "French: Winawer, advance variation",
                },
                d8d7: {
                  $: {
                    id: 793,
                    eco: "C16",
                    name: "French: Winawer, Petrosian variation",
                  },
                },
                c7c5: {
                  $: {
                    id: 794,
                    eco: "C17",
                    name: "French: Winawer, advance variation",
                  },
                  c1d2: {
                    $: {
                      id: 795,
                      eco: "C17",
                      name: "French: Winawer, advance, Bogolyubov variation",
                    },
                  },
                  d1g4: {
                    $: {
                      id: 796,
                      eco: "C17",
                      name: "French: Winawer, advance, Russian variation",
                    },
                  },
                  a2a3: {
                    $: {
                      id: 797,
                      eco: "C17",
                      name: "French: Winawer, advance, 5.a3",
                    },
                    c5d4: {
                      a3b4: {
                        d4c3: {
                          g1f3: {
                            $: {
                              id: 798,
                              eco: "C17",
                              name: "French: Winawer, advance, Rauzer variation",
                            },
                          },
                        },
                      },
                    },
                    b4c3: {
                      b2c3: {
                        $: {
                          id: 799,
                          eco: "C18",
                          name: "French: Winawer, advance variation",
                        },
                        d8c7: {
                          $: {
                            id: 800,
                            eco: "C18",
                            name: "French: Winawer, classical variation",
                          },
                        },
                        g8e7: {
                          $: {
                            id: 801,
                            eco: "C19",
                            name: "French: Winawer, advance, 6...Ne7",
                          },
                          a3a4: {
                            $: {
                              id: 802,
                              eco: "C19",
                              name: "French: Winawer, advance, Smyslov variation",
                            },
                          },
                          g1f3: {
                            $: {
                              id: 803,
                              eco: "C19",
                              name: "French: Winawer, advance, positional main line",
                            },
                          },
                          d1g4: {
                            $: {
                              id: 804,
                              eco: "C19",
                              name: "French: Winawer, advance, poisoned pawn variation",
                            },
                            d8c7: {
                              g4g7: {
                                h8g8: {
                                  g7h7: {
                                    c5d4: {
                                      e1d1: {
                                        $: {
                                          id: 805,
                                          eco: "C19",
                                          name: "French: Winawer, advance, poisoned pawn, Euwe-Gligoric variation",
                                        },
                                      },
                                      g1e2: {
                                        $: {
                                          id: 806,
                                          eco: "C19",
                                          name: "French: Winawer, advance, poisoned pawn, Konstantinopolsky variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    e7e5: {
      $: { id: 807, eco: "C20", name: "King's pawn game" },
      d2d3: {
        $: { id: 808, eco: "C20", name: "King's pawn game: Indian opening" },
      },
      a2a3: {
        $: {
          id: 809,
          eco: "C20",
          name: "King's pawn game: Mengarini's opening",
        },
      },
      f2f3: {
        $: {
          id: 810,
          eco: "C20",
          name: "King's pawn game: King's head opening",
        },
      },
      d1h5: {
        $: { id: 811, eco: "C20", name: "King's pawn game: Patzer opening" },
      },
      d1f3: {
        $: {
          id: 812,
          eco: "C20",
          name: "King's pawn game: Napoleon's opening",
        },
      },
      c2c3: {
        $: { id: 813, eco: "C20", name: "King's pawn game: Lopez opening" },
      },
      g1e2: { $: { id: 814, eco: "C20", name: "Alapin's opening" } },
      d2d4: {
        e5d4: {
          $: { id: 815, eco: "C21", name: "Center game" },
          g1f3: {
            c7c5: {
              f1c4: {
                b7b5: {
                  $: { id: 816, eco: "C21", name: "Center game: Kieseritsky" },
                },
              },
            },
          },
          f2f4: { $: { id: 817, eco: "C21", name: "Center game: Halasz" } },
          d1d4: {
            $: { id: 818, eco: "C21", name: "Center game" },
            b8c6: {
              $: { id: 823, eco: "C22", name: "Center game" },
              d4e3: {
                $: { id: 824, eco: "C22", name: "Center game: Paulsen attack" },
                f8b4: {
                  c2c3: {
                    b4e7: {
                      $: {
                        id: 825,
                        eco: "C22",
                        name: "Center game: Charousek variation",
                      },
                    },
                  },
                },
                f7f5: {
                  $: {
                    id: 826,
                    eco: "C22",
                    name: "Center game: l'Hermet variation",
                  },
                },
                g8f6: {
                  $: {
                    id: 827,
                    eco: "C22",
                    name: "Center game: Berger variation",
                  },
                  b1c3: {
                    f8b4: {
                      c1d2: {
                        e8g8: {
                          e1c1: {
                            f8e8: {
                              f1c4: {
                                d7d6: {
                                  g1h3: {
                                    $: {
                                      id: 828,
                                      eco: "C22",
                                      name: "Center game: Kupreichik variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              d4c4: {
                $: { id: 829, eco: "C22", name: "Center game: Hall variation" },
              },
            },
          },
          c2c3: {
            $: { id: 819, eco: "C21", name: "Danish gambit" },
            d4c3: {
              f1c4: {
                c3b2: {
                  c1b2: {
                    d8e7: {
                      $: {
                        id: 820,
                        eco: "C21",
                        name: "Danish gambit: Collijn defence",
                      },
                    },
                    d7d5: {
                      $: {
                        id: 821,
                        eco: "C21",
                        name: "Danish gambit: Schlechter defence",
                      },
                    },
                  },
                },
              },
            },
            d7d5: {
              $: {
                id: 822,
                eco: "C21",
                name: "Danish gambit: Soerensen defence",
              },
            },
          },
        },
      },
      f1c4: {
        $: { id: 830, eco: "C23", name: "Bishop's opening" },
        c7c6: {
          $: {
            id: 831,
            eco: "C23",
            name: "Bishop's opening: Philidor counter-attack",
          },
          d2d4: {
            d7d5: {
              e4d5: {
                c6d5: {
                  c4b5: {
                    c8d7: {
                      b5d7: {
                        b8d7: {
                          d4e5: {
                            d7e5: {
                              g1e2: {
                                $: {
                                  id: 832,
                                  eco: "C23",
                                  name: "Bishop's opening: Lisitsyn variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        f7f5: {
          $: {
            id: 833,
            eco: "C23",
            name: "Bishop's opening: Calabrese counter-gambit",
          },
          d2d3: {
            $: {
              id: 834,
              eco: "C23",
              name: "Bishop's opening: Calabrese counter-gambit, Jaenisch variation",
            },
          },
        },
        f8c5: {
          $: {
            id: 835,
            eco: "C23",
            name: "Bishop's opening: Classical variation",
          },
          d1e2: {
            b8c6: {
              c2c3: {
                g8f6: {
                  f2f4: {
                    $: {
                      id: 836,
                      eco: "C23",
                      name: "Bishop's opening: Lopez gambit",
                    },
                  },
                },
              },
            },
          },
          c2c3: {
            $: {
              id: 837,
              eco: "C23",
              name: "Bishop's opening: Philidor variation",
            },
            g8f6: {
              d2d4: {
                e5d4: {
                  e4e5: {
                    d7d5: {
                      e5f6: {
                        d5c4: {
                          d1h5: {
                            e8g8: {
                              $: {
                                id: 838,
                                eco: "C23",
                                name: "Bishop's opening: Pratt variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            d7d5: {
              $: {
                id: 839,
                eco: "C23",
                name: "Bishop's opening: Lewis counter-gambit",
              },
            },
            d8g5: {
              $: {
                id: 840,
                eco: "C23",
                name: "Bishop's opening: del Rio variation",
              },
            },
          },
          d2d4: {
            $: { id: 841, eco: "C23", name: "Bishop's opening: Lewis gambit" },
          },
          b2b4: {
            $: { id: 842, eco: "C23", name: "Bishop's opening: Wing gambit" },
            c5b4: {
              f2f4: {
                $: {
                  id: 843,
                  eco: "C23",
                  name: "Bishop's opening: MacDonnell double gambit",
                },
                e5f4: {
                  g1f3: {
                    b4e7: {
                      d2d4: {
                        e7h4: {
                          g2g3: {
                            f4g3: {
                              e1g1: {
                                g3h2: {
                                  g1h1: {
                                    $: {
                                      id: 844,
                                      eco: "C23",
                                      name: "Bishop's opening: Four pawns' gambit",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        g8f6: {
          $: { id: 845, eco: "C24", name: "Bishop's opening: Berlin defence" },
          f2f4: {
            $: { id: 846, eco: "C24", name: "Bishop's opening: Greco gambit" },
          },
          d2d4: {
            $: {
              id: 847,
              eco: "C24",
              name: "Bishop's opening: Ponziani gambit",
            },
            e5d4: {
              g1f3: {
                $: {
                  id: 848,
                  eco: "C24",
                  name: "Bishop's opening: Urusov gambit",
                },
                d7d5: {
                  e4d5: {
                    f8b4: {
                      c2c3: {
                        d8e7: {
                          $: {
                            id: 849,
                            eco: "C24",
                            name: "Bishop's opening: Urusov gambit, Panov variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      b1c3: {
        $: { id: 850, eco: "C25", name: "Vienna" },
        f8b4: {
          d1g4: {
            g8f6: {
              $: {
                id: 851,
                eco: "C25",
                name: "Vienna: Zhuravlev countergambit",
              },
            },
          },
        },
        b8c6: {
          $: { id: 852, eco: "C25", name: "Vienna: Max Lange" },
          g2g3: {
            $: { id: 853, eco: "C25", name: "Vienna: Paulsen variation" },
          },
          d2d4: { $: { id: 854, eco: "C25", name: "Vienna: Fyfe gambit" } },
          f2f4: {
            $: { id: 855, eco: "C25", name: "Vienna gambit" },
            e5f4: {
              d2d4: {
                $: { id: 856, eco: "C25", name: "Vienna: Steinitz gambit" },
                d8h4: {
                  e1e2: {
                    d7d5: {
                      $: {
                        id: 857,
                        eco: "C25",
                        name: "Vienna: Steinitz gambit, Zukertort defence",
                      },
                    },
                    b7b6: {
                      $: {
                        id: 858,
                        eco: "C25",
                        name: "Vienna: Steinitz gambit, Fraser-Minckwitz variation",
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: { id: 859, eco: "C25", name: "Vienna gambit" },
                g7g5: {
                  h2h4: {
                    g5g4: {
                      f3g5: {
                        $: {
                          id: 860,
                          eco: "C25",
                          name: "Vienna: Hamppe-Allgaier gambit",
                        },
                        d7d6: {
                          $: {
                            id: 861,
                            eco: "C25",
                            name: "Vienna: Hamppe-Allgaier gambit, Alapin variation",
                          },
                        },
                      },
                    },
                  },
                  f1c4: {
                    g5g4: {
                      e1g1: {
                        $: {
                          id: 862,
                          eco: "C25",
                          name: "Vienna: Hamppe-Muzio gambit",
                        },
                        g4f3: {
                          d1f3: {
                            c6e5: {
                              f3f4: {
                                d8f6: {
                                  $: {
                                    id: 863,
                                    eco: "C25",
                                    name: "Vienna: Hamppe-Muzio, Dubois variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  d2d4: {
                    $: { id: 864, eco: "C25", name: "Vienna: Pierce gambit" },
                    g5g4: {
                      f1c4: {
                        g4f3: {
                          e1g1: {
                            d7d5: {
                              e4d5: {
                                c8g4: {
                                  d5c6: {
                                    $: {
                                      id: 865,
                                      eco: "C25",
                                      name: "Vienna: Pierce gambit, Rushmere attack",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        g8f6: {
          $: { id: 866, eco: "C26", name: "Vienna: Falkbeer variation" },
          a2a3: {
            $: { id: 867, eco: "C26", name: "Vienna: Mengarini variation" },
          },
          g2g3: {
            $: {
              id: 868,
              eco: "C26",
              name: "Vienna: Paulsen-Mieses variation",
            },
          },
          f1c4: {
            $: { id: 869, eco: "C26", name: "Vienna" },
            f6e4: {
              $: { id: 870, eco: "C27", name: "Vienna" },
              d1h5: {
                e4d6: {
                  c4b3: {
                    b8c6: {
                      c3b5: {
                        g7g6: {
                          h5f3: {
                            f7f5: {
                              f3d5: {
                                d8e7: {
                                  b5c7: {
                                    e8d8: {
                                      c7a8: {
                                        b7b6: {
                                          $: {
                                            id: 871,
                                            eco: "C27",
                                            name: "Vienna: `Frankenstein-Dracula' variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      d2d4: {
                        $: {
                          id: 872,
                          eco: "C27",
                          name: "Vienna: Adams' gambit",
                        },
                      },
                    },
                    f8e7: {
                      $: { id: 873, eco: "C27", name: "Vienna: Marco" },
                      g1f3: {
                        b8c6: {
                          f3e5: {
                            $: {
                              id: 874,
                              eco: "C27",
                              name: "Vienna: Alekhine",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g1f3: {
                $: { id: 875, eco: "C27", name: "Boden-Kieseritsky gambit" },
                d7d5: {
                  $: {
                    id: 876,
                    eco: "C27",
                    name: "Boden-Kieseritsky gambit: Lichtenhein defence",
                  },
                },
              },
            },
            b8c6: { $: { id: 877, eco: "C28", name: "Vienna" } },
          },
          f2f4: {
            d7d5: {
              $: { id: 878, eco: "C29", name: "Vienna gambit" },
              f4e5: {
                f6e4: {
                  g1f3: {
                    c8g4: {
                      d1e2: {
                        $: {
                          id: 879,
                          eco: "C29",
                          name: "Vienna gambit: Kaufmann variation",
                        },
                      },
                    },
                    f8e7: {
                      $: {
                        id: 880,
                        eco: "C29",
                        name: "Vienna gambit: Breyer variation",
                      },
                    },
                  },
                  d1f3: {
                    $: {
                      id: 881,
                      eco: "C29",
                      name: "Vienna gambit: Paulsen attack",
                    },
                    f7f5: {
                      $: {
                        id: 882,
                        eco: "C29",
                        name: "Vienna gambit: Bardeleben variation",
                      },
                      d2d4: {
                        $: {
                          id: 883,
                          eco: "C29",
                          name: "Vienna gambit: Heyde variation",
                        },
                      },
                    },
                  },
                  d2d3: {
                    $: { id: 884, eco: "C29", name: "Vienna gambit" },
                    d8h4: {
                      g2g3: {
                        e4g3: {
                          g1f3: {
                            h4h5: {
                              c3d5: {
                                $: {
                                  id: 885,
                                  eco: "C29",
                                  name: "Vienna gambit, Wurzburger trap",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              d2d3: {
                $: {
                  id: 886,
                  eco: "C29",
                  name: "Vienna gambit: Steinitz-Neumann",
                },
              },
            },
          },
        },
      },
      f2f4: {
        $: { id: 887, eco: "C30", name: "King's gambit" },
        d8h4: {
          g2g3: {
            h4e7: {
              $: {
                id: 888,
                eco: "C30",
                name: "King's Gambit Declined: Keene's defence",
              },
            },
          },
        },
        c7c5: {
          $: {
            id: 889,
            eco: "C30",
            name: "King's Gambit Declined: Mafia defence",
          },
        },
        d8f6: {
          $: {
            id: 890,
            eco: "C30",
            name: "King's Gambit Declined: Norwalde variation",
          },
          g1f3: {
            f6f4: {
              b1c3: {
                f8b4: {
                  f1c4: {
                    $: {
                      id: 891,
                      eco: "C30",
                      name: "King's Gambit Declined: Norwalde variation, Buecker gambit",
                    },
                  },
                },
              },
            },
          },
        },
        f8c5: {
          $: {
            id: 892,
            eco: "C30",
            name: "King's Gambit Declined: classical variation",
          },
          g1f3: {
            d7d6: {
              b1c3: {
                g8f6: {
                  f1c4: {
                    b8c6: {
                      d2d3: {
                        c8g4: {
                          h2h3: {
                            g4f3: {
                              d1f3: {
                                e5f4: {
                                  $: {
                                    id: 893,
                                    eco: "C30",
                                    name: "King's Gambit Declined: classical, Svenonius variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                b8d7: {
                  $: {
                    id: 894,
                    eco: "C30",
                    name: "King's Gambit Declined: classical, Hanham variation",
                  },
                },
              },
              c2c3: {
                $: {
                  id: 895,
                  eco: "C30",
                  name: "King's Gambit Declined: classical, 4.c3",
                },
                c8g4: {
                  f4e5: {
                    d6e5: {
                      d1a4: {
                        $: {
                          id: 896,
                          eco: "C30",
                          name: "King's Gambit Declined: classical, Marshall attack",
                        },
                      },
                    },
                  },
                },
                f7f5: {
                  $: {
                    id: 897,
                    eco: "C30",
                    name: "King's Gambit Declined: classical counter-gambit",
                  },
                  f4e5: {
                    d6e5: {
                      d2d4: {
                        e5d4: {
                          f1c4: {
                            $: {
                              id: 898,
                              eco: "C30",
                              name: "King's Gambit Declined: classical, Reti variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              f4e5: {
                $: {
                  id: 899,
                  eco: "C30",
                  name: "King's Gambit Declined: classical, Soldatenkov variation",
                },
              },
              b2b4: {
                $: {
                  id: 900,
                  eco: "C30",
                  name: "King's Gambit Declined: classical, Heath variation",
                },
              },
            },
          },
        },
        g8f6: {
          $: { id: 901, eco: "C30", name: "King's Gambit Declined: 2...Nf6" },
        },
        d7d5: {
          $: {
            id: 902,
            eco: "C31",
            name: "King's Gambit Declined: Falkbeer counter-gambit",
          },
          g1f3: {
            $: {
              id: 903,
              eco: "C31",
              name: "King's Gambit Declined: Falkbeer, Tartakower variation",
            },
          },
          b1c3: {
            $: {
              id: 904,
              eco: "C31",
              name: "King's Gambit Declined: Falkbeer, Milner-Barry variation",
            },
          },
          e4d5: {
            $: {
              id: 905,
              eco: "C31",
              name: "King's Gambit Declined: Falkbeer counter-gambit",
            },
            c7c6: {
              $: {
                id: 906,
                eco: "C31",
                name: "King's Gambit Declined: Nimzovich counter-gambit",
              },
            },
            e5e4: {
              $: {
                id: 907,
                eco: "C31",
                name: "King's Gambit Declined: Falkbeer, 3...e4",
              },
              b1c3: {
                g8f6: {
                  d1e2: {
                    $: {
                      id: 908,
                      eco: "C31",
                      name: "King's Gambit Declined: Falkbeer, Rubinstein variation",
                    },
                  },
                },
              },
              f1b5: {
                $: {
                  id: 909,
                  eco: "C31",
                  name: "King's Gambit Declined: Falkbeer, Nimzovich variation",
                },
              },
              d2d3: {
                $: {
                  id: 910,
                  eco: "C31",
                  name: "King's Gambit Declined: Falkbeer, 4.d3",
                },
                g8f6: {
                  b1c3: {
                    f8b4: {
                      c1d2: {
                        e4e3: {
                          $: {
                            id: 911,
                            eco: "C31",
                            name: "King's Gambit Declined: Falkbeer, Morphy gambit",
                          },
                        },
                      },
                    },
                  },
                  d3e4: {
                    $: {
                      id: 912,
                      eco: "C32",
                      name: "King's Gambit Declined: Falkbeer, 5.de",
                    },
                    f6e4: {
                      g1f3: {
                        f8c5: {
                          d1e2: {
                            c5f2: {
                              e1d1: {
                                d8d5: {
                                  f3d2: {
                                    $: {
                                      id: 913,
                                      eco: "C32",
                                      name: "King's Gambit Declined: Falkbeer, Alapin variation",
                                    },
                                  },
                                },
                              },
                            },
                            c8f5: {
                              $: {
                                id: 914,
                                eco: "C32",
                                name: "King's Gambit Declined: Falkbeer, main line, 7...Bf5",
                              },
                              g2g4: {
                                e8g8: {
                                  $: {
                                    id: 915,
                                    eco: "C32",
                                    name: "King's Gambit Declined: Falkbeer, Tarrasch variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      d1e2: {
                        $: {
                          id: 916,
                          eco: "C32",
                          name: "King's Gambit Declined: Falkbeer, Charousek gambit",
                        },
                        d8d5: {
                          b1d2: {
                            f7f5: {
                              g2g4: {
                                $: {
                                  id: 917,
                                  eco: "C32",
                                  name: "King's Gambit Declined: Falkbeer, Charousek variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b1d2: {
                    $: {
                      id: 918,
                      eco: "C32",
                      name: "King's Gambit Declined: Falkbeer, Keres variation",
                    },
                  },
                  d1e2: {
                    $: {
                      id: 919,
                      eco: "C32",
                      name: "King's Gambit Declined: Falkbeer, Reti variation",
                    },
                  },
                },
              },
            },
          },
        },
        e5f4: {
          $: { id: 920, eco: "C33", name: "King's Gambit Accepted" },
          e1f2: {
            $: {
              id: 921,
              eco: "C33",
              name: "King's Gambit Accepted: Tumbleweed gambit",
            },
          },
          b2b3: {
            $: {
              id: 922,
              eco: "C33",
              name: "King's Gambit Accepted: Orsini gambit",
            },
          },
          h2h4: {
            $: {
              id: 923,
              eco: "C33",
              name: "King's Gambit Accepted: Pawn's gambit (Stamma gambit)",
            },
          },
          f1d3: {
            $: {
              id: 924,
              eco: "C33",
              name: "King's Gambit Accepted: Schurig gambit",
            },
          },
          d1e2: {
            $: {
              id: 925,
              eco: "C33",
              name: "King's Gambit Accepted: Carrera (Basman) gambit",
            },
          },
          d2d4: {
            $: {
              id: 926,
              eco: "C33",
              name: "King's Gambit Accepted: Villemson (Steinitz) gambit",
            },
          },
          b1c3: {
            $: {
              id: 927,
              eco: "C33",
              name: "King's Gambit Accepted: Keres (Mason-Steinitz) gambit",
            },
          },
          d1f3: {
            $: {
              id: 928,
              eco: "C33",
              name: "King's Gambit Accepted: Breyer gambit",
            },
          },
          f1e2: {
            $: {
              id: 929,
              eco: "C33",
              name: "King's Gambit Accepted: Lesser bishop's (Petroff-Jaenisch-Tartakower) gambit",
            },
          },
          f1c4: {
            $: {
              id: 930,
              eco: "C33",
              name: "King's Gambit Accepted: bishop's gambit",
            },
            d8h4: {
              e1f1: {
                d7d5: {
                  c4d5: {
                    g7g5: {
                      g2g3: {
                        $: {
                          id: 931,
                          eco: "C33",
                          name: "King's Gambit Accepted: bishop's gambit, Chigorin's attack",
                        },
                      },
                    },
                  },
                },
                f8c5: {
                  $: {
                    id: 932,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Greco variation",
                  },
                },
                g7g5: {
                  $: {
                    id: 933,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, classical defence",
                  },
                  b1c3: {
                    f8g7: {
                      d2d4: {
                        d7d6: {
                          e4e5: {
                            $: {
                              id: 934,
                              eco: "C33",
                              name: "King's Gambit Accepted: bishop's gambit, Grimm attack",
                            },
                          },
                        },
                        g8e7: {
                          $: {
                            id: 935,
                            eco: "C33",
                            name: "King's Gambit Accepted: bishop's gambit, classical defence",
                          },
                          g2g3: {
                            $: {
                              id: 936,
                              eco: "C33",
                              name: "King's Gambit Accepted: bishop's gambit, McDonnell attack",
                            },
                          },
                        },
                      },
                      g2g3: {
                        $: {
                          id: 937,
                          eco: "C33",
                          name: "King's Gambit Accepted: bishop's gambit, McDonnell attack",
                        },
                        f4g3: {
                          d1f3: {
                            $: {
                              id: 938,
                              eco: "C33",
                              name: "King's Gambit Accepted: bishop's gambit, Fraser variation",
                            },
                          },
                        },
                      },
                    },
                  },
                  d1f3: {
                    $: {
                      id: 939,
                      eco: "C33",
                      name: "King's Gambit Accepted: bishop's gambit, classical defence, Cozio attack",
                    },
                  },
                },
                b8c6: {
                  $: {
                    id: 940,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Boden defence",
                  },
                },
                b7b5: {
                  $: {
                    id: 941,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Bryan counter-gambit",
                  },
                },
              },
            },
            b7b5: {
              $: {
                id: 942,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Bryan counter-gambit",
              },
            },
            g8e7: {
              $: {
                id: 943,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Steinitz defence",
              },
            },
            b8c6: {
              $: {
                id: 944,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Maurian defence",
              },
            },
            c7c6: {
              $: {
                id: 945,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Ruy Lopez defence",
              },
            },
            f7f5: {
              $: {
                id: 946,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Lopez-Gianutio counter-gambit",
              },
              d1e2: {
                d8h4: {
                  e1d1: {
                    f5e4: {
                      b1c3: {
                        e8d8: {
                          $: {
                            id: 947,
                            eco: "C33",
                            name: "King's Gambit Accepted: Lopez-Gianutio counter-gambit, Hein variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            d7d5: {
              $: {
                id: 948,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Bledow variation",
              },
              c4d5: {
                d8h4: {
                  e1f1: {
                    g7g5: {
                      g2g3: {
                        $: {
                          id: 949,
                          eco: "C33",
                          name: "King's Gambit Accepted: bishop's gambit, Gifford variation",
                        },
                      },
                    },
                    f8d6: {
                      $: {
                        id: 950,
                        eco: "C33",
                        name: "King's Gambit Accepted: bishop's gambit, Boren-Svenonius variation",
                      },
                    },
                  },
                },
                c7c6: {
                  $: {
                    id: 951,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Anderssen variation",
                  },
                },
                g8f6: {
                  $: {
                    id: 952,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Morphy variation",
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 953,
                eco: "C33",
                name: "King's Gambit Accepted: bishop's gambit, Cozio (Morphy) defence",
              },
              b1c3: {
                $: {
                  id: 954,
                  eco: "C33",
                  name: "King's Gambit Accepted: bishop's gambit, Bogolyubov variation",
                },
                f8b4: {
                  e4e5: {
                    $: {
                      id: 955,
                      eco: "C33",
                      name: "King's Gambit Accepted: bishop's gambit, Paulsen attack",
                    },
                  },
                },
                c7c6: {
                  $: {
                    id: 956,
                    eco: "C33",
                    name: "King's Gambit Accepted: bishop's gambit, Jaenisch variation",
                  },
                },
              },
            },
          },
          g1f3: {
            $: { id: 957, eco: "C34", name: "King's knight's gambit" },
            g8e7: {
              $: {
                id: 958,
                eco: "C34",
                name: "King's Gambit Accepted: Bonsch-Osmolovsky variation",
              },
            },
            f7f5: {
              $: {
                id: 959,
                eco: "C34",
                name: "King's Gambit Accepted: Gianutio counter-gambit",
              },
            },
            d7d6: {
              $: {
                id: 960,
                eco: "C34",
                name: "King's Gambit Accepted: Fischer defence",
              },
            },
            h7h6: {
              $: {
                id: 961,
                eco: "C34",
                name: "King's Gambit Accepted: Becker defence",
              },
            },
            g8f6: {
              $: {
                id: 962,
                eco: "C34",
                name: "King's Gambit Accepted: Schallop defence",
              },
            },
            f8e7: {
              $: {
                id: 963,
                eco: "C35",
                name: "King's Gambit Accepted: Cunningham defence",
              },
              f1c4: {
                e7h4: {
                  g2g3: {
                    $: {
                      id: 964,
                      eco: "C35",
                      name: "King's Gambit Accepted: Cunningham, Bertin gambit",
                    },
                    f4g3: {
                      e1g1: {
                        g3h2: {
                          g1h1: {
                            $: {
                              id: 965,
                              eco: "C35",
                              name: "King's Gambit Accepted: Cunningham, three pawns gambit",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                g8f6: {
                  $: {
                    id: 966,
                    eco: "C35",
                    name: "King's Gambit Accepted: Cunningham, Euwe defence",
                  },
                },
              },
            },
            d7d5: {
              e4d5: {
                g8f6: {
                  $: {
                    id: 967,
                    eco: "C36",
                    name: "King's Gambit Accepted: Abbazia defence, modern variation",
                  },
                  f1b5: {
                    c7c6: {
                      d5c6: {
                        b7c6: {
                          b5c4: {
                            f6d5: {
                              $: {
                                id: 968,
                                eco: "C36",
                                name: "King's Gambit Accepted: Abbazia defence, Botvinnik variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            g7g5: {
              b1c3: {
                $: {
                  id: 969,
                  eco: "C37",
                  name: "King's Gambit Accepted: Quaade gambit",
                },
              },
              d2d4: {
                $: {
                  id: 970,
                  eco: "C37",
                  name: "King's Gambit Accepted: Rosentreter gambit",
                },
                g5g4: {
                  f3e5: {
                    $: {
                      id: 971,
                      eco: "C37",
                      name: "King's Gambit Accepted: Soerensen gambit",
                    },
                  },
                },
              },
              f1c4: {
                $: {
                  id: 972,
                  eco: "C37",
                  name: "King's Gambit Accepted: King's knight's gambit",
                },
                b8c6: {
                  $: {
                    id: 973,
                    eco: "C37",
                    name: "King's Gambit Accepted: Blachly gambit",
                  },
                },
                g5g4: {
                  c4f7: {
                    $: {
                      id: 974,
                      eco: "C37",
                      name: "King's Gambit Accepted: Lolli gambit (wild Muzio gambit)",
                    },
                    e8f7: {
                      e1g1: {
                        g4f3: {
                          d1f3: {
                            d8f6: {
                              d2d4: {
                                f6d4: {
                                  c1e3: {
                                    d4f6: {
                                      b1c3: {
                                        $: {
                                          id: 975,
                                          eco: "C37",
                                          name: "King's Gambit Accepted: Lolli gambit, Young variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  d2d4: {
                    $: {
                      id: 976,
                      eco: "C37",
                      name: "King's Gambit Accepted: Ghulam Kassim gambit",
                    },
                  },
                  b1c3: {
                    $: {
                      id: 977,
                      eco: "C37",
                      name: "King's Gambit Accepted: MacDonnell gambit",
                    },
                  },
                  f3e5: {
                    $: {
                      id: 978,
                      eco: "C37",
                      name: "King's Gambit Accepted: Salvio gambit",
                    },
                    d8h4: {
                      e1f1: {
                        g8h6: {
                          d2d4: {
                            f4f3: {
                              $: {
                                id: 979,
                                eco: "C37",
                                name: "King's Gambit Accepted: Silberschmidt gambit",
                              },
                            },
                            d7d6: {
                              $: {
                                id: 980,
                                eco: "C37",
                                name: "King's Gambit Accepted: Salvio gambit, Anderssen counter-attack",
                              },
                            },
                          },
                        },
                        f4f3: {
                          $: {
                            id: 981,
                            eco: "C37",
                            name: "King's Gambit Accepted: Cochrane gambit",
                          },
                        },
                        b8c6: {
                          $: {
                            id: 982,
                            eco: "C37",
                            name: "King's Gambit Accepted: Herzfeld gambit",
                          },
                        },
                      },
                    },
                  },
                  e1g1: {
                    $: {
                      id: 983,
                      eco: "C37",
                      name: "King's Gambit Accepted: Muzio gambit",
                    },
                    g4f3: {
                      d1f3: {
                        d8f6: {
                          e4e5: {
                            f6e5: {
                              d2d3: {
                                f8h6: {
                                  b1c3: {
                                    g8e7: {
                                      c1d2: {
                                        b8c6: {
                                          a1e1: {
                                            $: {
                                              id: 984,
                                              eco: "C37",
                                              name: "King's Gambit Accepted: Muzio gambit, Paulsen variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              c4f7: {
                                $: {
                                  id: 985,
                                  eco: "C37",
                                  name: "King's Gambit Accepted: double Muzio gambit",
                                },
                              },
                            },
                          },
                        },
                        d8e7: {
                          $: {
                            id: 986,
                            eco: "C37",
                            name: "King's Gambit Accepted: Muzio gambit, From defence",
                          },
                        },
                        b8c6: {
                          $: {
                            id: 987,
                            eco: "C37",
                            name: "King's Gambit Accepted: Muzio gambit, Holloway defence",
                          },
                        },
                      },
                    },
                    d8e7: {
                      $: {
                        id: 988,
                        eco: "C37",
                        name: "King's Gambit Accepted: Muzio gambit, Kling and Horwitz counter-attack",
                      },
                    },
                    d7d5: {
                      $: {
                        id: 989,
                        eco: "C37",
                        name: "King's Gambit Accepted: Muzio gambit, Brentano defence",
                      },
                    },
                  },
                },
                f8g7: {
                  $: { id: 990, eco: "C38", name: "King's knight's gambit" },
                  e1g1: {
                    $: {
                      id: 991,
                      eco: "C38",
                      name: "King's Gambit Accepted: Hanstein gambit",
                    },
                  },
                  h2h4: {
                    $: {
                      id: 992,
                      eco: "C38",
                      name: "King's Gambit Accepted: Philidor gambit",
                    },
                    h7h6: {
                      d2d4: {
                        d7d6: {
                          b1c3: {
                            c7c6: {
                              h4g5: {
                                h6g5: {
                                  h1h8: {
                                    g7h8: {
                                      f3e5: {
                                        $: {
                                          id: 993,
                                          eco: "C38",
                                          name: "King's Gambit Accepted: Greco gambit",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          d1d3: {
                            $: {
                              id: 994,
                              eco: "C38",
                              name: "King's Gambit Accepted: Philidor gambit, Schultz variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              h2h4: {
                $: { id: 995, eco: "C39", name: "King's knight's gambit" },
                g5g4: {
                  f3g5: {
                    $: {
                      id: 996,
                      eco: "C39",
                      name: "King's Gambit Accepted: Allgaier gambit",
                    },
                    h7h6: {
                      g5f7: {
                        e8f7: {
                          d1g4: {
                            g8f6: {
                              g4f4: {
                                f8d6: {
                                  $: {
                                    id: 997,
                                    eco: "C39",
                                    name: "King's Gambit Accepted: Allgaier, Horny defence",
                                  },
                                },
                              },
                            },
                          },
                          d2d4: {
                            $: {
                              id: 998,
                              eco: "C39",
                              name: "King's Gambit Accepted: Allgaier, Thorold variation",
                            },
                            d7d5: {
                              c1f4: {
                                d5e4: {
                                  f1c4: {
                                    f7g7: {
                                      f4e5: {
                                        $: {
                                          id: 999,
                                          eco: "C39",
                                          name: "King's Gambit Accepted: Allgaier, Cook variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          b1c3: {
                            $: {
                              id: 1000,
                              eco: "C39",
                              name: "King's Gambit Accepted: Allgaier, Blackburne gambit",
                            },
                          },
                          f1c4: {
                            $: {
                              id: 1001,
                              eco: "C39",
                              name: "King's Gambit Accepted: Allgaier, Walker attack",
                            },
                            d7d5: {
                              c4d5: {
                                f7g7: {
                                  d2d4: {
                                    $: {
                                      id: 1002,
                                      eco: "C39",
                                      name: "King's Gambit Accepted: Allgaier, Urusov attack",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    g8f6: {
                      $: {
                        id: 1003,
                        eco: "C39",
                        name: "King's Gambit Accepted: Allgaier, Schlechter defence",
                      },
                    },
                  },
                  f3e5: {
                    f8g7: {
                      $: {
                        id: 1004,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Paulsen defence",
                      },
                    },
                    h7h5: {
                      $: {
                        id: 1005,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, long whip (Stockwhip, classical) defence",
                      },
                      f1c4: {
                        h8h7: {
                          d2d4: {
                            f8h6: {
                              b1c3: {
                                $: {
                                  id: 1006,
                                  eco: "C39",
                                  name: "King's Gambit Accepted: Kieseritsky, long whip defence, Jaenisch variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    d7d5: {
                      $: {
                        id: 1007,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Brentano (Campbell) defence",
                      },
                      d2d4: {
                        g8f6: {
                          e4d5: {
                            d8d5: {
                              b1c3: {
                                f8b4: {
                                  e1f2: {
                                    $: {
                                      id: 1008,
                                      eco: "C39",
                                      name: "King's Gambit Accepted: Kieseritsky, Brentano defence, Kaplanek variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          c1f4: {
                            $: {
                              id: 1009,
                              eco: "C39",
                              name: "King's Gambit Accepted: Kieseritsky, Brentano defence",
                            },
                            f6e4: {
                              b1d2: {
                                $: {
                                  id: 1010,
                                  eco: "C39",
                                  name: "King's Gambit Accepted: Kieseritsky, Brentano defence, Caro variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    d8e7: {
                      $: {
                        id: 1011,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Salvio (Rosenthal) defence",
                      },
                      d2d4: {
                        f7f5: {
                          f1c4: {
                            $: {
                              id: 1012,
                              eco: "C39",
                              name: "King's Gambit Accepted: Kieseritsky, Salvio defence, Cozio variation",
                            },
                          },
                        },
                      },
                    },
                    f8e7: {
                      $: {
                        id: 1013,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Polerio defence",
                      },
                    },
                    b8c6: {
                      $: {
                        id: 1014,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Neumann defence",
                      },
                    },
                    d7d6: {
                      $: {
                        id: 1015,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Kolisch defence",
                      },
                    },
                    g8f6: {
                      $: {
                        id: 1016,
                        eco: "C39",
                        name: "King's Gambit Accepted: Kieseritsky, Berlin defence",
                      },
                      e5g4: {
                        d7d5: {
                          $: {
                            id: 1017,
                            eco: "C39",
                            name: "King's Gambit Accepted: Kieseritsky, Berlin defence, Riviere variation",
                          },
                        },
                      },
                      f1c4: {
                        $: {
                          id: 1018,
                          eco: "C39",
                          name: "King's Gambit Accepted: Kieseritsky, Berlin defence, 6.Bc4",
                        },
                        d7d5: {
                          e4d5: {
                            f8d6: {
                              e1g1: {
                                $: {
                                  id: 1019,
                                  eco: "C39",
                                  name: "King's Gambit Accepted: Kieseritsky, Rice gambit",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      g1f3: {
        $: { id: 1020, eco: "C40", name: "King's knight" },
        d8e7: { $: { id: 1021, eco: "C40", name: "King's knight: Gunderam" } },
        d8f6: { $: { id: 1022, eco: "C40", name: "King's knight: Greco" } },
        f7f6: { $: { id: 1023, eco: "C40", name: "King's knight: Damiano" } },
        d7d5: {
          $: {
            id: 1024,
            eco: "C40",
            name: "King's knight: QP counter-gambit (elephant gambit)",
          },
          e4d5: {
            f8d6: {
              $: {
                id: 1025,
                eco: "C40",
                name: "King's knight: Maroczy gambit",
              },
            },
          },
        },
        f7f5: {
          $: { id: 1026, eco: "C40", name: "Latvian" },
          f3e5: {
            d8f6: {
              d2d4: {
                d7d6: {
                  e5c4: {
                    f5e4: {
                      c4e3: {
                        $: {
                          id: 1027,
                          eco: "C40",
                          name: "Latvian: Nimzovich variation",
                        },
                      },
                    },
                  },
                },
              },
            },
            b8c6: {
              $: { id: 1028, eco: "C40", name: "Latvian: Fraser defence" },
            },
          },
          f1c4: {
            $: { id: 1029, eco: "C40", name: "Latvian: 3.Bc4" },
            f5e4: {
              f3e5: {
                d8g5: {
                  e5f7: {
                    g5g2: {
                      h1f1: {
                        d7d5: {
                          f7h8: {
                            g8f6: {
                              $: {
                                id: 1030,
                                eco: "C40",
                                name: "Latvian: Behting variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                d7d5: {
                  $: {
                    id: 1031,
                    eco: "C40",
                    name: "Latvian: Polerio variation",
                  },
                },
                g8f6: {
                  $: {
                    id: 1032,
                    eco: "C40",
                    name: "Latvian: corkscrew counter-gambit",
                  },
                },
              },
            },
          },
        },
        d7d6: {
          $: { id: 1033, eco: "C41", name: "Philidor" },
          f1c4: {
            f8e7: {
              c2c3: {
                $: {
                  id: 1034,
                  eco: "C41",
                  name: "Philidor: Steinitz variation",
                },
              },
            },
            f7f5: {
              $: {
                id: 1035,
                eco: "C41",
                name: "Philidor: Lopez counter-gambit",
              },
              d2d4: {
                e5d4: {
                  f3g5: {
                    g8h6: {
                      g5h7: {
                        $: {
                          id: 1036,
                          eco: "C41",
                          name: "Philidor: Lopez counter-gambit, Jaenisch variation",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            $: { id: 1037, eco: "C41", name: "Philidor" },
            f7f5: {
              $: {
                id: 1038,
                eco: "C41",
                name: "Philidor: Philidor counter-gambit",
              },
              d4e5: {
                f5e4: {
                  f3g5: {
                    d6d5: {
                      e5e6: {
                        $: {
                          id: 1039,
                          eco: "C41",
                          name: "Philidor: Philidor counter-gambit, del Rio attack",
                        },
                        f8c5: {
                          b1c3: {
                            $: {
                              id: 1040,
                              eco: "C41",
                              name: "Philidor: Philidor counter-gambit, Berger variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              b1c3: {
                $: {
                  id: 1041,
                  eco: "C41",
                  name: "Philidor: Philidor counter-gambit, Zukertort variation",
                },
              },
            },
            e5d4: {
              $: { id: 1042, eco: "C41", name: "Philidor: exchange variation" },
              d1d4: {
                c8d7: {
                  $: {
                    id: 1043,
                    eco: "C41",
                    name: "Philidor: Boden variation",
                  },
                },
              },
              f3d4: {
                $: {
                  id: 1044,
                  eco: "C41",
                  name: "Philidor: exchange variation",
                },
                d6d5: {
                  e4d5: {
                    $: {
                      id: 1045,
                      eco: "C41",
                      name: "Philidor: Paulsen attack",
                    },
                  },
                },
                g8f6: {
                  $: {
                    id: 1046,
                    eco: "C41",
                    name: "Philidor: exchange variation",
                  },
                  b1c3: {
                    f8e7: {
                      f1e2: {
                        e8g8: {
                          e1g1: {
                            c7c5: {
                              d4f3: {
                                b8c6: {
                                  c1g5: {
                                    c8e6: {
                                      f1e1: {
                                        $: {
                                          id: 1047,
                                          eco: "C41",
                                          name: "Philidor: Berger variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                g7g6: {
                  $: {
                    id: 1048,
                    eco: "C41",
                    name: "Philidor: Larsen variation",
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 1049,
                eco: "C41",
                name: "Philidor: Nimzovich (Jaenisch) variation",
              },
              b1c3: {
                b8d7: {
                  $: {
                    id: 1050,
                    eco: "C41",
                    name: "Philidor: Improved Hanham variation",
                  },
                  f1c4: {
                    f8e7: {
                      e1g1: {
                        e8g8: {
                          d1e2: {
                            c7c6: {
                              a2a4: {
                                e5d4: {
                                  $: {
                                    id: 1051,
                                    eco: "C41",
                                    name: "Philidor: Nimzovich, Sozin variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      f3g5: {
                        e8g8: {
                          c4f7: {
                            $: {
                              id: 1052,
                              eco: "C41",
                              name: "Philidor: Nimzovich, Larobok variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              d4e5: {
                $: {
                  id: 1053,
                  eco: "C41",
                  name: "Philidor: Nimzovich variation",
                },
                f6e4: {
                  b1d2: {
                    $: {
                      id: 1054,
                      eco: "C41",
                      name: "Philidor: Nimzovich, Sokolsky variation",
                    },
                  },
                  d1d5: {
                    $: {
                      id: 1055,
                      eco: "C41",
                      name: "Philidor: Nimzovich, Rellstab variation",
                    },
                  },
                },
              },
              f3g5: {
                $: {
                  id: 1056,
                  eco: "C41",
                  name: "Philidor: Nimzovich, Locock variation",
                },
              },
              f1c4: {
                $: {
                  id: 1057,
                  eco: "C41",
                  name: "Philidor: Nimzovich, Klein variation",
                },
              },
            },
            b8d7: {
              $: { id: 1058, eco: "C41", name: "Philidor: Hanham variation" },
              f1c4: {
                c7c6: {
                  e1g1: {
                    $: {
                      id: 1059,
                      eco: "C41",
                      name: "Philidor: Hanham, Krause variation",
                    },
                    f8e7: {
                      d4e5: {
                        $: {
                          id: 1060,
                          eco: "C41",
                          name: "Philidor: Hanham, Steiner variation",
                        },
                      },
                    },
                  },
                  f3g5: {
                    $: {
                      id: 1061,
                      eco: "C41",
                      name: "Philidor: Hanham, Kmoch variation",
                    },
                    g8h6: {
                      f2f4: {
                        f8e7: {
                          e1g1: {
                            e8g8: {
                              c2c3: {
                                d6d5: {
                                  $: {
                                    id: 1062,
                                    eco: "C41",
                                    name: "Philidor: Hanham, Berger variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b1c3: {
                    $: {
                      id: 1063,
                      eco: "C41",
                      name: "Philidor: Hanham, Schlechter variation",
                    },
                  },
                  c2c3: {
                    $: {
                      id: 1064,
                      eco: "C41",
                      name: "Philidor: Hanham, Delmar variation",
                    },
                  },
                },
              },
            },
          },
        },
        g8f6: {
          $: { id: 1065, eco: "C42", name: "Petrov" },
          f3e5: {
            d7d6: {
              e5f3: {
                f6e4: {
                  d2d3: {
                    $: { id: 1066, eco: "C42", name: "Petrov: French attack" },
                  },
                  c2c4: {
                    $: {
                      id: 1067,
                      eco: "C42",
                      name: "Petrov: Kaufmann attack",
                    },
                  },
                  b1c3: {
                    $: {
                      id: 1068,
                      eco: "C42",
                      name: "Petrov: Nimzovich attack",
                    },
                  },
                  d1e2: {
                    $: {
                      id: 1069,
                      eco: "C42",
                      name: "Petrov: Cozio (Lasker) attack",
                    },
                  },
                  d2d4: {
                    $: {
                      id: 1070,
                      eco: "C42",
                      name: "Petrov: classical attack",
                    },
                    d6d5: {
                      f1d3: {
                        f8e7: {
                          e1g1: {
                            b8c6: {
                              f1e1: {
                                $: {
                                  id: 1071,
                                  eco: "C42",
                                  name: "Petrov: classical attack, Chigorin variation",
                                },
                                c8g4: {
                                  c2c3: {
                                    f7f5: {
                                      b1d2: {
                                        $: {
                                          id: 1072,
                                          eco: "C42",
                                          name: "Petrov: classical attack, Berger variation",
                                        },
                                      },
                                      c3c4: {
                                        $: {
                                          id: 1073,
                                          eco: "C42",
                                          name: "Petrov: classical attack, Krause variation",
                                        },
                                        e7h4: {
                                          $: {
                                            id: 1074,
                                            eco: "C42",
                                            name: "Petrov: classical attack, Maroczy variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              c2c4: {
                                $: {
                                  id: 1075,
                                  eco: "C42",
                                  name: "Petrov: classical attack, Jaenisch variation",
                                },
                              },
                            },
                            e8g8: {
                              $: {
                                id: 1076,
                                eco: "C42",
                                name: "Petrov: classical attack, Mason variation",
                              },
                            },
                          },
                        },
                        f8d6: {
                          $: {
                            id: 1077,
                            eco: "C42",
                            name: "Petrov: classical attack, Marshall variation",
                          },
                          e1g1: {
                            e8g8: {
                              c2c4: {
                                c8g4: {
                                  $: {
                                    id: 1078,
                                    eco: "C42",
                                    name: "Petrov: classical attack, Tarrasch variation",
                                  },
                                  c4d5: {
                                    f7f5: {
                                      f1e1: {
                                        d6h2: {
                                          $: {
                                            id: 1079,
                                            eco: "C42",
                                            name: "Petrov: classical attack, Marshall trap",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    e4f6: {
                      $: {
                        id: 1080,
                        eco: "C42",
                        name: "Petrov: classical attack, close variation",
                      },
                    },
                  },
                },
              },
              e5f7: {
                $: { id: 1081, eco: "C42", name: "Petrov: Cochrane gambit" },
              },
              e5c4: {
                $: { id: 1082, eco: "C42", name: "Petrov: Paulsen attack" },
              },
            },
            f6e4: {
              $: { id: 1083, eco: "C42", name: "Petrov: Damiano variation" },
            },
          },
          b1c3: {
            $: { id: 1084, eco: "C42", name: "Petrov three knights game" },
          },
          f1c4: {
            $: { id: 1085, eco: "C42", name: "Petrov: Italian variation" },
          },
          d2d4: {
            $: {
              id: 1086,
              eco: "C43",
              name: "Petrov: modern (Steinitz) attack",
            },
            e5d4: {
              e4e5: {
                f6e4: {
                  d1d4: {
                    $: {
                      id: 1087,
                      eco: "C43",
                      name: "Petrov: modern attack, main line",
                    },
                  },
                  d1e2: {
                    $: {
                      id: 1088,
                      eco: "C43",
                      name: "Petrov: modern attack, Steinitz variation",
                    },
                    e4c5: {
                      f3d4: {
                        b8c6: {
                          $: {
                            id: 1089,
                            eco: "C43",
                            name: "Petrov: modern attack, Bardeleben variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
              f1c4: {
                $: { id: 1090, eco: "C43", name: "Petrov: Urusov gambit" },
              },
            },
            f6e4: {
              $: {
                id: 1091,
                eco: "C43",
                name: "Petrov: modern attack, Symmetrical variation",
              },
              f1d3: {
                d7d5: {
                  f3e5: {
                    f8d6: {
                      e1g1: {
                        e8g8: {
                          c2c4: {
                            d6e5: {
                              $: {
                                id: 1092,
                                eco: "C43",
                                name: "Petrov: modern attack, Trifunovic variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        b8c6: {
          $: { id: 1093, eco: "C44", name: "King's pawn game" },
          f3e5: {
            c6e5: {
              d2d4: {
                $: { id: 1094, eco: "C44", name: "Irish (Chicago) gambit" },
              },
            },
          },
          g2g3: {
            $: { id: 1095, eco: "C44", name: "Konstantinopolsky opening" },
          },
          c2c4: { $: { id: 1096, eco: "C44", name: "Dresden opening" } },
          f1e2: {
            $: { id: 1097, eco: "C44", name: "Inverted Hungarian" },
            g8f6: {
              d2d3: {
                d7d5: {
                  b1d2: {
                    $: { id: 1098, eco: "C44", name: "Inverted Hanham" },
                  },
                },
              },
              d2d4: { $: { id: 1099, eco: "C44", name: "Tayler opening" } },
            },
          },
          c2c3: {
            $: { id: 1100, eco: "C44", name: "Ponziani" },
            d7d5: {
              d1a4: {
                c8d7: {
                  $: { id: 1101, eco: "C44", name: "Ponziani: Caro variation" },
                },
                g8f6: {
                  $: {
                    id: 1102,
                    eco: "C44",
                    name: "Ponziani: Leonhardt variation",
                  },
                },
                f7f6: {
                  $: {
                    id: 1103,
                    eco: "C44",
                    name: "Ponziani: Steinitz variation",
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 1104,
                eco: "C44",
                name: "Ponziani: Jaenisch counter-attack",
              },
              d2d4: {
                f6e4: {
                  d4d5: {
                    f8c5: {
                      $: {
                        id: 1105,
                        eco: "C44",
                        name: "Ponziani: Fraser defence",
                      },
                    },
                  },
                },
              },
            },
            g8e7: {
              $: { id: 1106, eco: "C44", name: "Ponziani: Reti variation" },
            },
            f8e7: {
              $: {
                id: 1107,
                eco: "C44",
                name: "Ponziani: Romanishin variation",
              },
            },
            f7f5: {
              $: { id: 1108, eco: "C44", name: "Ponziani counter-gambit" },
              d2d4: {
                d7d6: {
                  d4d5: {
                    $: {
                      id: 1109,
                      eco: "C44",
                      name: "Ponziani counter-gambit, Schmidt attack",
                    },
                    f5e4: {
                      f3g5: {
                        c6b8: {
                          g5e4: {
                            g8f6: {
                              f1d3: {
                                f8e7: {
                                  $: {
                                    id: 1110,
                                    eco: "C44",
                                    name: "Ponziani counter-gambit: Cordel",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          d2d4: {
            $: { id: 1111, eco: "C44", name: "Scotch" },
            c6d4: {
              $: { id: 1112, eco: "C44", name: "Scotch: Lolli variation" },
              f3e5: {
                d4e6: {
                  f1c4: {
                    c7c6: {
                      e1g1: {
                        g8f6: {
                          e5f7: {
                            $: {
                              id: 1113,
                              eco: "C44",
                              name: "Scotch: Cochrane variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            e5d4: {
              f1b5: {
                $: {
                  id: 1114,
                  eco: "C44",
                  name: "Scotch: Relfsson gambit ('MacLopez')",
                },
              },
              c2c3: {
                $: { id: 1115, eco: "C44", name: "Scotch: Goering gambit" },
                d4c3: {
                  b1c3: {
                    d7d6: {
                      f1c4: {
                        c8g4: {
                          e1g1: {
                            c6e5: {
                              f3e5: {
                                g4d1: {
                                  c4f7: {
                                    e8e7: {
                                      c3d5: {
                                        $: {
                                          id: 1116,
                                          eco: "C44",
                                          name: "Scotch: Sea-cadet mate",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    f8b4: {
                      $: {
                        id: 1117,
                        eco: "C44",
                        name: "Scotch: Goering gambit",
                      },
                      f1c4: {
                        g8f6: {
                          $: {
                            id: 1118,
                            eco: "C44",
                            name: "Scotch: Goering gambit, Bardeleben variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
              f1c4: {
                $: { id: 1119, eco: "C44", name: "Scotch gambit" },
                f8c5: {
                  e1g1: {
                    d7d6: {
                      c2c3: {
                        c8g4: {
                          $: {
                            id: 1120,
                            eco: "C44",
                            name: "Scotch gambit: Anderssen (Paulsen, Suhle) counter-attack",
                          },
                        },
                      },
                    },
                  },
                  f3g5: {
                    $: { id: 1121, eco: "C44", name: "Scotch gambit" },
                    g8h6: {
                      g5f7: {
                        h6f7: {
                          c4f7: {
                            e8f7: {
                              d1h5: {
                                g7g6: {
                                  h5c5: {
                                    d7d5: {
                                      $: {
                                        id: 1122,
                                        eco: "C44",
                                        name: "Scotch gambit: Cochrane-Shumov defence",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      d1h5: {
                        $: {
                          id: 1123,
                          eco: "C44",
                          name: "Scotch gambit: Vitzhum attack",
                        },
                      },
                    },
                  },
                },
                f8b4: {
                  $: { id: 1124, eco: "C44", name: "Scotch gambit" },
                  c2c3: {
                    d4c3: {
                      e1g1: {
                        c3b2: {
                          c1b2: {
                            g8f6: {
                              f3g5: {
                                e8g8: {
                                  e4e5: {
                                    c6e5: {
                                      $: {
                                        id: 1125,
                                        eco: "C44",
                                        name: "Scotch gambit: Hanneken variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      b2c3: {
                        $: { id: 1126, eco: "C44", name: "Scotch gambit" },
                        b4a5: {
                          e4e5: {
                            $: {
                              id: 1127,
                              eco: "C44",
                              name: "Scotch gambit: Cochrane variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                f8e7: {
                  $: {
                    id: 1128,
                    eco: "C44",
                    name: "Scotch gambit: Benima defence",
                  },
                },
                g8f6: {
                  $: {
                    id: 1129,
                    eco: "C44",
                    name: "Scotch gambit: Dubois-Reti defence",
                  },
                },
              },
              f3d4: {
                $: { id: 1130, eco: "C45", name: "Scotch game" },
                c6d4: {
                  d1d4: {
                    d7d6: {
                      f1d3: {
                        $: {
                          id: 1131,
                          eco: "C45",
                          name: "Scotch: Ghulam Kassim variation",
                        },
                      },
                    },
                  },
                },
                d8h4: {
                  $: {
                    id: 1132,
                    eco: "C45",
                    name: "Scotch: Pulling counter-attack",
                  },
                  d4b5: {
                    $: { id: 1133, eco: "C45", name: "Scotch: Horwitz attack" },
                    f8b4: {
                      b1d2: {
                        h4e4: {
                          f1e2: {
                            e4g2: {
                              e2f3: {
                                g2h3: {
                                  b5c7: {
                                    e8d8: {
                                      c7a8: {
                                        g8f6: {
                                          a2a3: {
                                            $: {
                                              id: 1134,
                                              eco: "C45",
                                              name: "Scotch: Berger variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      c1d2: {
                        $: { id: 1135, eco: "C45", name: "Scotch game" },
                        h4e4: {
                          f1e2: {
                            e8d8: {
                              e1g1: {
                                b4d2: {
                                  b1d2: {
                                    e4g6: {
                                      $: {
                                        id: 1136,
                                        eco: "C45",
                                        name: "Scotch: Rosenthal variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  d4f3: {
                    $: { id: 1137, eco: "C45", name: "Scotch: Fraser attack" },
                  },
                  b1c3: {
                    $: {
                      id: 1138,
                      eco: "C45",
                      name: "Scotch: Steinitz variation",
                    },
                  },
                },
                g8f6: {
                  $: {
                    id: 1139,
                    eco: "C45",
                    name: "Scotch: Schmidt variation",
                  },
                  d4c6: {
                    b7c6: {
                      e4e5: {
                        $: {
                          id: 1140,
                          eco: "C45",
                          name: "Scotch: Mieses variation",
                        },
                      },
                      b1d2: {
                        $: {
                          id: 1141,
                          eco: "C45",
                          name: "Scotch: Tartakower variation",
                        },
                      },
                    },
                  },
                },
                f8c5: {
                  $: { id: 1142, eco: "C45", name: "Scotch game" },
                  c1e3: {
                    d8f6: {
                      c2c3: {
                        g8e7: {
                          d1d2: {
                            $: {
                              id: 1143,
                              eco: "C45",
                              name: "Scotch: Blackburne attack",
                            },
                            d7d5: {
                              d4b5: {
                                c5e3: {
                                  d2e3: {
                                    e8g8: {
                                      b5c7: {
                                        a8b8: {
                                          c7d5: {
                                            e7d5: {
                                              e4d5: {
                                                c6b4: {
                                                  $: {
                                                    id: 1144,
                                                    eco: "C45",
                                                    name: "Scotch: Gottschall variation",
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          f1b5: {
                            $: {
                              id: 1145,
                              eco: "C45",
                              name: "Scotch: Paulsen attack",
                            },
                            c6d8: {
                              $: {
                                id: 1146,
                                eco: "C45",
                                name: "Scotch: Paulsen, Gunsberg defence",
                              },
                            },
                          },
                          d4c2: {
                            $: {
                              id: 1147,
                              eco: "C45",
                              name: "Scotch: Meitner variation",
                            },
                          },
                        },
                      },
                      d4b5: {
                        $: {
                          id: 1148,
                          eco: "C45",
                          name: "Scotch: Blumenfeld attack",
                        },
                      },
                    },
                  },
                  d4b3: {
                    $: {
                      id: 1149,
                      eco: "C45",
                      name: "Scotch: Potter variation",
                    },
                    c5b4: {
                      $: {
                        id: 1150,
                        eco: "C45",
                        name: "Scotch: Romanishin variation",
                      },
                    },
                  },
                },
              },
            },
          },
          b1c3: {
            $: { id: 1151, eco: "C46", name: "Three knights" },
            f8b4: {
              c3d5: {
                g8f6: {
                  $: {
                    id: 1152,
                    eco: "C46",
                    name: "Three knights: Schlechter variation",
                  },
                },
              },
            },
            f7f5: {
              $: {
                id: 1153,
                eco: "C46",
                name: "Three knights: Winawer defence (Gothic defence)",
              },
            },
            g7g6: {
              $: {
                id: 1154,
                eco: "C46",
                name: "Three knights: Steinitz variation",
              },
              d2d4: {
                e5d4: {
                  c3d5: {
                    $: {
                      id: 1155,
                      eco: "C46",
                      name: "Three knights: Steinitz, Rosenthal variation",
                    },
                  },
                },
              },
            },
            g8f6: {
              $: {
                id: 1156,
                eco: "C46",
                name: "Four knights: Walker-De Saint Amant",
              },
              f3e5: {
                $: {
                  id: 1157,
                  eco: "C46",
                  name: "Four knights: Schultze-Mueller gambit",
                },
              },
              f1c4: {
                $: {
                  id: 1158,
                  eco: "C46",
                  name: "Four knights: Italian variation",
                },
              },
              a2a3: {
                $: {
                  id: 1159,
                  eco: "C46",
                  name: "Four knights: Gunsberg variation",
                },
              },
              d2d4: {
                $: {
                  id: 1160,
                  eco: "C47",
                  name: "Four knights: Scotch variation",
                },
                f8b4: {
                  f3e5: {
                    $: {
                      id: 1161,
                      eco: "C47",
                      name: "Four knights: Scotch, Krause variation",
                    },
                  },
                },
                e5d4: {
                  $: {
                    id: 1162,
                    eco: "C47",
                    name: "Four knights: Scotch, 4...exd4",
                  },
                  c3d5: {
                    $: {
                      id: 1163,
                      eco: "C47",
                      name: "Four knights: Belgrade gambit",
                    },
                  },
                },
              },
              f1b5: {
                $: {
                  id: 1164,
                  eco: "C48",
                  name: "Four knights: Spanish variation",
                },
                a7a6: {
                  b5c6: {
                    $: {
                      id: 1165,
                      eco: "C48",
                      name: "Four knights: Ranken variation",
                    },
                    d7c6: {
                      f3e5: {
                        f6e4: {
                          c3e4: {
                            d8d4: {
                              e1g1: {
                                d4e5: {
                                  f1e1: {
                                    c8e6: {
                                      d2d4: {
                                        e5d5: {
                                          $: {
                                            id: 1166,
                                            eco: "C48",
                                            name: "Four knights: Spielmann variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                f8c5: {
                  $: {
                    id: 1167,
                    eco: "C48",
                    name: "Four knights: Spanish, classical defence",
                  },
                  e1g1: {
                    e8g8: {
                      f3e5: {
                        c6e5: {
                          d2d4: {
                            c5d6: {
                              f2f4: {
                                e5c6: {
                                  e4e5: {
                                    d6b4: {
                                      $: {
                                        id: 1168,
                                        eco: "C48",
                                        name: "Four knights: Bardeleben variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        c6d4: {
                          $: {
                            id: 1169,
                            eco: "C48",
                            name: "Four knights: Marshall variation",
                          },
                        },
                      },
                    },
                  },
                },
                c6d4: {
                  $: {
                    id: 1170,
                    eco: "C48",
                    name: "Four knights: Rubinstein counter-gambit",
                  },
                  f3e5: {
                    d8e7: {
                      f2f4: {
                        $: {
                          id: 1171,
                          eco: "C48",
                          name: "Four knights: Rubinstein counter-gambit, Bogolyubov variation",
                        },
                      },
                    },
                  },
                  b5e2: {
                    $: {
                      id: 1172,
                      eco: "C48",
                      name: "Four knights: Rubinstein counter-gambit, 5.Be2",
                    },
                    d4f3: {
                      e2f3: {
                        f8c5: {
                          e1g1: {
                            e8g8: {
                              d2d3: {
                                d7d6: {
                                  c3a4: {
                                    c5b6: {
                                      $: {
                                        id: 1173,
                                        eco: "C48",
                                        name: "Four knights: Rubinstein counter-gambit Maroczy variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f3d4: {
                    $: {
                      id: 1174,
                      eco: "C48",
                      name: "Four knights: Rubinstein counter-gambit, exchange variation",
                    },
                  },
                  e1g1: {
                    $: {
                      id: 1175,
                      eco: "C48",
                      name: "Four knights: Rubinstein counter-gambit, Henneberger variation",
                    },
                  },
                },
                f8b4: {
                  $: {
                    id: 1176,
                    eco: "C49",
                    name: "Four knights: double Ruy Lopez",
                  },
                  e1g1: {
                    e8g8: {
                      c3d5: {
                        f6d5: {
                          e4d5: {
                            e5e4: {
                              $: {
                                id: 1177,
                                eco: "C49",
                                name: "Four knights: Gunsberg counter-attack",
                              },
                            },
                          },
                        },
                      },
                      d2d3: {
                        $: {
                          id: 1178,
                          eco: "C49",
                          name: "Four knights: double Ruy Lopez",
                        },
                        d8e7: {
                          c3e2: {
                            d7d5: {
                              $: {
                                id: 1179,
                                eco: "C49",
                                name: "Four knights: Alatortsev variation",
                              },
                            },
                          },
                        },
                        b4c3: {
                          $: {
                            id: 1180,
                            eco: "C49",
                            name: "Four knights: Schwarz-Englisch",
                          },
                          b2c3: {
                            d7d6: {
                              f1e1: {
                                $: {
                                  id: 1181,
                                  eco: "C49",
                                  name: "Four knights: Janowski variation",
                                },
                              },
                            },
                            d7d5: {
                              $: {
                                id: 1182,
                                eco: "C49",
                                name: "Four knights: Svenonius variation",
                              },
                            },
                          },
                        },
                        d7d6: {
                          $: {
                            id: 1183,
                            eco: "C49",
                            name: "Four knights: symmetrical variation",
                          },
                          c1g5: {
                            b4c3: {
                              b2c3: {
                                d8e7: {
                                  $: {
                                    id: 1184,
                                    eco: "C49",
                                    name: "Four knights: symmetrical, Metger unpin",
                                  },
                                  f1e1: {
                                    c6d8: {
                                      d3d4: {
                                        c8g4: {
                                          $: {
                                            id: 1185,
                                            eco: "C49",
                                            name: "Four knights: symmetrical, Capablanca variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            c6e7: {
                              $: {
                                id: 1186,
                                eco: "C49",
                                name: "Four knights: symmetrical, Pillsbury variation",
                              },
                              f3h4: {
                                c7c6: {
                                  b5c4: {
                                    d6d5: {
                                      c4b3: {
                                        d8d6: {
                                          $: {
                                            id: 1187,
                                            eco: "C49",
                                            name: "Four knights: symmetrical, Blake variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            c8e6: {
                              $: {
                                id: 1188,
                                eco: "C49",
                                name: "Four knights: symmetrical, Tarrasch variation",
                              },
                            },
                          },
                          c3e2: {
                            $: {
                              id: 1189,
                              eco: "C49",
                              name: "Four knights: symmetrical, Maroczy system",
                            },
                          },
                        },
                      },
                      b5c6: {
                        $: {
                          id: 1190,
                          eco: "C49",
                          name: "Four knights: Nimzovich (Paulsen) variation",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          f1c4: {
            $: { id: 1191, eco: "C50", name: "King's pawn game" },
            c6d4: {
              f3e5: {
                d8g5: {
                  e5f7: {
                    g5g2: {
                      h1f1: {
                        g2e4: {
                          c4e2: {
                            d4f3: {
                              $: {
                                id: 1192,
                                eco: "C50",
                                name: "Blackburne shilling gambit",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            f7f5: { $: { id: 1193, eco: "C50", name: "Rousseau gambit" } },
            f8e7: {
              $: { id: 1194, eco: "C50", name: "Hungarian defence" },
              d2d4: {
                e5d4: {
                  c2c3: {
                    g8f6: {
                      e4e5: {
                        f6e4: {
                          $: {
                            id: 1195,
                            eco: "C50",
                            name: "Hungarian defence: Tartakower variation",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            f8c5: {
              $: { id: 1196, eco: "C50", name: "Giuoco Piano" },
              b1c3: {
                g8f6: {
                  $: {
                    id: 1197,
                    eco: "C50",
                    name: "Giuoco Piano: four knights variation",
                  },
                },
              },
              c4f7: {
                $: {
                  id: 1198,
                  eco: "C50",
                  name: "Giuoco Piano: Jerome gambit",
                },
              },
              d2d3: {
                $: { id: 1199, eco: "C50", name: "Giuoco Pianissimo" },
                f7f5: {
                  f3g5: {
                    f5f4: {
                      $: {
                        id: 1200,
                        eco: "C50",
                        name: "Giuoco Pianissimo: Dubois variation",
                      },
                    },
                  },
                },
                g8f6: {
                  $: { id: 1201, eco: "C50", name: "Giuoco Pianissimo" },
                  b1c3: {
                    $: {
                      id: 1202,
                      eco: "C50",
                      name: "Giuoco Pianissimo: Italian four knights variation",
                    },
                    d7d6: {
                      c1g5: {
                        $: {
                          id: 1203,
                          eco: "C50",
                          name: "Giuoco Pianissimo: Canal variation",
                        },
                      },
                    },
                  },
                },
              },
              b2b4: {
                $: { id: 1204, eco: "C51", name: "Evans gambit declined" },
                c5b6: {
                  b4b5: {
                    c6a5: {
                      f3e5: {
                        g8h6: {
                          $: {
                            id: 1205,
                            eco: "C51",
                            name: "Evans gambit declined: Lange",
                          },
                          d2d4: {
                            d7d6: {
                              c1h6: {
                                d6e5: {
                                  h6g7: {
                                    h8g8: {
                                      c4f7: {
                                        e8f7: {
                                          g7e5: {
                                            d8g5: {
                                              b1d2: {
                                                $: {
                                                  id: 1206,
                                                  eco: "C51",
                                                  name: "Evans gambit declined: Pavlov",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        d8g5: {
                          $: {
                            id: 1207,
                            eco: "C51",
                            name: "Evans gambit declined: Hirschbach",
                          },
                          c4f7: {
                            e8e7: {
                              d1h5: {
                                $: {
                                  id: 1208,
                                  eco: "C51",
                                  name: "Evans gambit declined: Vasquez",
                                },
                              },
                            },
                          },
                          d1f3: {
                            g5e5: {
                              f3f7: {
                                e8d8: {
                                  c1b2: {
                                    $: {
                                      id: 1209,
                                      eco: "C51",
                                      name: "Evans gambit declined: Hicken",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  a2a4: {
                    $: {
                      id: 1210,
                      eco: "C51",
                      name: "Evans gambit declined: 5.a4",
                    },
                    a7a6: {
                      b1c3: {
                        $: {
                          id: 1211,
                          eco: "C51",
                          name: "Evans gambit declined: Showalter",
                        },
                      },
                    },
                  },
                  c1b2: {
                    $: {
                      id: 1212,
                      eco: "C51",
                      name: "Evans gambit declined: Cordel",
                    },
                  },
                },
                d7d5: {
                  $: {
                    id: 1213,
                    eco: "C51",
                    name: "Evans gambit declined: Counter-gambit",
                  },
                },
                c5b4: {
                  $: { id: 1214, eco: "C51", name: "Evans gambit" },
                  c2c3: {
                    b4c5: {
                      d2d4: {
                        e5d4: {
                          e1g1: {
                            d7d6: {
                              c3d4: {
                                c5b6: {
                                  $: {
                                    id: 1215,
                                    eco: "C51",
                                    name: "Evans gambit: normal variation",
                                  },
                                  d4d5: {
                                    c6a5: {
                                      c1b2: {
                                        $: {
                                          id: 1216,
                                          eco: "C51",
                                          name: "Evans gambit: Ulvestad variation",
                                        },
                                        g8e7: {
                                          $: {
                                            id: 1217,
                                            eco: "C51",
                                            name: "Evans gambit: Paulsen variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                  b1c3: {
                                    $: {
                                      id: 1218,
                                      eco: "C51",
                                      name: "Evans gambit: Morphy attack",
                                    },
                                    c6a5: {
                                      c1g5: {
                                        $: {
                                          id: 1219,
                                          eco: "C51",
                                          name: "Evans gambit: Goering attack",
                                        },
                                        f7f6: {
                                          g5e3: {
                                            $: {
                                              id: 1220,
                                              eco: "C51",
                                              name: "Evans gambit: Steinitz variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                    c8g4: {
                                      $: {
                                        id: 1221,
                                        eco: "C51",
                                        name: "Evans gambit",
                                      },
                                      d1a4: {
                                        $: {
                                          id: 1222,
                                          eco: "C51",
                                          name: "Evans gambit: Fraser attack",
                                        },
                                        g4d7: {
                                          a4b3: {
                                            c6a5: {
                                              c4f7: {
                                                e8f8: {
                                                  b3c2: {
                                                    $: {
                                                      id: 1223,
                                                      eco: "C51",
                                                      name: "Evans gambit: Fraser-Mortimer attack",
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    b4d6: {
                      $: {
                        id: 1224,
                        eco: "C51",
                        name: "Evans gambit: Stone-Ware variation",
                      },
                    },
                    b4f8: {
                      $: {
                        id: 1225,
                        eco: "C51",
                        name: "Evans gambit: Mayet defence",
                      },
                    },
                    b4e7: {
                      $: {
                        id: 1226,
                        eco: "C51",
                        name: "Evans gambit: 5...Be7",
                      },
                      d2d4: {
                        c6a5: {
                          $: {
                            id: 1227,
                            eco: "C51",
                            name: "Evans gambit: Cordel variation",
                          },
                        },
                      },
                    },
                    b4a5: {
                      $: { id: 1228, eco: "C52", name: "Evans gambit" },
                      d2d4: {
                        e5d4: {
                          e1g1: {
                            d4c3: {
                              $: {
                                id: 1229,
                                eco: "C52",
                                name: "Evans gambit: compromised defence",
                              },
                              d1b3: {
                                d8f6: {
                                  e4e5: {
                                    f6g6: {
                                      b1c3: {
                                        g8e7: {
                                          c1a3: {
                                            $: {
                                              id: 1230,
                                              eco: "C52",
                                              name: "Evans gambit: compromised defence, Paulsen variation",
                                            },
                                          },
                                          f1d1: {
                                            $: {
                                              id: 1231,
                                              eco: "C52",
                                              name: "Evans gambit: compromised defence, Potter variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        b7b5: {
                          $: {
                            id: 1232,
                            eco: "C52",
                            name: "Evans gambit: Leonhardt variation",
                          },
                        },
                        d7d6: {
                          $: { id: 1233, eco: "C52", name: "Evans gambit" },
                          d1b3: {
                            $: {
                              id: 1234,
                              eco: "C52",
                              name: "Evans gambit: Tartakower attack",
                            },
                            d8d7: {
                              d4e5: {
                                d6e5: {
                                  e1g1: {
                                    a5b6: {
                                      c1a3: {
                                        c6a5: {
                                          f3e5: {
                                            $: {
                                              id: 1235,
                                              eco: "C52",
                                              name: "Evans gambit: Levenfish variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          c1g5: {
                            $: {
                              id: 1236,
                              eco: "C52",
                              name: "Evans gambit: Sokolsky variation",
                            },
                          },
                        },
                      },
                      e1g1: {
                        $: { id: 1237, eco: "C52", name: "Evans gambit" },
                        g8f6: {
                          d2d4: {
                            e8g8: {
                              f3e5: {
                                $: {
                                  id: 1238,
                                  eco: "C52",
                                  name: "Evans gambit: Richardson attack",
                                },
                              },
                            },
                          },
                        },
                        d7d6: {
                          $: { id: 1239, eco: "C52", name: "Evans gambit" },
                          d2d4: {
                            e5d4: {
                              d1b3: {
                                $: {
                                  id: 1240,
                                  eco: "C52",
                                  name: "Evans gambit: Waller attack",
                                },
                              },
                            },
                            a5b6: {
                              $: {
                                id: 1241,
                                eco: "C52",
                                name: "Evans gambit: Lasker defence",
                              },
                            },
                            c8d7: {
                              $: {
                                id: 1242,
                                eco: "C52",
                                name: "Evans gambit: Sanders-Alapin variation",
                              },
                            },
                            c8g4: {
                              $: {
                                id: 1243,
                                eco: "C52",
                                name: "Evans gambit: Alapin-Steinitz variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c2c3: {
                $: { id: 1244, eco: "C53", name: "Giuoco Piano" },
                d7d6: {
                  d2d4: {
                    e5d4: {
                      c3d4: {
                        c5b6: {
                          $: {
                            id: 1245,
                            eco: "C53",
                            name: "Giuoco Piano: LaBourdonnais variation",
                          },
                        },
                      },
                    },
                  },
                },
                d8e7: {
                  $: {
                    id: 1246,
                    eco: "C53",
                    name: "Giuoco Piano: close variation",
                  },
                  d2d4: {
                    c5b6: {
                      $: {
                        id: 1247,
                        eco: "C53",
                        name: "Giuoco Piano: centre-holding variation",
                      },
                      e1g1: {
                        g8f6: {
                          a2a4: {
                            a7a6: {
                              f1e1: {
                                d7d6: {
                                  h2h3: {
                                    $: {
                                      id: 1248,
                                      eco: "C53",
                                      name: "Giuoco Piano: Tarrasch variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      c1g5: {
                        $: {
                          id: 1249,
                          eco: "C53",
                          name: "Giuoco Piano: Mestel variation",
                        },
                      },
                      d4d5: {
                        c6b8: {
                          d5d6: {
                            $: {
                              id: 1250,
                              eco: "C53",
                              name: "Giuoco Piano: Eisinger variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                g8f6: {
                  $: { id: 1251, eco: "C53", name: "Giuoco Piano" },
                  b2b4: {
                    $: {
                      id: 1252,
                      eco: "C53",
                      name: "Giuoco Piano: Bird's attack",
                    },
                  },
                  d2d4: {
                    $: { id: 1253, eco: "C53", name: "Giuoco Piano" },
                    e5d4: {
                      e4e5: {
                        f6e4: {
                          c4d5: {
                            e4f2: {
                              e1f2: {
                                d4c3: {
                                  f2g3: {
                                    $: {
                                      id: 1254,
                                      eco: "C53",
                                      name: "Giuoco Piano: Ghulam Kassim variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        d7d5: {
                          $: { id: 1255, eco: "C53", name: "Giuoco Piano" },
                          c4b5: {
                            f6e4: {
                              c3d4: {
                                c5b4: {
                                  $: {
                                    id: 1256,
                                    eco: "C53",
                                    name: "Giuoco Piano: Anderssen variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      c3d4: {
                        $: { id: 1257, eco: "C54", name: "Giuoco Piano" },
                        c5b4: {
                          c1d2: {
                            f6e4: {
                              d2b4: {
                                c6b4: {
                                  c4f7: {
                                    e8f7: {
                                      d1b3: {
                                        d7d5: {
                                          f3e5: {
                                            f7f6: {
                                              f2f3: {
                                                $: {
                                                  id: 1258,
                                                  eco: "C54",
                                                  name: "Giuoco Piano: Krause variation",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          e1f1: {
                            $: {
                              id: 1259,
                              eco: "C54",
                              name: "Giuoco Piano: Cracow variation",
                            },
                          },
                          b1c3: {
                            $: {
                              id: 1260,
                              eco: "C54",
                              name: "Giuoco Piano: Greco's attack",
                            },
                            f6e4: {
                              e1g1: {
                                e4c3: {
                                  $: {
                                    id: 1261,
                                    eco: "C54",
                                    name: "Giuoco Piano: Greco variation",
                                  },
                                  b2c3: {
                                    b4c3: {
                                      d1b3: {
                                        d7d5: {
                                          $: {
                                            id: 1262,
                                            eco: "C54",
                                            name: "Giuoco Piano: Bernstein variation",
                                          },
                                        },
                                      },
                                      c1a3: {
                                        $: {
                                          id: 1263,
                                          eco: "C54",
                                          name: "Giuoco Piano: Aitken variation",
                                        },
                                      },
                                    },
                                  },
                                },
                                b4c3: {
                                  $: {
                                    id: 1264,
                                    eco: "C54",
                                    name: "Giuoco Piano",
                                  },
                                  b2c3: {
                                    d7d5: {
                                      c1a3: {
                                        $: {
                                          id: 1265,
                                          eco: "C54",
                                          name: "Giuoco Piano: Steinitz variation",
                                        },
                                      },
                                    },
                                  },
                                  d4d5: {
                                    $: {
                                      id: 1266,
                                      eco: "C54",
                                      name: "Giuoco Piano: Moeller (Therkatz) attack",
                                    },
                                    c3f6: {
                                      f1e1: {
                                        c6e7: {
                                          e1e4: {
                                            d7d6: {
                                              c1g5: {
                                                f6g5: {
                                                  f3g5: {
                                                    e8g8: {
                                                      g5h7: {
                                                        $: {
                                                          id: 1267,
                                                          eco: "C54",
                                                          name: "Giuoco Piano: Therkatz-Herzog variation",
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              g2g4: {
                                                $: {
                                                  id: 1268,
                                                  eco: "C54",
                                                  name: "Giuoco Piano: Moeller, bayonet attack",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            g8f6: {
              $: { id: 1269, eco: "C55", name: "Two knights defence" },
              e1g1: {
                f8c5: {
                  d2d4: {
                    c5d4: {
                      f3d4: {
                        c6d4: {
                          c1g5: {
                            h7h6: {
                              g5h4: {
                                g7g5: {
                                  f2f4: {
                                    $: {
                                      id: 1270,
                                      eco: "C55",
                                      name: "Two knights defence: Rosentreter variation",
                                    },
                                  },
                                },
                              },
                            },
                            d7d6: {
                              $: {
                                id: 1271,
                                eco: "C55",
                                name: "Two knights defence",
                              },
                              f2f4: {
                                d8e7: {
                                  f4e5: {
                                    d6e5: {
                                      b1c3: {
                                        $: {
                                          id: 1272,
                                          eco: "C55",
                                          name: "Two knights defence: Holzhausen attack",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              d2d3: {
                $: { id: 1273, eco: "C55", name: "Two knights defence: 4. d3" },
              },
              d2d4: {
                $: { id: 1274, eco: "C55", name: "Two knights defence" },
                e5d4: {
                  e4e5: {
                    d7d5: {
                      c4b5: {
                        f6e4: {
                          f3d4: {
                            f8c5: {
                              d4c6: {
                                c5f2: {
                                  e1f1: {
                                    d8h4: {
                                      $: {
                                        id: 1275,
                                        eco: "C55",
                                        name: "Two knights defence: Keidanz",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  f3g5: {
                    $: {
                      id: 1276,
                      eco: "C55",
                      name: "Two knights defence: Perreux",
                    },
                  },
                  e1g1: {
                    $: {
                      id: 1277,
                      eco: "C55",
                      name: "Two knights defence: 4. d4 exd4 5. O-O",
                    },
                    f8c5: {
                      e4e5: {
                        $: {
                          id: 1278,
                          eco: "C55",
                          name: "Two knights defence: Max Lange attack",
                        },
                        d7d5: {
                          e5f6: {
                            d5c4: {
                              f1e1: {
                                c8e6: {
                                  f3g5: {
                                    d8d5: {
                                      b1c3: {
                                        d5f5: {
                                          g2g4: {
                                            f5g6: {
                                              c3e4: {
                                                c5b6: {
                                                  f2f4: {
                                                    e8c8: {
                                                      $: {
                                                        id: 1279,
                                                        eco: "C55",
                                                        name: "Two knights defence: Max Lange attack, Berger variation",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          c3e4: {
                                            $: {
                                              id: 1280,
                                              eco: "C55",
                                              name: "Two knights defence: Max Lange attack, Marshall variation",
                                            },
                                            c5f8: {
                                              $: {
                                                id: 1281,
                                                eco: "C55",
                                                name: "Two knights defence: Max Lange attack, Rubinstein variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    g7g6: {
                                      $: {
                                        id: 1282,
                                        eco: "C55",
                                        name: "Two knights defence: Max Lange attack, Loman defence",
                                      },
                                    },
                                  },
                                  f6g7: {
                                    $: {
                                      id: 1283,
                                      eco: "C55",
                                      name: "Two knights defence: Max Lange attack, Schlechter variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        f6g4: {
                          $: {
                            id: 1284,
                            eco: "C55",
                            name: "Two knights defence: Max Lange attack, Steinitz variation",
                          },
                          c2c3: {
                            $: {
                              id: 1285,
                              eco: "C55",
                              name: "Two knights defence: Max Lange attack, Krause variation",
                            },
                          },
                        },
                      },
                    },
                    f6e4: {
                      $: { id: 1286, eco: "C56", name: "Two knights defence" },
                      f1e1: {
                        d7d5: {
                          c4d5: {
                            d8d5: {
                              b1c3: {
                                d5a5: {
                                  c3e4: {
                                    c8e6: {
                                      c1g5: {
                                        h7h6: {
                                          g5h4: {
                                            g7g5: {
                                              e4f6: {
                                                e8e7: {
                                                  b2b4: {
                                                    $: {
                                                      id: 1287,
                                                      eco: "C56",
                                                      name: "Two knights defence: Yurdansky attack",
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          b1c3: {
                            $: {
                              id: 1288,
                              eco: "C56",
                              name: "Two knights defence: Canal variation",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              f3g5: {
                $: { id: 1289, eco: "C57", name: "Two knights defence" },
                f8c5: {
                  $: {
                    id: 1290,
                    eco: "C57",
                    name: "Two knights defence: Wilkes Barre (Traxler) variation",
                  },
                },
                d7d5: {
                  e4d5: {
                    b7b5: {
                      $: {
                        id: 1291,
                        eco: "C57",
                        name: "Two knights defence: Ulvestad variation",
                      },
                    },
                    c6d4: {
                      $: {
                        id: 1292,
                        eco: "C57",
                        name: "Two knights defence: Fritz variation",
                      },
                      c2c3: {
                        b7b5: {
                          c4f1: {
                            f6d5: {
                              g5e4: {
                                $: {
                                  id: 1293,
                                  eco: "C57",
                                  name: "Two knights defence: Fritz, Gruber variation",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    f6d5: {
                      d2d4: {
                        $: {
                          id: 1294,
                          eco: "C57",
                          name: "Two knights defence: Lolli attack",
                        },
                        f8b4: {
                          $: {
                            id: 1295,
                            eco: "C57",
                            name: "Two knights defence: Pincus variation",
                          },
                        },
                      },
                      g5f7: {
                        $: {
                          id: 1296,
                          eco: "C57",
                          name: "Two knights defence: Fegatello attack",
                        },
                        e8f7: {
                          d1f3: {
                            f7e6: {
                              b1c3: {
                                c6b4: {
                                  f3e4: {
                                    c7c6: {
                                      a2a3: {
                                        b4a6: {
                                          d2d4: {
                                            a6c7: {
                                              $: {
                                                id: 1297,
                                                eco: "C57",
                                                name: "Two knights defence: Fegatello attack, Leonhardt variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                c6e7: {
                                  $: {
                                    id: 1298,
                                    eco: "C57",
                                    name: "Two knights defence: Fegatello attack, Polerio defence",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    c6a5: {
                      $: { id: 1299, eco: "C58", name: "Two knights defence" },
                      d2d3: {
                        $: {
                          id: 1300,
                          eco: "C58",
                          name: "Two knights defence: Kieseritsky variation",
                        },
                        h7h6: {
                          g5f3: {
                            e5e4: {
                              d1e2: {
                                a5c4: {
                                  d3c4: {
                                    f8c5: {
                                      f3d2: {
                                        $: {
                                          id: 1301,
                                          eco: "C58",
                                          name: "Two knights defence: Yankovich variation",
                                        },
                                      },
                                    },
                                    f8e7: {
                                      $: {
                                        id: 1302,
                                        eco: "C58",
                                        name: "Two knights defence: Maroczy variation",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      c4b5: {
                        $: {
                          id: 1303,
                          eco: "C58",
                          name: "Two knights defence",
                        },
                        c7c6: {
                          d5c6: {
                            b7c6: {
                              d1f3: {
                                $: {
                                  id: 1304,
                                  eco: "C58",
                                  name: "Two knights defence: Bogolyubov variation",
                                },
                                d8c7: {
                                  b5d3: {
                                    $: {
                                      id: 1305,
                                      eco: "C58",
                                      name: "Two knights defence: Paoli variation",
                                    },
                                  },
                                },
                                a8b8: {
                                  $: {
                                    id: 1306,
                                    eco: "C58",
                                    name: "Two knights defence: Colman variation",
                                  },
                                },
                                c6b5: {
                                  $: {
                                    id: 1307,
                                    eco: "C58",
                                    name: "Two knights defence: Blackburne variation",
                                  },
                                },
                              },
                              b5e2: {
                                $: {
                                  id: 1308,
                                  eco: "C58",
                                  name: "Two knights defence",
                                },
                                h7h6: {
                                  $: {
                                    id: 1309,
                                    eco: "C59",
                                    name: "Two knights defence",
                                  },
                                  g5f3: {
                                    e5e4: {
                                      f3e5: {
                                        f8d6: {
                                          d2d4: {
                                            d8c7: {
                                              c1d2: {
                                                $: {
                                                  id: 1310,
                                                  eco: "C59",
                                                  name: "Two knights defence: Knorre variation",
                                                },
                                              },
                                            },
                                          },
                                        },
                                        d8c7: {
                                          $: {
                                            id: 1311,
                                            eco: "C59",
                                            name: "Two knights defence: Goering variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                  g5h3: {
                                    $: {
                                      id: 1312,
                                      eco: "C59",
                                      name: "Two knights defence: Steinitz variation",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          f1b5: {
            $: { id: 1313, eco: "C60", name: "Ruy Lopez" },
            f7f6: {
              $: {
                id: 1314,
                eco: "C60",
                name: "Ruy Lopez: Nuernberg variation",
              },
            },
            c6a5: {
              $: { id: 1315, eco: "C60", name: "Ruy Lopez: Pollock defence" },
            },
            f8e7: {
              $: { id: 1316, eco: "C60", name: "Ruy Lopez: Lucena defence" },
            },
            d8e7: {
              $: {
                id: 1317,
                eco: "C60",
                name: "Ruy Lopez: Vinogradov variation",
              },
            },
            g7g5: {
              $: { id: 1318, eco: "C60", name: "Ruy Lopez: Brentano defence" },
            },
            g7g6: {
              $: {
                id: 1319,
                eco: "C60",
                name: "Ruy Lopez: fianchetto (Smyslov/Barnes) defence",
              },
            },
            g8e7: {
              $: { id: 1320, eco: "C60", name: "Ruy Lopez: Cozio defence" },
              b1c3: {
                g7g6: {
                  $: {
                    id: 1321,
                    eco: "C60",
                    name: "Ruy Lopez: Cozio defence, Paulsen variation",
                  },
                },
              },
            },
            c6d4: {
              $: { id: 1322, eco: "C61", name: "Ruy Lopez: Bird's defence" },
              f3d4: {
                e5d4: {
                  e1g1: {
                    g8e7: {
                      $: {
                        id: 1323,
                        eco: "C61",
                        name: "Ruy Lopez: Bird's defence, Paulsen variation",
                      },
                    },
                  },
                },
              },
            },
            d7d6: {
              $: {
                id: 1324,
                eco: "C62",
                name: "Ruy Lopez: old Steinitz defence",
              },
              d2d4: {
                c8d7: {
                  b1c3: {
                    g8f6: {
                      b5c6: {
                        $: {
                          id: 1325,
                          eco: "C62",
                          name: "Ruy Lopez: old Steinitz defence, Nimzovich attack",
                        },
                      },
                    },
                  },
                  c2c4: {
                    $: {
                      id: 1326,
                      eco: "C62",
                      name: "Ruy Lopez: old Steinitz defence, semi-Duras variation",
                    },
                  },
                },
              },
            },
            f7f5: {
              $: {
                id: 1327,
                eco: "C63",
                name: "Ruy Lopez: Schliemann defence",
              },
              b1c3: {
                $: {
                  id: 1328,
                  eco: "C63",
                  name: "Ruy Lopez: Schliemann defence, Berger variation",
                },
              },
            },
            f8c5: {
              $: {
                id: 1329,
                eco: "C64",
                name: "Ruy Lopez: classical (Cordel) defence",
              },
              e1g1: {
                c6d4: {
                  b2b4: {
                    $: {
                      id: 1330,
                      eco: "C64",
                      name: "Ruy Lopez: classical defence, Zaitsev variation",
                    },
                  },
                },
              },
              c2c3: {
                $: {
                  id: 1331,
                  eco: "C64",
                  name: "Ruy Lopez: classical defence, 4.c3",
                },
                g8f6: {
                  e1g1: {
                    e8g8: {
                      d2d4: {
                        c5b6: {
                          $: {
                            id: 1332,
                            eco: "C64",
                            name: "Ruy Lopez: classical defence, Benelux variation  ",
                          },
                        },
                      },
                    },
                  },
                },
                c5b6: {
                  $: {
                    id: 1333,
                    eco: "C64",
                    name: "Ruy Lopez: classical defence, Charousek variation",
                  },
                },
                d8e7: {
                  $: {
                    id: 1334,
                    eco: "C64",
                    name: "Ruy Lopez: classical defence, Boden variation",
                  },
                },
                f7f5: {
                  $: { id: 1335, eco: "C64", name: "Ruy Lopez: Cordel gambit" },
                },
              },
            },
            g8f6: {
              $: { id: 1336, eco: "C65", name: "Ruy Lopez: Berlin defence" },
              d2d4: {
                e5d4: {
                  e1g1: {
                    $: {
                      id: 1337,
                      eco: "C65",
                      name: "Ruy Lopez: Berlin defence, Nyholm attack",
                    },
                  },
                },
              },
              d2d3: {
                c6e7: {
                  $: {
                    id: 1338,
                    eco: "C65",
                    name: "Ruy Lopez: Berlin defence, Mortimer variation",
                  },
                  f3e5: {
                    c7c6: {
                      $: {
                        id: 1339,
                        eco: "C65",
                        name: "Ruy Lopez: Berlin defence, Mortimer trap",
                      },
                    },
                  },
                },
                d7d6: {
                  b5c6: {
                    $: {
                      id: 1340,
                      eco: "C65",
                      name: "Ruy Lopez: Berlin defence, Anderssen variation",
                    },
                  },
                  c2c4: {
                    $: {
                      id: 1341,
                      eco: "C65",
                      name: "Ruy Lopez: Berlin defence, Duras variation",
                    },
                  },
                },
                f8c5: {
                  c1e3: {
                    $: {
                      id: 1342,
                      eco: "C65",
                      name: "Ruy Lopez: Berlin defence, Kaufmann variation",
                    },
                  },
                },
              },
              e1g1: {
                $: {
                  id: 1343,
                  eco: "C65",
                  name: "Ruy Lopez: Berlin defence, 4.O-O",
                },
                f8c5: {
                  $: {
                    id: 1344,
                    eco: "C65",
                    name: "Ruy Lopez: Berlin defence, Beverwijk variation",
                  },
                },
                d7d6: {
                  $: {
                    id: 1345,
                    eco: "C66",
                    name: "Ruy Lopez: Berlin defence, 4.O-O, d6",
                  },
                  d2d4: {
                    c8d7: {
                      b1c3: {
                        f8e7: {
                          $: {
                            id: 1346,
                            eco: "C66",
                            name: "Ruy Lopez: Berlin defence, hedgehog variation",
                          },
                          f1e1: {
                            e8g8: {
                              $: {
                                id: 1347,
                                eco: "C66",
                                name: "Ruy Lopez: Berlin defence, Tarrasch trap",
                              },
                            },
                          },
                          c1g5: {
                            $: {
                              id: 1348,
                              eco: "C66",
                              name: "Ruy Lopez: closed Berlin defence, Bernstein variation",
                            },
                          },
                          b5c6: {
                            $: {
                              id: 1349,
                              eco: "C66",
                              name: "Ruy Lopez: closed Berlin defence, Showalter variation",
                            },
                          },
                        },
                        e5d4: {
                          $: {
                            id: 1350,
                            eco: "C66",
                            name: "Ruy Lopez: closed Berlin defence, Wolf variation",
                          },
                        },
                      },
                    },
                    f6d7: {
                      $: {
                        id: 1351,
                        eco: "C66",
                        name: "Ruy Lopez: closed Berlin defence, Chigorin variation",
                      },
                    },
                  },
                },
                f6e4: {
                  $: {
                    id: 1352,
                    eco: "C67",
                    name: "Ruy Lopez: Berlin defence, open variation",
                  },
                  d2d4: {
                    e4d6: {
                      d4e5: {
                        $: {
                          id: 1353,
                          eco: "C67",
                          name: "Ruy Lopez: open Berlin defence, l'Hermet variation",
                        },
                      },
                      b5a4: {
                        $: {
                          id: 1354,
                          eco: "C67",
                          name: "Ruy Lopez: open Berlin defence, Showalter variation",
                        },
                      },
                    },
                    f8e7: {
                      $: {
                        id: 1355,
                        eco: "C67",
                        name: "Ruy Lopez: open Berlin defence, 5...Be7",
                      },
                      d1e2: {
                        e4d6: {
                          b5c6: {
                            b7c6: {
                              d4e5: {
                                d6b7: {
                                  b1c3: {
                                    e8g8: {
                                      f1e1: {
                                        b7c5: {
                                          f3d4: {
                                            c5e6: {
                                              c1e3: {
                                                e6d4: {
                                                  e3d4: {
                                                    c6c5: {
                                                      $: {
                                                        id: 1356,
                                                        eco: "C67",
                                                        name: "Ruy Lopez: Berlin defence, Rio de Janeiro variation",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  c2c4: {
                                    $: {
                                      id: 1357,
                                      eco: "C67",
                                      name: "Ruy Lopez: Berlin defence, Zukertort variation",
                                    },
                                  },
                                  b2b3: {
                                    $: {
                                      id: 1358,
                                      eco: "C67",
                                      name: "Ruy Lopez: Berlin defence, Pillsbury variation",
                                    },
                                  },
                                  f3d4: {
                                    $: {
                                      id: 1359,
                                      eco: "C67",
                                      name: "Ruy Lopez: Berlin defence, Winawer attack",
                                    },
                                  },
                                },
                                d6f5: {
                                  $: {
                                    id: 1360,
                                    eco: "C67",
                                    name: "Ruy Lopez: Berlin defence, Cordel variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                        d7d5: {
                          $: {
                            id: 1361,
                            eco: "C67",
                            name: "Ruy Lopez: Berlin defence, Trifunovic variation",
                          },
                        },
                      },
                      d4e5: {
                        $: {
                          id: 1362,
                          eco: "C67",
                          name: "Ruy Lopez: Berlin defence, Minckwitz variation",
                        },
                      },
                    },
                    a7a6: {
                      $: {
                        id: 1363,
                        eco: "C67",
                        name: "Ruy Lopez: Berlin defence, Rosenthal variation",
                      },
                    },
                  },
                },
              },
            },
            a7a6: {
              b5c6: {
                $: {
                  id: 1364,
                  eco: "C68",
                  name: "Ruy Lopez: exchange variation",
                },
                d7c6: {
                  d2d4: {
                    e5d4: {
                      d1d4: {
                        d8d4: {
                          f3d4: {
                            c8d7: {
                              $: {
                                id: 1365,
                                eco: "C68",
                                name: "Ruy Lopez: exchange, Alekhine variation",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b1c3: {
                    $: {
                      id: 1366,
                      eco: "C68",
                      name: "Ruy Lopez: exchange, Keres variation",
                    },
                    f7f6: {
                      d2d3: {
                        $: {
                          id: 1367,
                          eco: "C68",
                          name: "Ruy Lopez: exchange, Romanovsky variation",
                        },
                      },
                    },
                  },
                  e1g1: {
                    $: {
                      id: 1368,
                      eco: "C69",
                      name: "Ruy Lopez: exchange variation, 5.O-O",
                    },
                    c8g4: {
                      h2h3: {
                        h7h5: {
                          $: {
                            id: 1369,
                            eco: "C69",
                            name: "Ruy Lopez: exchange variation, Alapin gambit",
                          },
                        },
                      },
                    },
                    f7f6: {
                      $: {
                        id: 1370,
                        eco: "C69",
                        name: "Ruy Lopez: exchange, Gligoric variation",
                      },
                    },
                    d8d6: {
                      $: {
                        id: 1371,
                        eco: "C69",
                        name: "Ruy Lopez: exchange, Bronstein variation",
                      },
                    },
                  },
                },
              },
              b5a4: {
                $: {
                  id: 1372,
                  eco: "C70",
                  name: "Ruy Lopez: Rousseau-Stanley",
                },
                g7g6: {
                  $: {
                    id: 1373,
                    eco: "C70",
                    name: "Ruy Lopez: fianchetto defence deferred",
                  },
                },
                g8e7: {
                  $: {
                    id: 1374,
                    eco: "C70",
                    name: "Ruy Lopez: Cozio defence deferred",
                  },
                },
                c6d4: {
                  $: {
                    id: 1375,
                    eco: "C70",
                    name: "Ruy Lopez: Bird's defence deferred",
                  },
                },
                f8b4: {
                  $: {
                    id: 1376,
                    eco: "C70",
                    name: "Ruy Lopez: Alapin's defence deferred",
                  },
                },
                f8c5: {
                  $: {
                    id: 1377,
                    eco: "C70",
                    name: "Ruy Lopez: Classical defence deferred",
                  },
                },
                b7b5: {
                  $: {
                    id: 1378,
                    eco: "C70",
                    name: "Ruy Lopez: Caro variation",
                  },
                  a4b3: {
                    f8c5: {
                      $: {
                        id: 1379,
                        eco: "C70",
                        name: "Ruy Lopez: Graz variation",
                      },
                    },
                    c6a5: {
                      $: {
                        id: 1380,
                        eco: "C70",
                        name: "Ruy Lopez: Taimanov (chase/wing/accelerated counterthrust) variation",
                      },
                    },
                  },
                },
                f7f5: {
                  $: {
                    id: 1381,
                    eco: "C70",
                    name: "Ruy Lopez: Schliemann defence deferred",
                  },
                },
                d7d6: {
                  $: {
                    id: 1382,
                    eco: "C71",
                    name: "Ruy Lopez: modern Steinitz defence",
                  },
                  d2d4: {
                    b7b5: {
                      a4b3: {
                        c6d4: {
                          f3d4: {
                            e5d4: {
                              d1d4: {
                                c7c5: {
                                  $: {
                                    id: 1383,
                                    eco: "C71",
                                    name: "Ruy Lopez: Noah's ark trap",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  b1c3: {
                    $: {
                      id: 1384,
                      eco: "C71",
                      name: "Ruy Lopez: modern Steinitz defence, Three knights variation",
                    },
                  },
                  c2c4: {
                    $: {
                      id: 1385,
                      eco: "C71",
                      name: "Ruy Lopez: modern Steinitz defence, Duras (Keres) variation",
                    },
                  },
                  e1g1: {
                    $: {
                      id: 1386,
                      eco: "C72",
                      name: "Ruy Lopez: modern Steinitz defence, 5.O-O",
                    },
                  },
                  a4c6: {
                    b7c6: {
                      d2d4: {
                        $: {
                          id: 1387,
                          eco: "C73",
                          name: "Ruy Lopez: modern Steinitz defence, Richter variation",
                        },
                        f7f6: {
                          $: {
                            id: 1388,
                            eco: "C73",
                            name: "Ruy Lopez: modern Steinitz defence, Alapin variation",
                          },
                        },
                      },
                    },
                  },
                  c2c3: {
                    $: {
                      id: 1389,
                      eco: "C74",
                      name: "Ruy Lopez: modern Steinitz defence",
                    },
                    f7f5: {
                      $: {
                        id: 1390,
                        eco: "C74",
                        name: "Ruy Lopez: modern Steinitz defence, siesta variation",
                      },
                      e4f5: {
                        c8f5: {
                          e1g1: {
                            $: {
                              id: 1391,
                              eco: "C74",
                              name: "Ruy Lopez: Siesta, Kopayev variation",
                            },
                          },
                        },
                      },
                    },
                    c8d7: {
                      $: {
                        id: 1392,
                        eco: "C75",
                        name: "Ruy Lopez: modern Steinitz defence",
                      },
                      d2d4: {
                        g8e7: {
                          $: {
                            id: 1393,
                            eco: "C75",
                            name: "Ruy Lopez: modern Steinitz defence, Rubinstein variation",
                          },
                        },
                        g7g6: {
                          $: {
                            id: 1394,
                            eco: "C76",
                            name: "Ruy Lopez: modern Steinitz defence, fianchetto (Bronstein) variation",
                          },
                        },
                      },
                    },
                  },
                },
                g8f6: {
                  $: {
                    id: 1395,
                    eco: "C77",
                    name: "Ruy Lopez: Morphy defence",
                  },
                  b1c3: {
                    $: {
                      id: 1396,
                      eco: "C77",
                      name: "Ruy Lopez: four knights (Tarrasch) variation",
                    },
                  },
                  a4c6: {
                    $: {
                      id: 1397,
                      eco: "C77",
                      name: "Ruy Lopez: Treybal (Bayreuth) variation (exchange var. deferred)",
                    },
                  },
                  d1e2: {
                    $: {
                      id: 1398,
                      eco: "C77",
                      name: "Ruy Lopez: Wormald (Alapin) attack",
                    },
                    b7b5: {
                      a4b3: {
                        f8e7: {
                          d2d4: {
                            d7d6: {
                              c2c3: {
                                c8g4: {
                                  $: {
                                    id: 1399,
                                    eco: "C77",
                                    name: "Ruy Lopez: Wormald attack, Gruenfeld variation",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  d2d3: {
                    $: {
                      id: 1400,
                      eco: "C77",
                      name: "Ruy Lopez: Anderssen variation",
                    },
                    d7d6: {
                      c2c4: {
                        $: {
                          id: 1401,
                          eco: "C77",
                          name: "Ruy Lopez: Morphy defence, Duras variation",
                        },
                      },
                    },
                  },
                  e1g1: {
                    $: { id: 1402, eco: "C78", name: "Ruy Lopez: 5.O-O" },
                    b7b5: {
                      a4b3: {
                        f8e7: {
                          a2a4: {
                            $: {
                              id: 1403,
                              eco: "C78",
                              name: "Ruy Lopez: Wing attack",
                            },
                          },
                        },
                        d7d6: {
                          $: {
                            id: 1404,
                            eco: "C78",
                            name: "Ruy Lopez: ...b5 & ...d6",
                          },
                          f3g5: {
                            d6d5: {
                              e4d5: {
                                c6d4: {
                                  f1e1: {
                                    f8c5: {
                                      e1e5: {
                                        e8f8: {
                                          $: {
                                            id: 1405,
                                            eco: "C78",
                                            name: "Ruy Lopez: Rabinovich variation",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        c8b7: {
                          $: {
                            id: 1406,
                            eco: "C78",
                            name: "Ruy Lopez: Archangelsk (counterthrust) variation",
                          },
                        },
                      },
                    },
                    f8c5: {
                      $: {
                        id: 1407,
                        eco: "C78",
                        name: "Ruy Lopez: Moeller defence",
                      },
                    },
                    d7d6: {
                      $: {
                        id: 1408,
                        eco: "C79",
                        name: "Ruy Lopez: Steinitz defence deferred (Russian defence)",
                      },
                      a4c6: {
                        b7c6: {
                          d2d4: {
                            c8g4: {
                              $: {
                                id: 1409,
                                eco: "C79",
                                name: "Ruy Lopez: Steinitz defence deferred, Lipnitsky variation",
                              },
                            },
                            f6e4: {
                              $: {
                                id: 1410,
                                eco: "C79",
                                name: "Ruy Lopez: Steinitz defence deferred, Rubinstein variation",
                              },
                              f1e1: {
                                f7f5: {
                                  d4e5: {
                                    d6d5: {
                                      b1c3: {
                                        $: {
                                          id: 1411,
                                          eco: "C79",
                                          name: "Ruy Lopez: Steinitz defence deferred, Boleslavsky variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    f6e4: {
                      $: {
                        id: 1412,
                        eco: "C80",
                        name: "Ruy Lopez: open (Tarrasch) defence",
                      },
                      d1e2: {
                        $: {
                          id: 1413,
                          eco: "C80",
                          name: "Ruy Lopez: open, Tartakower variation",
                        },
                      },
                      b1c3: {
                        $: {
                          id: 1414,
                          eco: "C80",
                          name: "Ruy Lopez: open, Knorre variation",
                        },
                      },
                      d2d4: {
                        $: {
                          id: 1415,
                          eco: "C80",
                          name: "Ruy Lopez: open, 6.d4",
                        },
                        e5d4: {
                          $: {
                            id: 1416,
                            eco: "C80",
                            name: "Ruy Lopez: open, Riga variation",
                          },
                        },
                        b7b5: {
                          $: {
                            id: 1417,
                            eco: "C80",
                            name: "Ruy Lopez: open, 6.d4 b5",
                          },
                          f3e5: {
                            $: {
                              id: 1418,
                              eco: "C80",
                              name: "Ruy Lopez: open, Friess attack",
                            },
                          },
                          d4d5: {
                            $: {
                              id: 1419,
                              eco: "C80",
                              name: "Ruy Lopez: open, Richter variation",
                            },
                          },
                          a4b3: {
                            $: {
                              id: 1420,
                              eco: "C80",
                              name: "Ruy Lopez: open, 7.Bb3",
                            },
                            d7d5: {
                              a2a4: {
                                c6d4: {
                                  $: {
                                    id: 1421,
                                    eco: "C80",
                                    name: "Ruy Lopez: open, Schlechter defence",
                                  },
                                  f3d4: {
                                    e5d4: {
                                      b1c3: {
                                        $: {
                                          id: 1422,
                                          eco: "C80",
                                          name: "Ruy Lopez: open, Berger variation",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              c2c4: {
                                $: {
                                  id: 1423,
                                  eco: "C80",
                                  name: "Ruy Lopez: open, Harksen gambit",
                                },
                              },
                              d4e5: {
                                $: {
                                  id: 1424,
                                  eco: "C80",
                                  name: "Ruy Lopez: open, 8.de",
                                },
                                c6e7: {
                                  $: {
                                    id: 1425,
                                    eco: "C80",
                                    name: "Ruy Lopez: open, Zukertort variation",
                                  },
                                },
                                c8e6: {
                                  $: {
                                    id: 1426,
                                    eco: "C80",
                                    name: "Ruy Lopez: open, 8...Be6",
                                  },
                                  b1d2: {
                                    $: {
                                      id: 1427,
                                      eco: "C80",
                                      name: "Ruy Lopez: open, Bernstein variation",
                                    },
                                    e4c5: {
                                      c2c3: {
                                        d5d4: {
                                          f3g5: {
                                            $: {
                                              id: 1428,
                                              eco: "C80",
                                              name: "Ruy Lopez: open, Bernstein variation, Karpov gambit",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  d1e2: {
                                    $: {
                                      id: 1429,
                                      eco: "C81",
                                      name: "Ruy Lopez: open, Howell attack",
                                    },
                                    f8e7: {
                                      f1d1: {
                                        e8g8: {
                                          c2c4: {
                                            b5c4: {
                                              b3c4: {
                                                d8d7: {
                                                  $: {
                                                    id: 1430,
                                                    eco: "C81",
                                                    name: "Ruy Lopez: open, Howell attack, Ekstroem variation",
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      c2c4: {
                                        $: {
                                          id: 1431,
                                          eco: "C81",
                                          name: "Ruy Lopez: open, Howell attack, Adam variation",
                                        },
                                      },
                                    },
                                  },
                                  c2c3: {
                                    $: {
                                      id: 1432,
                                      eco: "C82",
                                      name: "Ruy Lopez: open, 9.c3",
                                    },
                                    e4c5: {
                                      $: {
                                        id: 1433,
                                        eco: "C82",
                                        name: "Ruy Lopez: open, Berlin variation",
                                      },
                                    },
                                    f8c5: {
                                      $: {
                                        id: 1434,
                                        eco: "C82",
                                        name: "Ruy Lopez: open, Italian variation",
                                      },
                                      b1d2: {
                                        $: {
                                          id: 1435,
                                          eco: "C82",
                                          name: "Ruy Lopez: open, St. Petersburg variation",
                                        },
                                        e8g8: {
                                          b3c2: {
                                            e4f2: {
                                              $: {
                                                id: 1436,
                                                eco: "C82",
                                                name: "Ruy Lopez: open, Dilworth variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                      d1d3: {
                                        $: {
                                          id: 1437,
                                          eco: "C82",
                                          name: "Ruy Lopez: open, Motzko attack",
                                        },
                                        c6e7: {
                                          $: {
                                            id: 1438,
                                            eco: "C82",
                                            name: "Ruy Lopez: open, Motzko attack, Nenarokov variation",
                                          },
                                        },
                                      },
                                    },
                                    f8e7: {
                                      $: {
                                        id: 1439,
                                        eco: "C83",
                                        name: "Ruy Lopez: open, classical defence",
                                      },
                                      b1d2: {
                                        e8g8: {
                                          d1e2: {
                                            $: {
                                              id: 1440,
                                              eco: "C83",
                                              name: "Ruy Lopez: open, Malkin variation",
                                            },
                                          },
                                        },
                                      },
                                      f1e1: {
                                        $: {
                                          id: 1441,
                                          eco: "C83",
                                          name: "Ruy Lopez: open, 9...Be7, 10.Re1",
                                        },
                                        e8g8: {
                                          f3d4: {
                                            d8d7: {
                                              d4e6: {
                                                f7e6: {
                                                  e1e4: {
                                                    $: {
                                                      id: 1442,
                                                      eco: "C83",
                                                      name: "Ruy Lopez: open, Tarrasch trap",
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            c6e5: {
                                              $: {
                                                id: 1443,
                                                eco: "C83",
                                                name: "Ruy Lopez: open, Breslau variation",
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    f8e7: {
                      $: {
                        id: 1444,
                        eco: "C84",
                        name: "Ruy Lopez: closed defence",
                      },
                      d2d4: {
                        $: {
                          id: 1445,
                          eco: "C84",
                          name: "Ruy Lopez: closed, centre attack",
                        },
                        e5d4: {
                          e4e5: {
                            f6e4: {
                              c2c3: {
                                $: {
                                  id: 1446,
                                  eco: "C84",
                                  name: "Ruy Lopez: closed, Basque gambit (North Spanish variation)",
                                },
                              },
                            },
                          },
                        },
                      },
                      a4c6: {
                        $: {
                          id: 1447,
                          eco: "C85",
                          name: "Ruy Lopez: Exchange variation doubly deferred (DERLD)",
                        },
                      },
                      d1e2: {
                        $: {
                          id: 1448,
                          eco: "C86",
                          name: "Ruy Lopez: Worrall attack",
                        },
                        b7b5: {
                          a4b3: {
                            e8g8: {
                              $: {
                                id: 1449,
                                eco: "C86",
                                name: "Ruy Lopez: Worrall attack, sharp line",
                              },
                            },
                            d7d6: {
                              $: {
                                id: 1450,
                                eco: "C86",
                                name: "Ruy Lopez: Worrall attack, solid line",
                              },
                            },
                          },
                        },
                      },
                      f1e1: {
                        d7d6: {
                          $: {
                            id: 1451,
                            eco: "C87",
                            name: "Ruy Lopez: closed, Averbach variation",
                          },
                        },
                        b7b5: {
                          a4b3: {
                            $: {
                              id: 1452,
                              eco: "C88",
                              name: "Ruy Lopez: closed",
                            },
                            d7d6: {
                              c2c3: {
                                c6a5: {
                                  b3c2: {
                                    c7c5: {
                                      d2d4: {
                                        d8c7: {
                                          h2h3: {
                                            a5c6: {
                                              d4d5: {
                                                c6b8: {
                                                  b1d2: {
                                                    g7g5: {
                                                      $: {
                                                        id: 1453,
                                                        eco: "C88",
                                                        name: "Ruy Lopez: closed, Leonhardt variation",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          a2a4: {
                                            $: {
                                              id: 1454,
                                              eco: "C88",
                                              name: "Ruy Lopez: closed, Balla variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              d2d4: {
                                $: {
                                  id: 1455,
                                  eco: "C88",
                                  name: "Ruy Lopez: closed, 7...d6, 8.d4",
                                },
                                c6d4: {
                                  f3d4: {
                                    e5d4: {
                                      d1d4: {
                                        c7c5: {
                                          $: {
                                            id: 1456,
                                            eco: "C88",
                                            name: "Ruy Lopez: Noah's ark trap",
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            c8b7: {
                              $: {
                                id: 1457,
                                eco: "C88",
                                name: "Ruy Lopez: Trajkovic counter-attack",
                              },
                            },
                            e8g8: {
                              $: {
                                id: 1458,
                                eco: "C88",
                                name: "Ruy Lopez: closed, 7...O-O",
                              },
                              a2a4: {
                                $: {
                                  id: 1459,
                                  eco: "C88",
                                  name: "Ruy Lopez: closed, anti-Marshall 8.a4",
                                },
                              },
                              c2c3: {
                                $: {
                                  id: 1460,
                                  eco: "C88",
                                  name: "Ruy Lopez: closed, 8.c3",
                                },
                                d7d5: {
                                  $: {
                                    id: 1461,
                                    eco: "C89",
                                    name: "Ruy Lopez: Marshall counter-attack",
                                  },
                                  e4d5: {
                                    f6d5: {
                                      f3e5: {
                                        c6e5: {
                                          e1e5: {
                                            c7c6: {
                                              $: {
                                                id: 1462,
                                                eco: "C89",
                                                name: "Ruy Lopez: Marshall counter-attack, 11...c6",
                                              },
                                              b3d5: {
                                                c6d5: {
                                                  d2d4: {
                                                    e7d6: {
                                                      e5e3: {
                                                        $: {
                                                          id: 1463,
                                                          eco: "C89",
                                                          name: "Ruy Lopez: Marshall, Kevitz variation",
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              d2d4: {
                                                $: {
                                                  id: 1464,
                                                  eco: "C89",
                                                  name: "Ruy Lopez: Marshall, main line, 12. d4",
                                                },
                                                e7d6: {
                                                  e5e1: {
                                                    d8h4: {
                                                      g2g3: {
                                                        h4h3: {
                                                          $: {
                                                            id: 1465,
                                                            eco: "C89",
                                                            name: "Ruy Lopez: Marshall, main line, 14...Qh3",
                                                          },
                                                          c1e3: {
                                                            c8g4: {
                                                              d1d3: {
                                                                a8e8: {
                                                                  b1d2: {
                                                                    e8e6: {
                                                                      a2a4: {
                                                                        h3h5: {
                                                                          $: {
                                                                            id: 1466,
                                                                            eco: "C89",
                                                                            name: "Ruy Lopez: Marshall, main line, Spassky variation",
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    e5e4: {
                                      $: {
                                        id: 1467,
                                        eco: "C89",
                                        name: "Ruy Lopez: Marshall, Herman Steiner variation",
                                      },
                                    },
                                  },
                                },
                                d7d6: {
                                  $: {
                                    id: 1468,
                                    eco: "C90",
                                    name: "Ruy Lopez: closed (with ...d6)",
                                  },
                                  d2d3: {
                                    $: {
                                      id: 1469,
                                      eco: "C90",
                                      name: "Ruy Lopez: closed, Pilnik variation",
                                    },
                                  },
                                  b3c2: {
                                    $: {
                                      id: 1470,
                                      eco: "C90",
                                      name: "Ruy Lopez: closed, Lutikov variation",
                                    },
                                  },
                                  a2a3: {
                                    $: {
                                      id: 1471,
                                      eco: "C90",
                                      name: "Ruy Lopez: closed, Suetin variation",
                                    },
                                  },
                                  d2d4: {
                                    $: {
                                      id: 1472,
                                      eco: "C91",
                                      name: "Ruy Lopez: closed, 9.d4",
                                    },
                                    c8g4: {
                                      $: {
                                        id: 1473,
                                        eco: "C91",
                                        name: "Ruy Lopez: closed, Bogolyubov variation",
                                      },
                                    },
                                  },
                                  h2h3: {
                                    $: {
                                      id: 1474,
                                      eco: "C92",
                                      name: "Ruy Lopez: closed, 9.h3",
                                    },
                                    a6a5: {
                                      $: {
                                        id: 1475,
                                        eco: "C92",
                                        name: "Ruy Lopez: closed, Keres (9...a5) variation",
                                      },
                                    },
                                    c8e6: {
                                      $: {
                                        id: 1476,
                                        eco: "C92",
                                        name: "Ruy Lopez: closed, Kholmov variation",
                                      },
                                    },
                                    f6d7: {
                                      $: {
                                        id: 1477,
                                        eco: "C92",
                                        name: "Ruy Lopez: closed, Ragozin-Petrosian (`Keres') variation",
                                      },
                                    },
                                    c8b7: {
                                      $: {
                                        id: 1478,
                                        eco: "C92",
                                        name: "Ruy Lopez: closed, Flohr-Zaitsev system (Lenzerheide variation)",
                                      },
                                    },
                                    h7h6: {
                                      $: {
                                        id: 1479,
                                        eco: "C93",
                                        name: "Ruy Lopez: closed, Smyslov defence",
                                      },
                                    },
                                    c6b8: {
                                      $: {
                                        id: 1480,
                                        eco: "C94",
                                        name: "Ruy Lopez: closed, Breyer defence",
                                      },
                                      d2d4: {
                                        $: {
                                          id: 1481,
                                          eco: "C95",
                                          name: "Ruy Lopez: closed, Breyer, 10.d4",
                                        },
                                        b8d7: {
                                          $: {
                                            id: 1482,
                                            eco: "C95",
                                            name: "Ruy Lopez: closed, Breyer, Borisenko variation",
                                          },
                                          b1d2: {
                                            c8b7: {
                                              b3c2: {
                                                c7c5: {
                                                  $: {
                                                    id: 1483,
                                                    eco: "C95",
                                                    name: "Ruy Lopez: closed, Breyer, Gligoric variation",
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          f3h4: {
                                            $: {
                                              id: 1484,
                                              eco: "C95",
                                              name: "Ruy Lopez: closed, Breyer, Simagin variation",
                                            },
                                          },
                                        },
                                      },
                                    },
                                    c6a5: {
                                      b3c2: {
                                        $: {
                                          id: 1485,
                                          eco: "C96",
                                          name: "Ruy Lopez: closed (8...Na5)",
                                        },
                                        c7c6: {
                                          d2d4: {
                                            d8c7: {
                                              $: {
                                                id: 1486,
                                                eco: "C96",
                                                name: "Ruy Lopez: closed, Rossolimo defence",
                                              },
                                            },
                                          },
                                        },
                                        c7c5: {
                                          $: {
                                            id: 1487,
                                            eco: "C96",
                                            name: "Ruy Lopez: closed (10...c5)",
                                          },
                                          d2d4: {
                                            a5c6: {
                                              $: {
                                                id: 1488,
                                                eco: "C96",
                                                name: "Ruy Lopez: closed, Borisenko defence",
                                              },
                                            },
                                            f6d7: {
                                              $: {
                                                id: 1489,
                                                eco: "C96",
                                                name: "Ruy Lopez: closed, Keres (...Nd7) defence",
                                              },
                                            },
                                            d8c7: {
                                              $: {
                                                id: 1490,
                                                eco: "C97",
                                                name: "Ruy Lopez: closed, Chigorin defence",
                                              },
                                              b1d2: {
                                                c8d7: {
                                                  d2f1: {
                                                    f8e8: {
                                                      f1e3: {
                                                        g7g6: {
                                                          $: {
                                                            id: 1491,
                                                            eco: "C97",
                                                            name: "Ruy Lopez: closed, Chigorin, Yugoslav system",
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                a5c6: {
                                                  $: {
                                                    id: 1492,
                                                    eco: "C98",
                                                    name: "Ruy Lopez: closed, Chigorin, 12...Nc6",
                                                  },
                                                  d4c5: {
                                                    $: {
                                                      id: 1493,
                                                      eco: "C98",
                                                      name: "Ruy Lopez: closed, Chigorin, Rauzer attack",
                                                    },
                                                  },
                                                },
                                                c5d4: {
                                                  c3d4: {
                                                    $: {
                                                      id: 1494,
                                                      eco: "C99",
                                                      name: "Ruy Lopez: closed, Chigorin, 12...c5d4",
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
} as EcoTrieNode;

export const ecoOpeningNameMap = {
  polish: [1, 2, 3],
  "polish tuebingen variation": [2],
  "polish outflank variation": [3],
  "benko s opening": [4, 5, 6],
  "benko s opening lasker simul special": [5],
  "benko s opening reversed alekhine": [6],
  grob: [7, 8, 9, 10],
  "grob spike attack": [8],
  "grob fritz gambit": [9],
  "grob romford counter gambit": [10],
  clemenz: [11, 12],
  "clemenz global": [12],
  amar: [13, 14],
  "amar amar gambit": [14],
  dunst: [15, 16, 17, 18],
  "dunst 1 e5": [16],
  "dunst battambang": [17],
  "dunst novosibirsk": [18],
  anderssen: [19],
  ware: [20, 21],
  "ware crab": [21],
  saragossa: [22],
  mieses: [23, 24, 25, 26],
  "mieses 1 e5": [24],
  "mieses valencia": [25],
  "mieses venezolana": [26],
  "van t kruijs": [27, 28],
  "van t kruijs amsterdam attack": [28],
  barnes: [29, 30],
  "barnes hammerschlag fried fox pork chop opening": [30],
  desprez: [31],
  durkin: [32],
  larsen: [33, 34, 35, 36, 37, 38, 39, 40],
  "larsen modern variation": [34],
  "larsen indian variation": [35],
  "larsen classical variation": [36],
  "larsen english variation": [37],
  "larsen dutch variation": [38],
  "larsen polish variation": [39],
  "larsen symmetrical variation": [40],
  bird: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  "bird from gambit": [42],
  "bird from gambit lasker variation": [43],
  "bird from gambit lipke variation": [44],
  "bird swiss gambit": [45],
  "bird hobbs gambit": [46],
  "bird mujannah": [48],
  "bird williams gambit": [49],
  "bird lasker variation": [50],
  zukertort: [
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74,
  ],
  "zukertort tartakower": [52],
  "zukertort pirc lisitsin gambit": [53],
  "zukertort lisitsin gambit deferred": [54],
  "zukertort spielmann": [55],
  "zukertort wade defence": [56],
  "zukertort herrstroem gambit": [57],
  "zukertort burn": [58],
  "zukertort king s indian attack spassky s variation": [59],
  "zukertort king s indian attack": [60, 70, 73],
  "zukertort king s indian attack reti smyslov variation": [61],
  "zukertort winawer": [62],
  "zukertort old indian attack": [63],
  "zukertort santasiere s folly": [64],
  "zukertort tennison lemberg zukertort gambit": [65],
  "zukertort nimzovich larsen attack": [66],
  "zukertort king s indian attack barcza system": [67],
  "zukertort king s indian attack yugoslav variation": [68],
  "zukertort king s indian attack keres variation": [69],
  "zukertort king s indian attack pachman system": [71],
  "zukertort king s indian attack with c5": [72],
  "zukertort king s indian attack french": [74],
  reti: [75, 76, 77, 78],
  "reti advance": [76],
  "reti reti accepted": [77],
  "reti keres variation": [78],
  english: [
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178,
  ],
  "english great snake": [80],
  "english adorjan defence": [81],
  "english jaenisch gambit": [82],
  "english anglo dutch defense": [83],
  "english caro kann defensive system": [84, 85, 88],
  "english torre defensive system": [86],
  "english london defensive system": [87],
  "english bled variation": [89],
  "english new york london defensive system": [90],
  "english capablanca s variation": [91],
  "english caro kann defensive system bogolyubov variation": [92],
  "english romanishin gambit": [94],
  "english agincourt variation": [95, 97],
  "english wimpey system": [96],
  "english kurajica defence": [98],
  "english neo catalan": [99],
  "english neo catalan accepted": [100],
  "english neo catalan declined": [101],
  "english symmetrical keres defence": [102],
  "english anglo indian": [103],
  "english sokolsky": [104],
  "english anglo gruenfeld defense": [107, 110],
  "english anglo gruenfeld smyslov defense": [108],
  "english anglo gruenfeld czech defense": [109],
  "english anglo gruenfeld defense korchnoi variation": [111],
  "english queens indian formation": [113],
  "english queens indian romanishin variation": [114],
  "english nimzo english opening": [115],
  "english mikenas carls variation": [116],
  "english mikenas carls flohr variation": [117],
  "english mikenas carls kevitz variation": [118],
  "english mikenas carls sicilian variation": [119],
  "english nimzovich": [121],
  "english nimzovich flohr": [122],
  "english troeger": [124],
  "english keres variation": [125],
  "english smyslov": [127],
  "english kramnik shirov counterattack": [128],
  "english bellon gambit": [130],
  "english carls bremen system": [131],
  "english bremen reverse dragon": [132],
  "english bremen smyslov system": [133],
  "english bremen system keres variation": [134],
  "english bremen system with g6": [135],
  "english sicilian reversed": [136],
  "english closed system": [137, 143],
  "english closed taimanov variation": [138],
  "english closed hort variation": [139],
  "english closed 5 rb1": [140],
  "english closed 5 rb1 taimanov variation": [141],
  "english closed system without d6": [142],
  "english botvinnik system": [144],
  "english three knights system": [145],
  "english four knights system": [146],
  "english nenarokov variation": [147],
  "english bradley beach variation": [148],
  "english four knights nimzovich variation": [149],
  "english four knights marini variation": [150],
  "english four knights capablanca variation": [151],
  "english four knights 4 e3": [152],
  "english four knights stean variation": [153],
  "english four knights romanishin variation": [154],
  "english four knights kingside fianchetto": [155],
  "english symmetrical variation": [
    156, 160, 161, 163, 165, 167, 169, 173, 175,
  ],
  "english symmetrical hedgehog system": [157],
  "english symmetrical hedgehog flexible formation": [158],
  "english symmetrical benoni formation": [159],
  "english symmetrical geller variation": [162],
  "english symmetrical three knights system": [164],
  "english symmetrical rubinstein system": [166],
  "english symmetrical four knights system": [168],
  "english ultra symmetrical variation": [170],
  "english symmetrical botvinnik system reversed": [171, 174],
  "english symmetrical botvinnik system": [172],
  "english symmetrical main line with d3": [176],
  "english symmetrical main line with b3": [177],
  "english symmetrical main line with d4": [178],
  "queen s pawn game": [
    179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 191, 192, 193, 209,
    210, 217, 218, 219, 220, 221, 229, 230, 231, 1495, 1496, 1497, 1498, 1500,
    1501, 1502, 1509, 1512, 1515, 1516, 1517, 1518, 1519, 1820, 1838, 1839,
    1840, 1841, 1842, 1843, 1844, 1941,
  ],
  "queen s pawn game lundin kevitz mikenas defence": [180],
  "queen s pawn game charlick englund gambit": [181],
  "queen s pawn game englund gambit": [182],
  "queen s pawn game english defence": [183],
  "queen s pawn game polish defence": [184],
  "queen s pawn game keres defence": [186],
  "queen s pawn game franco indian keres defence": [187],
  "queen s pawn game modern": [188, 193],
  "queen s pawn game beefeater": [189],
  "queen s pawn": [190],
  "queen s pawn game wade": [191],
  averbakh: [194, 195, 196, 197],
  "averbakh cochrane bonnerjee": [194],
  "averbakh pterodactyl": [195],
  "averbakh randspringer": [196],
  "averbakh kotov": [197],
  "old benoni": [198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208],
  "old benoni franco benoni defence": [199],
  "old benoni mujannah formation": [200],
  "old benoni woozle defence": [202],
  "old benoni hawk habichd defence": [204],
  "old benoni schmid s system": [206],
  "old benoni semi benoni blockade variation": [208],
  "queen s pawn game bronstein gambit": [210],
  "canard opening": [211],
  "paleface attack": [212],
  "gedult attack": [213],
  "levenfish trompowsky ruth": [214, 215, 216],
  "levenfish trompowsky ruth boleslavsky": [215],
  "levenfish trompowsky ruth rabinovich": [216],
  "queen s pawn game torre attack": [218],
  "queen s pawn game torre attack wagner gambit": [219],
  "queen s pawn game yusupov rubinstein system": [220],
  "queen s pawn game doery defence": [221],
  "queen s indian": [222, 223, 224],
  "queen s indian marienbad system": [223],
  "queen s indian marienbad system berg variation": [224],
  "king s indian": [225, 226, 227, 228],
  "king s indian east indian defence": [225],
  "king s indian torre attack": [226],
  "king s indian london system": [227],
  "king s indian fianchetto without c4": [228],
  "queen s pawn game kevitz trajkovich defence": [230],
  "queen s pawn game queen s indian accelerated": [231],
  "budapest gambit": [232, 233, 234, 235, 236, 237, 238, 239, 240],
  "budapest gambit fajarowicz variation": [233],
  "budapest gambit fajarowicz steiner variation": [234],
  "budapest gambit adler variation": [236],
  "budapest gambit rubinstein variation": [237],
  "budapest gambit alekhine variation": [238],
  "budapest gambit alekhine abonyi variation": [239],
  "budapest gambit alekhine variation balogh gambit": [240],
  "old indian": [241, 242, 243, 244, 245, 246],
  "old indian janowski variation": [242],
  "old indian ukrainian variation": [243],
  "old indian dus khotimirsky variation": [244],
  "old indian ukrainian variation 4 nf3": [245],
  "old indian main line": [246],
  benoni: [
    247, 248, 249, 250, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274,
    275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288,
  ],
  "benoni hromodka system": [248],
  "benoni blackburne hromadka": [249],
  "benoni vulture": [250],
  "czech benoni": [251, 252],
  "czech benoni king s indian system": [252],
  "benko gambit": [253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263],
  "benko gambit gambit half accepted": [254],
  "benko gambit zaitsev system": [255],
  "benko gambit nescafe frappe attack": [256],
  "benko gambit accepted": [257],
  "benko gambit nd2 variation": [258],
  "benko gambit fianchetto variation": [259],
  "benko gambit 7 e4": [260],
  "benko gambit ne2 variation": [261],
  "benko gambit main line": [263],
  "benoni marshall": [265],
  "benoni uhlmann variation": [266],
  "benoni nimzovich knight s tour variation": [267],
  "benoni fianchetto variation": [268, 269],
  "benoni fianchetto 9 nbd7": [270],
  "benoni fianchetto 11 re8": [271],
  "benoni 6 e4": [272],
  "benoni pawn storm variation": [273],
  "benoni mikenas variation": [274],
  "benoni taimanov variation": [275],
  "benoni four pawns attack": [276],
  "benoni four pawns attack main line": [277],
  "benoni classical with e4 and nf3": [278],
  "benoni classical without 9 o o": [279, 281],
  "benoni classical 8 bg5": [280],
  "benoni classical 9 o o": [282],
  "benoni classical 9 a6 10 a4": [283],
  "benoni classical with a6 and 10 bg4": [284],
  "benoni classical 9 re8": [285],
  "benoni classical 9 re8 10 nd2": [286],
  "benoni classical with re8 and na6": [287],
  "benoni classical 11 f3": [288],
  dutch: [
    289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303,
    304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 317, 318, 319,
    320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334,
    335, 336, 337, 338, 339,
  ],
  "dutch spielmann gambit": [290],
  "dutch manhattan alapin ulvestad": [291],
  "dutch von pretzel gambit": [292],
  "dutch korchnoi attack": [293],
  "dutch krejcik gambit": [294],
  "dutch 2 bg5": [295],
  "dutch blackburne": [297],
  "dutch leningrad basman system": [299],
  "dutch leningrad karlsbad variation": [300],
  "dutch staunton gambit": [301, 303],
  "dutch balogh defence": [302],
  "dutch staunton gambit tartakower variation": [304],
  "dutch staunton gambit staunton s line": [305],
  "dutch staunton gambit alekhine variation": [306],
  "dutch staunton gambit lasker variation": [307],
  "dutch staunton gambit chigorin variation": [308],
  "dutch staunton gambit nimzovich variation": [309],
  "dutch bladel variation": [311],
  "dutch rubinstein": [313],
  "dutch staunton gambit deferred": [314],
  "dutch with c4 and nc3": [316],
  "dutch 2 c4 nf6 3 g3": [317],
  "dutch hort antoshin system": [318],
  "dutch leningrad variation": [319],
  "dutch leningrad main variation": [320],
  "dutch leningrad main variation with c6": [321],
  "dutch leningrad main variation with nc6": [322],
  "dutch alekhine": [323, 327, 328],
  "dutch tartakower": [324],
  "dutch spielmann": [325],
  "dutch botvinnik": [326],
  "dutch stonewall variation": [329],
  "dutch stonewall with nc3": [330, 333],
  "dutch stonewall botwinnik variation": [331],
  "dutch stonewall with ba3": [332],
  "dutch stonewall chekhover variation": [334],
  "dutch classical variation": [335],
  "dutch ilyin genevsky variation": [336],
  "dutch ilyin genevsky winter variation": [337],
  "dutch ilyin genevsky variation with qc2": [338],
  "dutch ilyin genevsky variation with b3": [339],
  "king s pawn game": [340, 807, 808, 809, 810, 811, 812, 813, 1093, 1191],
  hippopotamus: [341],
  "corn stalk defence": [342],
  "lemming defence": [343],
  "duras gambit": [344],
  "barnes defence": [345],
  "fried fox defence": [346],
  "carr s defence": [347],
  "basman defence": [348],
  "st george defence": [349],
  "owen defence": [350],
  "guatemala defence": [351],
  nimzovich: [352, 353, 354, 355, 356, 357, 358, 359],
  "nimzovich wheeler gambit": [353],
  "nimzovich 2 nf3": [354],
  "nimzovich colorado counter": [355],
  "nimzovich 2 d4": [356],
  "nimzovich marshall gambit": [357],
  "nimzovich bogolyubov variation": [358],
  "nimzovich neo mongoloid": [359],
  scandinavian: [
    360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374,
    375, 376,
  ],
  "scandinavian lasker": [361],
  "scandinavian 5 nf3 bf5": [362],
  "scandinavian gruenfeld": [363],
  "scandinavian anderssen counter attack": [364],
  "scandinavian anderssen counter attack orthodox attack": [365],
  "scandinavian anderssen counter attack goteborg system": [366],
  "scandinavian anderssen counter attack collijn variation": [367],
  "scandinavian mieses kotrvc gambit": [368],
  "scandinavian pytel wade": [369],
  "scandinavian icelandic gambit": [371],
  "scandinavian gambit": [372],
  "scandinavian marshall variation": [374],
  "scandinavian kiel variation": [375],
  "scandinavian richter variation": [376],
  "alekhine s defence": [
    377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391,
    392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406,
    407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417,
  ],
  "alekhine s defence scandinavian variation": [378],
  "alekhine s defence spielmann variation": [379],
  "alekhine s defence maroczy variation": [380],
  "alekhine s defence krejcik variation": [381],
  "alekhine s defence mokele mbembe buecker variation": [382],
  "alekhine s defence brooklyn defence": [383],
  "alekhine s defence kmoch variation": [385],
  "alekhine s defence saemisch attack": [386],
  "alekhine s defence welling variation": [387],
  "alekhine s defence steiner variation": [389],
  "alekhine s defence two pawns lasker s attack": [390],
  "alekhine s defence two pawns attack mikenas variation": [391],
  "alekhine s defence o sullivan gambit": [393],
  "alekhine s defence balogh variation": [395],
  "alekhine s defence exchange variation": [397],
  "alekhine s defence exchange karpov variation": [398],
  "alekhine s defence four pawns attack": [399],
  "alekhine s defence four pawns attack korchnoi variation": [400],
  "alekhine s defence four pawns attack 6 nc6": [401],
  "alekhine s defence four pawns attack ilyin genevsky var": [402],
  "alekhine s defence four pawns attack 7 be3": [403],
  "alekhine s defence four pawns attack tartakower variation": [404],
  "alekhine s defence four pawns attack planinc variation": [405],
  "alekhine s defence four pawns attack fianchetto variation": [406],
  "alekhine s defence four pawns attack trifunovic variation": [407],
  "alekhine s defence modern variation": [408],
  "alekhine s defence modern larsen variation": [409],
  "alekhine s defence modern schmid variation": [410],
  "alekhine s defence modern fianchetto variation": [411],
  "alekhine s defence modern keres variation": [412],
  "alekhine s defence modern variation 4 bg4": [413],
  "alekhine s defence modern flohr variation": [414],
  "alekhine s defence modern panov variation": [415],
  "alekhine s defence modern alekhine variation": [416],
  "alekhine s defence modern vitolins attack": [417],
  robatsch: [418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429],
  "robatsch norwegian defence": [419],
  "robatsch three pawns attack": [421],
  "robatsch gurgenidze variation": [423],
  "robatsch two knights variation": [425],
  "robatsch two knights suttles variation": [426],
  "robatsch pseudo austrian attack": [427],
  "robatsch rossolimo variation": [428],
  "robatsch geller s system": [429],
  pirc: [
    430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444,
    445, 446, 447, 448, 449, 450,
  ],
  "pirc ufimtsev pytel variation": [431],
  "pirc 150 attack": [433],
  "pirc sveshnikov system": [434],
  "pirc holmov system": [435],
  "pirc byrne variation": [436],
  "pirc chinese variation": [438],
  "pirc bayonet mariotti attack": [439],
  "pirc classical two knights system": [440, 441],
  "pirc classical h3 system": [442],
  "pirc classical system 5 be2": [443],
  "pirc austrian attack": [444, 445],
  "pirc austrian attack 6 e5": [446],
  "pirc austrian attack 6 be3": [447],
  "pirc austrian attack 6 bd3": [448],
  "pirc austrian attack dragon formation": [449],
  "pirc austrian attack ljubojevic variation": [450],
  "caro kann": [
    451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465,
    466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480,
    481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495,
  ],
  "caro kann hillbilly attack": [452],
  "caro kann anti caro kann defence": [453],
  "caro kann anti anti caro kann defence": [454],
  "caro kann closed breyer variation": [455],
  "caro kann goldman spielmann variation": [457],
  "caro kann two knights variation": [458],
  "caro kann two knights 3 bg4": [459],
  "caro kann de bruycker": [461],
  "caro kann caro masi": [462],
  "caro kann tartakower fantasy variation": [464],
  "caro kann 3 nd2": [465],
  "caro kann edinburgh variation": [466],
  "caro kann advance variation": [467],
  "caro kann advance short variation": [468],
  "caro kann exchange variation": [469],
  "caro kann exchange rubinstein variation": [470],
  "caro kann panov botvinnik attack": [471, 473],
  "caro kann panov botvinnik gunderam attack": [472],
  "caro kann panov botvinnik herzog defence": [474],
  "caro kann panov botvinnik normal variation": [475],
  "caro kann panov botvinnik czerniak variation": [476],
  "caro kann panov botvinnik reifir spielmann variation": [477],
  "caro kann panov botvinnik attack 5 e6": [478],
  "caro kann panov botvinnik attack 5 g6": [479],
  "caro kann gurgenidze counter attack": [481],
  "caro kann gurgenidze system": [482],
  "caro kann rasa studier gambit": [483],
  "caro kann alekhine gambit": [485],
  "caro kann tartakower nimzovich variation": [486],
  "caro kann forgacs variation": [487],
  "caro kann bronstein larsen variation": [488],
  "caro kann steinitz variation": [489],
  "caro kann classical variation": [490],
  "caro kann classical flohr variation": [491],
  "caro kann classical maroczy attack": [492],
  "caro kann classical 6 h4": [493],
  "caro kann classical 7 nd7": [494],
  "caro kann classical spassky variation": [495],
  sicilian: [
    496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510,
    511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525,
    526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540,
    541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555,
    556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570,
    571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585,
    586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600,
    601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615,
    616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630,
    631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645,
    646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660,
    661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675,
    676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690,
    691,
  ],
  "sicilian gloria variation": [497],
  "sicilian steinitz variation": [498],
  "sicilian wing gambit": [499],
  "sicilian wing gambit santasiere variation": [500],
  "sicilian wing gambit marshall variation": [501],
  "sicilian wing gambit marienbad variation": [502],
  "sicilian wing gambit carlsbad variation": [503],
  "sicilian keres variation 2 ne2": [504],
  "sicilian grand prix attack": [505, 516],
  "sicilian smith morra gambit": [506, 508],
  "sicilian andreaschek gambit": [507],
  "sicilian smith morra gambit chicago defence": [509],
  "sicilian alapin s variation 2 c3": [510],
  "sicilian 2 c3 heidenfeld variation": [511],
  "sicilian closed": [512, 518, 520],
  "sicilian closed korchnoi variation": [513],
  "sicilian closed 2 nc6": [514],
  "sicilian chameleon variation": [515],
  "sicilian grand prix attack schofman variation": [517],
  "sicilian closed smyslov variation": [519],
  "sicilian closed 6 ne2 e5 botvinnik": [521],
  "sicilian closed 6 f4": [522],
  "sicilian closed 6 f4 e5 botvinnik": [523],
  "sicilian closed 6 be3": [524],
  "sicilian stiletto althouse variation": [526],
  "sicilian quinteros variation": [527],
  "sicilian katalimov variation": [528],
  "sicilian hungarian variation": [529],
  "sicilian acton extension": [530],
  "sicilian o kelly variation": [531],
  "sicilian nimzovich rubinstein variation": [532],
  "sicilian nimzovich rubinstein rubinstein counter gambit": [533],
  "sicilian nimzovich rossolimo attack without d6": [535],
  "sicilian nimzovich rossolimo attack with g6 without d6": [536],
  "sicilian nimzovich rossolimo attack gurgenidze variation": [537],
  "sicilian flohr variation": [539],
  "sicilian nimzovich variation": [540],
  "sicilian labourdonnais loewenthal variation": [541],
  "sicilian labourdonnais loewenthal kalashnikov variation": [542],
  "sicilian stanley mackenzie": [543],
  "sicilian pelikan lasker sveshnikov variation": [544],
  "sicilian pelikan bird variation": [545],
  "sicilian pelikan chelyabinsk variation": [546],
  "sicilian sveshnikov variation": [547],
  "sicilian accelerated fianchetto exchange variation": [548],
  "sicilian accelerated fianchetto modern variation": [549],
  "sicilian accelerated fianchetto modern variation with bc4": [550],
  "sicilian accelerated fianchetto maroczy bind": [551],
  "sicilian accelerated fianchetto gurgenidze variation": [552],
  "sicilian accelerated fianchetto maroczy bind 5 bg7": [553],
  "sicilian accelerated fianchetto simagin variation": [554],
  "sicilian accelerated fianchetto maroczy bind 6 be3": [555],
  "sicilian accelerated fianchetto breyer variation": [556],
  "sicilian marshall variation": [558],
  "sicilian anderssen variation": [560],
  "sicilian pin variation sicilian counter attack": [561],
  "sicilian pin jaffe variation": [562],
  "sicilian pin koch variation": [563],
  "sicilian kan variation": [564],
  "sicilian kan maroczy bind reti variation": [565],
  "sicilian kan maroczy bind bronstein variation": [566],
  "sicilian kan 5 bd3": [567],
  "sicilian kan gipslis variation": [568],
  "sicilian kan polugaievsky variation": [569],
  "sicilian kan swiss cheese variation": [570],
  "sicilian kan 5 nc3": [571],
  "sicilian taimanov": [572],
  "sicilian szen": [573],
  "sicilian capablanca": [574],
  "sicilian hedgehog variation": [575],
  "sicilian kasparov gambit": [576],
  "sicilian bird": [577],
  "sicilian anderssen": [578],
  "sicilian wyvill": [579],
  "sicilian taimanov bastrikov variation": [580],
  "sicilian taimanov variation": [581, 582],
  "sicilian wing gambit deferred": [584],
  "sicilian canal sokolsky nimzovich rossolimo moscow attack": [585],
  "sicilian canal sokolsky attack 3 bd7": [586],
  "sicilian canal sokolsky attack bronstein gambit": [587],
  "sicilian canal sokolsky attack sokolsky variation": [588],
  "sicilian uulberg quigley chekhover": [589],
  "sicilian chekhover zaitsev variation": [590],
  "sicilian prins moscow variation": [592],
  "sicilian prins variation venice attack": [593],
  "sicilian venice attack": [595],
  "sicilian sozin not scheveningen": [597],
  "sicilian magnus smith trap": [598],
  "sicilian sozin benko variation": [599],
  "sicilian classical": [600],
  "sicilian boleslavsky variation": [601],
  "sicilian boleslavsky louma variation": [602],
  "sicilian boleslavsky variation 7 nb3": [603],
  "sicilian richter rauzer": [604],
  "sicilian richter rauzer bondarevsky variation": [605],
  "sicilian richter rauzer larsen variation": [606],
  "sicilian richter rauzer larsen variation 7 qd2": [607],
  "sicilian richter rauzer 6 e6": [608],
  "sicilian richter rauzer podvebrady variation": [609],
  "sicilian richter rauzer margate alekhine variation": [610],
  "sicilian richter rauzer richter attack": [611],
  "sicilian richter rauzer keres variation": [612],
  "sicilian richter rauzer rauzer attack": [613],
  "sicilian richter rauzer rauzer attack 7 be7": [614],
  "sicilian richter rauzer rauzer attack 7 be7 defence 9 f4": [615],
  "sicilian richter rauzer rauzer attack geller variation": [616],
  "sicilian richter rauzer rauzer attack 7 be7 defence 9 nxd4": [617, 618],
  "sicilian richter rauzer rauzer attack 7 a6": [619],
  "sicilian richter rauzer rauzer attack 7 a6 defence 8 bd7": [620],
  "sicilian richter rauzer rauzer attack 7 a6 defence 9 be7": [621],
  "sicilian richter rauzer rauzer attack 7 a6 defence 11 bxf6": [622],
  "sicilian dragon variation": [623],
  "sicilian dragon levenfish variation": [624],
  "sicilian dragon levenfish flohr variation": [625],
  "sicilian dragon 6 be3": [626],
  "sicilian dragon classical attack": [627],
  "sicilian dragon classical amsterdam variation": [628],
  "sicilian dragon classical grigoriev variation": [629],
  "sicilian dragon classical nottingham variation": [630],
  "sicilian dragon classical 8 o o": [631],
  "sicilian dragon classical zollner gambit": [632],
  "sicilian dragon classical richter variation": [633],
  "sicilian dragon classical 9 nb3": [634],
  "sicilian dragon classical stockholm attack": [635],
  "sicilian dragon classical spielmann variation": [636],
  "sicilian dragon classical bernard defence": [637],
  "sicilian dragon classical reti tartakower variation": [638],
  "sicilian dragon classical alekhine variation": [639],
  "sicilian dragon yugoslav attack": [640],
  "sicilian dragon yugoslav attack 7 o o": [641],
  "sicilian dragon yugoslav attack rauser variation": [642],
  "sicilian dragon yugoslav attack 9 bc4": [643],
  "sicilian dragon yugoslav attack byrne variation": [644],
  "sicilian dragon yugoslav attack 9 bd7": [645],
  "sicilian dragon yugoslav attack 10 o o o": [646],
  "sicilian dragon yugoslav attack 12 h4": [647],
  "sicilian scheveningen variation": [648],
  "sicilian scheveningen english variation": [649],
  "sicilian scheveningen vitolins variation": [650],
  "sicilian scheveningen fianchetto variation": [651],
  "sicilian scheveningen keres attack": [652],
  "sicilian scheveningen 6 f4": [653],
  "sicilian scheveningen tal variation": [654],
  "sicilian scheveningen 6 be2": [655],
  "sicilian modern scheveningen": [656],
  "sicilian modern scheveningen main line": [657],
  "sicilian modern scheveningen main line with nb3": [658],
  "sicilian scheveningen paulsen classical variation": [659, 661],
  "sicilian scheveningen classical nd7 system": [660],
  "sicilian scheveningen classical variation with qc7 and nc6": [662],
  "sicilian scheveningen classical maroczy system": [663],
  "sicilian scheveningen classical": [664],
  "sicilian scheveningen classical main line": [665],
  "sicilian sozin attack": [666],
  "sicilian sozin with a6 and b5": [667],
  "sicilian sozin leonhardt variation": [668],
  "sicilian sozin fischer variation": [669],
  "sicilian sozin 7 be3": [670],
  "sicilian velimirovic attack": [671],
  "sicilian najdorf": [672],
  "sicilian najdorf adams attack": [673],
  "sicilian najdorf lipnitzky attack": [674],
  "sicilian najdorf byrne english attack": [675],
  "sicilian najdorf zagreb fianchetto variation": [676],
  "sicilian najdorf opovcensky variation": [677],
  "sicilian najdorf 6 f4": [678],
  "sicilian najdorf 6 bg5": [679],
  "sicilian najdorf ivkov variation": [680],
  "sicilian najdorf 6 e6": [681],
  "sicilian najdorf 7 f4": [682],
  "sicilian najdorf polugayevsky variation": [683],
  "sicilian najdorf polugayevsky simagin variation": [684],
  "sicilian najdorf 7 qb6": [685],
  "sicilian najdorf poisoned pawn variation": [686],
  "sicilian najdorf 7 be7": [687],
  "sicilian najdorf browne variation": [688],
  "sicilian najdorf goteborg argentine variation": [689],
  "sicilian najdorf variation": [690],
  "sicilian najdorf 7 be7 main line": [691],
  french: [
    692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 707,
    708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722,
    723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737,
    738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752,
    753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767,
    768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782,
    783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797,
    798, 799, 800, 801, 802, 803, 804, 805, 806,
  ],
  "french steiner": [693],
  "french reti spielmann variation": [694],
  "french steinitz attack": [695],
  "french labourdonnais variation": [696],
  "french wing gambit": [698],
  "french pelikan variation": [700],
  "french two knights variation": [701],
  "french chigorin variation": [702],
  "french king s indian attack": [703],
  "french reversed philidor formation": [704],
  "lengfellner system": [706],
  "french st george defence": [707],
  "french schlechter variation": [709],
  "french alapin variation": [710],
  "french exchange variation": [711],
  "french exchange svenonius variation": [712],
  "french exchange bogolyubov variation": [713],
  "french advance variation": [714, 718, 720],
  "french advance steinitz variation": [715],
  "french advance nimzovich variation": [716],
  "french advance nimzovich system": [717],
  "french advance wade variation": [719],
  "french advance paulsen attack": [721],
  "french advance milner barry gambit": [722],
  "french advance euwe variation": [723],
  "french tarrasch": [724],
  "french tarrasch haberditz variation": [725],
  "french tarrasch guimard variation": [726],
  "french tarrasch guimard main line": [727],
  "french tarrasch closed variation": [728, 730],
  "french tarrasch botvinnik variation": [729],
  "french tarrasch closed variation main line": [731],
  "french tarrasch leningrad variation": [732],
  "french tarrasch open variation": [733],
  "french tarrasch eliskases variation": [734],
  "french tarrasch open 4 ed ed": [735],
  "french tarrasch open variation main line": [736],
  "french paulsen variation": [737],
  "french marshall variation": [738],
  "french rubinstein variation": [739, 741],
  "french fort knox variation": [740],
  "french rubinstein capablanca line": [742],
  "french frere becker variation": [743],
  "french swiss variation": [745],
  "french henneberger variation": [746],
  "french steinitz variation": [747, 749, 751],
  "french steinitz bradford attack": [748],
  "french steinitz brodsky jones variation": [750],
  "french steinitz boleslavsky variation": [752],
  "french steinitz gledhill attack": [753],
  "french burn variation": [754],
  "french maccutcheon variation": [755],
  "french maccutcheon bogolyubov variation": [756],
  "french maccutcheon advance variation": [757],
  "french maccutcheon chigorin variation": [758],
  "french maccutcheon grigoriev variation": [759],
  "french maccutcheon bernstein variation": [760],
  "french maccutcheon janowski variation": [761],
  "french maccutcheon dr olland dutch variation": [762],
  "french maccutcheon tartakower variation": [763],
  "french maccutcheon lasker variation": [764],
  "french maccutcheon duras variation": [765],
  "french maccutcheon lasker variation 8 g6": [766],
  "french classical": [767],
  "french classical anderssen variation": [768],
  "french classical anderssen richter variation": [769],
  "french classical vistaneckis nimzovich variation": [770],
  "french classical frankfurt variation": [771],
  "french classical tartakower variation": [772],
  "french albin alekhine chatard attack": [773],
  "french albin alekhine chatard attack maroczy variation": [774],
  "french albin alekhine chatard attack breyer variation": [775],
  "french albin alekhine chatard attack teichmann variation": [776],
  "french albin alekhine chatard attack spielmann variation": [777],
  "french classical variation": [778],
  "french classical tarrasch variation": [779],
  "french classical rubinstein variation": [780],
  "french classical alapin variation": [781],
  "french classical pollock variation": [782],
  "french classical steinitz variation": [783],
  "french classical stahlberg variation": [784],
  "french winawer nimzovich variation": [785],
  "french winawer kondratiyev variation": [786],
  "french winawer fingerslip variation": [787],
  "french winawer alekhine maroczy gambit": [788],
  "french winawer alekhine gambit alatortsev variation": [789],
  "french winawer alekhine gambit": [790],
  "french winawer alekhine gambit kan variation": [791],
  "french winawer advance variation": [792, 794, 799],
  "french winawer petrosian variation": [793],
  "french winawer advance bogolyubov variation": [795],
  "french winawer advance russian variation": [796],
  "french winawer advance 5 a3": [797],
  "french winawer advance rauzer variation": [798],
  "french winawer classical variation": [800],
  "french winawer advance 6 ne7": [801],
  "french winawer advance smyslov variation": [802],
  "french winawer advance positional main line": [803],
  "french winawer advance poisoned pawn variation": [804],
  "french winawer advance poisoned pawn euwe gligoric variation": [805],
  "french winawer advance poisoned pawn konstantinopolsky variation": [806],
  "king s pawn game indian opening": [808],
  "king s pawn game mengarini s opening": [809],
  "king s pawn game king s head opening": [810],
  "king s pawn game patzer opening": [811],
  "king s pawn game napoleon s opening": [812],
  "king s pawn game lopez opening": [813],
  "alapin s opening": [814],
  "center game": [815, 816, 817, 818, 823, 824, 825, 826, 827, 828, 829],
  "center game kieseritsky": [816],
  "center game halasz": [817],
  "danish gambit": [819, 820, 821, 822],
  "danish gambit collijn defence": [820],
  "danish gambit schlechter defence": [821],
  "danish gambit soerensen defence": [822],
  "center game paulsen attack": [824],
  "center game charousek variation": [825],
  "center game l hermet variation": [826],
  "center game berger variation": [827],
  "center game kupreichik variation": [828],
  "center game hall variation": [829],
  "bishop s opening": [
    830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844,
    845, 846, 847, 848, 849,
  ],
  "bishop s opening philidor counter attack": [831],
  "bishop s opening lisitsyn variation": [832],
  "bishop s opening calabrese counter gambit": [833],
  "bishop s opening calabrese counter gambit jaenisch variation": [834],
  "bishop s opening classical variation": [835],
  "bishop s opening lopez gambit": [836],
  "bishop s opening philidor variation": [837],
  "bishop s opening pratt variation": [838],
  "bishop s opening lewis counter gambit": [839],
  "bishop s opening del rio variation": [840],
  "bishop s opening lewis gambit": [841],
  "bishop s opening wing gambit": [842],
  "bishop s opening macdonnell double gambit": [843],
  "bishop s opening four pawns gambit": [844],
  "bishop s opening berlin defence": [845],
  "bishop s opening greco gambit": [846],
  "bishop s opening ponziani gambit": [847],
  "bishop s opening urusov gambit": [848],
  "bishop s opening urusov gambit panov variation": [849],
  vienna: [
    850, 851, 852, 853, 854, 856, 857, 858, 860, 861, 862, 863, 864, 865, 866,
    867, 868, 869, 870, 871, 872, 873, 874, 877,
  ],
  "vienna zhuravlev countergambit": [851],
  "vienna max lange": [852],
  "vienna paulsen variation": [853],
  "vienna fyfe gambit": [854],
  "vienna gambit": [855, 859, 878, 879, 880, 881, 882, 883, 884, 886],
  "vienna steinitz gambit": [856],
  "vienna steinitz gambit zukertort defence": [857],
  "vienna steinitz gambit fraser minckwitz variation": [858],
  "vienna hamppe allgaier gambit": [860],
  "vienna hamppe allgaier gambit alapin variation": [861],
  "vienna hamppe muzio gambit": [862],
  "vienna hamppe muzio dubois variation": [863],
  "vienna pierce gambit": [864],
  "vienna pierce gambit rushmere attack": [865],
  "vienna falkbeer variation": [866],
  "vienna mengarini variation": [867],
  "vienna paulsen mieses variation": [868],
  "vienna frankenstein dracula variation": [871],
  "vienna adams gambit": [872],
  "vienna marco": [873],
  "vienna alekhine": [874],
  "boden kieseritsky gambit": [875, 876],
  "boden kieseritsky gambit lichtenhein defence": [876],
  "vienna gambit kaufmann variation": [879],
  "vienna gambit breyer variation": [880],
  "vienna gambit paulsen attack": [881],
  "vienna gambit bardeleben variation": [882],
  "vienna gambit heyde variation": [883],
  "vienna gambit wurzburger trap": [885],
  "vienna gambit steinitz neumann": [886],
  "king s gambit": [887],
  "king s gambit declined": [
    888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902,
    903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917,
    918, 919,
  ],
  "king s gambit declined keene s defence": [888],
  "king s gambit declined mafia defence": [889],
  "king s gambit declined norwalde variation": [890],
  "king s gambit declined norwalde variation buecker gambit": [891],
  "king s gambit declined classical variation": [892],
  "king s gambit declined classical svenonius variation": [893],
  "king s gambit declined classical hanham variation": [894],
  "king s gambit declined classical 4 c3": [895],
  "king s gambit declined classical marshall attack": [896],
  "king s gambit declined classical counter gambit": [897],
  "king s gambit declined classical reti variation": [898],
  "king s gambit declined classical soldatenkov variation": [899],
  "king s gambit declined classical heath variation": [900],
  "king s gambit declined 2 nf6": [901],
  "king s gambit declined falkbeer counter gambit": [902, 905],
  "king s gambit declined falkbeer tartakower variation": [903],
  "king s gambit declined falkbeer milner barry variation": [904],
  "king s gambit declined nimzovich counter gambit": [906],
  "king s gambit declined falkbeer 3 e4": [907],
  "king s gambit declined falkbeer rubinstein variation": [908],
  "king s gambit declined falkbeer nimzovich variation": [909],
  "king s gambit declined falkbeer 4 d3": [910],
  "king s gambit declined falkbeer morphy gambit": [911],
  "king s gambit declined falkbeer 5 de": [912],
  "king s gambit declined falkbeer alapin variation": [913],
  "king s gambit declined falkbeer main line 7 bf5": [914],
  "king s gambit declined falkbeer tarrasch variation": [915],
  "king s gambit declined falkbeer charousek gambit": [916],
  "king s gambit declined falkbeer charousek variation": [917],
  "king s gambit declined falkbeer keres variation": [918],
  "king s gambit declined falkbeer reti variation": [919],
  "king s gambit accepted": [
    920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934,
    935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949,
    950, 951, 952, 953, 954, 955, 956, 958, 959, 960, 961, 962, 963, 964, 965,
    966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980,
    981, 982, 983, 984, 985, 986, 987, 988, 989, 991, 992, 993, 994, 996, 997,
    998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019,
  ],
  "king s gambit accepted tumbleweed gambit": [921],
  "king s gambit accepted orsini gambit": [922],
  "king s gambit accepted pawn s gambit stamma gambit": [923],
  "king s gambit accepted schurig gambit": [924],
  "king s gambit accepted carrera basman gambit": [925],
  "king s gambit accepted villemson steinitz gambit": [926],
  "king s gambit accepted keres mason steinitz gambit": [927],
  "king s gambit accepted breyer gambit": [928],
  "king s gambit accepted lesser bishop s petroff jaenisch tartakower gambit": [
    929,
  ],
  "king s gambit accepted bishop s gambit": [930],
  "king s gambit accepted bishop s gambit chigorin s attack": [931],
  "king s gambit accepted bishop s gambit greco variation": [932],
  "king s gambit accepted bishop s gambit classical defence": [933, 935],
  "king s gambit accepted bishop s gambit grimm attack": [934],
  "king s gambit accepted bishop s gambit mcdonnell attack": [936, 937],
  "king s gambit accepted bishop s gambit fraser variation": [938],
  "king s gambit accepted bishop s gambit classical defence cozio attack": [
    939,
  ],
  "king s gambit accepted bishop s gambit boden defence": [940],
  "king s gambit accepted bishop s gambit bryan counter gambit": [941, 942],
  "king s gambit accepted bishop s gambit steinitz defence": [943],
  "king s gambit accepted bishop s gambit maurian defence": [944],
  "king s gambit accepted bishop s gambit ruy lopez defence": [945],
  "king s gambit accepted bishop s gambit lopez gianutio counter gambit": [946],
  "king s gambit accepted lopez gianutio counter gambit hein variation": [947],
  "king s gambit accepted bishop s gambit bledow variation": [948],
  "king s gambit accepted bishop s gambit gifford variation": [949],
  "king s gambit accepted bishop s gambit boren svenonius variation": [950],
  "king s gambit accepted bishop s gambit anderssen variation": [951],
  "king s gambit accepted bishop s gambit morphy variation": [952],
  "king s gambit accepted bishop s gambit cozio morphy defence": [953],
  "king s gambit accepted bishop s gambit bogolyubov variation": [954],
  "king s gambit accepted bishop s gambit paulsen attack": [955],
  "king s gambit accepted bishop s gambit jaenisch variation": [956],
  "king s knight s gambit": [957, 990, 995],
  "king s gambit accepted bonsch osmolovsky variation": [958],
  "king s gambit accepted gianutio counter gambit": [959],
  "king s gambit accepted fischer defence": [960],
  "king s gambit accepted becker defence": [961],
  "king s gambit accepted schallop defence": [962],
  "king s gambit accepted cunningham defence": [963],
  "king s gambit accepted cunningham bertin gambit": [964],
  "king s gambit accepted cunningham three pawns gambit": [965],
  "king s gambit accepted cunningham euwe defence": [966],
  "king s gambit accepted abbazia defence modern variation": [967],
  "king s gambit accepted abbazia defence botvinnik variation": [968],
  "king s gambit accepted quaade gambit": [969],
  "king s gambit accepted rosentreter gambit": [970],
  "king s gambit accepted soerensen gambit": [971],
  "king s gambit accepted king s knight s gambit": [972],
  "king s gambit accepted blachly gambit": [973],
  "king s gambit accepted lolli gambit wild muzio gambit": [974],
  "king s gambit accepted lolli gambit young variation": [975],
  "king s gambit accepted ghulam kassim gambit": [976],
  "king s gambit accepted macdonnell gambit": [977],
  "king s gambit accepted salvio gambit": [978],
  "king s gambit accepted silberschmidt gambit": [979],
  "king s gambit accepted salvio gambit anderssen counter attack": [980],
  "king s gambit accepted cochrane gambit": [981],
  "king s gambit accepted herzfeld gambit": [982],
  "king s gambit accepted muzio gambit": [983],
  "king s gambit accepted muzio gambit paulsen variation": [984],
  "king s gambit accepted double muzio gambit": [985],
  "king s gambit accepted muzio gambit from defence": [986],
  "king s gambit accepted muzio gambit holloway defence": [987],
  "king s gambit accepted muzio gambit kling and horwitz counter attack": [988],
  "king s gambit accepted muzio gambit brentano defence": [989],
  "king s gambit accepted hanstein gambit": [991],
  "king s gambit accepted philidor gambit": [992],
  "king s gambit accepted greco gambit": [993],
  "king s gambit accepted philidor gambit schultz variation": [994],
  "king s gambit accepted allgaier gambit": [996],
  "king s gambit accepted allgaier horny defence": [997],
  "king s gambit accepted allgaier thorold variation": [998],
  "king s gambit accepted allgaier cook variation": [999],
  "king s gambit accepted allgaier blackburne gambit": [1000],
  "king s gambit accepted allgaier walker attack": [1001],
  "king s gambit accepted allgaier urusov attack": [1002],
  "king s gambit accepted allgaier schlechter defence": [1003],
  "king s gambit accepted kieseritsky paulsen defence": [1004],
  "king s gambit accepted kieseritsky long whip stockwhip classical defence": [
    1005,
  ],
  "king s gambit accepted kieseritsky long whip defence jaenisch variation": [
    1006,
  ],
  "king s gambit accepted kieseritsky brentano campbell defence": [1007],
  "king s gambit accepted kieseritsky brentano defence kaplanek variation": [
    1008,
  ],
  "king s gambit accepted kieseritsky brentano defence": [1009],
  "king s gambit accepted kieseritsky brentano defence caro variation": [1010],
  "king s gambit accepted kieseritsky salvio rosenthal defence": [1011],
  "king s gambit accepted kieseritsky salvio defence cozio variation": [1012],
  "king s gambit accepted kieseritsky polerio defence": [1013],
  "king s gambit accepted kieseritsky neumann defence": [1014],
  "king s gambit accepted kieseritsky kolisch defence": [1015],
  "king s gambit accepted kieseritsky berlin defence": [1016],
  "king s gambit accepted kieseritsky berlin defence riviere variation": [1017],
  "king s gambit accepted kieseritsky berlin defence 6 bc4": [1018],
  "king s gambit accepted kieseritsky rice gambit": [1019],
  "king s knight": [1020, 1021, 1022, 1023, 1024, 1025],
  "king s knight gunderam": [1021],
  "king s knight greco": [1022],
  "king s knight damiano": [1023],
  "king s knight qp counter gambit elephant gambit": [1024],
  "king s knight maroczy gambit": [1025],
  latvian: [1026, 1027, 1028, 1029, 1030, 1031, 1032],
  "latvian nimzovich variation": [1027],
  "latvian fraser defence": [1028],
  "latvian 3 bc4": [1029],
  "latvian behting variation": [1030],
  "latvian polerio variation": [1031],
  "latvian corkscrew counter gambit": [1032],
  philidor: [
    1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044,
    1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056,
    1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064,
  ],
  "philidor steinitz variation": [1034],
  "philidor lopez counter gambit": [1035],
  "philidor lopez counter gambit jaenisch variation": [1036],
  "philidor philidor counter gambit": [1038],
  "philidor philidor counter gambit del rio attack": [1039],
  "philidor philidor counter gambit berger variation": [1040],
  "philidor philidor counter gambit zukertort variation": [1041],
  "philidor exchange variation": [1042, 1044, 1046],
  "philidor boden variation": [1043],
  "philidor paulsen attack": [1045],
  "philidor berger variation": [1047],
  "philidor larsen variation": [1048],
  "philidor nimzovich jaenisch variation": [1049],
  "philidor improved hanham variation": [1050],
  "philidor nimzovich sozin variation": [1051],
  "philidor nimzovich larobok variation": [1052],
  "philidor nimzovich variation": [1053],
  "philidor nimzovich sokolsky variation": [1054],
  "philidor nimzovich rellstab variation": [1055],
  "philidor nimzovich locock variation": [1056],
  "philidor nimzovich klein variation": [1057],
  "philidor hanham variation": [1058],
  "philidor hanham krause variation": [1059],
  "philidor hanham steiner variation": [1060],
  "philidor hanham kmoch variation": [1061],
  "philidor hanham berger variation": [1062],
  "philidor hanham schlechter variation": [1063],
  "philidor hanham delmar variation": [1064],
  petrov: [
    1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076,
    1077, 1078, 1079, 1080, 1081, 1082, 1083, 1085, 1086, 1087, 1088, 1089,
    1090, 1091, 1092,
  ],
  "petrov french attack": [1066],
  "petrov kaufmann attack": [1067],
  "petrov nimzovich attack": [1068],
  "petrov cozio lasker attack": [1069],
  "petrov classical attack": [1070],
  "petrov classical attack chigorin variation": [1071],
  "petrov classical attack berger variation": [1072],
  "petrov classical attack krause variation": [1073],
  "petrov classical attack maroczy variation": [1074],
  "petrov classical attack jaenisch variation": [1075],
  "petrov classical attack mason variation": [1076],
  "petrov classical attack marshall variation": [1077],
  "petrov classical attack tarrasch variation": [1078],
  "petrov classical attack marshall trap": [1079],
  "petrov classical attack close variation": [1080],
  "petrov cochrane gambit": [1081],
  "petrov paulsen attack": [1082],
  "petrov damiano variation": [1083],
  "petrov three knights game": [1084],
  "petrov italian variation": [1085],
  "petrov modern steinitz attack": [1086],
  "petrov modern attack main line": [1087],
  "petrov modern attack steinitz variation": [1088],
  "petrov modern attack bardeleben variation": [1089],
  "petrov urusov gambit": [1090],
  "petrov modern attack symmetrical variation": [1091],
  "petrov modern attack trifunovic variation": [1092],
  "irish chicago gambit": [1094],
  "konstantinopolsky opening": [1095],
  "dresden opening": [1096],
  "inverted hungarian": [1097],
  "inverted hanham": [1098],
  "tayler opening": [1099],
  ponziani: [1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107],
  "ponziani caro variation": [1101],
  "ponziani leonhardt variation": [1102],
  "ponziani steinitz variation": [1103],
  "ponziani jaenisch counter attack": [1104],
  "ponziani fraser defence": [1105],
  "ponziani reti variation": [1106],
  "ponziani romanishin variation": [1107],
  "ponziani counter gambit": [1108, 1110],
  "ponziani counter gambit schmidt attack": [1109],
  "ponziani counter gambit cordel": [1110],
  scotch: [
    1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1131, 1132, 1133, 1134,
    1136, 1137, 1138, 1139, 1140, 1141, 1143, 1144, 1145, 1146, 1147, 1148,
    1149, 1150,
  ],
  "scotch lolli variation": [1112],
  "scotch cochrane variation": [1113],
  "scotch relfsson gambit maclopez": [1114],
  "scotch goering gambit": [1115, 1117],
  "scotch sea cadet mate": [1116],
  "scotch goering gambit bardeleben variation": [1118],
  "scotch gambit": [
    1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129,
  ],
  "scotch gambit anderssen paulsen suhle counter attack": [1120],
  "scotch gambit cochrane shumov defence": [1122],
  "scotch gambit vitzhum attack": [1123],
  "scotch gambit hanneken variation": [1125],
  "scotch gambit cochrane variation": [1127],
  "scotch gambit benima defence": [1128],
  "scotch gambit dubois reti defence": [1129],
  "scotch game": [1130, 1135, 1142],
  "scotch ghulam kassim variation": [1131],
  "scotch pulling counter attack": [1132],
  "scotch horwitz attack": [1133],
  "scotch berger variation": [1134],
  "scotch rosenthal variation": [1136],
  "scotch fraser attack": [1137],
  "scotch steinitz variation": [1138],
  "scotch schmidt variation": [1139],
  "scotch mieses variation": [1140],
  "scotch tartakower variation": [1141],
  "scotch blackburne attack": [1143],
  "scotch gottschall variation": [1144],
  "scotch paulsen attack": [1145],
  "scotch paulsen gunsberg defence": [1146],
  "scotch meitner variation": [1147],
  "scotch blumenfeld attack": [1148],
  "scotch potter variation": [1149],
  "scotch romanishin variation": [1150],
  "three knights": [1151, 1152, 1153, 1154, 1155],
  "three knights schlechter variation": [1152],
  "three knights winawer defence gothic defence": [1153],
  "three knights steinitz variation": [1154],
  "three knights steinitz rosenthal variation": [1155],
  "four knights": [
    1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167,
    1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179,
    1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190,
  ],
  "four knights walker de saint amant": [1156],
  "four knights schultze mueller gambit": [1157],
  "four knights italian variation": [1158],
  "four knights gunsberg variation": [1159],
  "four knights scotch variation": [1160],
  "four knights scotch krause variation": [1161],
  "four knights scotch 4 exd4": [1162],
  "four knights belgrade gambit": [1163],
  "four knights spanish variation": [1164],
  "four knights ranken variation": [1165],
  "four knights spielmann variation": [1166],
  "four knights spanish classical defence": [1167],
  "four knights bardeleben variation": [1168],
  "four knights marshall variation": [1169],
  "four knights rubinstein counter gambit": [1170],
  "four knights rubinstein counter gambit bogolyubov variation": [1171],
  "four knights rubinstein counter gambit 5 be2": [1172],
  "four knights rubinstein counter gambit maroczy variation": [1173],
  "four knights rubinstein counter gambit exchange variation": [1174],
  "four knights rubinstein counter gambit henneberger variation": [1175],
  "four knights double ruy lopez": [1176, 1178],
  "four knights gunsberg counter attack": [1177],
  "four knights alatortsev variation": [1179],
  "four knights schwarz englisch": [1180],
  "four knights janowski variation": [1181],
  "four knights svenonius variation": [1182],
  "four knights symmetrical variation": [1183],
  "four knights symmetrical metger unpin": [1184],
  "four knights symmetrical capablanca variation": [1185],
  "four knights symmetrical pillsbury variation": [1186],
  "four knights symmetrical blake variation": [1187],
  "four knights symmetrical tarrasch variation": [1188],
  "four knights symmetrical maroczy system": [1189],
  "four knights nimzovich paulsen variation": [1190],
  "blackburne shilling gambit": [1192],
  "rousseau gambit": [1193],
  "hungarian defence": [1194, 1195],
  "hungarian defence tartakower variation": [1195],
  "giuoco piano": [
    1196, 1197, 1198, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252,
    1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264,
    1265, 1266, 1267, 1268,
  ],
  "giuoco piano four knights variation": [1197],
  "giuoco piano jerome gambit": [1198],
  "giuoco pianissimo": [1199, 1200, 1201, 1202, 1203],
  "giuoco pianissimo dubois variation": [1200],
  "giuoco pianissimo italian four knights variation": [1202],
  "giuoco pianissimo canal variation": [1203],
  "evans gambit declined": [
    1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213,
  ],
  "evans gambit declined lange": [1205],
  "evans gambit declined pavlov": [1206],
  "evans gambit declined hirschbach": [1207],
  "evans gambit declined vasquez": [1208],
  "evans gambit declined hicken": [1209],
  "evans gambit declined 5 a4": [1210],
  "evans gambit declined showalter": [1211],
  "evans gambit declined cordel": [1212],
  "evans gambit declined counter gambit": [1213],
  "evans gambit": [
    1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225,
    1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237,
    1238, 1239, 1240, 1241, 1242, 1243,
  ],
  "evans gambit normal variation": [1215],
  "evans gambit ulvestad variation": [1216],
  "evans gambit paulsen variation": [1217],
  "evans gambit morphy attack": [1218],
  "evans gambit goering attack": [1219],
  "evans gambit steinitz variation": [1220],
  "evans gambit fraser attack": [1222],
  "evans gambit fraser mortimer attack": [1223],
  "evans gambit stone ware variation": [1224],
  "evans gambit mayet defence": [1225],
  "evans gambit 5 be7": [1226],
  "evans gambit cordel variation": [1227],
  "evans gambit compromised defence": [1229],
  "evans gambit compromised defence paulsen variation": [1230],
  "evans gambit compromised defence potter variation": [1231],
  "evans gambit leonhardt variation": [1232],
  "evans gambit tartakower attack": [1234],
  "evans gambit levenfish variation": [1235],
  "evans gambit sokolsky variation": [1236],
  "evans gambit richardson attack": [1238],
  "evans gambit waller attack": [1240],
  "evans gambit lasker defence": [1241],
  "evans gambit sanders alapin variation": [1242],
  "evans gambit alapin steinitz variation": [1243],
  "giuoco piano labourdonnais variation": [1245],
  "giuoco piano close variation": [1246],
  "giuoco piano centre holding variation": [1247],
  "giuoco piano tarrasch variation": [1248],
  "giuoco piano mestel variation": [1249],
  "giuoco piano eisinger variation": [1250],
  "giuoco piano bird s attack": [1252],
  "giuoco piano ghulam kassim variation": [1254],
  "giuoco piano anderssen variation": [1256],
  "giuoco piano krause variation": [1258],
  "giuoco piano cracow variation": [1259],
  "giuoco piano greco s attack": [1260],
  "giuoco piano greco variation": [1261],
  "giuoco piano bernstein variation": [1262],
  "giuoco piano aitken variation": [1263],
  "giuoco piano steinitz variation": [1265],
  "giuoco piano moeller therkatz attack": [1266],
  "giuoco piano therkatz herzog variation": [1267],
  "giuoco piano moeller bayonet attack": [1268],
  "two knights defence": [
    1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280,
    1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292,
    1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304,
    1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312,
  ],
  "two knights defence rosentreter variation": [1270],
  "two knights defence holzhausen attack": [1272],
  "two knights defence 4 d3": [1273],
  "two knights defence keidanz": [1275],
  "two knights defence perreux": [1276],
  "two knights defence 4 d4 exd4 5 o o": [1277],
  "two knights defence max lange attack": [1278],
  "two knights defence max lange attack berger variation": [1279],
  "two knights defence max lange attack marshall variation": [1280],
  "two knights defence max lange attack rubinstein variation": [1281],
  "two knights defence max lange attack loman defence": [1282],
  "two knights defence max lange attack schlechter variation": [1283],
  "two knights defence max lange attack steinitz variation": [1284],
  "two knights defence max lange attack krause variation": [1285],
  "two knights defence yurdansky attack": [1287],
  "two knights defence canal variation": [1288],
  "two knights defence wilkes barre traxler variation": [1290],
  "two knights defence ulvestad variation": [1291],
  "two knights defence fritz variation": [1292],
  "two knights defence fritz gruber variation": [1293],
  "two knights defence lolli attack": [1294],
  "two knights defence pincus variation": [1295],
  "two knights defence fegatello attack": [1296],
  "two knights defence fegatello attack leonhardt variation": [1297],
  "two knights defence fegatello attack polerio defence": [1298],
  "two knights defence kieseritsky variation": [1300],
  "two knights defence yankovich variation": [1301],
  "two knights defence maroczy variation": [1302],
  "two knights defence bogolyubov variation": [1304],
  "two knights defence paoli variation": [1305],
  "two knights defence colman variation": [1306],
  "two knights defence blackburne variation": [1307],
  "two knights defence knorre variation": [1310],
  "two knights defence goering variation": [1311],
  "two knights defence steinitz variation": [1312],
  "ruy lopez": [
    1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324,
    1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336,
    1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348,
    1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360,
    1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372,
    1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384,
    1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396,
    1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408,
    1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420,
    1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432,
    1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444,
    1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456,
    1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468,
    1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480,
    1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492,
    1493, 1494,
  ],
  "ruy lopez nuernberg variation": [1314],
  "ruy lopez pollock defence": [1315],
  "ruy lopez lucena defence": [1316],
  "ruy lopez vinogradov variation": [1317],
  "ruy lopez brentano defence": [1318],
  "ruy lopez fianchetto smyslov barnes defence": [1319],
  "ruy lopez cozio defence": [1320],
  "ruy lopez cozio defence paulsen variation": [1321],
  "ruy lopez bird s defence": [1322],
  "ruy lopez bird s defence paulsen variation": [1323],
  "ruy lopez old steinitz defence": [1324],
  "ruy lopez old steinitz defence nimzovich attack": [1325],
  "ruy lopez old steinitz defence semi duras variation": [1326],
  "ruy lopez schliemann defence": [1327],
  "ruy lopez schliemann defence berger variation": [1328],
  "ruy lopez classical cordel defence": [1329],
  "ruy lopez classical defence zaitsev variation": [1330],
  "ruy lopez classical defence 4 c3": [1331],
  "ruy lopez classical defence benelux variation": [1332],
  "ruy lopez classical defence charousek variation": [1333],
  "ruy lopez classical defence boden variation": [1334],
  "ruy lopez cordel gambit": [1335],
  "ruy lopez berlin defence": [1336],
  "ruy lopez berlin defence nyholm attack": [1337],
  "ruy lopez berlin defence mortimer variation": [1338],
  "ruy lopez berlin defence mortimer trap": [1339],
  "ruy lopez berlin defence anderssen variation": [1340],
  "ruy lopez berlin defence duras variation": [1341],
  "ruy lopez berlin defence kaufmann variation": [1342],
  "ruy lopez berlin defence 4 o o": [1343],
  "ruy lopez berlin defence beverwijk variation": [1344],
  "ruy lopez berlin defence 4 o o d6": [1345],
  "ruy lopez berlin defence hedgehog variation": [1346],
  "ruy lopez berlin defence tarrasch trap": [1347],
  "ruy lopez closed berlin defence bernstein variation": [1348],
  "ruy lopez closed berlin defence showalter variation": [1349],
  "ruy lopez closed berlin defence wolf variation": [1350],
  "ruy lopez closed berlin defence chigorin variation": [1351],
  "ruy lopez berlin defence open variation": [1352],
  "ruy lopez open berlin defence l hermet variation": [1353],
  "ruy lopez open berlin defence showalter variation": [1354],
  "ruy lopez open berlin defence 5 be7": [1355],
  "ruy lopez berlin defence rio de janeiro variation": [1356],
  "ruy lopez berlin defence zukertort variation": [1357],
  "ruy lopez berlin defence pillsbury variation": [1358],
  "ruy lopez berlin defence winawer attack": [1359],
  "ruy lopez berlin defence cordel variation": [1360],
  "ruy lopez berlin defence trifunovic variation": [1361],
  "ruy lopez berlin defence minckwitz variation": [1362],
  "ruy lopez berlin defence rosenthal variation": [1363],
  "ruy lopez exchange variation": [1364],
  "ruy lopez exchange alekhine variation": [1365],
  "ruy lopez exchange keres variation": [1366],
  "ruy lopez exchange romanovsky variation": [1367],
  "ruy lopez exchange variation 5 o o": [1368],
  "ruy lopez exchange variation alapin gambit": [1369],
  "ruy lopez exchange gligoric variation": [1370],
  "ruy lopez exchange bronstein variation": [1371],
  "ruy lopez rousseau stanley": [1372],
  "ruy lopez fianchetto defence deferred": [1373],
  "ruy lopez cozio defence deferred": [1374],
  "ruy lopez bird s defence deferred": [1375],
  "ruy lopez alapin s defence deferred": [1376],
  "ruy lopez classical defence deferred": [1377],
  "ruy lopez caro variation": [1378],
  "ruy lopez graz variation": [1379],
  "ruy lopez taimanov chase wing accelerated counterthrust variation": [1380],
  "ruy lopez schliemann defence deferred": [1381],
  "ruy lopez modern steinitz defence": [1382, 1389, 1392],
  "ruy lopez noah s ark trap": [1383, 1456],
  "ruy lopez modern steinitz defence three knights variation": [1384],
  "ruy lopez modern steinitz defence duras keres variation": [1385],
  "ruy lopez modern steinitz defence 5 o o": [1386],
  "ruy lopez modern steinitz defence richter variation": [1387],
  "ruy lopez modern steinitz defence alapin variation": [1388],
  "ruy lopez modern steinitz defence siesta variation": [1390],
  "ruy lopez siesta kopayev variation": [1391],
  "ruy lopez modern steinitz defence rubinstein variation": [1393],
  "ruy lopez modern steinitz defence fianchetto bronstein variation": [1394],
  "ruy lopez morphy defence": [1395],
  "ruy lopez four knights tarrasch variation": [1396],
  "ruy lopez treybal bayreuth variation exchange var deferred": [1397],
  "ruy lopez wormald alapin attack": [1398],
  "ruy lopez wormald attack gruenfeld variation": [1399],
  "ruy lopez anderssen variation": [1400],
  "ruy lopez morphy defence duras variation": [1401],
  "ruy lopez 5 o o": [1402],
  "ruy lopez wing attack": [1403],
  "ruy lopez b5 and d6": [1404],
  "ruy lopez rabinovich variation": [1405],
  "ruy lopez archangelsk counterthrust variation": [1406],
  "ruy lopez moeller defence": [1407],
  "ruy lopez steinitz defence deferred russian defence": [1408],
  "ruy lopez steinitz defence deferred lipnitsky variation": [1409],
  "ruy lopez steinitz defence deferred rubinstein variation": [1410],
  "ruy lopez steinitz defence deferred boleslavsky variation": [1411],
  "ruy lopez open tarrasch defence": [1412],
  "ruy lopez open tartakower variation": [1413],
  "ruy lopez open knorre variation": [1414],
  "ruy lopez open 6 d4": [1415],
  "ruy lopez open riga variation": [1416],
  "ruy lopez open 6 d4 b5": [1417],
  "ruy lopez open friess attack": [1418],
  "ruy lopez open richter variation": [1419],
  "ruy lopez open 7 bb3": [1420],
  "ruy lopez open schlechter defence": [1421],
  "ruy lopez open berger variation": [1422],
  "ruy lopez open harksen gambit": [1423],
  "ruy lopez open 8 de": [1424],
  "ruy lopez open zukertort variation": [1425],
  "ruy lopez open 8 be6": [1426],
  "ruy lopez open bernstein variation": [1427],
  "ruy lopez open bernstein variation karpov gambit": [1428],
  "ruy lopez open howell attack": [1429],
  "ruy lopez open howell attack ekstroem variation": [1430],
  "ruy lopez open howell attack adam variation": [1431],
  "ruy lopez open 9 c3": [1432],
  "ruy lopez open berlin variation": [1433],
  "ruy lopez open italian variation": [1434],
  "ruy lopez open st petersburg variation": [1435],
  "ruy lopez open dilworth variation": [1436],
  "ruy lopez open motzko attack": [1437],
  "ruy lopez open motzko attack nenarokov variation": [1438],
  "ruy lopez open classical defence": [1439],
  "ruy lopez open malkin variation": [1440],
  "ruy lopez open 9 be7 10 re1": [1441],
  "ruy lopez open tarrasch trap": [1442],
  "ruy lopez open breslau variation": [1443],
  "ruy lopez closed defence": [1444],
  "ruy lopez closed centre attack": [1445],
  "ruy lopez closed basque gambit north spanish variation": [1446],
  "ruy lopez exchange variation doubly deferred derld": [1447],
  "ruy lopez worrall attack": [1448],
  "ruy lopez worrall attack sharp line": [1449],
  "ruy lopez worrall attack solid line": [1450],
  "ruy lopez closed averbach variation": [1451],
  "ruy lopez closed": [1452],
  "ruy lopez closed leonhardt variation": [1453],
  "ruy lopez closed balla variation": [1454],
  "ruy lopez closed 7 d6 8 d4": [1455],
  "ruy lopez trajkovic counter attack": [1457],
  "ruy lopez closed 7 o o": [1458],
  "ruy lopez closed anti marshall 8 a4": [1459],
  "ruy lopez closed 8 c3": [1460],
  "ruy lopez marshall counter attack": [1461],
  "ruy lopez marshall counter attack 11 c6": [1462],
  "ruy lopez marshall kevitz variation": [1463],
  "ruy lopez marshall main line 12 d4": [1464],
  "ruy lopez marshall main line 14 qh3": [1465],
  "ruy lopez marshall main line spassky variation": [1466],
  "ruy lopez marshall herman steiner variation": [1467],
  "ruy lopez closed with d6": [1468],
  "ruy lopez closed pilnik variation": [1469],
  "ruy lopez closed lutikov variation": [1470],
  "ruy lopez closed suetin variation": [1471],
  "ruy lopez closed 9 d4": [1472],
  "ruy lopez closed bogolyubov variation": [1473],
  "ruy lopez closed 9 h3": [1474],
  "ruy lopez closed keres 9 a5 variation": [1475],
  "ruy lopez closed kholmov variation": [1476],
  "ruy lopez closed ragozin petrosian keres variation": [1477],
  "ruy lopez closed flohr zaitsev system lenzerheide variation": [1478],
  "ruy lopez closed smyslov defence": [1479],
  "ruy lopez closed breyer defence": [1480],
  "ruy lopez closed breyer 10 d4": [1481],
  "ruy lopez closed breyer borisenko variation": [1482],
  "ruy lopez closed breyer gligoric variation": [1483],
  "ruy lopez closed breyer simagin variation": [1484],
  "ruy lopez closed 8 na5": [1485],
  "ruy lopez closed rossolimo defence": [1486],
  "ruy lopez closed 10 c5": [1487],
  "ruy lopez closed borisenko defence": [1488],
  "ruy lopez closed keres nd7 defence": [1489],
  "ruy lopez closed chigorin defence": [1490],
  "ruy lopez closed chigorin yugoslav system": [1491],
  "ruy lopez closed chigorin 12 nc6": [1492],
  "ruy lopez closed chigorin rauzer attack": [1493],
  "ruy lopez closed chigorin 12 c5d4": [1494],
  "queen s pawn game blackburne": [1496],
  "queen s pawn game steinitz": [1497],
  "queen s pawn game kan": [1498],
  "blackmar gambit": [1499],
  "queen s pawn game stonewall attack": [1500],
  "queen s pawn game chigorin variation": [1501, 1510],
  "queen s pawn game anti veresov": [1502],
  "blackmar diemer gambit": [1503, 1504, 1505],
  "blackmar diemer gambit euwe defence": [1504],
  "blackmar diemer gambit lemberg counter gambit": [1505],
  "richter veresov attack": [1506, 1507, 1508],
  "richter veresov attack von popiel tartakower richter veresov": [1506, 1507],
  "richter veresov attack von popiel richter veresov": [1508],
  "queen s pawn game krause variation": [1511],
  "queen s bishop game": [1513],
  "torre attack tartakower variation": [1514],
  "queen s pawn game mason zukertort": [1516],
  "queen s pawn game marshall duras": [1517],
  "queen s pawn game zukertort": [1518, 1519],
  "colle system": [1520],
  "queen s gambit": [1521],
  "queen s gambit declined": [
    1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533,
    1534, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610,
    1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622,
    1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634,
    1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646,
    1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658,
    1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704,
    1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716,
    1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728,
    1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740,
    1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752,
    1753, 1754, 1755, 1756, 1757, 1758,
  ],
  "queen s gambit declined grau sahovic defence": [1522],
  "queen s gambit declined marshall defence": [1523],
  "queen s gambit declined symmetrical austrian defence": [1524],
  "queen s gambit declined chigorin defence": [1525],
  "queen s gambit declined chigorin defence janowski variation": [1526],
  "queen s gambit declined albin counter gambit": [1527, 1529],
  "queen s gambit declined albin counter gambit lasker trap": [1528],
  "queen s gambit declined albin counter gambit alapin variation": [1530],
  "queen s gambit declined albin counter gambit krenosz variation": [1531],
  "queen s gambit declined albin counter gambit janowski variation": [1532],
  "queen s gambit declined albin counter gambit balogh variation": [1533],
  "queen s gambit declined albin counter gambit 5 g3": [1534],
  "qgd slav": [
    1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546,
    1547, 1548, 1549, 1550, 1551, 1553, 1554, 1555, 1557, 1558, 1559, 1560,
    1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568,
  ],
  "qgd slav alekhine": [1536],
  "qgd slav winawer counter gambit": [1537],
  "qgd slav exchange": [1538],
  "qgd slav 3 nf3": [1539],
  "qgd slav breyer variation": [1540],
  "qgd slav 4 e3": [1541],
  "qgd slav 4 e3 bf5": [1542],
  "qgd slav landau variation": [1543],
  "qgd slav exchange variation": [1544, 1546],
  "qgd slav amsterdam variation": [1545],
  "qgd slav exchange variation 6 bf4 bf5": [1547],
  "qgd slav exchange trifunovic variation": [1548],
  "qgd slav 4 nc3": [1549],
  "qgd slav suechting variation": [1550],
  "qgd slav schlechter variation": [1551],
  "qgd slav accepted": [1552, 1556],
  "qgd slav 5 e3 alekhine variation": [1553],
  "qgd slav slav gambit": [1554],
  "qgd slav tolush geller gambit": [1555],
  "qgd slav accepted alapin variation": [1556],
  "qgd slav smyslov variation": [1557],
  "qgd slav soultanbeieff variation": [1558],
  "qgd slav steiner variation": [1559],
  "qgd slav czech defence": [1560],
  "qgd slav krause attack": [1561],
  "qgd slav carlsbad variation": [1562],
  "qgd slav wiesbaden variation": [1563],
  "qgd slav dutch variation": [1564, 1566],
  "qgd slav dutch lasker variation": [1565],
  "qgd slav dutch variation main line": [1567],
  "qgd slav dutch saemisch variation": [1568],
  qga: [
    1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580,
    1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592,
    1593, 1594, 1595, 1596, 1597, 1598, 1599,
  ],
  "qga 3 e4": [1570],
  "qga linares variation": [1571],
  "qga schwartz defence": [1572],
  "qga 3 nf3": [1573],
  "qga ericson variation": [1574],
  "qga alekhine defense borisenko furman variation": [1575],
  "qga alekhine defence": [1576],
  "qga alekhine defence alatortsev variation": [1577],
  "qga haberditz variation": [1578],
  "qga 3 nf3 nf6": [1579],
  "qga mannheim variation": [1580],
  "qga 4 nc3": [1581],
  "qga bogolyubov": [1582],
  "qga 4 e3": [1583],
  "qga smyslov": [1584],
  "qga janowsky larsen": [1585],
  "qga flohr": [1586],
  "qga 4 e6": [1587],
  "qga classical variation": [1588],
  "qga classical furman variation": [1589],
  "qga classical variation 6 o o": [1590],
  "qga classical steinitz variation": [1591],
  "qga classical 6 a6": [1592],
  "qga classical rubinstein variation": [1593],
  "qga classical geller variation": [1594],
  "qga classical 7 qe2": [1595],
  "qga classical 7 b5": [1596],
  "qga classical flohr variation": [1597],
  "qga classical 8 bb7": [1598],
  "qga classical smyslov variation": [1599],
  "queen s gambit declined 3 nf3 nf6 4 e3 c6 5 nbd2": [1601],
  "queen s gambit declined stonewall variation": [1602],
  "queen s gambit declined 3 nf3 nf6 4 e3 c6 5 nbd2 nbd7": [1603],
  "queen s gambit declined semmering variation": [1604],
  "queen s gambit declined spielmann variation": [1605],
  "queen s gambit declined 3 nf3 nf6 4 bg5": [1606],
  "queen s gambit declined capablanca variation": [1607],
  "queen s gambit declined vienna variation": [1608],
  "queen s gambit declined capablanca duras variation": [1609],
  "queen s gambit declined hastings variation": [1610],
  "queen s gambit declined 3 nc3": [1611],
  "queen s gambit declined janowski variation": [1612],
  "queen s gambit declined alapin variation": [1613],
  "queen s gambit declined charousek petrosian variation": [1614],
  "queen s gambit declined semi slav": [1615],
  "queen s gambit declined semi slav noteboom variation": [1616],
  "queen s gambit declined semi slav koomen variation": [1617],
  "queen s gambit declined semi slav junge variation": [1618],
  "queen s gambit declined semi slav abrahams variation": [1619],
  "queen s gambit declined semi slav marshall gambit": [1620],
  "queen s gambit declined tarrasch defence": [1621, 1626],
  "queen s gambit declined tarrasch von hennig schara gambit": [1622],
  "queen s gambit declined tarrasch defence 4 cd ed": [1623],
  "queen s gambit declined tarrasch defence tarrasch gambit": [1624],
  "queen s gambit declined tarrasch defence marshall gambit": [1625],
  "queen s gambit declined tarrasch schlechter rubinstein system": [1627],
  "queen s gambit declined tarrasch folkestone swedish variation": [1628],
  "queen s gambit declined tarrasch schlechter rubinstein system rey ardid variation":
    [1629],
  "queen s gambit declined tarrasch prague variation": [1630],
  "queen s gambit declined tarrasch wagner variation": [1631],
  "queen s gambit declined tarrasch prague variation 7 be7": [1632],
  "queen s gambit declined tarrasch prague variation normal position": [1633],
  "queen s gambit declined tarrasch reti variation": [1634],
  "queen s gambit declined tarrasch prague variation 9 bg5": [1635],
  "queen s gambit declined tarrasch bogolyubov variation": [1636],
  "queen s gambit declined tarrasch stoltz variation": [1637],
  "queen s gambit declined 3 nf6": [1638],
  "queen s gambit declined harrwitz attack": [1639],
  "queen s gambit declined exchange variation": [1640],
  "queen s gambit declined exchange saemisch variation": [1641],
  "queen s gambit declined exchange positional line": [1642],
  "queen s gambit declined exchange chameleon variation": [1643],
  "queen s gambit declined exchange positional line 5 c6": [1644],
  "queen s gambit declined exchange positional line 6 qc2": [1645],
  "queen s gambit declined 4 nf3": [1646],
  "queen s gambit declined classical variation 5 bf4": [1647],
  "queen s gambit declined ragozin variation": [1648],
  "queen s gambit declined ragozin vienna variation": [1649],
  "queen s gambit declined semi tarrasch defence": [1650],
  "queen s gambit declined semi tarrasch symmetrical variation": [1651],
  "queen s gambit declined semi tarrasch levenfish variation": [1652],
  "queen s gambit declined semi tarrasch defence pillsbury variation": [1653],
  "queen s gambit declined semi tarrasch 5 cd": [1654],
  "queen s gambit declined semi tarrasch kmoch variation": [1655],
  "queen s gambit declined semi tarrasch san sebastian variation": [1656],
  "queen s gambit declined semi tarrasch with e3": [1657],
  "queen s gambit declined semi tarrasch 7 bd3": [1658],
  "qgd semi slav": [
    1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670,
    1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682,
    1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692,
  ],
  "qgd semi slav hastings variation": [1660],
  "qgd semi slav 5 bg5 dc": [1661],
  "qgd semi slav botvinnik system anti meran": [1662],
  "qgd semi slav ekstrom variation": [1663],
  "qgd semi slav anti meran gambit": [1664],
  "qgd semi slav anti meran lilienthal variation": [1665],
  "qgd semi slav anti meran szabo variation": [1666],
  "qgd semi slav anti meran alatortsev system": [1667],
  "qgd semi slav 5 e3": [1668],
  "qgd semi slav stonewall defence": [1669],
  "qgd semi slav accelerated meran alekhine variation": [1670],
  "qgd semi slav 5 nd7": [1671],
  "qgd semi slav stoltz variation": [1672],
  "qgd semi slav rubinstein anti meran system": [1673],
  "qgd semi slav 6 bd3": [1674],
  "qgd semi slav bogolyubov variation": [1675],
  "qgd semi slav romih variation": [1676],
  "qgd semi slav chigorin defence": [1677],
  "qgd semi slav 7 bc4": [1678],
  "qgd semi slav meran variation": [1679],
  "qgd semi slav neo meran lundin variation": [1680],
  "qgd semi slav meran wade variation": [1681],
  "qgd semi slav meran 8 a6": [1682],
  "qgd semi slav meran pirc variation": [1683],
  "qgd semi slav meran": [1684],
  "qgd semi slav meran reynolds variation": [1685],
  "qgd semi slav meran old main line": [1686],
  "qgd semi slav meran blumenfeld variation": [1687],
  "qgd semi slav meran rabinovich variation": [1688],
  "qgd semi slav meran sozin variation": [1689, 1691],
  "qgd semi slav meran stahlberg variation": [1690],
  "qgd semi slav meran rellstab attack": [1692],
  "queen s gambit declined 4 bg5": [1693],
  "queen s gambit declined been koomen variation": [1694],
  "queen s gambit declined semi tarrasch krause variation": [1695],
  "queen s gambit declined semi tarrasch primitive pillsbury variation": [1696],
  "queen s gambit declined semi tarrasch": [1697],
  "queen s gambit declined canal venice variation": [1698],
  "queen s gambit declined 4 bg5 nbd7": [1699],
  "queen s gambit declined rochlin variation": [1700],
  "queen s gambit declined alekhine variation": [1701],
  "queen s gambit declined janowski marco": [1702],
  "queen s gambit declined manhattan variation": [1703],
  "queen s gambit declined 5 c6": [1704],
  "queen s gambit declined capablanca anti cambridge springs variation": [1705],
  "queen s gambit declined hodges lasker": [1706],
  "queen s gambit declined cambridge springs defence": [1707],
  "queen s gambit declined cambridge springs defence bogoljubow variation": [
    1708,
  ],
  "queen s gambit declined cambridge springs defence argentine variation": [
    1709,
  ],
  "queen s gambit declined cambridge springs defence rubinstein variation": [
    1710,
  ],
  "queen s gambit declined cambridge springs defence capablanca variation": [
    1711,
  ],
  "queen s gambit declined cambridge springs defence 7 cd": [1712],
  "queen s gambit declined cambridge springs defence yugoslav variation": [
    1713,
  ],
  "queen s gambit declined 4 bg5 be7": [1714],
  "queen s gambit declined lasker variation": [1715],
  "queen s gambit declined 4 bg5 be7 5 e3 o o": [1716],
  "queen s gambit declined anti neo orthodox variation": [1717],
  "queen s gambit declined 6 nf3": [1718],
  "queen s gambit declined pillsbury attack": [1719],
  "queen s gambit declined neo orthodox variation": [1720],
  "queen s gambit declined neo orthodox variation 7 bxf6": [1721],
  "queen s gambit declined petrosian variation": [1722],
  "queen s gambit declined neo orthodox variation 7 bh4": [1723],
  "queen s gambit declined lasker defence": [1724],
  "queen s gambit declined lasker defence teichmann variation": [1725],
  "queen s gambit declined lasker defence russian variation": [1726],
  "queen s gambit declined lasker defence main line": [1727],
  "queen s gambit declined lasker defence bernstein variation": [1728],
  "queen s gambit declined tartakower makagonov bondarevsky system": [1729],
  "queen s gambit declined tartakower makagonov bondarevsky system 8 cd nxd5": [
    1730,
  ],
  "queen s gambit declined tartakower variation": [1731],
  "queen s gambit declined orthodox defence": [1732, 1742],
  "queen s gambit declined orthodox defence botvinnik variation": [1733],
  "queen s gambit declined orthodox defence rauzer variation": [1734],
  "queen s gambit declined orthodox defence rubinstein variation": [1735],
  "queen s gambit declined orthodox defence 7 qc2 c5 8 cd rubinstein": [1736],
  "queen s gambit declined orthodox defence 7 rc1": [1737],
  "queen s gambit declined orthodox defence pillsbury attack": [1738],
  "queen s gambit declined orthodox defence capablanca variation": [1739],
  "queen s gambit declined orthodox defence swiss henneberger variation": [
    1740,
  ],
  "queen s gambit declined orthodox defence swiss karlsbad variation": [1741],
  "queen s gambit declined orthodox defence rubinstein attack with rc1": [1743],
  "queen s gambit declined orthodox defence rubinstein attack wolf variation": [
    1744,
  ],
  "queen s gambit declined orthodox defence rubinstein attack karlsbad variation":
    [1745],
  "queen s gambit declined orthodox defence rubinstein attack gruenfeld variation":
    [1746],
  "queen s gambit declined orthodox defence rubinstein attack main line": [
    1747,
  ],
  "queen s gambit declined orthodox defence bd3 line": [1748, 1752],
  "queen s gambit declined orthodox defence bd3 line fianchetto variation": [
    1749,
  ],
  "queen s gambit declined orthodox defence bd3 line capablanca freeing manoevre":
    [1750],
  "queen s gambit declined orthodox defence bd3 line janowski variation": [
    1751,
  ],
  "queen s gambit declined orthodox defence bd3 line alekhine variation": [
    1753,
  ],
  "queen s gambit declined orthodox defence bd3 line 11 o o": [1754],
  "queen s gambit declined orthodox defence classical variation": [1755],
  "queen s gambit declined orthodox defence classical 13 d1b1 maroczy": [1756],
  "queen s gambit declined orthodox defence classical 13 d1c2 vidmar": [1757],
  "queen s gambit declined orthodox defence classical 13 de": [1758],
  "neo gruenfeld": [
    1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770,
  ],
  "neo gruenfeld bogoljubow": [1759],
  "neo gruenfeld kemeri": [1760],
  "neo gruenfeld 5 cd": [1761],
  "neo gruenfeld 5 cd main line": [1762],
  "neo gruenfeld 5 nf3": [1763],
  "neo gruenfeld 6 cd nxd5 7 o o": [1764],
  "neo gruenfeld 6 cd nxd5 7 o o c5 8 nc3": [1765],
  "neo gruenfeld 6 cd nxd5 7 o o c5 8 dc": [1766],
  "neo gruenfeld 6 cd nxd5 7 o o nb6": [1767],
  "neo gruenfeld 6 o o": [1768],
  "neo gruenfeld 6 o o c6": [1769],
  "neo gruenfeld 6 o o main line": [1770],
  gruenfeld: [
    1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782,
    1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794,
    1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806,
    1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818,
    1819,
  ],
  "gruenfeld spike gambit": [1772],
  "gruenfeld stockholm variation": [1773],
  "gruenfeld lundin variation": [1774],
  "gruenfeld russian variation": [1775, 1809],
  "gruenfeld 4 bf4": [1776],
  "gruenfeld gruenfeld gambit": [1777],
  "gruenfeld gruenfeld gambit capablanca variation": [1778],
  "gruenfeld gruenfeld gambit botvinnik variation": [1779],
  "gruenfeld gruenfeld gambit accepted": [1780],
  "gruenfeld exchange variation": [1781],
  "gruenfeld modern exchange variation": [1782],
  "gruenfeld exchange classical variation": [1783],
  "gruenfeld exchange larsen variation": [1784],
  "gruenfeld exchange simagin s lesser variation": [1785],
  "gruenfeld exchange simagin s improved variation": [1786],
  "gruenfeld exchange spassky variation": [1787],
  "gruenfeld exchange seville variation": [1788],
  "gruenfeld spassky variation main line 10 cd 11 cd": [1789],
  "gruenfeld spassky variation main line 13 bd3": [1790],
  "gruenfeld exchange sokolsky variation": [1791],
  "gruenfeld three knights variation": [1792, 1794],
  "gruenfeld schlechter variation": [1793],
  "gruenfeld flohr variation": [1795],
  "gruenfeld 5 bg5": [1796],
  "gruenfeld capablanca": [1797, 1799],
  "gruenfeld botvinnik": [1798, 1807],
  "gruenfeld rubinstein": [1800],
  "gruenfeld makogonov variation": [1801],
  "gruenfeld opovcensky variation": [1802],
  "gruenfeld flohr": [1803],
  "gruenfeld smyslov defence": [1804],
  "gruenfeld flohr defence": [1805],
  "gruenfeld gruenfeld": [1806],
  "gruenfeld pachman": [1808],
  "gruenfeld russian variation with e4": [1810],
  "gruenfeld russian alekhine hungarian variation": [1811],
  "gruenfeld russian szabo boleslavsky variation": [1812],
  "gruenfeld russian levenfish variation": [1813],
  "gruenfeld russian byrne simagin variation": [1814],
  "gruenfeld russian prins variation": [1815],
  "gruenfeld russian smyslov variation": [1816],
  "gruenfeld russian keres variation": [1817],
  "gruenfeld smyslov main line": [1818],
  "gruenfeld smyslov yugoslav variation": [1819],
  "neo indian seirawan attack": [1821],
  "catalan opening": [1822],
  catalan: [
    1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834,
    1835, 1836, 1837,
  ],
  "catalan closed": [1823],
  "catalan open 5 qa4": [1824],
  "catalan open alekhine variation": [1825],
  "catalan open 5 qa4 nbd7 6 qxc4": [1826],
  "catalan open 5 nf3": [1827],
  "catalan open classical line": [1828],
  "catalan closed 5 nf3": [1829],
  "catalan closed 6 nbd7": [1830],
  "catalan closed botvinnik variation": [1831],
  "catalan closed 7 qc2": [1832],
  "catalan closed zagoryansky variation": [1833],
  "catalan closed qc2 and b3": [1834],
  "catalan closed spassky gambit": [1835],
  "catalan closed main line": [1836],
  "catalan closed sokolsky variation": [1837],
  "queen s pawn game blumenfeld counter gambit": [1839],
  "queen s pawn game blumenfeld counter gambit accepted": [1840],
  "queen s pawn game blumenfeld counter gambit dus chotimursky": [1841],
  "queen s pawn game blumenfeld counter gambit spielmann": [1842],
  "queen s pawn game dzindzikhashvili": [1843],
  "queen s pawn game doery": [1844],
  "bogo indian defence": [1845, 1846, 1847, 1848],
  "bogo indian defence gruenfeld": [1846],
  "bogo indian defence nimzovich": [1847],
  "bogo indian defence monticelli trap": [1848],
  "queen s indian defence": [
    1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860,
    1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871,
  ],
  "queen s indian defence miles variation": [1850],
  "queen s indian defence petrosian system": [1851],
  "queen s indian defence 4 nc3": [1852],
  "queen s indian defence 4 nc3 botvinnik variation": [1853],
  "queen s indian defence 4 nc3 main line": [1854],
  "queen s indian defence 4 e3": [1855],
  "queen s indian defence averbakh variation": [1856],
  "queen s indian defence 4 g3": [1857],
  "queen s indian defence nimzovich variation exaggerated fianchetto": [1858],
  "queen s indian defence 4 g3 bb7": [1859],
  "queen s indian defence rubinstein variation": [1860],
  "queen s indian defence buerger variation": [1861],
  "queen s indian defence capablanca variation": [1862],
  "queen s indian defence yates variation": [1863],
  "queen s indian defence riumin variation": [1864],
  "queen s indian defence 5 bg2 be7": [1865],
  "queen s indian defence anti queen s indian system": [1866],
  "queen s indian defence opovcensky variation": [1867],
  "queen s indian defence old main line 6 o o": [1868],
  "queen s indian defence euwe variation": [1869],
  "queen s indian defence old main line 7 nc3": [1870],
  "queen s indian defence old main line 9 qxc3": [1871],
  "nimzo indian": [
    1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883,
    1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895,
    1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907,
    1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919,
    1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931,
    1932, 1933, 1934, 1935, 1936, 1937, 1938,
  ],
  "nimzo indian kmoch variation": [1873],
  "nimzo indian mikenas attack": [1874],
  "nimzo indian romanishin kasparov steiner system": [1875],
  "nimzo indian three knights variation": [1876],
  "nimzo indian three knights korchnoi variation": [1877],
  "nimzo indian three knights euwe variation": [1878],
  "nimzo indian spielmann variation": [1879],
  "nimzo indian spielmann 4 c5 5 dc nc6": [1880],
  "nimzo indian spielmann karlsbad variation": [1881],
  "nimzo indian spielmann san remo variation": [1882],
  "nimzo indian spielmann staahlberg variation": [1883],
  "nimzo indian saemisch variation": [1884, 1886, 1889, 1891, 1892],
  "nimzo indian saemisch botvinnik variation": [1885],
  "nimzo indian saemisch keres variation": [1887],
  "nimzo indian saemisch romanovsky variation": [1888],
  "nimzo indian saemisch o kelly variation": [1890],
  "nimzo indian saemisch main line": [1893],
  "nimzo indian saemisch capablanca variation": [1894],
  "nimzo indian leningrad variation": [1895],
  "nimzo indian leningrad b5 gambit": [1896],
  "nimzo indian leningrad main line": [1897],
  "nimzo indian classical variation": [1898],
  "nimzo indian classical adorjan gambit": [1899],
  "nimzo indian classical 4 nc6": [1900],
  "nimzo indian classical milner barry zurich variation": [1901],
  "nimzo indian classical noa variation": [1902],
  "nimzo indian classical noa variation 5 cd ed": [1903],
  "nimzo indian classical noa variation 5 a3": [1904],
  "nimzo indian classical botvinnik variation": [1905],
  "nimzo indian classical noa variation main line": [1906],
  "nimzo indian classical noa variation main line 7 qc2": [1907],
  "nimzo indian classical san remo variation": [1908],
  "nimzo indian classical 4 c5": [1909],
  "nimzo indian classical pirc variation": [1910],
  "nimzo indian 4 e3": [1911],
  "nimzo indian 4 e3 taimanov variation": [1912],
  "nimzo indian 4 e3 c5": [1913],
  "nimzo indian e3 huebner variation": [1914],
  "nimzo indian 4 e3 c5 5 ne2 rubinstein": [1915],
  "nimzo indian fischer variation": [1916],
  "nimzo indian fischer variation 5 ne2": [1917],
  "nimzo indian 4 e3 bronstein byrne variation": [1918],
  "nimzo indian 4 e3 o o": [1919],
  "nimzo indian reshevsky variation": [1920],
  "nimzo indian simagin variation": [1921],
  "nimzo indian 4 e3 o o 5 bd3": [1922],
  "nimzo indian 4 e3 o o 5 bd3 d5": [1923],
  "nimzo indian 4 e3 botvinnik system": [1924],
  "nimzo indian 4 e3 e8g8 5 nf3 without d5": [1925],
  "nimzo indian 4 e3 e8g8 5 nf3 d7d5": [1926],
  "nimzo indian 4 e3 ragozin variation": [1927],
  "nimzo indian 4 e3 main line with b6": [1928],
  "nimzo indian 4 e3 main line with c5": [1929],
  "nimzo indian 4 e3 keres variation": [1930],
  "nimzo indian 4 e3 gligoric system with 7 nbd7": [1931],
  "nimzo indian 4 e3 gligoric system with 7 dc": [1932],
  "nimzo indian 4 e3 gligoric system smyslov variation": [1933],
  "nimzo indian 4 e3 gligoric system bronstein variation": [1934],
  "nimzo indian 4 e3 main line with 7 nc6": [1935],
  "nimzo indian 4 e3 main line with 8 dc and 9 cd": [1936],
  "nimzo indian 4 e3 main line with 8 bxc3": [1937],
  "nimzo indian 4 e3 main line": [1938],
  "king s indian defence": [
    1939, 1940, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951,
    1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963,
    1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
    1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
    1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017,
  ],
  "king s indian defence 3 nf3": [1940],
  "queen s pawn game mengarini attack": [1941],
  "king s indian defence anti gruenfeld": [1942],
  "king s indian defence danube gambit": [1943],
  "king s indian defence 3 g3": [1944],
  "king s indian defence 3 g3 counterthrust variation": [1945],
  "king s indian defence 3 nc3": [1946],
  "king s indian defence smyslov system": [1947],
  "king s indian defence fianchetto variation": [1948],
  "king s indian defence fianchetto larsen system": [1949],
  "king s indian defence fianchetto kavalek bronstein variation": [1950],
  "king s indian defence fianchetto with nc6": [1951],
  "king s indian defence fianchetto uhlmann szabo variation": [1952],
  "king s indian defence fianchetto lesser simagin spassky variation": [1953],
  "king s indian defence fianchetto simagin variation": [1954],
  "king s indian defence fianchetto panno variation": [1955],
  "king s indian defence fianchetto yugoslav system": [1956],
  "king s indian defence fianchetto yugoslav 7 o o": [1957],
  "king s indian defence fianchetto yugoslav panno": [1958],
  "king s indian defence fianchetto with nd7": [1959],
  "king s indian defence fianchetto classical variation": [1960],
  "king s indian defence fianchetto classical variation 8 e4": [1961],
  "king s indian defence fianchetto classical main line": [1962],
  "king s indian defence 4 e4": [1963],
  "king s indian defence kramer system": [1964],
  "king s indian defence accelerated averbakh system": [1965],
  "king s indian defence makagonov system 5 h3": [1966],
  "king s indian defence levenfish": [1967],
  "king s indian defence pomar system": [1968],
  "king s indian defence 5 be2": [1969],
  "king s indian defence semi averbakh system": [1970],
  "king s indian defence averbakh system": [1971],
  "king s indian defence averbakh 6 c5": [1972],
  "king s indian defence averbakh main line": [1973],
  "king s indian defence four pawns attack": [1974, 1978],
  "king s indian defence four pawns attack dynamic line": [1975],
  "king s indian defence four pawns attack 6 be2": [1976],
  "king s indian defence six pawns attack": [1977],
  "king s indian defence four pawns attack florentine gambit": [1979],
  "king s indian defence four pawns attack with be2 and nf3": [1980],
  "king s indian defence four pawns attack main line": [1981],
  "king s indian defence saemisch variation": [1982],
  "king s indian defence saemisch 5 o o": [1983],
  "king s indian defence saemisch byrne variation": [1984],
  "king s indian defence saemisch double fianchetto variation": [1985],
  "king s indian defence saemisch 6 nc6": [1986],
  "king s indian defence saemisch ruban variation": [1987],
  "king s indian defence saemisch panno formation": [1988],
  "king s indian defence saemisch panno main line": [1989],
  "king s indian defence saemisch orthodox variation": [1990],
  "king s indian defence saemisch orthodox 7 nge2 c6": [1991],
  "king s indian defence saemisch orthodox 7 d5": [1992],
  "king s indian defence saemisch orthodox bronstein variation": [1993],
  "king s indian defence saemisch orthodox 7 d5 c6": [1994],
  "king s indian defence saemisch orthodox main line": [1995],
  "king s indian defence 5 nf3": [1996],
  "king s indian defence larsen variation": [1997],
  "king s indian defence zinnowitz variation": [1998],
  "king s indian defence 6 be2": [1999],
  "king s indian defence kazakh variation": [2000],
  "king s indian defence classical variation": [2001],
  "king s indian defence andersson variation": [2002],
  "king s indian defence gligoric taimanov system": [2003],
  "king s indian defence petrosian system": [2004],
  "king s indian defence petrosian system stein variation": [2005],
  "king s indian defence petrosian system main line": [2006],
  "king s indian defence petrosian system keres variation": [2007],
  "king s indian defence orthodox variation": [2008],
  "king s indian defence orthodox donner variation": [2009],
  "king s indian defence orthodox 7 nbd7": [2010],
  "king s indian defence orthodox 7 nbd7 8 re1": [2011],
  "king s indian defence orthodox 7 nbd7 main line": [2012],
  "king s indian defence orthodox aronin taimanov variation yugoslav attack mar del plata variation":
    [2013],
  "king s indian defence orthodox aronin taimanov bayonet attack": [2014],
  "king s indian defence orthodox aronin taimanov 9 ne1": [2015],
  "king s indian defence orthodox aronin taimanov main line": [2016],
  "king s indian defence orthodox aronin taimanov benko attack": [2017],
} as Record<string, number[]>;
