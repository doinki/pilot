import type { Meta, StoryObj } from '@storybook/react';

import CardMembershipOutlined from '../../lib/action/CardMembershipOutlined';

const meta: Meta<typeof CardMembershipOutlined> = {
  component: CardMembershipOutlined,
  tags: ['autodocs'],
  title: 'action/CardMembershipOutlined',
};

export default meta;
type Story = StoryObj<typeof CardMembershipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
