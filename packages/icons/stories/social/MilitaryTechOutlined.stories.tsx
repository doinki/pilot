import type { Meta, StoryObj } from '@storybook/react';

import MilitaryTechOutlined from '../../lib/social/MilitaryTechOutlined';

const meta: Meta<typeof MilitaryTechOutlined> = {
  component: MilitaryTechOutlined,
  tags: ['autodocs'],
  title: 'social/MilitaryTechOutlined',
};

export default meta;
type Story = StoryObj<typeof MilitaryTechOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
