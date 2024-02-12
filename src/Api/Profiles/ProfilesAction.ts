import {heading, subHeading, icons} from '../../data/Profiles/Profiles.json'
import { ProfilesCard } from '../../types/cards'

const profiles: ProfilesCard = {
    socialConnects: icons.map(({src, name}) => ({src, name}))
}

export default {sectionHeader: {heading, subHeading}, profiles}