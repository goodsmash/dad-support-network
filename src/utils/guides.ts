export interface Guide {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'parenting' | 'legal' | 'support';
  fileName: string;
}

export const guides: Guide[] = [
  {
    id: "holiday-guide",
    title: "Holiday Planning Guide",
    description: "Managing holidays and special occasions",
    fileName: "holiday-planning-guide.pdf",
    category: "support",
    content: `
Holiday Planning Guide for Divorced Fathers

1. Planning Ahead
- Start discussions about holiday arrangements early
- Be flexible with scheduling
- Document all agreements in writing
- Consider children's school schedules

2. Creating New Traditions
- Establish special activities for your time together
- Include children in planning new celebrations
- Maintain some familiar traditions
- Create photo albums of new memories

3. Managing Emotions
- Acknowledge feelings of loss or sadness
- Practice self-care during difficult times
- Seek support when needed
- Focus on quality time with children

4. Communication Tips
- Keep discussions child-focused
- Use calendar apps for scheduling
- Maintain respectful communication
- Consider using co-parenting apps

5. Activity Ideas
- Holiday crafts and decorations
- Special meal preparations
- Virtual celebrations when apart
- Creating holiday cards together`
  },
  {
    id: "coparenting-handbook",
    title: "Co-Parenting Handbook",
    description: "Essential co-parenting strategies",
    fileName: "coparenting-handbook.pdf",
    category: "parenting",
    content: `
Co-Parenting Handbook for Divorced Fathers

1. Effective Communication
- Use business-like communication
- Focus on child-related topics
- Document important conversations
- Utilize co-parenting apps

2. Creating a Parenting Plan
- Establish consistent routines
- Define decision-making processes
- Plan for holidays and special events
- Address education and healthcare

3. Conflict Resolution
- Focus on solutions, not problems
- Use mediators when needed
- Keep children out of conflicts
- Practice active listening

4. Shared Decision Making
- Consult on major decisions
- Share important information
- Respect different parenting styles
- Maintain united front on rules

5. Building Trust
- Follow through on commitments
- Be reliable and punctual
- Share updates about children
- Support other parent's role`
  },
  {
    id: "legal-rights",
    title: "Legal Rights Guide",
    description: "Understanding your legal rights",
    fileName: "legal-rights-guide.pdf",
    category: "legal",
    content: `
Legal Rights Guide for Divorced Fathers

1. Custody Rights
- Types of custody arrangements
- Factors in custody decisions
- Modification procedures
- Emergency custody orders

2. Visitation Rights
- Standard visitation schedules
- Holiday arrangements
- Transportation responsibilities
- Virtual visitation rights

3. Decision-Making Rights
- Educational decisions
- Medical decisions
- Religious upbringing
- Extra-curricular activities

4. Financial Responsibilities
- Child support calculations
- Medical expenses
- Educational costs
- Extra-curricular expenses

5. Documentation
- Keeping records
- Communication logs
- Expense tracking
- Incident documentation`
  }
];

export const downloadGuide = (guide: Guide) => {
  // Create a Blob with the guide content
  const blob = new Blob([guide.content], { type: 'text/plain' });
  
  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = guide.fileName;
  
  // Append link to body, click it, and remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL
  window.URL.revokeObjectURL(url);
};