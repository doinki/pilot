import type { Meta, StoryObj } from '@storybook/react';

import OneTwoThreeOutlined from '../../lib/action/OneTwoThreeOutlined';

const meta: Meta<typeof OneTwoThreeOutlined> = {
  component: OneTwoThreeOutlined,
  tags: ['autodocs'],
  title: 'action/OneTwoThreeOutlined',
};

export default meta;
type Story = StoryObj<typeof OneTwoThreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
