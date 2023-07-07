import type { Meta, StoryObj } from '@storybook/react';

import CleaningServicesOutlined from '../../lib/maps/CleaningServicesOutlined';

const meta: Meta<typeof CleaningServicesOutlined> = {
  component: CleaningServicesOutlined,
  tags: ['autodocs'],
  title: 'maps/CleaningServicesOutlined',
};

export default meta;
type Story = StoryObj<typeof CleaningServicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
