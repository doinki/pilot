import type { Meta, StoryObj } from '@storybook/react';

import CenterFocusStrongOutlined from '../../lib/image/CenterFocusStrongOutlined';

const meta: Meta<typeof CenterFocusStrongOutlined> = {
  component: CenterFocusStrongOutlined,
  tags: ['autodocs'],
  title: 'image/CenterFocusStrongOutlined',
};

export default meta;
type Story = StoryObj<typeof CenterFocusStrongOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
