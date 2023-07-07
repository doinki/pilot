import type { Meta, StoryObj } from '@storybook/react';

import OutdoorGrillOutlined from '../../lib/social/OutdoorGrillOutlined';

const meta: Meta<typeof OutdoorGrillOutlined> = {
  component: OutdoorGrillOutlined,
  tags: ['autodocs'],
  title: 'social/OutdoorGrillOutlined',
};

export default meta;
type Story = StoryObj<typeof OutdoorGrillOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
