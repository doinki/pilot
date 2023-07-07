import type { Meta, StoryObj } from '@storybook/react';

import InsertInvitationOutlined from '../../lib/editor/InsertInvitationOutlined';

const meta: Meta<typeof InsertInvitationOutlined> = {
  component: InsertInvitationOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertInvitationOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertInvitationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
