import type { Meta, StoryObj } from '@storybook/react';

import TapAndPlayOutlined from '../../lib/notification/TapAndPlayOutlined';

const meta: Meta<typeof TapAndPlayOutlined> = {
  component: TapAndPlayOutlined,
  tags: ['autodocs'],
  title: 'notification/TapAndPlayOutlined',
};

export default meta;
type Story = StoryObj<typeof TapAndPlayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
