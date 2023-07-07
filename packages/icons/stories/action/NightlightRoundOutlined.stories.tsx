import type { Meta, StoryObj } from '@storybook/react';

import NightlightRoundOutlined from '../../lib/action/NightlightRoundOutlined';

const meta: Meta<typeof NightlightRoundOutlined> = {
  component: NightlightRoundOutlined,
  tags: ['autodocs'],
  title: 'action/NightlightRoundOutlined',
};

export default meta;
type Story = StoryObj<typeof NightlightRoundOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
