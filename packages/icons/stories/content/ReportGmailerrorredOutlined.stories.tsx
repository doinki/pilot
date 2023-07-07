import type { Meta, StoryObj } from '@storybook/react';

import ReportGmailerrorredOutlined from '../../lib/content/ReportGmailerrorredOutlined';

const meta: Meta<typeof ReportGmailerrorredOutlined> = {
  component: ReportGmailerrorredOutlined,
  tags: ['autodocs'],
  title: 'content/ReportGmailerrorredOutlined',
};

export default meta;
type Story = StoryObj<typeof ReportGmailerrorredOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
