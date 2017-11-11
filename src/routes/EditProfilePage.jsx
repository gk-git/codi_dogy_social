import React from 'react';
import Select from "react-select";
import "react-select/dist/react-select.css";
import '../styles/EditProfilePage.css';


const origins_options = [
    {value: "AFGHANISTAN", label: "AFGHANISTAN"},
    {value: "ANATOLIA", label: "ANATOLIA"},
    {value: "ARGENTINA", label: "ARGENTINA"},
    {value: "AUSTRALIA", label: "AUSTRALIA"},
    {value: "AUSTRIA", label: "AUSTRIA"},
    {value: "BELGIUM", label: "BELGIUM"},
    {value: "BELGIUM, FRANCE", label: "BELGIUM, FRANCE"},
    {value: "BOSNIA", label: "BOSNIA"},
    {value: "AND", label: "AND"},
    {value: "HERZEGOVINA", label: "HERZEGOVINA"},
    {value: "BOSNIA", label: "BOSNIA"},
    {value: "AND", label: "AND"},
    {value: "HERZEGOVINA, CROATIA", label: "HERZEGOVINA, CROATIA"},
    {value: "BRAZIL", label: "BRAZIL"},
    {value: "CANADA", label: "CANADA"},
    {value: "CENTRAL", label: "CENTRAL"},
    {value: "AFRICA", label: "AFRICA"},
    {value: "CENTRAL", label: "CENTRAL"},
    {value: "MEDITERRANEAN", label: "MEDITERRANEAN"},
    {value: "BASIN", label: "BASIN"},
    {value: "CHINA", label: "CHINA"},
    {value: "CROATIA", label: "CROATIA"},
    {value: "CZECH", label: "CZECH"},
    {value: "REPUBLIC", label: "REPUBLIC"},
    {value: "DENMARK", label: "DENMARK"},
    {value: "DENMARK, SWEDEN", label: "DENMARK, SWEDEN"},
    {value: "ENGLAND", label: "ENGLAND"},
    {value: "FINLAND", label: "FINLAND"},
    {value: "FRANCE", label: "FRANCE"},
    {value: "GERMANY", label: "GERMANY"},
    {value: "GERMANY, SWITZERLAND", label: "GERMANY, SWITZERLAND"},
    {value: "GREAT", label: "GREAT"},
    {value: "BRITAIN", label: "BRITAIN"},
    {value: "GREECE", label: "GREECE"},
    {value: "GREENLAND", label: "GREENLAND"},
    {value: "HUNGARY", label: "HUNGARY"},
    {value: "ICELAND", label: "ICELAND"},
    {value: "IRELAND", label: "IRELAND"},
    {value: "ISRAEL", label: "ISRAEL"},
    {value: "ITALY", label: "ITALY"},
    {value: "JAPAN", label: "JAPAN"},
    {value: "MACEDONIA, SERBIA", label: "MACEDONIA, SERBIA"},
    {value: "MADAGASCAR", label: "MADAGASCAR"},
    {value: "MALI", label: "MALI"},
    {value: "MALTA", label: "MALTA"},
    {value: "MEXICO", label: "MEXICO"},
    {value: "MIDDLE", label: "MIDDLE"},
    {value: "EAST", label: "EAST"},
    {value: "MONTENEGRO", label: "MONTENEGRO"},
    {value: "MOROCCO", label: "MOROCCO"},
    {value: "NORTHERN", label: "NORTHERN"},
    {value: "RUSSIA, SIBERIA", label: "RUSSIA, SIBERIA"},
    {value: "NORWAY", label: "NORWAY"},
    {value: "PERU", label: "PERU"},
    {value: "POLAND", label: "POLAND"},
    {value: "PORTUGAL", label: "PORTUGAL"},
    {value: "REPUBLIC", label: "REPUBLIC"},
    {value: "OF", label: "OF"},
    {value: "KOREA", label: "KOREA"},
    {value: "ROMANIA", label: "ROMANIA"},
    {value: "RUSSIA", label: "RUSSIA"},
    {value: "SERBIA", label: "SERBIA"},
    {value: "SLOVAKIA", label: "SLOVAKIA"},
    {value: "SLOVENIA", label: "SLOVENIA"},
    {value: "SOUTH", label: "SOUTH"},
    {value: "AFRICA", label: "AFRICA"},
    {value: "SOUTH - EASTERN", label: "SOUTH - EASTERN"},
    {value: "EUROPE", label: "EUROPE"},
    {value: "SPAIN", label: "SPAIN"},
    {value: "SWEDEN", label: "SWEDEN"},
    {value: "SWITZERLAND", label: "SWITZERLAND"},
    {value: "TAIWAN", label: "TAIWAN"},
    {value: "THAILAND", label: "THAILAND"},
    {value: "THE", label: "THE"},
    {value: "NETHERLANDS", label: "NETHERLANDS"},
    {value: "Tibet(China)", label: "Tibet(China)"},
    {value: "UNITED", label: "UNITED"},
    {value: "STATES", label: "STATES"},
    {value: "OF", label: "OF"},
    {value: "AMERICA", label: "AMERICA"},
    {value: "URUGUAY", label: "URUGUAY"},
    {value: "WESTERN", label: "WESTERN"},
    {value: "MEDITERRANEAN", label: "MEDITERRANEAN"},
    {value: "BASIN", label: ["BASIN", "BASIN"]}
];
const gendre_options = [
    {value: "Male", label: 'Male'},
    {value: "Female", label: 'Female'},

];
const breed_options = [
    {value: "ENGLISH POINTER", label: "ENGLISH POINTER"},
    {
        value: "ENGLISH SETTER", label: "ENGLISH SETTER"
    }, {value: "KERRY BLUE TERRIER", label: "KERRY BLUE TERRIER"}, {
        value: "CAIRN TERRIER", label: "CAIRN TERRIER"
    }, {value: "ENGLISH COCKER SPANIEL", label: "ENGLISH COCKER SPANIEL"}, {
        value: "GORDON SETTER", label: "GORDON SETTER"
    }, {value: "AIREDALE TERRIER", label: "AIREDALE TERRIER"}, {
        value: "AUSTRALIAN TERRIER", label: "AUSTRALIAN TERRIER"
    }, {value: "BEDLINGTON TERRIER", label: "BEDLINGTON TERRIER"}, {
        value: "BORDER TERRIER", label: "BORDER TERRIER"
    }, {value: "BULL TERRIER", label: "BULL TERRIER"}, {
        value: "FOX TERRIER (SMOOTH)", label: "FOX TERRIER (SMOOTH)"
    }, {
        value: "ENGLISH TOY TERRIER (BLACK &TAN)", label: "ENGLISH TOY TERRIER (BLACK &TAN)"
    }, {value: "SWEDISH VALLHUND", label: "SWEDISH VALLHUND"}, {
        value: "BELGIAN SHEPHERD DOG", label: "BELGIAN SHEPHERD DOG"
    }, {value: "OLD ENGLISH SHEEPDOG", label: "OLD ENGLISH SHEEPDOG"}, {
        value: "GRIFFON NIVERNAIS", label: "GRIFFON NIVERNAIS"
    }, {value: "BRIQUET GRIFFON VENDEEN", label: "BRIQUET GRIFFON VENDEEN"}, {
        value: "ARIEGEOIS", label: "ARIEGEOIS"
    }, {value: "GASCON SAINTONGEOIS", label: "GASCON SAINTONGEOIS"}, {
        value: "GREAT GASCONY BLUE", label: "GREAT GASCONY BLUE"
    }, {value: "POITEVIN", label: "POITEVIN"}, {value: "BILLY", label: "BILLY"}, {
        value: "ARTOIS HOUND", label: "ARTOIS HOUND"
    }, {value: "PORCELAINE", label: "PORCELAINE"}, {
        value: "SMALL BLUE GASCONY BLUE", label: "SMALL BLUE GASCONY BLUE"
    }, {value: "BLUE GASCONY GRIFFON", label: "BLUE GASCONY GRIFFON"}, {
        value: "GRAND BASSET GRIFFON VENDEEN", label: "GRAND BASSET GRIFFON VENDEEN"
    }, {value: "NORMAN ARTESIEN BASSET", label: "NORMAN ARTESIEN BASSET"}, {
        value: "BLUE GASCONY BASSET", label: "BLUE GASCONY BASSET"
    }, {value: "BASSET FAUVE DE BRETAGNE", label: "BASSET FAUVE DE BRETAGNE"}, {
        value: "PORTUGUESE WATER DOG", label: "PORTUGUESE WATER DOG"
    }, {value: "WELSH CORGI CARDIGAN", label: "WELSH CORGI CARDIGAN"}, {
        value: "WELSH CORGI PEMBROKE", label: "WELSH CORGI PEMBROKE"
    }, {
        value: "IRISH SOFT COATED WHEATEN TERRIER", label: "IRISH SOFT COATED WHEATEN TERRIER"
    }, {
        value: "YUGOSLAVIAN SHEPHERD DOG - SHARPLANINA", label: "YUGOSLAVIAN SHEPHERD DOG - SHARPLANINA"
    }, {value: "JÌãMTHUND", label: "JÌãMTHUND"}, {value: "BASENJI", label: "BASENJI"}, {
        value: "BERGER DE BEAUCE", label: "BERGER DE BEAUCE"
    }, {value: "BERNESE MOUNTAIN DOG", label: "BERNESE MOUNTAIN DOG"}, {
        value: "APPENZELL CATTLE DOG", label: "APPENZELL CATTLE DOG"
    }, {value: "ENTLEBUCH CATTLE DOG", label: "ENTLEBUCH CATTLE DOG"}, {
        value: "KARELIAN BEAR DOG", label: "KARELIAN BEAR DOG"
    }, {value: "FINNISH SPITZ", label: "FINNISH SPITZ"}, {
        value: "NEWFOUNDLAND", label: "NEWFOUNDLAND"
    }, {value: "FINNISH HOUND", label: "FINNISH HOUND"}, {
        value: "POLISH HOUND", label: "POLISH HOUND"
    }, {value: "KOMONDOR", label: "KOMONDOR"}, {value: "KUVASZ", label: "KUVASZ"}, {
        value: "PULI", label: "PULI"
    }, {value: "PUMI", label: "PUMI"}, {
        value: "HUNGARIAN SHORT-HAIRED POINTER (VIZSLA)", label: "HUNGARIAN SHORT-HAIRED POINTER (VIZSLA)"
    }, {value: "GREAT SWISS MOUNTAIN DOG", label: "GREAT SWISS MOUNTAIN DOG"}, {
        value: "SWISS HOUND", label: "SWISS HOUND"
    }, {value: "SMALL SWISS HOUND", label: "SMALL SWISS HOUND"}, {
        value: "ST. BERNARD", label: "ST. BERNARD"
    }, {
        value: "COARSE-HAIRED STYRIAN HOUND", label: "COARSE-HAIRED STYRIAN HOUND"
    }, {value: "AUSTRIAN BLACK AND TAN HOUND", label: "AUSTRIAN BLACK AND TAN HOUND"}, {
        value: "AUSTRIAN  PINSCHER", label: "AUSTRIAN  PINSCHER"
    }, {value: "MALTESE", label: "MALTESE"}, {
        value: "FAWN BRITTANY GRIFFON", label: "FAWN BRITTANY GRIFFON"
    }, {value: "PETIT BASSET GRIFFON VENDEEN", label: "PETIT BASSET GRIFFON VENDEEN"}, {
        value: "TYROLEAN HOUND", label: "TYROLEAN HOUND"
    }, {value: "LAKELAND TERRIER", label: "LAKELAND TERRIER"}, {
        value: "MANCHESTER TERRIER", label: "MANCHESTER TERRIER"
    }, {value: "NORWICH TERRIER", label: "NORWICH TERRIER"}, {
        value: "SCOTTISH TERRIER", label: "SCOTTISH TERRIER"
    }, {value: "SEALYHAM TERRIER", label: "SEALYHAM TERRIER"}, {
        value: "SKYE TERRIER", label: "SKYE TERRIER"
    }, {value: "STAFFORDSHIRE BULL TERRIER", label: "STAFFORDSHIRE BULL TERRIER"}, {
        value: "CONTINENTAL TOY SPANIEL", label: "CONTINENTAL TOY SPANIEL"
    }, {value: "WELSH TERRIER", label: "WELSH TERRIER"}, {
        value: "GRIFFON BRUXELLOIS", label: "GRIFFON BRUXELLOIS"
    }, {value: "GRIFFON BELGE", label: "GRIFFON BELGE"}, {
        value: "PETIT BRABANÌàON", label: "PETIT BRABANÌàON"
    }, {value: "SCHIPPERKE", label: "SCHIPPERKE"}, {
        value: "BLOODHOUND", label: "BLOODHOUND"
    }, {value: "WEST HIGHLAND WHITE TERRIER", label: "WEST HIGHLAND WHITE TERRIER"}, {
        value: "YORKSHIRE TERRIER", label: "YORKSHIRE TERRIER"
    }, {value: "CATALAN SHEEPDOG", label: "CATALAN SHEEPDOG"}, {
        value: "SHETLAND SHEEPDOG", label: "SHETLAND SHEEPDOG"
    }, {value: "IBIZAN PODENCO", label: "IBIZAN PODENCO"}, {
        value: "BURGOS POINTING DOG", label: "BURGOS POINTING DOG"
    }, {value: "SPANISH MASTIFF", label: "SPANISH MASTIFF"}, {
        value: "PYRENEAN MASTIFF", label: "PYRENEAN MASTIFF"
    }, {
        value: "PORTUGUESE SHEEPDOG", label: "PORTUGUESE SHEEPDOG"
    }, {
        value: "PORTUGUESE WARREN HOUND-PORTUGUESE PODENGO", label: "PORTUGUESE WARREN HOUND-PORTUGUESE PODENGO"
    }, {value: "BRITTANY SPANIEL", label: "BRITTANY SPANIEL"}, {
        value: "RAFEIRO OF ALENTEJO", label: "RAFEIRO OF ALENTEJO"
    }, {value: "GERMAN SPITZ", label: "GERMAN SPITZ"}, {
        value: "GERMAN WIRE- HAIRED POINTING DOG", "label": "GERMAN WIRE- HAIRED POINTING DOG"
    }, {value: "WEIMARANER", "label": "WEIMARANER"}, {
        value: "WESTPHALIAN DACHSBRACKE", "label": "WESTPHALIAN DACHSBRACKE"
    }, {value: "FRENCH BULLDOG", "label": "FRENCH BULLDOG"}, {
        value: "KLEINER MÌÏNSTERLÌãNDER", "label": "KLEINER MÌÏNSTERLÌãNDER"
    }, {value: "GERMAN HUNTING TERRIER", "label": "GERMAN HUNTING TERRIER"}, {
        value: "GERMAN SPANIEL", "label": "GERMAN SPANIEL"
    }, {value: "FRENCH WATER DOG", "label": "FRENCH WATER DOG"}, {
        value: "BLUE PICARDY SPANIEL", "label": "BLUE PICARDY SPANIEL"
    }, {
        value: "WIRE-HAIRED POINTING GRIFFON KORTHALS", "label": "WIRE-HAIRED POINTING GRIFFON KORTHALS"
    }, {value: "PICARDY SPANIEL", "label": "PICARDY SPANIEL"}, {
        value: "CLUMBER SPANIEL", "label": "CLUMBER SPANIEL"
    }, {value: "CURLY COATED RETRIEVER", "label": "CURLY COATED RETRIEVER"}, {
        value: "GOLDEN RETRIEVER", "label": "GOLDEN RETRIEVER"
    }, {value: "BRIARD", "label": "BRIARD"}, {
        value: "PONT-AUDEMER SPANIEL",
        "label": "PONT-AUDEMER SPANIEL"
    }, {value: "SAINT GERMAIN POINTER", "label": "SAINT GERMAIN POINTER"}, {
        value: "DOGUE DE BORDEAUX",
        "label": "DOGUE DE BORDEAUX"
    }, {value: "DEUTSCH LANGHAAR", "label": "DEUTSCH LANGHAAR"}, {
        value: "LARGE MUNSTERLANDER",
        "label": "LARGE MUNSTERLANDER"
    }, {
        value: "GERMAN SHORT- HAIRED POINTING DOG",
        "label": "GERMAN SHORT- HAIRED POINTING DOG"
    }, {value: "IRISH RED SETTER", "label": "IRISH RED SETTER"}, {
        value: "FLAT COATED RETRIEVER",
        "label": "FLAT COATED RETRIEVER"
    }, {value: "LABRADOR RETRIEVER", "label": "LABRADOR RETRIEVER"}, {
        value: "FIELD SPANIEL",
        "label": "FIELD SPANIEL"
    }, {value: "IRISH WATER SPANIEL", "label": "IRISH WATER SPANIEL"}, {
        value: "ENGLISH SPRINGER SPANIEL",
        "label": "ENGLISH SPRINGER SPANIEL"
    }, {value: "WELSH SPRINGER SPANIEL", "label": "WELSH SPRINGER SPANIEL"}, {
        value: "SUSSEX SPANIEL",
        "label": "SUSSEX SPANIEL"
    }, {value: "KING CHARLES SPANIEL", "label": "KING CHARLES SPANIEL"}, {
        value: "SMÌÉLANDSSTÌÐVARE",
        "label": "SMÌÉLANDSSTÌÐVARE"
    }, {value: "DREVER", "label": "DREVER"}, {
        value: "SCHILLERSTÌÐVARE",
        "label": "SCHILLERSTÌÐVARE"
    }, {value: "HAMILTONSTÌÐVARE", "label": "HAMILTONSTÌÐVARE"}, {
        value: "FRENCH POINTING DOG - GASCOGNE TYPE",
        "label": "FRENCH POINTING DOG - GASCOGNE TYPE"
    }, {
        value: "FRENCH POINTING DOG - PYRENEAN TYPE",
        "label": "FRENCH POINTING DOG - PYRENEAN TYPE"
    }, {value: "SWEDISH LAPPHUND", "label": "SWEDISH LAPPHUND"}, {
        value: "CAVALIER KING CHARLES SPANIEL",
        "label": "CAVALIER KING CHARLES SPANIEL"
    }, {value: "PYRENEAN MOUNTAIN DOG", "label": "PYRENEAN MOUNTAIN DOG"}, {
        value: "PYRENEAN SHEEPDOG - SMOOTH FACED",
        "label": "PYRENEAN SHEEPDOG - SMOOTH FACED"
    }, {value: "IRISH TERRIER", "label": "IRISH TERRIER"}, {
        value: "BOSTON TERRIER",
        "label": "BOSTON TERRIER"
    }, {value: "LONG-HAIRED PYRENEAN SHEEPDOG", "label": "LONG-HAIRED PYRENEAN SHEEPDOG"}, {
        value: "SLOVAKIAN CHUVACH",
        "label": "SLOVAKIAN CHUVACH"
    }, {value: "DOBERMANN", "label": "DOBERMANN"}, {value: "BOXER", "label": "BOXER"}, {
        value: "LEONBERGER",
        "label": "LEONBERGER"
    }, {value: "RHODESIAN RIDGEBACK", "label": "RHODESIAN RIDGEBACK"}, {
        value: "ROTTWEILER",
        "label": "ROTTWEILER"
    }, {value: "DACHSHUND", "label": "DACHSHUND"}, {value: "BULLDOG", "label": "BULLDOG"}, {
        value: "SERBIAN HOUND",
        "label": "SERBIAN HOUND"
    }, {
        value: "ISTRIAN SHORT-HAIRED HOUND",
        "label": "ISTRIAN SHORT-HAIRED HOUND"
    }, {value: "ISTRIAN WIRE-HAIRED HOUND", "label": "ISTRIAN WIRE-HAIRED HOUND"}, {
        value: "DALMATIAN",
        "label": "DALMATIAN"
    }, {value: "POSAVATZ HOUND", "label": "POSAVATZ HOUND"}, {
        value: "BOSNIAN BROKEN-HAIRED HOUND - CALLED BARAK",
        "label": "BOSNIAN BROKEN-HAIRED HOUND - CALLED BARAK"
    }, {value: "COLLIE ROUGH", "label": "COLLIE ROUGH"}, {
        value: "BULLMASTIFF",
        "label": "BULLMASTIFF"
    }, {value: "GREYHOUND", "label": "GREYHOUND"}, {
        value: "ENGLISH FOXHOUND",
        "label": "ENGLISH FOXHOUND"
    }, {value: "IRISH WOLFHOUND", "label": "IRISH WOLFHOUND"}, {
        value: "BEAGLE",
        "label": "BEAGLE"
    }, {value: "WHIPPET", "label": "WHIPPET"}, {value: "BASSET HOUND", "label": "BASSET HOUND"}, {
        value: "DEERHOUND",
        "label": "DEERHOUND"
    }, {value: "ITALIAN SPINONE", "label": "ITALIAN SPINONE"}, {
        value: "GERMAN SHEPHERD DOG",
        "label": "GERMAN SHEPHERD DOG"
    }, {value: "AMERICAN COCKER SPANIEL", "label": "AMERICAN COCKER SPANIEL"}, {
        value: "DANDIE DINMONT TERRIER",
        "label": "DANDIE DINMONT TERRIER"
    }, {value: "FOX TERRIER (WIRE)", "label": "FOX TERRIER (WIRE)"}, {
        value: "CASTRO LABOREIRO DOG",
        "label": "CASTRO LABOREIRO DOG"
    }, {value: "BOUVIER DES ARDENNES", "label": "BOUVIER DES ARDENNES"}, {
        value: "POODLE",
        "label": "POODLE"
    }, {value: "ESTRELA MOUNTAIN DOG", "label": "ESTRELA MOUNTAIN DOG"}, {
        value: "FRENCH SPANIEL",
        "label": "FRENCH SPANIEL"
    }, {value: "PICARDY SHEEPDOG", "label": "PICARDY SHEEPDOG"}, {
        value: "ARIEGE POINTING DOG",
        "label": "ARIEGE POINTING DOG"
    }, {value: "BOURBONNAIS POINTING DOG", "label": "BOURBONNAIS POINTING DOG"}, {
        value: "AUVERGNE POINTER",
        "label": "AUVERGNE POINTER"
    }, {value: "GIANT SCHNAUZER", "label": "GIANT SCHNAUZER"}, {
        value: "SCHNAUZER",
        "label": "SCHNAUZER"
    }, {value: "MINIATURE SCHNAUZER", "label": "MINIATURE SCHNAUZER"}, {
        value: "GERMAN PINSCHER",
        "label": "GERMAN PINSCHER"
    }, {value: "MINIATURE PINSCHER", "label": "MINIATURE PINSCHER"}, {
        value: "AFFENPINSCHER",
        "label": "AFFENPINSCHER"
    }, {value: "PORTUGUESE POINTING DOG", "label": "PORTUGUESE POINTING DOG"}, {
        value: "SLOUGHI",
        "label": "SLOUGHI"
    }, {value: "FINNISH LAPPHUND", "label": "FINNISH LAPPHUND"}, {
        value: "HOVAWART",
        "label": "HOVAWART"
    }, {value: "BOUVIER DES FLANDRES", "label": "BOUVIER DES FLANDRES"}, {
        value: "KROMFOHRLÌãNDER",
        "label": "KROMFOHRLÌãNDER"
    }, {
        value: "BORZOI - RUSSIAN HUNTING SIGHTHOUND",
        "label": "BORZOI - RUSSIAN HUNTING SIGHTHOUND"
    }, {value: "BERGAMASCO SHEPHERD DOG", "label": "BERGAMASCO SHEPHERD DOG"}, {
        value: "ITALIAN VOLPINO",
        "label": "ITALIAN VOLPINO"
    }, {value: "BOLOGNESE", "label": "BOLOGNESE"}, {
        value: "NEAPOLITAN MASTIFF",
        "label": "NEAPOLITAN MASTIFF"
    }, {value: "ITALIAN ROUGH-HAIRED SEGUGIO", "label": "ITALIAN ROUGH-HAIRED SEGUGIO"}, {
        value: "CIRNECO DELL'ETNA",
        "label": "CIRNECO DELL'ETNA"
    }, {value: "ITALIAN GREYHOUND", "label": "ITALIAN GREYHOUND"}, {
        value: "MAREMMA AND THE ABRUZZES SHEEPDOG",
        "label": "MAREMMA AND THE ABRUZZES SHEEPDOG"
    }, {value: "ITALIAN POINTING DOG", "label": "ITALIAN POINTING DOG"}, {
        value: "NORWEGIAN HOUND",
        "label": "NORWEGIAN HOUND"
    }, {value: "SPANISH HOUND", "label": "SPANISH HOUND"}, {
        value: "CHOW CHOW",
        "label": "CHOW CHOW"
    }, {value: "JAPANESE CHIN", "label": "JAPANESE CHIN"}, {
        value: "PEKINGESE",
        "label": "PEKINGESE"
    }, {value: "SHIH TZU", "label": "SHIH TZU"}, {
        value: "TIBETAN TERRIER",
        "label": "TIBETAN TERRIER"
    }, {value: "SAMOYED", "label": "SAMOYED"}, {
        value: "HANOVERIAN SCENTHOUND",
        "label": "HANOVERIAN SCENTHOUND"
    }, {value: "HELLENIC HOUND", "label": "HELLENIC HOUND"}, {
        value: "BICHON FRISE",
        "label": "BICHON FRISE"
    }, {value: "PUDELPOINTER", "label": "PUDELPOINTER"}, {
        value: "BAVARIAN MOUNTAIN SCENT HOUND",
        "label": "BAVARIAN MOUNTAIN SCENT HOUND"
    }, {value: "CHIHUAHUA", "label": "CHIHUAHUA"}, {
        value: "FRENCH TRICOLOUR HOUND",
        "label": "FRENCH TRICOLOUR HOUND"
    }, {value: "FRENCH WHITE & BLACK HOUND", "label": "FRENCH WHITE & BLACK HOUND"}, {
        value: "FRISIAN WATER DOG",
        "label": "FRISIAN WATER DOG"
    }, {value: "STABIJHOUN", "label": "STABIJHOUN"}, {
        value: "DUTCH SHEPHERD DOG",
        "label": "DUTCH SHEPHERD DOG"
    }, {value: "DRENTSCHE PARTRIDGE DOG", "label": "DRENTSCHE PARTRIDGE DOG"}, {
        value: "FILA BRASILEIRO",
        "label": "FILA BRASILEIRO"
    }, {
        value: "LANDSEER (EUROPEAN CONTINENTAL TYPE)",
        "label": "LANDSEER (EUROPEAN CONTINENTAL TYPE)"
    }, {value: "LHASA APSO", "label": "LHASA APSO"}, {
        value: "AFGHAN HOUND",
        "label": "AFGHAN HOUND"
    }, {value: "SERBIAN TRICOLOUR HOUND", "label": "SERBIAN TRICOLOUR HOUND"}, {
        value: "TIBETAN MASTIFF",
        "label": "TIBETAN MASTIFF"
    }, {value: "TIBETAN SPANIEL", "label": "TIBETAN SPANIEL"}, {
        value: "DEUTSCH STICHELHAAR",
        "label": "DEUTSCH STICHELHAAR"
    }, {value: "LITTLE LION DOG", "label": "LITTLE LION DOG"}, {
        value: "XOLOITZCUINTLE",
        "label": "XOLOITZCUINTLE"
    }, {value: "GREAT DANE", "label": "GREAT DANE"}, {
        value: "AUSTRALIAN SILKY TERRIER",
        "label": "AUSTRALIAN SILKY TERRIER"
    }, {value: "NORWEGIAN BUHUND", "label": "NORWEGIAN BUHUND"}, {
        value: "MUDI",
        "label": "MUDI"
    }, {
        value: "HUNGARIAN WIRE-HAIRED POINTER",
        "label": "HUNGARIAN WIRE-HAIRED POINTER"
    }, {
        value: "HUNGARIAN GREYHOUND",
        "label": "HUNGARIAN GREYHOUND"
    }, {
        value: "HUNGARIAN HOUND - TRANSYLVANIAN SCENT HOUND",
        "label": "HUNGARIAN HOUND - TRANSYLVANIAN SCENT HOUND"
    }, {value: "NORWEGIAN ELKHOUND GREY", "label": "NORWEGIAN ELKHOUND GREY"}, {
        value: "ALASKAN MALAMUTE",
        "label": "ALASKAN MALAMUTE"
    }, {value: "SLOVAKIAN HOUND", "label": "SLOVAKIAN HOUND"}, {
        value: "BOHEMIAN WIRE-HAIRED POINTING GRIFFON",
        "label": "BOHEMIAN WIRE-HAIRED POINTING GRIFFON"
    }, {value: "CESKY TERRIER", "label": "CESKY TERRIER"}, {
        value: "ATLAS MOUNTAIN DOG (AIDI)",
        "label": "ATLAS MOUNTAIN DOG (AIDI)"
    }, {value: "PHARAOH HOUND", "label": "PHARAOH HOUND"}, {
        value: "MAJORCA MASTIFF",
        "label": "MAJORCA MASTIFF"
    }, {value: "HAVANESE", "label": "HAVANESE"}, {
        value: "POLISH LOWLAND SHEEPDOG",
        "label": "POLISH LOWLAND SHEEPDOG"
    }, {value: "TATRA SHEPHERD DOG", "label": "TATRA SHEPHERD DOG"}, {
        value: "PUG",
        "label": "PUG"
    },
    {value: "ALPINE DACHSBRACKE", "label": "ALPINE DACHSBRACKE"}, {value: "AKITA", "label": "AKITA"},
    {value: "SHIBA", "label": "SHIBA"}, {value: "JAPANESE TERRIER", "label": "JAPANESE TERRIER"}, {
        value: "TOSA",
        "label": "TOSA"
    },
    {value: "HOKKAIDO", "label": "HOKKAIDO"}, {
        value: "JAPANESE SPITZ", "label": "JAPANESE SPITZ"
    }, {value: "CHESAPEAKE BAY RETRIEVER", "label": "CHESAPEAKE BAY RETRIEVER"}, {
        value: "MASTIFF", "label": "MASTIFF"
    }, {value: "NORWEGIAN LUNDEHUND", "label": "NORWEGIAN LUNDEHUND"}, {
        value: "HYGEN HOUND", "label": "HYGEN HOUND"
    }, {value: "HALDEN HOUND", "label": "HALDEN HOUND"}, {
        value: "NORWEGIAN ELKHOUND BLACK", "label": "NORWEGIAN ELKHOUND BLACK"
    }, {value: "SALUKI", "label": "SALUKI"}, {
        value: "SIBERIAN HUSKY",
        "label": "SIBERIAN HUSKY"
    }, {value: "BEARDED COLLIE", "label": "BEARDED COLLIE"}, {
        value: "NORFOLK TERRIER",
        "label": "NORFOLK TERRIER"
    }, {value: "CANAAN DOG", "label": "CANAAN DOG"}, {
        value: "GREENLAND DOG",
        "label": "GREENLAND DOG"
    }, {value: "NORRBOTTENSPITZ", "label": "NORRBOTTENSPITZ"}, {
        value: "CROATIAN SHEPHERD DOG",
        "label": "CROATIAN SHEPHERD DOG"
    }, {value: "KARST SHEPHERD DOG", "label": "KARST SHEPHERD DOG"}, {
        value: "MONTENEGRIN MOUNTAIN HOUND",
        "label": "MONTENEGRIN MOUNTAIN HOUND"
    }, {value: "OLD DANISH POINTING DOG", "label": "OLD DANISH POINTING DOG"}, {
        value: "GRAND GRIFFON VENDEEN",
        "label": "GRAND GRIFFON VENDEEN"
    }, {value: "COTON DE TULEAR", "label": "COTON DE TULEAR"}, {
        value: "LAPPONIAN HERDER",
        "label": "LAPPONIAN HERDER"
    }, {value: "SPANISH GREYHOUND", "label": "SPANISH GREYHOUND"}, {
        value: "AMERICAN STAFFORDSHIRE TERRIER",
        "label": "AMERICAN STAFFORDSHIRE TERRIER"
    }, {value: "AUSTRALIAN CATTLE DOG", "label": "AUSTRALIAN CATTLE DOG"}, {
        value: "CHINESE CRESTED DOG",
        "label": "CHINESE CRESTED DOG"
    }, {value: "ICELANDIC SHEEPDOG", "label": "ICELANDIC SHEEPDOG"}, {
        value: "BEAGLE HARRIER",
        "label": "BEAGLE HARRIER"
    }, {value: "EURASIAN", "label": "EURASIAN"}, {
        value: "DOGO ARGENTINO",
        "label": "DOGO ARGENTINO"
    }, {value: "AUSTRALIAN KELPIE", "label": "AUSTRALIAN KELPIE"}, {
        value: "OTTERHOUND",
        "label": "OTTERHOUND"
    }, {value: "HARRIER", "label": "HARRIER"}, {
        value: "COLLIE SMOOTH",
        "label": "COLLIE SMOOTH"
    }, {value: "BORDER COLLIE", "label": "BORDER COLLIE"}, {
        value: "ROMAGNA WATER DOG",
        "label": "ROMAGNA WATER DOG"
    }, {value: "GERMAN HOUND", "label": "GERMAN HOUND"}, {
        value: "BLACK AND TAN COONHOUND",
        "label": "BLACK AND TAN COONHOUND"
    }, {value: "AMERICAN WATER SPANIEL", "label": "AMERICAN WATER SPANIEL"}, {
        value: "IRISH GLEN OF IMAAL TERRIER",
        "label": "IRISH GLEN OF IMAAL TERRIER"
    }, {value: "AMERICAN FOXHOUND", "label": "AMERICAN FOXHOUND"}, {
        value: "RUSSIAN-EUROPEAN LAIKA",
        "label": "RUSSIAN-EUROPEAN LAIKA"
    }, {value: "EAST SIBERIAN LAIKA", "label": "EAST SIBERIAN LAIKA"}, {
        value: "WEST SIBERIAN LAIKA",
        "label": "WEST SIBERIAN LAIKA"
    }, {value: "AZAWAKH", "label": "AZAWAKH"}, {
        value: "DUTCH SMOUSHOND",
        "label": "DUTCH SMOUSHOND"
    }, {value: "SHAR PEI", "label": "SHAR PEI"}, {
        value: "PERUVIAN HAIRLESS DOG",
        "label": "PERUVIAN HAIRLESS DOG"
    }, {value: "SAARLOOS WOLFHOND", "label": "SAARLOOS WOLFHOND"}, {
        value: "NOVA SCOTIA DUCK TOLLING RETRIEVER",
        "label": "NOVA SCOTIA DUCK TOLLING RETRIEVER"
    }, {value: "DUTCH SCHAPENDOES", "label": "DUTCH SCHAPENDOES"}, {
        value: "NEDERLANDSE KOOIKERHONDJE",
        "label": "NEDERLANDSE KOOIKERHONDJE"
    }, {value: "BROHOLMER", "label": "BROHOLMER"}, {
        value: "FRENCH WHITE AND ORANGE HOUND",
        "label": "FRENCH WHITE AND ORANGE HOUND"
    }, {value: "KAI", "label": "KAI"}, {value: "KISHU", "label": "KISHU"}, {
        value: "SHIKOKU",
        "label": "SHIKOKU"
    }, {value: "WIREHAIRED SLOVAKIAN POINTER", "label": "WIREHAIRED SLOVAKIAN POINTER"}, {
        value: "MAJORCA SHEPHERD DOG",
        "label": "MAJORCA SHEPHERD DOG"
    }, {
        value: "GREAT ANGLO-FRENCH TRICOLOUR HOUND",
        "label": "GREAT ANGLO-FRENCH TRICOLOUR HOUND"
    }, {
        value: "GREAT ANGLO-FRENCH WHITE AND BLACK HOUND",
        "label": "GREAT ANGLO-FRENCH WHITE AND BLACK HOUND"
    }, {
        value: "GREAT ANGLO-FRENCH WHITE & ORANGE HOUND",
        "label": "GREAT ANGLO-FRENCH WHITE & ORANGE HOUND"
    }, {
        value: "MEDIUM-SIZED ANGLO-FRENCH HOUND",
        "label": "MEDIUM-SIZED ANGLO-FRENCH HOUND"
    }, {value: "SOUTH RUSSIAN SHEPHERD DOG", "label": "SOUTH RUSSIAN SHEPHERD DOG"}, {
        value: "RUSSIAN BLACK TERRIER", "label": "RUSSIAN BLACK TERRIER"
    }, {value: "CAUCASIAN SHEPHERD DOG", "label": "CAUCASIAN SHEPHERD DOG"}, {
        value: "CANARIAN WARREN HOUND", "label": "CANARIAN WARREN HOUND"
    }, {value: "IRISH RED AND WHITE SETTER", "label": "IRISH RED AND WHITE SETTER"}, {
        value: "ANATOLIAN SHEPHERD DOG", "label": "ANATOLIAN SHEPHERD DOG"
    }, {value: "CZECHOSLOVAKIAN WOLFDOG", "label": "CZECHOSLOVAKIAN WOLFDOG"}, {
        value: "POLISH GREYHOUND", "label": "POLISH GREYHOUND"
    }, {value: "KOREA JINDO DOG", "label": "KOREA JINDO DOG"}, {
        value: "CENTRAL ASIA SHEPHERD DOG", "label": "CENTRAL ASIA SHEPHERD DOG"
    }, {value: "SPANISH WATER DOG", "label": "SPANISH WATER DOG"}, {
        value: "ITALIAN SHORT-HAIRED SEGUGIO", "label": "ITALIAN SHORT-HAIRED SEGUGIO"
    }, {value: "THAI RIDGEBACK DOG", "label": "THAI RIDGEBACK DOG"}, {
        value: "PARSON RUSSELL TERRIER", "label": "PARSON RUSSELL TERRIER"
    }, {value: "SAINT MIGUEL CATTLE DOG", "label": "SAINT MIGUEL CATTLE DOG"}, {
        value: "BRAZILIAN TERRIER", "label": "BRAZILIAN TERRIER"
    }, {value: "AUSTRALIAN SHEPHERD", "label": "AUSTRALIAN SHEPHERD"}, {
        value: "ITALIAN CORSO DOG", "label": "ITALIAN CORSO DOG"
    }, {value: "AMERICAN AKITA", "label": "AMERICAN AKITA"}, {
        value: "JACK RUSSELL TERRIER", "label": "JACK RUSSELL TERRIER"
    }, {value: "DOGO CANARIO", "label": "DOGO CANARIO"}, {
        value: "WHITE SWISS SHEPHERD DOG", "label": "WHITE SWISS SHEPHERD DOG"
    }, {value: "TAIWAN DOG", "label": "TAIWAN DOG"}, {
        value: "ROMANIAN MIORITIC SHEPHERD DOG", "label": "ROMANIAN MIORITIC SHEPHERD DOG"
    }, {
        value: "ROMANIAN CARPATHIAN SHEPHERD DOG", "label": "ROMANIAN CARPATHIAN SHEPHERD DOG"
    }, {
        value: "AUSTRALIAN STUMPY TAIL CATTLE DOG", "label": "AUSTRALIAN STUMPY TAIL CATTLE DOG"
    }, {value: "RUSSIAN TOY", "label": "RUSSIAN TOY"}, {
        value: "CIMARRÌÒN URUGUAYO", "label": "CIMARRÌÒN URUGUAYO"
    }, {
        value: "POLISH HUNTING DOG", "label": "POLISH HUNTING DOG"
    }, {
        value: "BOSNIAN AND HERZEGOVINIAN - CROATIAN SHEPHERD DOG",
        "label": "BOSNIAN AND HERZEGOVINIAN - CROATIAN SHEPHERD DOG"
    }, {value: "DANISH-SWEDISH FARMDOG", "label": "DANISH-SWEDISH FARMDOG"}, {
        value: "SOUTHEASTERN EUROPEAN SHEPHERD", "label": "SOUTHEASTERN EUROPEAN SHEPHERD"
    }, {value: "THAI BANGKAEW DOG", "label": "THAI BANGKAEW DOG"}, {
        value: "MINIATURE BULL TERRIER", "label": "MINIATURE BULL TERRIER"
    }, {value: "LANCASHIRE HEELER", "label": "LANCASHIRE HEELER"}]


class EditProfilePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        const {children, name, general_description} = props;


        this.state = {
            ...props,
            children,
            name,
            general_description,
            origin: origins_options[0],
            gender: gendre_options[0],
            breed: breed_options[0],
            birthDate: new Date()
        };
        this.handleOriginChange = this.handleOriginChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOriginChange(val) {
        this.setState({...this.state, origin: val})
    }

    handleGenderChange(val) {
        this.setState({...this.state, gender: val})
    }

    handleBreedChange(val) {
        this.setState({...this.state, breed: val})
    }

    handleDateChange(date) {
        this.setState({
            birthDate: date
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(event));
    }


    render() {

        const current_year = new Date().getFullYear();
        const {user} = this.state;
        return [
            <div key={1} className={'profile-image'}>
                <h4>Profile Image</h4>
                <div className="profile">
                    <img src={user.profileImage} alt={'profile'}/>
                </div>

                <div className="change-profile-image">
                    <div className="file-input-wrapper">
                        <button className={'btn btn-info btn-file-input'}>Change Image</button>
                        <input type="file" name="file"/>
                    </div>
                </div>
            </div>,
            <div key={2} className={'edit-profile'}>

                <form onSubmit={(event) => this.handleFormSubmit(event)}>
                    <h4>Name: </h4>
                    <input type={'text'} defaultValue={user.name} className={'form-control'}/>
                    <h4>General Description: </h4>
                    <textarea defaultValue={user.personalData} rows="7" className={'form-control'}/>

                    <h4>Origin: </h4>

                    <Select
                        name="form-field-name"
                        //value='BASIN'
                        defaultValue={user.origin}
                        options={origins_options}
                        onChange={(val) => {
                            this.handleOriginChange(val)
                        }}
                    />
                    <h4>Gender: </h4>

                    <Select
                        name="form-field-name"
                        //value='BASIN'
                        defaultValue={user.gender}
                        options={gendre_options}
                        onChange={(val) => {
                            this.handleGenderChange(val)
                        }}
                    />
                    <h4>Breed: </h4>

                    <Select
                        name="form-field-name"
                        value={user.breed}
                        //value='BASIN'
                        options={breed_options}
                        defaultValue={breed_options[0]}
                        onChange={(val) => {
                            this.handleBreedChange(val)
                        }}
                    />
                    <h4>Date Of Birth: </h4>
                    <div className="date-of-birth">
                        <div className="date-month">
                            <select className="display-inline-block form-control" defaultValue={0}>
                                <option value={0}>Month</option>
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                            </select>

                        </div>
                        <div className="day">
                            <select className="display-inline-block form-control" defaultValue={0}>
                                <option value={0}>Day</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                                <option value={21}>21</option>
                                <option value={22}>22</option>
                                <option value={23}>23</option>
                                <option value={24}>24</option>
                                <option value={25}>25</option>
                                <option value={26}>26</option>
                                <option value={27}>27</option>
                                <option value={28}>28</option>
                                <option value={29}>29</option>
                                <option value={30}>30</option>
                                <option value={31}>31</option>
                            </select>
                        </div>

                        <div className="year">
                            <select className="display-inline-block form-control" defaultValue={0}>
                                <option value={0}>year</option>
                                <option value={current_year}>{current_year}</option>
                                <option value={current_year - 1}>{current_year - 1}</option>
                                <option value={current_year - 2}>{current_year - 2}</option>
                                <option value={current_year - 3}>{current_year - 3}</option>
                                <option value={current_year - 4}>{current_year - 4}</option>
                                <option value={current_year - 5}>{current_year - 5}</option>
                                <option value={current_year - 6}>{current_year - 6}</option>
                                <option value={current_year - 7}>{current_year - 7}</option>
                                <option value={current_year - 8}>{current_year - 8}</option>
                                <option value={current_year - 9}>{current_year - 9}</option>
                                <option value={current_year - 10}>{current_year - 10}</option>
                                <option value={current_year - 11}>{current_year - 11}</option>
                                <option value={current_year - 12}>{current_year - 13}</option>
                            </select>
                        </div>

                    </div>
                    <button className={'btn btn-block  btn-save'}>Save</button>
                </form>
            </div>,
        ]
    }
}

export {EditProfilePage}