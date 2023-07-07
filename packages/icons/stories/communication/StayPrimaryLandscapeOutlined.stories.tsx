import type { Meta, StoryObj } from '@storybook/react';

import StayPrimaryLandscapeOutlined from '../../lib/communication/StayPrimaryLandscapeOutlined';

const meta: Meta<typeof StayPrimaryLandscapeOutlined> = {
  component: StayPrimaryLandscapeOutlined,
  tags: ['autodocs'],
  title: 'communication/StayPrimaryLandscapeOutlined',
};

export default meta;
type Story = StoryObj<typeof StayPrimaryLandscapeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
