import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router"
import React from "react"

const countries = () => {
	const router = useRouter()

	const handleSelectCountry = (country: string) => {
		// console.log("country: ", country)
		router.push(`/search/${country}`)
	}

	return (
		<Layout>
			<div>
				<ul
					onClick={(e: any) => {
						handleSelectCountry(e.target.childNodes[0].data)
					}}
					className="w-fit bg-tangerine h-screen overflow-auto border-2"
				>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Afghanistan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Albania
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Algeria
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						American Samoa
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Andorra
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Angola
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Anguilla
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Antarctica
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Antigua and Barbuda
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Argentina
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Armenia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Aruba
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Australia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Austria
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Azerbaijan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bahamas (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bahrain
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bangladesh
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Barbados
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Belarus
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Belgium
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Belize
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Benin
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bermuda
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bhutan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bolivia (Plurinational State of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bonaire, Sint Eustatius and Saba
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bosnia and Herzegovina
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Botswana
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bouvet Island
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Brazil
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						British Indian Ocean Territory (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Brunei Darussalam
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Bulgaria
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Burkina Faso
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Burundi
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cabo Verde
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cambodia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cameroon
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Canada
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cayman Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Central African Republic (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Chad
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Chile
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						China
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Christmas Island
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cocos (Keeling) Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Colombia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Comoros (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Congo (the Democratic Republic of the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Congo (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cook Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Costa Rica
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Croatia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cuba
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Curaçao
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Cyprus
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Czechia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Côte d'Ivoire
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Denmark
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Djibouti
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Dominica
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Dominican Republic (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Ecuador
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Egypt
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						El Salvador
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Equatorial Guinea
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Eritrea
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Estonia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Eswatini
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Ethiopia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Falkland Islands (the) [Malvinas]
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Faroe Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Fiji
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Finland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						France
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						French Guiana
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						French Polynesia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						French Southern Territories (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Gabon
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Gambia (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Georgia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Germany
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Ghana
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Gibraltar
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Greece
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Greenland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Grenada
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guadeloupe
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guam
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guatemala
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guernsey
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guinea
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guinea-Bissau
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Guyana
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Haiti
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Heard Island and McDonald Islands
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Holy See (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Honduras
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Hong Kong
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Hungary
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Iceland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						India
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Indonesia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Iran (Islamic Republic of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Iraq
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Ireland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Isle of Man
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Israel
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Italy
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Jamaica
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Japan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Jersey
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Jordan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Kazakhstan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Kenya
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Kiribati
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Korea (the Democratic People's Republic of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Korea (the Republic of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Kuwait
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Kyrgyzstan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Lao People's Democratic Republic (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Latvia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Lebanon
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Lesotho
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Liberia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Libya
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Liechtenstein
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Lithuania
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Luxembourg
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Macao
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Madagascar
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Malawi
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Malaysia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Maldives
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mali
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Malta
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Marshall Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Martinique
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mauritania
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mauritius
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mayotte
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mexico
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Micronesia (Federated States of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Moldova (the Republic of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Monaco
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mongolia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Montenegro
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Montserrat
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Morocco
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Mozambique
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Myanmar
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Namibia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Nauru
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Nepal
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Netherlands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						New Caledonia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						New Zealand
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Nicaragua
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Niger (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Nigeria
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Niue
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Norfolk Island
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Northern Mariana Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Norway
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Oman
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Pakistan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Palau
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Palestine, State of
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Panama
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Papua New Guinea
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Paraguay
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Peru
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Philippines (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Pitcairn
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Poland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Portugal
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Puerto Rico
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Qatar
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Republic of North Macedonia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Romania
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Russian Federation (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Rwanda
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Réunion
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Barthélemy
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Helena, Ascension and Tristan da Cunha
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Kitts and Nevis
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Lucia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Martin (French part)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Pierre and Miquelon
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saint Vincent and the Grenadines
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Samoa
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						San Marino
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sao Tome and Principe
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Saudi Arabia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Senegal
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Serbia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Seychelles
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sierra Leone
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Singapore
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sint Maarten (Dutch part)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Slovakia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Slovenia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Solomon Islands
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Somalia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						South Africa
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						South Georgia and the South Sandwich Islands
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						South Sudan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Spain
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sri Lanka
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sudan (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Suriname
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Svalbard and Jan Mayen
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Sweden
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Switzerland
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Syrian Arab Republic
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Taiwan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tajikistan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tanzania, United Republic of
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Thailand
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Timor-Leste
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Togo
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tokelau
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tonga
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Trinidad and Tobago
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tunisia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Turkey
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Turkmenistan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Turks and Caicos Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Tuvalu
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Uganda
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Ukraine
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						United Arab Emirates (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						United Kingdom of Great Britain and Northern Ireland
						(the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						United States Minor Outlying Islands (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						United States of America (the)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Uruguay
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Uzbekistan
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Vanuatu
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Venezuela (Bolivarian Republic of)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Viet Nam
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Virgin Islands (British)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Virgin Islands (U.S.)
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Wallis and Futuna
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Western Sahara
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Yemen
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Zambia
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Zimbabwe
					</li>
					<li className="hover:text-blush hover:underline cursor-pointer">
						Åland Islands
					</li>
				</ul>
			</div>
		</Layout>
	)
}

export default countries
