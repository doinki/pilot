import type { Meta, StoryObj } from '@storybook/react';

import NearMeDisabledOutlined from '../../lib/maps/NearMeDisabledOutlined';

const meta: Meta<typeof NearMeDisabledOutlined> = {
  component: NearMeDisabledOutlined,
  tags: ['autodocs'],
  title: 'maps/NearMeDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof NearMeDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
