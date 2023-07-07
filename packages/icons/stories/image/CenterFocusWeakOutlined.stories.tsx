import type { Meta, StoryObj } from '@storybook/react';

import CenterFocusWeakOutlined from '../../lib/image/CenterFocusWeakOutlined';

const meta: Meta<typeof CenterFocusWeakOutlined> = {
  component: CenterFocusWeakOutlined,
  tags: ['autodocs'],
  title: 'image/CenterFocusWeakOutlined',
};

export default meta;
type Story = StoryObj<typeof CenterFocusWeakOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
