import type { Meta, StoryObj } from '@storybook/react';

import ReportOutlined from '../../lib/content/ReportOutlined';

const meta: Meta<typeof ReportOutlined> = {
  component: ReportOutlined,
  tags: ['autodocs'],
  title: 'content/ReportOutlined',
};

export default meta;
type Story = StoryObj<typeof ReportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
