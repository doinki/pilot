import type { Meta, StoryObj } from '@storybook/react';

import ReportProblemOutlined from '../../lib/action/ReportProblemOutlined';

const meta: Meta<typeof ReportProblemOutlined> = {
  component: ReportProblemOutlined,
  tags: ['autodocs'],
  title: 'action/ReportProblemOutlined',
};

export default meta;
type Story = StoryObj<typeof ReportProblemOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
