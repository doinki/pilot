import type { Meta, StoryObj } from '@storybook/react';

import ReportOffOutlined from '../../lib/content/ReportOffOutlined';

const meta: Meta<typeof ReportOffOutlined> = {
  component: ReportOffOutlined,
  tags: ['autodocs'],
  title: 'content/ReportOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ReportOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
