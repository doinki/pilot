import type { Meta, StoryObj } from '@storybook/react';

import PersonAddAltOutlined from '../../lib/social/PersonAddAltOutlined';

const meta: Meta<typeof PersonAddAltOutlined> = {
  component: PersonAddAltOutlined,
  tags: ['autodocs'],
  title: 'social/PersonAddAltOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonAddAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
