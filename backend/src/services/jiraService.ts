import axios from 'axios';
import config from '../config';

class JiraService {
  static async createTicket(issueData: any): Promise<any> {
    const auth = Buffer.from(`${config.jira.username}:${config.jira.apiToken}`).toString('base64');

    const response = await axios.post(
      `${config.jira.url}/rest/api/2/issue`,
      {
        fields: {
          project: {
            key: issueData.projectKey,
          },
          summary: issueData.summary,
          description: issueData.description,
          issuetype: {
            name: 'Task',
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  }
}

export default JiraService;
