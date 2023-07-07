import type { Meta, StoryObj } from '@storybook/react';

import StayCurrentLandscapeOutlined from '../../lib/communication/StayCurrentLandscapeOutlined';

const meta: Meta<typeof StayCurrentLandscapeOutlined> = {
  component: StayCurrentLandscapeOutlined,
  tags: ['autodocs'],
  title: 'communication/StayCurrentLandscapeOutlined',
};

export default meta;
type Story = StoryObj<typeof StayCurrentLandscapeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
