import type { Meta, StoryObj } from '@storybook/react';

import BugReportOutlined from '../../lib/action/BugReportOutlined';

const meta: Meta<typeof BugReportOutlined> = {
  component: BugReportOutlined,
  tags: ['autodocs'],
  title: 'action/BugReportOutlined',
};

export default meta;
type Story = StoryObj<typeof BugReportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
