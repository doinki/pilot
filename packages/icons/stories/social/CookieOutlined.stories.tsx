import type { Meta, StoryObj } from '@storybook/react';

import CookieOutlined from '../../lib/social/CookieOutlined';

const meta: Meta<typeof CookieOutlined> = {
  component: CookieOutlined,
  tags: ['autodocs'],
  title: 'social/CookieOutlined',
};

export default meta;
type Story = StoryObj<typeof CookieOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
