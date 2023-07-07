import type { Meta, StoryObj } from '@storybook/react';

import HistoryEduOutlined from '../../lib/social/HistoryEduOutlined';

const meta: Meta<typeof HistoryEduOutlined> = {
  component: HistoryEduOutlined,
  tags: ['autodocs'],
  title: 'social/HistoryEduOutlined',
};

export default meta;
type Story = StoryObj<typeof HistoryEduOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
