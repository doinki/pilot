import type { Meta, StoryObj } from '@storybook/react';

import CorporateFareOutlined from '../../lib/places/CorporateFareOutlined';

const meta: Meta<typeof CorporateFareOutlined> = {
  component: CorporateFareOutlined,
  tags: ['autodocs'],
  title: 'places/CorporateFareOutlined',
};

export default meta;
type Story = StoryObj<typeof CorporateFareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
