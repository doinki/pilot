import type { Meta, StoryObj } from '@storybook/react';

import PersonalVideoOutlined from '../../lib/notification/PersonalVideoOutlined';

const meta: Meta<typeof PersonalVideoOutlined> = {
  component: PersonalVideoOutlined,
  tags: ['autodocs'],
  title: 'notification/PersonalVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonalVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
