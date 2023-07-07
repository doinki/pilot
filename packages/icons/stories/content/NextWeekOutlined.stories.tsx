import type { Meta, StoryObj } from '@storybook/react';

import NextWeekOutlined from '../../lib/content/NextWeekOutlined';

const meta: Meta<typeof NextWeekOutlined> = {
  component: NextWeekOutlined,
  tags: ['autodocs'],
  title: 'content/NextWeekOutlined',
};

export default meta;
type Story = StoryObj<typeof NextWeekOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
