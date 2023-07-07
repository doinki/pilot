import type { Meta, StoryObj } from '@storybook/react';

import ViewWeekOutlined from '../../lib/action/ViewWeekOutlined';

const meta: Meta<typeof ViewWeekOutlined> = {
  component: ViewWeekOutlined,
  tags: ['autodocs'],
  title: 'action/ViewWeekOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewWeekOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
