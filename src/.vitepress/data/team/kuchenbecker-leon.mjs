import {TeamGroup} from "../../domains/team/constants";
import {defineTeamMember} from "../../domains/team/define";

export default defineTeamMember({
    avatar: '/images/team/kuchenbecker-leon.png',
    name: 'Leon Kuchenbecker',
    title: 'Researcher',
    team: TeamGroup.ABI,
    links: [],
});
