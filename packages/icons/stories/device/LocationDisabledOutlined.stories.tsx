import type { Meta, StoryObj } from '@storybook/react';

import LocationDisabledOutlined from '../../lib/device/LocationDisabledOutlined';

const meta: Meta<typeof LocationDisabledOutlined> = {
  component: LocationDisabledOutlined,
  tags: ['autodocs'],
  title: 'device/LocationDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof LocationDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
